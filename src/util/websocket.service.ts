const RECONNECT_INTERVAL = 2000; // 重连时间间隔
const WS_IDLE_TIMEOUT = 90000; // 超时
const dataKeyType = {
    latest: "latest",
    attribute: "attribute",
    function: "function"
};

function WebsocketService() {
    const location = {
            protocol: 'http',
            hostname: '172.16.33.145',
            port: '9100'
        },
        cmdsWrapper = {
            tsSubCmds: [],
            historyCmds: [],
            attrSubCmds: []
        };
    let isOpening = false, // 正在连接ws中
        isOpened = false,  // 是否已连接ws
        isActive = false,  // 是否当前ws
        isReconnect = false, // 是否重连
        reconnectSubscribers = [], // 重连订阅
        lastCmdId = 0,
        subscribers = {},
        subscribersCount = 0,
        telemetryUri,
        dataStream, // 数据流

        socketCloseTimer,
        reconnectTimer;

    // 设置ws的链接
    if (location.protocol === "https:") {
        telemetryUri = "wss:";
    } else {
        telemetryUri = "ws:";
    }
    telemetryUri += "//" + location.hostname + ":" + location.port;
    telemetryUri += "/maxiot/v1/websocket/telemetry";

    /**
     * 发布执行命令
     */
    function publishCommands() {
        if (isOpened && (cmdsWrapper.tsSubCmds.length > 0 ||
            cmdsWrapper.historyCmds.length > 0 ||
            cmdsWrapper.attrSubCmds.length > 0)) {
            // 发送数据
            if (dataStream.readyState === 1) {
                dataStream.send(JSON.stringify({
                    method: "sub",
                    params: {
                        action: "telemtry",
                        params: cmdsWrapper.tsSubCmds
                    }
                }));
                cmdsWrapper.tsSubCmds = [];
                cmdsWrapper.historyCmds = [];
                cmdsWrapper.attrSubCmds = [];
            }
        }
        tryOpenSocket();
    }

    /**
     *  连接成功, 数据发送中
     */
    function onOpen() {
        console.log("WebSocket conntected.");
        isOpening = false;
        isOpened = true;
        if (reconnectTimer) {
            clearTimeout(reconnectTimer);
            reconnectTimer = null;
        }
        if (isReconnect) {
            isReconnect = false;
            // 重连订阅的缓存
            for (let r = 0; r < reconnectSubscribers.length; r++) {
                const reconnectSubscriber = reconnectSubscribers[r];
                if (reconnectSubscriber.onReconnected) reconnectSubscriber.onReconnected(); // 重连
                subscribe(reconnectSubscriber); // 订阅重连的数据
            }
            reconnectSubscribers = [];
        } else {
            publishCommands();
        }
    }

    /**
     * 订阅获取信息 数据已接收
     * @param message
     */
    function onMessage(message: any) {
        if (message.data) {
            const data = JSON.parse(message.data);
            if (data === 200 || (data === 500)) return;
            // 对数据的处理
            const subscriber = subscribers[1];
            if (subscriber && data) {
                subscriber.onData(formatKeys(data, subscriber)); // 订阅后获取的值
            }
        }
        checkToClose();
    }

    /**
     * 当Browser接收到WebSocketServer端发送的关闭连接请求
     */
    function onClose() {
        isOpening = false;
        isOpened = false;
        if (isActive) {
            if (!isReconnect) {
                reconnectSubscribers = [];
                // 重连订阅缓存
                for (const id in subscribers) {
                    reconnectSubscribers.push(subscribers[id]);
                }
                reset(false);
                isReconnect = true;
            }
            if (reconnectTimer) clearTimeout(reconnectTimer);
            reconnectTimer = setTimeout(tryOpenSocket, RECONNECT_INTERVAL);
        }
        console.log('wsconnectionclose');
    }

    /**
     * websocket 连接失败，发送、接收数据失败或者处理数据出现错误
     */
    function onError() {
        isOpening = false;
        console.log('连接失败，发送、接收数据失败');
    }

    /**
     * 处理keys
     * @param subscriber
     * @return {any}
     */
    function formatKeys(data: any, subscriber: any) {
        const command = subscriber.subscriptionCommand || subscriber.historyCommand;
        const commandItem = command.find((item: any) => item.clientid === data.edgeClientId);
        const result = [];
        data.telemetry.forEach((item: any) => {
            const keyInfo = commandItem.key.find((keyItem: any) => keyItem.key === item.key);
            return result.push({
                t: item.ts,
                v: item.value,
                k: {
                    o: item.key,
                    l: keyInfo.label
                }
            });
        });
        return result;
    }

    /**
     * 获取订阅ID
     * @return {number}
     */
    function nextCmdId() {
        lastCmdId++;
        return lastCmdId;
    }

    /**
     * 订阅为0是，关闭
     */
    function checkToClose() {
        if (subscribersCount === 0 && isOpened) {
            if (!socketCloseTimer) socketCloseTimer = setTimeout(closeSocket, WS_IDLE_TIMEOUT);
        }
    }

    /**
     * 初始处理相关ws连接的数据
     */
    function tryOpenSocket() {
        if (isActive) {
            if (!isOpened && !isOpening) {
                isOpening = true;
                // 获取Token值
                const token = '';
                openSocket(token);
            }
            // socket关闭时间
            if (socketCloseTimer) {
                clearTimeout(socketCloseTimer);
                socketCloseTimer = null;
            }
        }
    }

    /**
     * ws 处理
     * @param {string} token
     */
    function openSocket(token: string) {
        // telemetryUri + '?token=' + token  { headers: {token: token}} as any
        dataStream = new WebSocket(telemetryUri);
        dataStream.onopen = onOpen; // 连接, 数据发送中
        dataStream.onmessage = onMessage; // 订阅获取信息 数据已接收
        dataStream.onerror = onError;  // websocket 过程中的异常错误
        dataStream.onclose = onClose;  // 关闭 websocket
    }

    /**
     * 关闭webSocket
     * @param close
     */
    function closeSocket() {
        console.log('关闭 websocket');
        isActive = false;
        if (isOpened) dataStream.close();
    }

    /**
     * 重置websocket
     * @param close
     */
    function reset(close: boolean) {
        if (socketCloseTimer) {
            clearTimeout(socketCloseTimer);
            socketCloseTimer = null;
        }
        lastCmdId = 0;
        subscribers = {};
        subscribersCount = 0;
        cmdsWrapper.tsSubCmds = [];
        cmdsWrapper.historyCmds = [];
        cmdsWrapper.attrSubCmds = [];
        if (close) closeSocket();
    }

    // reset(true);

    /**
     * 处理发送订阅参数的数据
     * @param subscriber
     */
    function formatSubscriber(subscriber: any) {
        const result = [];
        subscriber.subscriptionCommand.forEach((command: any) => {
            result.push({
                ...command,
                key: command.key.map((item: any) => item.key)
            });
        });
        return result;
    }

    /**
     * 发起订阅
     * @param subscriber
     */
    function subscribe(subscriber: any) {
        isActive = true;
        const cmdId = nextCmdId(); // 设置当前订阅ID
        subscribers[cmdId] = subscriber;
        subscribersCount++;
        if (subscriber.subscriptionCommand) {
            // 处理数据
            const sendData = formatSubscriber(subscriber);
            // subscriber.subscriptionCommand.subscriptionId = cmdId;
            if (subscriber.type === dataKeyType.latest) {
                // 遥测数据订阅
                cmdsWrapper.tsSubCmds = cmdsWrapper.tsSubCmds.concat(sendData);
            } else if (subscriber.type === dataKeyType.attribute) {
                // 属性数据订阅
                cmdsWrapper.attrSubCmds = cmdsWrapper.attrSubCmds.concat(sendData);
            }
        } else if (subscriber.historyCommand) {
            // subscriber.historyCommand.subscriptionId = cmdId;
            cmdsWrapper.historyCmds = cmdsWrapper.historyCmds.concat(subscriber.historyCommand);
        }
        // 发布执行命令
        publishCommands();
    }


    /**
     * 取消的订阅
     * @param subscriber
     */
    function unsubscribe(subscriber: any) {
        if (isActive) {
            let cmdId = null;
            if (subscriber.subscriptionCommand) {
                subscriber.subscriptionCommand.unsubscribe = true;
                const sendData = formatSubscriber(subscriber);
                if (subscriber.type === dataKeyType.latest) {
                    cmdsWrapper.tsSubCmds = cmdsWrapper.tsSubCmds.concat(sendData);
                } else if (subscriber.type === dataKeyType.attribute) {
                    cmdsWrapper.attrSubCmds = cmdsWrapper.attrSubCmds.concat(sendData);
                }
                cmdId = subscriber.subscriptionCommand.subscriptionId || 1;
            } else if (subscriber.historyCommand) {
                cmdId = subscriber.historyCommand.subscriptionId || 1;
            }
            if (cmdId && subscribers[cmdId]) {
                delete subscribers[cmdId];
                subscribersCount--;
            }
            publishCommands();
        }
    }

    return {
        subscribe: subscribe,
        unsubscribe: unsubscribe,
        reset: reset
    };
}

export default WebsocketService;

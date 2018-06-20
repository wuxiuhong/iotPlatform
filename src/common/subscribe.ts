import WebsocketService from '../util/websocket.service';

/**
 * 订阅EdgeClient
 * @param data 报表数据
 * @param {number} index
 * @return {any}
 */
function subscribeEdgeClient(data: any) {
    // 初始化格式
    const comLabels = [];
    const subscriptionCommand = [];
    data.components.forEach((com: any) => {
        const labels = [];
        com.dataSources.forEach((dataSource: any) => {
            if (dataSource.type === 'edgeClient') {

                dataSource.dataKeys.filter((keyItem: any) => {
                    // keyData.includes(keyItem.key)
                    labels.push(keyItem.label);
                    const command = subscriptionCommand.find((item: any) =>
                        (item.clientid === keyItem.edgeClientId && item.deviceid === keyItem.deviceId));
                    if (command) {
                        if (command.key.includes(keyItem.key)) return;
                        command.key.push(keyItem);
                    } else {
                        subscriptionCommand.push({
                            "clientid": keyItem.edgeClientId,
                            "deviceid": keyItem.deviceId,
                            "key": [keyItem]
                        });
                    }
                });
            }
        });
        comLabels.push({
            tempalteId: com.templateId,
            ref: com.ref,
            labels: labels
        });
    });
    if (subscriptionCommand.length) {
        WebsocketService().subscribe({
            subscriptionCommand,
            type: 'latest',
            onData: (subscription: any) => {
                // 处理值，判断组件存在的label值，则更新该组件
                comLabels.forEach((com: any) => {
                    if (com.labels) {
                        if (subscription.find((sub: any) => com.labels.includes(sub.k.l))) {
                            this.$refs[com.ref][0].$emit('onDataUpdated', subscription);
                        }
                    }
                });
            },
            onReconnected: () => {
            }
        });
    }
}

export { subscribeEdgeClient };

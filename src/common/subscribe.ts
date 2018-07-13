import { WebsocketService } from './service';

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
    // 组件处理keys格式
    data.components.forEach((comp: any) => {
        formatKeys(comp, subscriptionCommand, comLabels, data.edgeClientAliases);
    });
    if (subscriptionCommand.length) {
        WebsocketService().subscribe({
            subscriptionCommand,
            type: 'latest',
            onData: (subscription: any) => {
                // 处理值，判断组件存在的label值，则更新该组件
                comLabels.forEach((comp: any) => {
                    if (this.$refs && this.$refs[comp.pref].length) {
                        updateComponent(comp, subscription, this.$refs[comp.pref][0].$refs, this.$refs[comp.pref]);
                    }

                });
            },
            onReconnected: () => {
            }
        });
    }
}

/**
 * 递归处理 edgeClient所有请求ws的数据
 * @param comp 当前组件
 * @param subscriptionCommand 请求的订阅数据
 * @param comLabels 组件的labels数据
 */
function formatKeys(comp: any, subscriptionCommand: any, comLabels: any, aliases: any) {
    const labels = [];
    comp.dataSources.forEach((dataSource: any) => {
        if (dataSource.type === 'edgeClient') {
            // 获取设置edgeClient别名的对象
            const edgeClientAliases = aliases.find((Aliases: any) => Aliases.aliasId === dataSource.aliasId);
            dataSource.dataKeys.filter((keyItem: any) => {
                labels.push(keyItem.label);
                // todo 处理deviceid的label对应的ID值
                const edgeClientKeys = edgeClientAliases.edgeClients.find((edge: any) => edge.edgeClientId === keyItem.edgeClientId);
                const deviceInfo = edgeClientKeys.deviceList.find((device: any) => device.label === keyItem.deviceLabel);
                const command = subscriptionCommand.find((item: any) =>
                    (item.clientid === keyItem.edgeClientId && item.deviceid === deviceInfo.id));
                if (command) {
                    if (command.key.includes(keyItem.key)) return;
                    command.key.push(keyItem);
                } else {
                    subscriptionCommand.push({
                        "clientid": keyItem.edgeClientId,
                        "deviceid": deviceInfo.id,
                        "key": [keyItem]
                    });
                }
            });
        }
    });
    comLabels.push({
        templateId: comp.templateId,
        pref: comp.pref,
        ref: comp.ref,
        labels: labels,
        comLabels: []
    });
    if (comp.template.components) {
        comp.template.components.forEach((temp: any) => {
            formatKeys(temp, subscriptionCommand, comLabels[comLabels.length - 1].comLabels, aliases);
        });
    }
}

/**
 * 递归处理接受到ws数据处理，给有对应的key的组件进行更新
 * @param comp 当前组件
 * @param subscription ws放回的数据
 * @param eventRef 当前组件节点
 * @param isRef 是否存在组件节点
 */
function updateComponent(comp: any, subscription: any, eventRef: any, isRef: any = []) {
    if (comp.labels.length && subscription.find((sub: any) => comp.labels.includes(sub.k.l)) && isRef.length) {
        // 处理是否更新ws数据
        eventRef[comp.ref].$emit('onDataUpdated', subscription);
    }
    if (comp.comLabels.length) {
        // 嵌套组件处理
        comp.comLabels.forEach((temp: any) => {
            if (eventRef[temp.pref]) {
                updateComponent(temp, subscription, eventRef[temp.pref][0].$refs, eventRef[temp.pref]);
            }
        });
    }
}

export { subscribeEdgeClient };

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
        let labels = [];
        com.dataSources.forEach((dataSource: any) => {
            if (dataSource.type === 'edgeClient') {
                // 通过别名获取对应的edgeclient数组
                const edgeClientAliases = data.edgeClientAliases.find(
                    (Alias: any) => Alias.aliasId === dataSource.aliasId);
                edgeClientAliases.edgeClientList.forEach((clientId: string) => {
                    // todo 通过clientId，获取edgeClientId对应的所有key值
                    let keyData = [];
                    if (data.edgeClients.id === clientId) keyData = data.edgeClients.keys;
                    const keys = dataSource.dataKeys.filter((keyItem: any) => keyData.includes(keyItem.key));
                    labels = labels.concat(keys.map((item: any) => item.label));
                    if (keys.length) subscriptionCommand.push({
                        "clientid": clientId,
                        "key": keys
                    });
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
                            console.log(subscription);
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

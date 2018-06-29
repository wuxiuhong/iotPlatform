import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { LoginUsers, Users } from './data/user';
import { dashboard } from './data/dashboard';
import { dashboard_fmcs1 } from './data/dashboard_fmcs1';
import { dashboard_fmcs2 } from './data/dashboard_fmcs2';
import { dashboard_openDemo } from './data/dashboard_openDemo';
import { template_cd } from './data/template_cd';

let _Users = Users;

export default {
    /**
     * mock bootstrap
     */
    bootstrap() {
        let mock = new MockAdapter(axios);

        // mock success request
        mock.onGet('/success').reply(200, {
            msg : 'success'
        });

        // mock error request
        mock.onGet('/error').reply(500, {
            msg : 'failure'
        });

        //登录
        mock.onPost('/login').reply(config => {
            let {username, password} = JSON.parse(config.data);
            return new Promise((resolve, reject) => {
                let user = null;
                setTimeout(() => {
                    let hasUser = LoginUsers.some(u => {
                        if (u.username === username && u.password === password) {
                            user = JSON.parse(JSON.stringify(u));
                            user.password = undefined;
                            return true;
                        }
                    });

                    if (hasUser) {
                        resolve([200, {code : 200, msg : '请求成功', user}]);
                    } else {
                        resolve([200, {code : 500, msg : '账号或密码错误'}]);
                    }
                }, 1000);
            });
        });

        //获取用户列表
        mock.onGet('/user/list').reply(config => {
            let {name} = config.params;
            let mockUsers = _Users.filter(user => {
                if (name && user.name.indexOf(name) == -1) return false;
                return true;
            });
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve([200, {
                        users : mockUsers
                    }]);
                }, 1000);
            });
        });

        //获取用户列表（分页）
        mock.onGet('/user/listpage').reply(config => {
            let {page, name} = config.params;
            let mockUsers = _Users.filter(user => {
                if (name && user.name.indexOf(name) == -1) return false;
                return true;
            });
            let total = mockUsers.length;
            mockUsers = mockUsers.filter((u, index) => index < 20 * page && index >= 20 * (page - 1));
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve([200, {
                        total : total,
                        users : mockUsers
                    }]);
                }, 1000);
            });
        });

        //删除用户
        mock.onGet('/user/remove').reply(config => {
            let {id} = config.params;
            _Users = _Users.filter(u => u.id !== id);
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve([200, {
                        code : 200,
                        msg : '删除成功'
                    }]);
                }, 500);
            });
        });

        //批量删除用户
        mock.onGet('/user/batchremove').reply(config => {
            let {ids} = config.params;
            ids = ids.split(',');
            _Users = _Users.filter(u => !ids.includes(u.id));
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve([200, {
                        code : 200,
                        msg : '删除成功'
                    }]);
                }, 500);
            });
        });

        //编辑用户
        mock.onGet('/user/edit').reply(config => {
            let {id, name, addr, age, birth, sex} = config.params;
            _Users.some(u => {
                if (u.id === id) {
                    u.name = name;
                    u.addr = addr;
                    u.age = age;
                    u.birth = birth;
                    u.sex = sex;
                    return true;
                }
            });
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve([200, {
                        code : 200,
                        msg : '编辑成功'
                    }]);
                }, 500);
            });
        });

        //新增用户
        mock.onGet('/user/add').reply(config => {
            let {name, addr, age, birth, sex} = config.params;
            _Users.push({
                name : name,
                addr : addr,
                age : age,
                birth : birth,
                sex : sex
            });
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve([200, {
                        code : 200,
                        msg : '新增成功'
                    }]);
                }, 500);
            });
        });


        const templateType = {
            "cd" : template_cd
        };
        // 获取模板组件数据
        mock.onGet('/getTemplate').reply(config => {
            const {id, version} = config.params;
            let template = null;
            const isTemplate = template_cd.some(item => {
                if (item.id === id && item.version === version) {
                    template = JSON.parse(JSON.stringify(item));
                    return true;
                }
            });
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (isTemplate) {
                        resolve([200, template]);
                    } else {
                        resolve([200, {code : 500, msg : '不存在当前的模板组件'}]);
                    }
                }, 1000);
            });
        });

        // Expected order of requests:
        const responses = [
            ['GET', '/dashboard', 200, dashboard],
            ['GET', '/dashboard/cd', 200, dashboard],
            ['GET', '/dashboard/fmcs1', 200, dashboard_fmcs1],
            ['GET', '/dashboard/fmcs2', 200, dashboard_fmcs2],
            ['GET', '/dashboard/demo', 200, dashboard_openDemo]
        ];
        // Match ALL requests
        mock.onAny().reply(config => {
            const requireInfo = responses.find((item) => item[1] === config.url && (config.method.toUpperCase() === item[0]));
            if (requireInfo) {
                const [method, url, code, response] = requireInfo;
                if (config.url === url && (config.method.toUpperCase() === method)) {
                    return new Promise((resolve, reject) => {
                        setTimeout(() => {
                            resolve([code, response]);
                        }, 1000);
                    });
                }
            }
        });

    }
};
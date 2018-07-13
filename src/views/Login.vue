<template>
    <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm" label-position="left" label-width="0px"
             class="demo-ruleForm login-container" :show-message="false">
        <div class="line"></div>
        <div style="padding:34px 43px 0px 43px;position: relative;">
            <p class="title">智能管理系统</p>
            <div class="error-message" v-show="isError">
                <i class="error-message-icon"></i>
                <p class="error-message-content">账号或密码输入错误</p>
            </div>
            <el-form-item prop="account" :class="{ 'is-checked': accountfocus}">
                <!-- <el-input type="text" v-model="ruleForm2.account" auto-complete="off" placeholder="账号"></el-input> -->
                <span class="label">账号</span>
                <div class="form-item">
                    <label :class="{ 'account-label': !accountfocus,'account-label-active':accountfocus}"></label>
                    <input class="form-item-input" @focus="accountToogle" type="text" v-model="ruleForm2.account"
                           :placeholder="placeholderName">
                </div>
            </el-form-item>
            <el-form-item prop="checkPass" :class="{ 'is-checked': passwordfocus}">
                <!-- <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="密码"></el-input> -->
                <span class="label">密码</span>
                <div class="form-item">
                    <label :class="{ 'password-label': !passwordfocus,'password-label-active':passwordfocus}"></label>
                    <input class="form-item-input" @focus="passwordToogle($event)" type="password"
                           v-model="ruleForm2.checkPass" :placeholder="placeholderPwd" size="20">
                </div>
            </el-form-item>
            <!-- <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox> -->
            <label class="form-checkbox" :class="{ 'is-checked': checked}">
                <span><input type="checkbox" class="form-checkbox-input" v-model="checked"></span>
                <span class="form-checkbox-label">记住密码</span>
            </label>
            <el-form-item style="width:100%;">
                <el-button type="primary" @click.native.prevent="handleSubmit2" :loading="logining">登入
                </el-button>
                <!--<el-button @click.native.prevent="handleReset2">重置</el-button>-->
            </el-form-item>
        </div>
    </el-form>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";
    import { requestLogin } from "../api/user";
    import { Form } from "element-ui";
    // import NProgress from 'nprogress'
    @Component({
        name: "login"
    })
    export default class Login extends Vue {
        // 初始化数据
        logining: boolean = false;
        checked: boolean = false;
        accountfocus: boolean = false;
        passwordfocus: boolean = false;
        isError: boolean = false;
        placeholderName = "请输入账号";
        placeholderPwd = "请输入密码";

        ruleForm2: any = {
            account: "",
            checkPass: ""
        };
        rules2: any = {
            account: [
                {required: true, message: "请输入账号", trigger: "blur"}
                // { validator: validaePass }
            ],
            checkPass: [
                {required: true, message: "请输入密码", trigger: "blur"}
                // { validator: validaePass2 }
            ]
        };
        $refs: {
            ruleForm: Form;
        };

        mounted() {
            document.addEventListener("keyup", (e: any) => {
                if (e.keyCode === 13) {
                    this.handleSubmit2();
                }
            });
        }

        accountToogle() {
            this.accountfocus = true;
            this.placeholderName = "";
        }

        passwordToogle(e) {
            this.passwordfocus = true;
            this.placeholderPwd = "";
            e.target.style.fontSize = "24px";
            e.target.style.letterSpacing = "3px";
        }

        // 方法
        handleReset2() {
            this.$refs.ruleForm.resetFields();
        }

        handleSubmit2(ev: any = null) {
            this.$refs.ruleForm.validate((valid: any) => {
                if (valid) {
                    // _this.$router.replace('/table');
                    this.logining = true;
                    // NProgress.start();
                    requestLogin({
                        username: this.ruleForm2.account,
                        password: this.ruleForm2.checkPass
                    }).then(data => {
                        this.logining = false;
                        // NProgress.done();
                        const {msg, code, user} = data;
                        if (code !== 200) {
                            // this.$message({ message: msg, type: "error" });
                            this.isError = true;
                        } else {
                            sessionStorage.setItem("user", JSON.stringify(user));
                            if (this.ruleForm2.account !== "fmcscncuser") {
                                this.$router.push({path: "/dashboards"});
                            } else {
                                this.$router.push({path: "/newdashboards/fmcs1"});
                            }
                        }
                    });
                } else {
                    console.log("error submit!!");
                    this.isError = true;
                    return false;
                }
            });
        }
    }
</script>

<style lang="scss" scoped>
    .login-container {
        /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
        background-clip: padding-box;
        margin: 180px auto;
        width: 560px;
        height: 402px;
        // border: 1px solid #eaeaea;
        background: #262d45;
        .title {
            margin: 0px auto 10px auto;
            font-family: MicrosoftYaHei;
            font-size: 24px;
            color: #ffffff;
            letter-spacing: 1.85px;
            text-align: center;
            line-height: 30px;
        }
        .remember {
            margin: 0px 0px 35px 0px;
        }
    }

    .el-button {
        width: 300px;
        height: 64px;
        position: relative;
        top: 65px;
        left: 88px;
        background: #262d45;
        border: 1px solid #00d4bd;
        color: rgba(0, 212, 189, 0.54);
        font-family: MicrosoftYaHei;
    }

    .login-container .remember {
        margin-left: 393px;
    }

    .el-checkbox__label {
        color: red;
    }

    .is-checked {
        .form-item {
            border-bottom: 1px solid rgba(0, 212, 189, 0.54);
        }
        .form-checkbox-label {
            color: #fff;
        }
    }

    .form-item {
        border-bottom: 1px solid rgba(255, 255, 255, 0.24);
        .form-item-input {
            width: 90%;
            background-color: #262d45;
            font-size: 14px;
            color: #ffffff;
            border: none;
            outline: none;
            // &[type="password"]{
            //    letter-spacing:3px;
            // }
        }
        label {
            display: block;
            float: left;
            width: 32px;
            height: 32px;
        }
        .account-label {
            background: url("../../static/images/svg/login/account.svg") no-repeat;
        }
        .password-label {
            background: url("../../static/images/svg/login/password.svg") no-repeat;
        }
        .account-label-active {
            background: url("../../static/images/svg/login/account-active.svg") no-repeat;
        }
        .password-label-active {
            background: url("../../static/images/svg/login/password-active.svg") no-repeat;
        }
    }

    .label {
        font-family: MicrosoftYaHei;
        font-size: 13px;
        color: #ffffff;
        letter-spacing: 0;
        text-align: left;
        line-height: 14px;
    }

    .line {
        background-image: linear-gradient(-270deg, #00ece0 0%, #00d4bd 97%);
        width: 100%;
        height: 5px;
    }

    .error-message {
        text-align: center;
        width: 100%;
        font-size: 14px;
        color: #e04f23;
        letter-spacing: 0;
        line-height: 14px;
        position: absolute;
        left: 0px;
        .error-message-icon {
            display: inline-block;
            width: 15px;
            height: 15px;
            background: url("../../static/images/svg/login/error.svg") no-repeat;
            vertical-align: text-top;
        }
        .error-message-content {
            display: inline-block;
        }
    }

    .form-checkbox {
        margin-left: 405px;
        color: rgba(255, 255, 255, 0.4);
        font-size: 12px;
        .form-checkbox-input {
            width: 11px;
            height: 12px;
            -webkit-appearance: none;
            border: 1px solid #c9c9c9;
            border-radius: 2px;
            outline: none;
            vertical-align: middle;
        }
        .form-checkbox-input:checked {
            background: url("../../static/images/svg/login/check.svg") center no-repeat;
            background-color: #fff;
        }
        .form-checkbox-label {
            vertical-align: middle;
            margin-left: 5px;
        }
    }
</style>;
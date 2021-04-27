<template>
    <div class="register">
        <div class="formPanel">
            <div class="formTitle">注册</div>
            <DsForm :formGroup="formGroup"
                    :labelWidth="120"
                    labelPosition="right"
                    :colon="true"
                    :formSubmitText="formSubmitText">
                <template v-slot:hds>
                    <UploadImage/>
                </template>
            </DsForm>
        </div>
    </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue'
    import request from '../../request/request'

    import PasswordInput from '../../components/passwordInput/PasswordInput.vue'
    import DsForm from '../../components/dsForm/DsForm.vue'
    import UploadImage from '../../components/uploadImage/UploadImage.vue'

    export default defineComponent({
        name: 'register',
        components: {PasswordInput, DsForm, UploadImage},
        data() {
            return {
                userName: '1',
                password: '2',
                formGroup: [
                    {
                        name: 'userName',
                        initValue: '456',
                        type:'input', // 默认， 可以不写。 select/date/time/img/file  后续可根据项目不断扩展form 组件
                        label: '账号',

                    },
                    {
                        name: 'password',
                        label: '密码',
                        rowClass: 'xxx'
                    },
                    {
                        name: 'hds',
                        label: '自定义',
                        type: 'customSlot',
                        rowAlign: 'top'
                    }
                ],
                formSubmitText: '注册'
            }
        },
        methods: {
            onRegister() {
                request.post('/register', {
                    userName: this.userName,
                    password: this.password
                }).then(res => {
                    console.log(res)
                    if (res.data.code === '0000') {

                        // localStorage.setItem('Authorization', res.data.data);
                        // axios.defaults.headers.Authorization = res.data.data
                    }
                })
            }
        }
    })
</script>

<style lang="less" scoped>
    .register {
        min-width: 960px;
        min-height: 600px;
    }
    .formPanel {
        width: 350px;
        margin: 200px auto;
        padding: 20px;
        border: 1px solid #d0d0d5;
        border-radius: 4px;
        .formTitle {
            font-size: 18px;
            text-align: center;
        }
    }
</style>


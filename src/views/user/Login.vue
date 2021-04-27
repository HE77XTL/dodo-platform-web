<template>
    <div class="login">
        <div>
            <label>
                <input v-model="userName" class="ui-input">
            </label>
        </div>
        <div>
            <label>
                <input v-model="password" class="ui-input">
            </label>
        </div>
        <div>
            <button @click="onLogin" class="ui-button" data-type="primary">login</button>
        </div>
    </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue'
    import axios from 'axios'
    import request from '../../request/request'

    export default defineComponent({
        name: 'Login',
        data() {
            return {
                userName: '1',
                password: '2'
            }
        },
        methods: {
            onLogin() {
                request.post('/login', {
                    userName: this.userName,
                    password: this.password
                }).then(res => {
                    if (res.data.code === '0000') {
                        // localStorage.setItem('Authorization', res.data.data);
                        // axios.defaults.headers.Authorization = res.data.data
                    }
                })
            }
        }
    })
</script>




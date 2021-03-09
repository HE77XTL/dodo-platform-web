<template>
    <div class="login">
        login
        <div>
            <label>
                <input type="text" v-model="userName">
            </label>
        </div>
        <div>
            <label>
                <input type="text" v-model="password">
            </label>
        </div>
        <div>
            <button @click="onLogin">login</button>
        </div>
    </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue'
    import axios from 'axios'

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
                console.log(this.userName)
                console.log(this.password)
                axios({
                    method: 'get',
                    url: 'http://127.0.0.1:7002/'
                }).then(res => {
                    console.log(res)
                })
            }
        }
    })
</script>


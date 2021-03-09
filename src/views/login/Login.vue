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
                axios({
                    method: 'get',
                    url: 'http://127.0.0.1:7002/login'
                }).then(res => {
                    console.log('token')
                    console.log(res.data.data)
                    // axios.defaults.headers.Authorization = res.data.data;
                    // axios.defaults.headers.Authorization = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhlZHMiLCJpYXQiOjE2MTUyNTQxOTV9.ToL7ToU2K361VDfp7mESNHXd8Eh2DgKC2E7Lcag0R2k';
                })
            }
        }
    })
</script>


<template>
    <div>
        about
        <button @click="getUser" class="ui-button">getUser</button>
    </div>
</template>

<script lang="ts">
    import axios from 'axios'
    import {defineComponent} from 'vue'

    export default defineComponent({
        name: 'HelloWorld',
        data() {
            return {}
        },
        methods: {
            getUser() {
                const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhlZHMiLCJpYXQiOjE2MTUyNTQxOTV9.ToL7ToU2K361VDfp7mESNHXd8Eh2DgKC2E7Lcag0R2k'

                axios.defaults.headers.Authorization = `Bearer ${token}`;
                axios({
                    method: 'get',
                    url: 'http://127.0.0.1:7002/getUser'
                }).then(res => {
                    console.log(res)
                })
            }
        }
    })
</script>



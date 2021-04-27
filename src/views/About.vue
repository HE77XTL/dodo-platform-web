<template>
    <div>
        about
        <button @click="getUser" class="ui-button">getUser</button>
        <button @click="redisTest" class="ui-button">redisTest</button>
    </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue'
    import request from '../request/request'

    export default defineComponent({
        name: 'HelloWorld',
        data() {
            return {}
        },
        methods: {
            getUser() {
                request.get('/getUser')
            },
            redisTest() {
                request.get('/redisTest')
            }
        }
    })
</script>



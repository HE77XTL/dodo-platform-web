<template>
    <div class="passwordInput">
        passwordInput
    </div>
    <div>
        <button @click="onReverse">reverse</button>
    </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue'

    export default defineComponent({
        name: 'PasswordInput',
        data() {
            return {
                userName: '1',
                password: '2'
            }
        },
        methods: {
            onReverse() {
                const a = 'dsldj2123sd'
                console.log(a.split('').reverse().join(''))
            }
        }
    })
</script>




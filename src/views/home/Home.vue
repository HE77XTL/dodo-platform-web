<template>
    <div>
        <div>home</div>
        <div>
            <router-link to="/login">login</router-link>
        </div>
        <div>
            <router-link to="/register">register</router-link>
        </div>
    </div>
</template>

<script lang="ts">
    import {  defineComponent } from 'vue'
    export default defineComponent({
        name: 'Home',
    })
</script>



import {createApp} from 'vue'
import App from './App.vue'
import router from './router/router'
import utils from './utils/utils'

const app = createApp(App);


app.use(router);
app.mount('#app')

app.config.globalProperties.$utils = utils


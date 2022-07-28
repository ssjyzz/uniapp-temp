import { createSSRApp } from 'vue'
import uView from 'vk-uview-ui'
import App from './App.vue'
import store from './store'
import '../mock'

// eslint-disable-next-line import/prefer-default-export
export function createApp() {
    const app = createSSRApp(App).use(store)

    // 使用 uView UI
    app.use(uView)
    return {
        app
    }
}

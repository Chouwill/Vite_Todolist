import { createApp } from "vue";
import router from "./router";
import axios from "axios";
import VueAxios from 'vue-axios'

import "./style.css";
import App from "./App.vue";
const app = createApp(App);

app.use(router);
app.use(VueAxios, axios); // 綁定 axios 到 Vue 實例

app.mount("#app");

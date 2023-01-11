import { createApp } from "vue";
import App from "./App.vue";
import antDesign from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import "./assets/index.css";
const app = createApp(App);
app.use(antDesign);

app.mount("#app");

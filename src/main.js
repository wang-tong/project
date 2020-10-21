import Vue from 'vue'
import App from './App.vue'
import store from './store'
// import Antd from 'ant-design-vue'
// import 'ant-design-vue/dist/antd.css'
import { Button, Table, Divider, Popconfirm, Spin, Modal, Form, Input, InputNumber } from 'ant-design-vue'

Vue.use(Button)
Vue.use(Table)
Vue.use(Divider)
Vue.use(Popconfirm)
Vue.use(Spin)
Vue.use(Modal)
Vue.use(Form)
Vue.use(Input)
Vue.use(InputNumber)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')

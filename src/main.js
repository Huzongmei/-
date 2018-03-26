// 导入vue
import Vue from 'vue'

// 导入App
import App from './App.vue'

// 导入mini-ui button组件
import { Button } from 'mint-ui';

// 创建vue实例
new Vue({
  el:'#app',

  // 渲染单文件组件内容
  render:(c)=>c(App)
})
import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Page1 from './views/Page1.vue';
import Page2 from './views/Page2.vue';
//挂载插件
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {path:'/',redirect:'/page1'},
    {path:'/page1',component:Page1},
    {path:'/page2/:id/:msg',name:'page2',component:Page2}
  ]
})

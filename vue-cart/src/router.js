import Vue from 'vue'
import Router from 'vue-router'
import Page1 from './views/Page1.vue';
import Page2 from './views/Page2.vue';
//挂载插件
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {path:'/',redirect:'/page1'},
    {path:'/page1/:foo',component:Page1,props:true},
    {path:'/page2/:id/:msg',name:'page2',component:Page2}
  ]
})

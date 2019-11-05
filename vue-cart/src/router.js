import Vue from 'vue'
import Router from 'vue-router'
import Page1 from './views/Page1.vue';
import Page2 from './views/Page2.vue';
import Login from './views/Login.vue';
import Dashboard from './views/Dashboard.vue';
//挂载插件
Vue.use(Router)

function func({params,query})
{
 return{
   foo: params.foo,
   bar: params.bar,
   id: query.id
 }
}
const router = new Router({
  mode:'history',
  routes: [
    {path:'/',redirect:'/dashboard/page1'},
    {path:'/dashboard',name:'dashboard',component:Dashboard,children:[
      {path:'static/:foo/:bar',component:Page1,props:func},
      {path:'page1/:foo',component:Page1,props:true},
      {path:'page2/:id/:msg',name:'page2',component:Page2}
    ]},
    {path:'/login',name:'login',component:Login}
  ]
})

router.beforeEach((to,from,next)=>{
 if(to.path !== '/login'){
  if(window.isLogin){
    next()
  }else{
    next('/login?redirect='+to.path)
  }
 }else{
   next()
 }
})
export default router

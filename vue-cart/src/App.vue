<template>
  <div id="app">
    <router-view></router-view>
    <form-test></form-test>
    <k-button @lalala='handleLalala'></k-button>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <p v-if="showName">{{goodsList.name}}</p>
    <p v-for='(good,index) in goods' :key='good.id'>
      <span>{{good.text}}</span>
      <span>￥{{good.price}}</span>
      <button @click='addGood(index)'>加入购物车</button>
    </p>
    <cart></cart>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Cart from'./components/cart.vue'
import FormTest from './components/FormTest.vue';
import KButton from './components/Button.vue';
import axios from 'axios'

export default {
  name:'app',
  provide(){
    return {someValue:'来自祖先'}
  },
  data(){
    return {
      showName:false,
      goodsList:{name:'日用品列表'},
      goods:[
      ]
    }
  },
  components: {
    HelloWorld,
    Cart,
    FormTest,
    KButton
  },
  methods:{
    handleLalala(obj){
      console.log(obj)
    },
    addGood(i){
      const good = this.goods[i]
      this.$bus.$emit('addCart',good)
      
    }
  },
  async created(){
     setTimeout(()=> this.showName = true,1000)
     //查询数据
     try{
        const response = await axios.get('/api/goods')
        this.goods = response.data.list
     }catch(err){
       //错误处理
     }
     
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
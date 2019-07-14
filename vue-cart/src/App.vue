<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <p v-if="showName">{{goodsList.name}}</p>
    <p v-for='(good,index) in goods' :key='good.id'>
      <span>{{good.text}}</span>
      <span>￥{{good.price}}</span>
      <button @click='addGood(index)'>加入购物车</button>
    </p>
    <cart :cart='cart'></cart>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Cart from'./components/cart.vue'
export default {
  name:'app',
  data(){
    return {
      showName:false,
      goodsList:{name:'日用品列表'},
      goods:[
      {text:'shampoo',price:100, id:1,count:1},
      {text:'conditioner',price:100,id:2,count:1}
      ],
      cart:[]
    }
  },
  components: {
    HelloWorld,
    Cart
  },
  methods:{
    addGood(i){
      const ret = this.cart.find(v=>v.text === this.goods[i].text)
      if(ret){
         ret.count +=1
      }else{
         this.cart.push({...this.goods[i], count:1, active:true})
      }
    }
  },
  created(){
     setTimeout(()=> this.showName = true,1000)
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

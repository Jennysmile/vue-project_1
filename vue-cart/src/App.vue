<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <p>goods list</p>
    <p v-for='good in goods' :key='good.id'>
      <span>{{good.text}}</span>
      <span>￥{{good.price}}</span>
      <cart></cart>
    </p>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name:'app',
  data(){
    return {
      goods:[
      {text:'shampoo',price:100, id:1},
      {text:'conditioner',price:100,id:2}
    ]}
  },
  components: {
    HelloWorld
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

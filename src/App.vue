
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Hello />
    <Myex />
    <router-link :to="{ name: 'Myex', params: { 'userId': 1111}}">click to news page</router-link>
  </div>
</template>
<script>
import Myex from './components/Myex'
import Hello from './components/HelloWorld'
export default {
     data(){
         return{
         }
     },
     components:{
       Myex ,
       Hello
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

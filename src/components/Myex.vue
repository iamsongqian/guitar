<template>
  <div class="hello">
     this is the news page.the transform param is {{this.$route.params.userId}}
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  mounted(){
    console.log()
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App11'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}

</style>

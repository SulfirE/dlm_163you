<template>
  <div id="app">
      <router-view />
      <FooterGuide />
  </div>
</template>

<script type="text/ecmascript-6">
  import FooterGuide from './components/FooterGuide/FooterGuide'
  export default {//配置对象
  name:"App",
  data () {
      return {
          msg:'App Component'
      }
    },
   components:{
        FooterGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    #app
        color red
 
</style>

<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from "@/views/Header.vue";
  import Footer from "@/views/Footer.vue";
export default {
  name: 'App',
  components:{
    Header,
    Footer,
  },
  created(){

  },
  mounted() {
  }

}
</script>

<style>
  #app {

  }

</style>

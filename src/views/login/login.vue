<template>
    <section class="login">
      <p>登录</p>
    </section>
</template>

<script>
    export default {
      name: "login",
      components:{

      },
      data(){
        return{
          Height:$(window).height(),
          Width:$(window).width(),
        }
      },
      created() {
      },
      mounted() {
        $(".login").css("min-height",this.Height-$("#myHeader").height());
        console.log(this.Height);
      },
      methods:{

      },
    }
</script>

<style scoped>
  .login{
    width: 100%;
    background-color: darkviolet;
  }
</style>

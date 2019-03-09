<template>
    <section class="register">
      <p>注册</p>
    </section>
</template>

<script>
    export default {
      name: "register",
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
        $(".register").css("min-height",this.Height-$("#myHeader").height());
        console.log(this.Height);
      },
      methods:{

      },
    }
</script>

<style scoped>
  .register{
    width: 100%;
    background-color: blanchedalmond;
  }
</style>

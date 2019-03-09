<template>
    <section class="my-center">
      <p>个人中心</p>
    </section>
</template>

<script>
    export default {
      name: "myCenterIndex",
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
        $(".my-center").css("min-height",this.Height-$("#myHeader").height());
      },
      methods:{

      },
    }
</script>

<style scoped>
  .my-center{
    width: 100%;
    background: lightseagreen;
  }
</style>

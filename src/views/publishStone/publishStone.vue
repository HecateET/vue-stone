<template>
  <section class="publish-stone">
    <p>发布奇石</p>
  </section>
</template>

<script>
    export default {
      name: "publishStone",
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
        $(".publish-stone").css("min-height",this.Height-$("#myHeader").height());
      },
      methods:{

      },
    }
</script>

<style scoped>
  .publish-stone{
    width: 100%;
    background-color: darkturquoise;
  }
</style>

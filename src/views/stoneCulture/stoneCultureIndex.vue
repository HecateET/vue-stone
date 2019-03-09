<template>
    <section class="stone-culture">
      <p>奇石文化</p>
    </section>
</template>

<script>
    export default {
      name: "stoneCultureIndex",
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
        $(".stone-culture").css("min-height",this.Height-$("#myHeader").height());
        console.log(this.Height);
      },
      methods:{

      },
    }
</script>

<style scoped>
  .stone-culture{
    width: 100%;
    background-color: aqua;
  }
</style>

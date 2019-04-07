<template>
    <section class="circle-stone-index">
      <p>奇石圈</p>
    </section>
</template>

<script>
    export default {
      name: "circleStoneIndex",
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
        $(".circle-stone-index").css("min-height",this.Height-$("#myHeader").height());
      },
      methods:{

      },
    }
</script>

<style scoped>
  .circle-stone-index{
    width: 100%;
    background: #f5f6f7;
  }
</style>

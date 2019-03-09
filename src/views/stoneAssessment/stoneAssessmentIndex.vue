<template>
    <section class="stone-assessment-index">
      <p>成分分析</p>
      <p>奇石评估</p>
    </section>
</template>

<script>
    export default {
      name: "stoneAssessmentIndex",
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
        $(".stone-assessment-index").css("min-height",this.Height-$("#myHeader").height());
      },
      methods:{

      },
    }
</script>

<style scoped>
  .stone-assessment-index{
    width: 100%;
    background-color: gold;
  }
</style>

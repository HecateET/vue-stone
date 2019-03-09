<template>
    <section class="expo-stone-index">
      <p>博览奇石</p>
    </section>
</template>

<script>
    export default {
      name: "expoStoneIndex",
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
        $(".expo-stone-index").css("min-height",this.Height-$("#myHeader").height());
      },
      methods:{
        init(){

        },
      },
    }
</script>

<style scoped>
  .expo-stone-index{
    width: 100%;
    background-color: darkturquoise;
  }
</style>

<template>
  <section class="home-index">
    <!--轮播图-->
    <div class="container">
      <p>首页</p>
    </div>
  </section>
</template>

<script>
    export default {
      name: "index",
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
        $(".home-index").css("min-height",this.Height-$("#myHeader").height());
        var mySwiper = new Swiper('.swiper-container',{
          autoplay:true
        });
        console.log(this.Height);
      },
      methods:{

      },
    }
</script>

<style scoped>
  .home-index{
    width: 100%;
    /*min-height: 800px;*/
    background-color: yellow;
  }
  .container{
    background-color: white;
  }
</style>

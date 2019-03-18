<template>
  <section class="home-index">
    <!--轮播图-->
    <div class="swiper-box">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="container">
              <img src="../../assets/images/index/index-banner01.jpg">
            </div>
          </div>
          <div class="swiper-slide">
            <div class="container">
              <img src="../../assets/images/index/index-banner02.jpg">
            </div>
          </div>
          <div class="swiper-slide">
            <div class="container">
              <img src="../../assets/images/index/index-banner03.jpg">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="index-content container">
      <p>首页</p>
    </div>
  </section>
</template>

<script>
  import Swiper from 'swiper';
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
        new Swiper('.swiper-container',{
          loop:true,
          autoplay:true,
          delay:3000,
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
  .swiper-box{
    width: 100%;
    /*height: 400px;*/
    background-color: palegreen;
  }
  .swiper-slide{
    margin:0;
    padding: 0;
    text-align: center;
  }
  .swiper-slide img{
    width: 100%;
    height: 350px;
    text-align: center;
  }
  .index-content{
    background-color: white;
  }
</style>

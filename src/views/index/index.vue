<template>
  <section class="home-index">
    <!--轮播图-->

    <div class="banner-content">
      <img src="../../assets/images/index/index-banner01.jpg">
      <div class="banner-box">
        <p class="title">奇石文化交流平台</p>
        <input type="text" class="index-search" id="search" placeholder="请输入搜索关键字">
      </div>
    </div>
    <!--<div class="swiper-box">-->
      <!--<div class="swiper-container">-->
        <!--<div class="swiper-wrapper">-->
          <!--<div class="swiper-slide">-->
            <!--<div class="container">-->
              <!--<img src="../../assets/images/index/index-banner01.jpg">-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="swiper-slide">-->
            <!--<div class="container">-->
              <!--<img src="../../assets/images/index/index-banner02.jpg">-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="swiper-slide">-->
            <!--<div class="container">-->
              <!--<img src="../../assets/images/index/index-banner03.jpg">-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
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
   background-color: #f5f6f7;
  }
  .banner-content{
    position: relative;
    width: 100%;
    height: 300px;
  }
  .banner-content img {
    width: 100%;
    height: 300px;
  }
  .banner-content .banner-box{
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(237, 255, 126, 0.4);
    text-align: center;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-box-align: center;
    -webkit-box-pack: center;
  }
  .banner-box .title{
    padding: 25px 0;
    font-family: Arial;
    font-size: 40px;
    font-weight: bold;
    color: #fff;
    text-shadow: 0 2px 3px rgba(0, 0, 0, 0.5);
  }
  .banner-box #search.index-search{
    width: 600px;
    height: 50px;
    font-size: 20px;
    padding: 5px 15px;
    border: 1px solid #fff;
    border-radius: 5px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.5);
  }
  .banner-box #search.index-search:active{
    border: 1px solid #fff;
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

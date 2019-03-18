<template>
    <section class="my-center">
      <div class="container">
        <div class="center-banner">
          <div class="userinfo">
            <div class="user-headpic">
              <img src="../../assets/images/myCenter/headpic.jpg">
            </div>
            <div class="user-name">Hecate</div>
            <div class="user-intro">Good Good Study,Day Day Up</div>
          </div>
        </div>
        <div class="center-content">
          <!--个人中心菜单-->
          <div class="center-aside">
            <!--&lt;!&ndash;用户信息卡&ndash;&gt;-->
            <!--<div class="user-card">-->
              <!--<h1>个人中心</h1>-->
              <!--<div class="user-headpic">-->
              <!--</div>-->
            <!--</div>-->

            <ul class="aside-menu">
              <li class="aside-item">
                <router-link tag="li" class="one-menu-child" active-class="active" role="presentation" to="/myCenter">
                  <a class="text-color">个人信息</a>
                </router-link>
              </li>
              <li class="aside-item">
                <router-link tag="li" class="one-menu-child" active-class="active" role="presentation" to="/myCenter/myCollection">
                  <a class="text-color">我的收藏</a>
                </router-link>
              </li>
              <li class="aside-item">
                <router-link tag="li" class="one-menu-child" active-class="active" role="presentation" to="/myCenter/myPort">
                  <a class="text-color">我的帖子</a>
                </router-link>
              </li>
              <li class="aside-item">
                <router-link tag="li" class="one-menu-child" active-class="active" role="presentation" to="/myCenter/myFans">
                  <a class="text-color">我的粉丝</a>
                </router-link>
              </li>
              <li class="aside-item">
                <router-link tag="li" class="one-menu-child" active-class="active" role="presentation" to="/myCenter/myFollow">
                  <a class="text-color">我的关注</a>
                </router-link>
              </li>
            </ul>
          </div>
          <div class="my-center-content">
            <router-view/>
          </div>
        </div>

      </div>

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
  *{
    /*margin: 0;*/
    /*padding: 0;*/
  }
  .my-center{
    width: 100%;
    background: lightseagreen;
  }
  .container{
    background-color: white;
  }
  /*个人中心bannerr部分*/
  .center-banner{
    background-color: palegreen;
    height: 300px;
    display: -webkit-box;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    margin-bottom: 15px;
  }
  .userinfo{
    width: 30%;
    height: 80%;
    background-color: lemonchiffon;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-box-align: center;
    -webkit-box-pack: center;
    text-align: center;
  }
  .user-headpic{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: palegreen;
    margin: 20px;
  }
  .user-headpic img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  .userinfo .user-name{
    font-family: Arial;
    font-size: 18px;
    color: #333;
    margin: 10px;
  }
  /*个人中心主体部分*/
  .center-content{
    display: -webkit-box;
  }
  .aside-menu{
    width: 100%;
  }
  .user-card{
    width: 100%;
    height: 150px;
    background-color: coral;
  }
  .aside-item{
    width: 100%;
    height: 40px;
    text-align: center;
    line-height: 40px;
    background-color: skyblue;
    border-bottom: 1px solid #ccc;
  }
  .center-aside{
    width: 250px;
    border-right: 1px solid #ccc;
    /*background-color: yellow;*/
    margin-right: 15px;
  }
  .my-center-content{
    -webkit-box-flex: 1;
  }
</style>

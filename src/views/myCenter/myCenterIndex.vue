<template>
    <section class="my-center">
      <!--个人中心菜单-->
      <div class="center-aside">
        <!--用户信息卡-->
        <div class="user-card">
          <h1>个人中心</h1>
          <div class="user-headpic">
          </div>
        </div>

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
      <!--<p>个人中心</p>-->
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
    display: -webkit-box;
    background: lightseagreen;
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
    width: 200px;
    border-right: 1px solid #ccc;
    background-color: yellow;
  }
  .my-center-content{
    -webkit-box-flex: 1;
  }
</style>

<template>
  <nav class="navbar navbar-default" id="myHeader">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#" style="font-weight: bold">奇石文化交流平台</a>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav navbar-left">
          <!--exact可以避免根路由使用始终激活的样式-->
          <router-link tag="li" role="presentation" to="/" exact><a class="text-color">首页</a></router-link>
          <router-link tag="li" role="presentation" to="/expoStone"><a class="text-color">博览奇石</a></router-link>
          <router-link tag="li" role="presentation" to="/stoneCulture"><a class="text-color">奇石文化</a></router-link>
          <router-link tag="li" role="presentation" to="/circleStone"><a class="text-color">奇石圈</a></router-link>
          <!--<router-link tag="li" role="presentation" to="/stoneAssessment"><a class="text-color">奇石估价</a></router-link>-->

        </ul>

        <ul class="nav navbar-nav navbar-right" v-if="!isLogin">
          <router-link tag="li" role="presentation" to="/login"><a class="text-color">登录</a></router-link>
          <router-link tag="li" role="presentation" to="/register"><a class="text-color">注册</a></router-link>
        </ul>

        <ul class="nav navbar-nav navbar-right" v-if="isLogin">
          <li class="dropdown">
            <!--<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span class="glyphicon glyphicon-user"></span>&nbsp;&nbsp;&nbsp;Hecate <span class="caret"></span></a>-->
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
              <img class="headpic" src="../assets/images/myCenter/headpic.jpg">&nbsp;&nbsp;&nbsp;Hecate <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <!--<li><a class="text-color" :href="'/user/' + userId + '/aboutme'">个人中心</a></li>-->
              <router-link tag="li" role="presentation" to="/myCenter"><a class="text-color">个人中心</a></router-link>
              <router-link tag="li" role="presentation" to="/publishStone"><a class="text-color">发布奇石</a></router-link>
              <li><a class="text-color" href="/">退出登录</a></li>
            </ul>
          </li>
          <router-link tag="li" role="presentation" to="/settings"><a class="text-color"><span class="glyphicon glyphicon-cog"></span>  设置</a></router-link>
        </ul>
      </div>
    </div>
  </nav>

</template>

<script>
    export default {
      name: "Header",
      data(){
        return{
          isLogin:true,
        }
      },
    }
</script>

<style scoped>
  #myHeader{

  }
  .navbar{
    margin: 0;
  }
  .navbar, .dropdown-menu {
    /*background-color: #BDD1C5;*/
    background-color: rgb(35, 42, 52);
    color: #fff;
  }
  .navbar-default .navbar-brand {
    color: #d3d3d3;
  }
  .navbar-default .navbar-nav>li>a {
    color: #d3d3d3;
  }
  li .text-color, .dropdown .dropdown-toggle {
    color: #d3d3d3;
    font-size: 16px;
  }

  li {
    cursor: pointer;
  }
  .headpic{
    width: 18px;
    height: 18px;
    border-radius: 50%;
  }
  .router-link-exact-active{
    /*background-color: #fff;*/
    border: 1px solid #fff;
    border-radius: 12px;
    color: #fff;
    font-size: 25px;
    font-weight: bold;
  }
  .active{
    /*background-color: #fff;*/
    color: #fff;
    font-size: 25px;
    font-weight: bolder;
  }
</style>

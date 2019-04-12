<template>
    <section class="my-center">
      <div class="container">
        <div class="center-banner">
          <div class="userinfo">
            <div class="user-headpic">
              <!--<img src="../../assets/images/myCenter/headpic.jpg">-->
              <img :src="userHeadPic">
            </div>
            <div class="user-name">{{userInfo.userinfo[0].userNickName}}</div>
            <div class="user-intro">{{userInfo.userinfo[0].userMotto}}</div>
            <div class="user-list">
              <div class="user-item" @click="routerUrl('/myCenter/myFollow')">
                <p class="user-item-num">{{userInfo.attentionNum.attentionNum}}</p>
                <p class="user-item-type">我的关注</p>
              </div>
              <div class="user-item" @click="routerUrl('/myCenter/myFans')">
                <p class="user-item-num">{{userInfo.fansNum.fanNum}}</p>
                <p class="user-item-type">我的粉丝</p>
              </div>
              <div class="user-item" @click="routerUrl('/myCenter/myPort')">
                <p class="user-item-num">{{userInfo.articleNum.articleNum}}</p>
                <p class="user-item-type">我的发布</p>
              </div>
            </div>
          </div>
          <div class="change-bgm">更换背景图</div>
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
              <!--<li class="aside-item">-->
              <a class="text-color">
                <router-link tag="li" class="aside-item one-menu-child" active-class="active" role="presentation" to="/myCenter/personInfo">
                  个人信息
                </router-link>
              </a>

              <!--</li>-->
              <!--<li class="aside-item">-->
              <a class="text-color">
                <router-link tag="li" class="aside-item one-menu-child" active-class="active" role="presentation" to="/myCenter/publishStone">
                  发布奇石
                </router-link>
              </a>
              <!--</li>-->
              <!--<li class="aside-item">-->
              <a class="text-color">
                <router-link tag="li" class="aside-item one-menu-child" active-class="active" role="presentation" to="/myCenter/friendDynamic">
                  好友动态
                </router-link>
              </a>

              <!--</li>-->
              <!--<li class="aside-item">-->
              <a class="text-color">
                <router-link tag="li" class="aside-item one-menu-child" active-class="active" role="presentation" to="/myCenter/myCollection">
                  我的收藏
                </router-link>
              </a>

              <!--</li>-->
              <!--<li class="aside-item">-->
              <a class="text-color">
                <router-link tag="li" class="aside-item one-menu-child" active-class="active" role="presentation" to="/myCenter/myPort">
                  我的帖子
                </router-link>
              </a>
              <!--</li>-->
              <!--<li class="aside-item">-->
                <!--<router-link tag="li" class="one-menu-child" active-class="active" role="presentation" to="/myCenter/myPort">-->
                  <!--<a class="text-color">个人设置</a>-->
                <!--</router-link>-->
              <!--</li>-->
              <!--<li class="aside-item">-->
                <!--<router-link tag="li" class="one-menu-child" active-class="active" role="presentation" to="/myCenter/myFans">-->
                  <!--<a class="text-color">我的粉丝</a>-->
                <!--</router-link>-->
              <!--</li>-->
              <!--<li class="aside-item">-->
                <!--<router-link tag="li" class="one-menu-child" active-class="active" role="presentation" to="/myCenter/myFollow">-->
                  <!--<a class="text-color">我的关注</a>-->
                <!--</router-link>-->
              <!--</li>-->
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
          userInfo:{},
          userHeadPic:"",
        }
      },
      created() {
        this.getUsersInfo(1);
      },
      mounted() {
        $(".my-center").css("min-height",this.Height-$("#myHeader").height());
      },
      methods:{
      //  路由跳转
        routerUrl(url){
          this.$router.push({ path:url});
        },
        getUsersInfo(userId){
          $.ajax({
            url:`${this.$store.state.baseURL}/users/${userId}`,
            methods:'get',
          }).then((res)=>{
            this.userInfo = res.data;
            this.userHeadPic = this.getImageUrl(this.userInfo.userinfo[0].userHeadPic);
            console.log(this.userInfo);
            console.log(this.userHeadPic);
          })
        },
        getImageUrl(oUrl){
          return `${this.$store.state.baseURL}${oUrl}`;
        },
      },
    }
</script>

<style scoped>
  *{
    font-family: "Impact,Arial,Microsoft YaHei";
    /*margin: 0;*/
    /*padding: 0;*/
  }
  .my-center{
    width: 100%;
    margin-bottom: 30px;
    background-color: #f5f6f7;
  }
  .container{
    /*background-color: #fff;*/
  }
  /*个人中心bannerr部分*/
  .center-banner{
    position: relative;
    height: 300px;
    display: -webkit-box;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    margin-bottom: 15px;
    background:url("../../assets/images/myCenter/center1.jpeg") palegreen center no-repeat ;
    background-size: cover;
  }
  .userinfo{
    width: 30%;
    /*height: 80%;*/
    background-color: rgba(255,250,205,0.5);
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-box-align: center;
    -webkit-box-pack: center;
    text-align: center;
    border-radius: 10px;
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
    font-family: "Impact,Arial,Microsoft YaHei";
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .userinfo .user-intro{
    color: #333;
    font-size: 16px;
    padding-bottom: 5px;
  }
  /*粉丝标题*/
  .userinfo .user-list{
    display: -webkit-box;
    width: 100%;
    /*height: 60px;*/
    padding: 10px 0;
    border-top: 1px solid #ccc;
    /*background-color: #edff7e;*/
  }
  .userinfo .user-list .user-item{
    font-family: "Impact,Arial,Microsoft YaHei";
    -webkit-box-flex: 1;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-box-align: center;
    -webkit-box-pack: center;
    border-right: 1px solid #ccc;
  }
  .userinfo .user-list .user-item:hover{
    cursor: pointer;
    background-color: rgba(0,0,0,0.3);
  }
  .user-item:hover .user-item-num,.user-item:hover .user-item-type{
    color: #fff;
  }

  .userinfo .user-list .user-item:last-child{
    border-right: none;
  }
  .user-item-num{
    font-family: "Impact,Arial,Microsoft YaHei";
    color: #333;
    font-size: 20px;
    font-weight: bold;
  }
  .user-item-type{
    color: #555;
    font-size: 16px;
  }

  .center-banner .change-bgm{
    position: absolute;
    top: 5%;
    right: 2%;
    color: #fff;
    font-size: 16px;
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
    height: 45px;
    text-align: center;
    line-height: 45px;
    background-color: skyblue;
    border-bottom: 1px solid #fff;
    color: #fff;
    font-size: 18px;
  }
  .text-color{
    color: #fff;
    font-size: 18px;
    text-decoration: none;
  }
  .aside-item:hover{
    background-color: rgba(0,0,0,0.5);
    color: #fff;
  }
  .router-link-exact-active{
    /*background-color: #fff;*/
    border: 1px solid #fff;
    color: #fff;
    font-size: 22px;
    font-weight: bold;
  }
  .active{
    background-color: rgba(0,0,0,0.5);
    color: #fff;
  }
  /*.aside-item .text-color:hover{*/
    /*color: #FF7F50;*/
  /*}*/
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

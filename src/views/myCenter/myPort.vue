<template>
    <section class="my-port">
      <!--帖子nav-->
      <div class="my-port-nav">
        <div class="all-tag">全部</div>
        <div class="search-box">
          <div class="input-group">
            <input class="form-control" type="text">
          </div>
          <div class="search-icon"> <span class="glyphicon glyphicon-search"></span></div>
        </div>
      </div>
      <!--我发布过的帖子-->
      <div class="my-port-list">
        <div class="my-port-item" v-for="(item,index) in portList" :key="index">
          <div class="item-content-top">
            <div class="item-headpic">
              <img src="../../assets/images/myCenter/headpic.jpg">
            </div>
            <div class="item-container">
              <p class="user-name">{{item.userName}}</p>
              <p class="punch-time">{{item.punchData}}</p>
              <div class="port-title">{{item.portTitle}}</div>
              <div class="picture">
              </div>
            </div>
          </div>
          <div class="item-content-bottom">
            <div class="port-views">浏览量 {{item.portViews}}</div>
            <div class="port-comment"><span class="glyphicon glyphicon-comment"></span> {{item.comments!=0?item.comments:"评论"}}</div>
            <div class="port-star"><span class="glyphicon glyphicon-thumbs-up"></span> {{item.portStar!=0?item.portStar:"点赞"}}</div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
    export default {
      name: "myPort",
      data(){
          return{
            portList:[
              {
                userName:"Hecate",
                punchData:"2019-3-18 09:09",
                portTitle:"静态天气真真好呀哈哈啊哈哈大方",
                userHeadPic:"../../assets/images/myCenter/headpic.jpg",
                portViews:"90",
                comments:"1",
                contentPictures:{},
                portStar:3,
              },
              {
                userName:"Hecate",
                punchData:"2019-3-18 09:09",
                portTitle:"静态天气真真好呀哈哈啊哈哈大方",
                userHeadPic:"../../assets/images/myCenter/headpic.jpg",
                portViews:"90",
                comments:"1",
                contentPictures:{},
                portStar:3,
              },
              {
                userName:"Hecate",
                punchData:"2019-3-18 09:09",
                portTitle:"静态天气真真好呀哈哈啊哈哈大方",
                userHeadPic:"../../assets/images/myCenter/headpic.jpg",
                portViews:"90",
                comments:"1",
                contentPictures:{},
                portStar:3,
              },
              {
                userName:"Hecate",
                punchData:"2019-3-18 09:09",
                portTitle:"静态天气真真好呀哈哈啊哈哈大方",
                userHeadPic:"../../assets/images/myCenter/headpic.jpg",
                portViews:"90",
                comments:"1",
                contentPictures:{},
                portStar:3,
              },
              {
                userName:"Hecate",
                punchData:"2019-3-18 09:09",
                portTitle:"静态天dsfadsfasf气真真好呀哈哈啊哈哈大方",
                userHeadPic:"../../assets/images/myCenter/headpic.jpg",
                portViews:"10",
                comments:"9",
                contentPictures:{},
                portStar:5,
              },
              {
                userName:"Hecate",
                punchData:"2019-3-15 09:09",
                portTitle:"静态dsfdsfad天气真真好呀哈哈啊哈哈大方",
                userHeadPic:"../../assets/images/myCenter/headpic.jpg",
                portViews:"10",
                comments:"2",
                contentPictures:{},
                portStar:9,
              },
              {
                userName:"Hecate",
                punchData:"2019-3-15 09:09",
                portTitle:"静态dsfdsfad天气真真好呀哈哈啊哈哈大方",
                userHeadPic:"../../assets/images/myCenter/headpic.jpg",
                portViews:"10",
                comments:"2",
                contentPictures:{},
                portStar:0,
              },
              {
                userName:"Hecate",
                punchData:"2019-3-15 09:09",
                portTitle:"静态dsfdsfad天气真真好呀哈哈啊哈哈大方",
                userHeadPic:"../../assets/images/myCenter/headpic.jpg",
                portViews:"10",
                comments:"0",
                contentPictures:{},
                portStar:9,
              },
            ]
          }
      },
    }
</script>

<style scoped>
  .my-port{
    font-family: Arial;
    background-color: #fff;
  }
  .my-port-nav{
    display: -webkit-box;
    -webkit-box-orient: horizontal;
    -webkit-box-align: center;
    -webkit-box-pack: justify;
    width: 100%;
    height: 40px;
    background-color: #ffc
  }
  .my-port-nav .all-tag{
    color: #fff;
    font-size: 18px;
    text-align: center;
    line-height: 40px;
    background-color: gold;
    width: 100px;
    height: 100%;
  }
  .my-port-nav .search-box{
    display: -webkit-box;
    -webkit-box-align: center;
    -webkit-box-pack: center;
    width: 300px;
    height: 100%;
    background-color: gold;
  }
  .my-port-nav .search-box .input-group{
    width: 80%;
  }
  .my-port-nav .search-icon{
    font-size: 20px;
    color: #fff;
    padding-left:10px;
  }
  .my-port-list{
    width: 100%;
  }
  .my-port-item{
    width: 100%;
    /*height: 300px;*/
    background-color: snow;
    margin:15px 0;
  }
  .my-port-item .item-content-top{
    display: flex;
    min-height: 200px;
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }
  .item-content-top .item-headpic{
    width: 100px;
    height: 100%;
    padding: 10px;
    /*background-color: #fcd;*/
  }
  .item-content-top .item-headpic img{
    width: 100%;
    border-radius: 50%;
    height: auto;
  }
  .item-content-top .item-container{
    padding: 10px;
    height: auto;
    text-align: left;
    flex: 1;
    /*background-color: lemonchiffon;*/
  }
  .item-container .user-name{
    text-align: left;
    color: #333;
    font-size: 20px;
  }
  .item-container .punch-time{
    text-align: left;
    color: #666;
    font-size: 14px;
  }
  .item-container .port-title{
    font-size: 16px;
    color: #333;
  }
  .item-container .picture{
    margin: 10px 0;
    width: 150px;
    height: 150px;
    background-color: palegreen;
  }

  .my-port-item .item-content-bottom{

    display: -webkit-box;
    height: 40px;
    width: 100%;
    -webkit-box-orient: horizontal;
    -webkit-box-align: center;
    -webkit-box-pack: justify;
    background-color: whitesmoke;
  }
  .my-port-item .item-content-bottom div{
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-right: 1px solid #ccc;
    -webkit-box-flex: 1;
  }
  .my-port-item .item-content-bottom div:last-child{
    border-right: none;
  }


</style>

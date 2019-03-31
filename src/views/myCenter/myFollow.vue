<template>
    <section class="my-follow">
      <div class="select-content">
        <div class="choose">
          <span class="title">我的关注</span>
          排序 <span class="glyphicon glyphicon-menu-down"></span></div>
        <div class="search-box">
          <div class="input-group">
            <input class="form-control" placeholder="输入昵称" type="text">
          </div>
          <div class="search-icon"> <span class="glyphicon glyphicon-search"></span></div>
        </div>
      </div>

      <div class="row follow-list">
        <div class="follow-item col-sm-4" v-for="(item,index) in followList" :key="index">
          <div class="item-left">
            <div class="user-headpic">
              <img :src="item.userHeadPic">
            </div>
          </div>
          <div class="item-right">
            <p class="user-name">{{item.userName}}</p>
            <p class="user-motto">{{item.motto}}</p>
          </div>
          <div class="cancel-follow-btn">取消关注</div>
        </div>
      </div>

      <nav class="page-nav" aria-label="...">
        <ul class="pagination">
          <li class="disabled"><a href="#" aria-label="Previous"><span aria-hidden="true">«</span></a></li>
          <li class="active"><a href="#">1 <span class="sr-only">(current)</span></a></li>
          <!--<li><a href="#">2</a></li>-->
          <!--<li><a href="#">3</a></li>-->
          <!--<li><a href="#">4</a></li>-->
          <!--<li><a href="#">5</a></li>-->
          <li><a href="#" aria-label="Next"><span aria-hidden="true">»</span></a></li>
        </ul>
      </nav>

    </section>
</template>

<script>
    export default {
      name: "myFollow",
      data(){
        return{
          followList:[
            {
            userName:"小可爱",
            userHeadPic:require('../../assets/images/myCenter/headpic1.jpg'),
            motto:"最美不过当下！嘻嘻，且行且珍惜，加油~",
            },
            {
              userName:"Andy",
              userHeadPic:require('../../assets/images/myCenter/headpic2.jpg'),
              motto:"子曰：‘有朋自远方来，不亦乐乎’",
            },
            {
              userName:"Judy",
              userHeadPic:require('../../assets/images/myCenter/headpic3.jpg'),
              motto:"学习奇石文化",
            },
            {
              userName:"晨曦",
              userHeadPic:require('../../assets/images/myCenter/headpic4.jpg'),
              motto:"奇石交流互动关注我!",
            },
            {
              userName:"小番茄",
              userHeadPic:require('../../assets/images/myCenter/headpic6.jpg'),
              motto:"小番茄小番茄和小土豆是好朋友!",
            },
            {
              userName:"科比",
              userHeadPic:require('../../assets/images/myCenter/headpic5.jpg'),
              motto:"亦爱篮球，亦爱奇石",
            },
          ]
        }
      },
    }
</script>

<style scoped>
  .my-follow{
    background-color: rgba(245, 245, 245, 0.7);
  }
  .nav-myfollow{
    height: 40px;
    line-height: 40px;
    padding: 0 15px;
    font-size: 16px;
    font-weight: bold;
    color: #333;
    background: #F5F5F5;
  }
  .select-content{
    display: -webkit-box;
    -webkit-box-orient: horizontal;
    -webkit-box-align: center;
    -webkit-box-pack: justify;
    width: 100%;
    height: 40px;
    background-color: #ffc
  }
  .select-content .choose{
    color: #fff;
    font-size: 18px;
    text-align: center;
    line-height: 40px;
    background-color: gold;
    width: 215px;
    height: 100%;
  }
  .select-content .choose .title{
    display: inline-block;
    height: 100%;
    padding-right: 15px;
    margin-right: 10px;
    font-size: 20px;
    font-weight: bold;
    border-right: 1px solid #ffc;
  }

  .select-content .search-box{
    display: -webkit-box;
    -webkit-box-align: center;
    -webkit-box-pack: center;
    width: 300px;
    height: 100%;
    background-color: gold;
    /*border: 1px solid #ccc;*/
  }
  .select-content .search-box .input-group{
    width: 80%;
  }
  .select-content .search-icon{
    font-size: 20px;
    color: #fff;
    padding-left:10px;
  }

  .follow-list{
    margin: 0;
    padding: 10px;
    /*display: -webkit-box;*/
    /*-webkit-box-orient: vertical;*/
    /*-webkit-box-align: stretch;*/
    /*-webkit-box-pack: justify;*/
  }
  .follow-list .follow-item{
    position: relative;
    display: -webkit-box;
    width: 45%;
    height: 120px;
    margin: 10px 20px;
    padding: 0;
    border-radius: 5px;
    background-color: #fff;
  }
  .follow-item .item-left{
    position: relative;
    display: -webkit-box;
    width: 32%;
    height: 100%;
    -webkit-box-orient: vertical;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    /*background: gold;*/
    opacity: 0.8;
  }
  .follow-item .item-left:before{
    position: absolute;
    content: '';
    right: 0;
    top: 25%;
    height: 50%;
    border-left:1px solid #aaa;
  }
  .follow-item .user-headpic{
    width: 100px;
    height: 100px;
    /*background: greenyellow;*/
    border-radius: 50%;
  }
  .follow-item .user-headpic img{
    width: 100px;
    height: 100px;
    /*border: 1px solid gold;*/
    /*background: greenyellow;*/
    border-radius: 50%;
  }
  .follow-item .item-right{
    display: -webkit-box;
    padding: 10px;
    width: 68%;
    height: 100%;
    -webkit-box-orient: vertical;
    -webkit-box-align: start;
    -webkit-box-pack: center;
    /*background: aquamarine;*/
  }
  .follow-item .item-right .user-name{
    font-size: 18px;
    font-weight: bold;
    color: #333;
    margin-bottom: 5px;
  }
  .follow-item .item-right .user-motto{
    font-size: 16px;
    color: #555;
    margin-bottom: 20px;
  }
  .follow-item .cancel-follow-btn{
    position: absolute;
    bottom: 10px;
    right: 10px;
    padding: 5px 0;
    width: 70px;
    text-align: center;
    font-size: 14px;
    /*height: 30px;*/
    color: #fff;
    border-radius: 5px;
    background: #aaa;
  }
  .page-nav{
    margin: 20px;
  }
</style>

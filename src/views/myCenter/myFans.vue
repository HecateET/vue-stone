<template>
    <section class="my-fans">
      <!--<nav class="myfans-nav">我的粉丝</nav>-->
      <div class="select-content">
        <div class="choose">
          <span class="title">我的粉丝</span>
          排序 <span class="glyphicon glyphicon-menu-down"></span></div>
        <div class="search-box">
          <div class="input-group">
            <input class="form-control" placeholder="输入昵称" type="text">
          </div>
          <div class="search-icon"> <span class="glyphicon glyphicon-search"></span></div>
        </div>
      </div>
      <div class="fans-list">
        <div class="fans-item" v-for="(item,index) in fansLists" :key="index">
          <div class="item-left">
            <img src="">
          </div>
          <div class="item-right"></div>
        </div>
      </div>
    </section>
</template>

<script>
    export default {
        name: "myFans",
      data(){
          return{
            fansLists:[
              {
                userName:"",
                stonePublishNum:10,
                followNum:31,
                fansNum:20,
                userHeadPic:require("../../assets/images/myCenter/headpic3.jpg"),
              },
            ]
          }
      }
    }
</script>

<style scoped>
  .my-fans {
    height: 400px;
    background-color: rgba(245, 245, 245, 0.7);
  }
  .myfans-nav{
    height: 40px;
    line-height: 40px;
    padding: 0 15px;
    font-size: 16px;
    font-weight: bold;
    color: #333;
    background: #F5F5F5;
    border-bottom: 1px solid #ccc;
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
</style>

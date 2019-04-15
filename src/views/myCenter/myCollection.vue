<template>
    <section class="my-collection">
      <div class="collection-nav">
          <div class="nav-item" @click="changeType(1)" :class="collectionType==1 ?'nav-item-checked':'nav-item-unchecked'">收藏的帖子</div>
          <div class="nav-item" @click="changeType(2)" :class="collectionType==2 ? 'nav-item-checked' : 'nav-item-unchecked'">收藏的文章</div>
          <div class="nav-item" @click="changeType(3)" :class="collectionType==3 ? 'nav-item-checked' : 'nav-item-unchecked'">收藏的奇石</div>
      </div>
      <div class="collection-content">
        <!--收藏的帖子-->
        <div v-show="collectionType==1" class="love-port-content">
          <div class="port-nav">
            <p class="port-title">帖子标题</p>
            <p class="port-author">帖主</p>
            <p class="port-time">最后更新时间</p>
          </div>
          <div class="port-item" v-for="(item,index) in portList" :key="index">
            <p class="port-title">{{item.portTitle}}</p>
            <p class="port-author">{{item.portAuthor}}</p>
            <p class="port-time">{{item.endTime}}</p>
          </div>

          <nav style="margin-right: 20px">
            <ul class="pagination">
              <li class="disabled"><a href="#" aria-label="Previous"><span aria-hidden="true">«</span></a></li>
              <li class="active"><a href="#">1 <span class="sr-only">(current)</span></a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">4</a></li>
              <li><a href="#">5</a></li>
              <li><a href="#" aria-label="Next"><span aria-hidden="true">»</span></a></li>
            </ul>
          </nav>
        </div>
        <!--收藏的文章-->
        <div v-show="collectionType==2" class="love-article-content">
          <div class="article-nav">
            <p class="article-title">文章标题</p>
            <p class="article-author">作者</p>
            <p class="article-time">发布时间</p>
          </div>
          <div class="article-item" @click="goToDetails(item.url)" v-for="(item,index) in articleList" :key="index">
            <p class="article-title">{{item.portTitle}}</p>
            <p class="article-author">{{item.portAuthor}}</p>
            <p class="article-time">{{item.endTime}}</p>
          </div>

          <nav aria-label="...">
            <ul class="pagination">
              <li class="disabled"><a href="#" aria-label="Previous"><span aria-hidden="true">«</span></a></li>
              <li class="active"><a href="#">1 <span class="sr-only">(current)</span></a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">4</a></li>
              <li><a href="#">5</a></li>
              <li><a href="#" aria-label="Next"><span aria-hidden="true">»</span></a></li>
            </ul>
          </nav>
        </div>
        <!--收藏的奇石-->
        <div v-show="collectionType==3" class="love-stone-content">
          <div class="row stone-list">
            <div class="stone-item col-sm-3" @click="goToDetails(item.stoneUrl)" v-for="(item,index) in stoneList" :key="index">
              <img class="stone-img" :src="item.stoneImage">
              <div class="stone-info">
                  <div class="info-left">
                    <p class="stone-name">{{item.stoneName}}</p>
                    <p class="stone-endtime">{{item.stoneTime}}</p>
                  </div>
                  <div class="info-right">
                    <p class="stone-author">{{item.stoneAuthor}}</p>
                    <p class="stone-type">{{item.stoneType}}</p>
                  </div>
              </div>
            </div>
          </div>

          <nav aria-label="...">
            <ul class="pagination">
              <li class="disabled"><a href="#" aria-label="Previous"><span aria-hidden="true">«</span></a></li>
              <li class="active"><a href="#">1 <span class="sr-only">(current)</span></a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">4</a></li>
              <li><a href="#">5</a></li>
              <li><a href="#" aria-label="Next"><span aria-hidden="true">»</span></a></li>
            </ul>
          </nav>

        </div>
      </div>
    </section>
</template>

<script>
    export default {
      name: "myCollection",
      data(){
        return{
          collectionType:1,//收藏的类型，1：帖子、2：文章、3奇石
          portList:[
            {
              portTitle:"谈谈各地的奇石吧",
              portAuthor:"Hecate",
              endTime:"2019-2-20 9:30",
              url:"/stoneArticle/1"
            },
            {
              portTitle:"我与寿山石的渊源",
              portAuthor:"小可爱",
              endTime:"2019-1-30 9:30",
              url:"/stoneArticle/2",
            },
            {
              portTitle:"每一颗石头都是一种历练后的展现",
              portAuthor:"Corle",
              endTime:"2019-1-19 19:30",
              url:"/stoneArticle/2",
            }
          ],
          articleList:[
            {
              portTitle:"中国奇石品种名录",
              portAuthor:"Judy",
              endTime:"2019-2-20 9:30",
              url:'/stoneArticle/1',
            },
            {
              portTitle:"赏石文化的由来",
              portAuthor:"Andy",
              endTime:"2019-2-20 9:30",
              url:"/stoneArticle/2",
            },
            {
              portTitle:"一韩国人10年买走300顿，这种怒江边常见的小石头几近绝迹！",
              portAuthor:"小可爱",
              endTime:"2019-1-30 9:30",
              url:"/stoneArticle/3",
            },
            {
              portTitle:"石友们最珍贵的石头都是啥样的？快来一睹为快！",
              portAuthor:"Corle",
              endTime:"2019-1-19 19:30",
              url:"/stoneArticle/4",
            }
          ],
          stoneList:[
            {
              stoneName:"奇怪的石头哈哈",
              stoneAuthor:"Andy",
              stoneType:"九龙壁",
              stoneTime:"2019-1-31",
              stoneUrl:"/stoneImage/1",
              stoneImage:require("../../assets/images/myCenter/stone1.jpg"),
            },
            {
              stoneName:"歲月的摧殘",
              stoneAuthor:"Hecate",
              stoneType:"其它石种",
              stoneTime:"2019-1-31",
              stoneUrl:"/stoneImage/2",
              stoneImage:require("../../assets/images/myCenter/stone3.png"),
            },
            {
              stoneName:"大吉大利",
              stoneAuthor:"小可爱",
              stoneType:"寿山石",
              stoneTime:"2019-1-31",
              stoneUrl:"/stoneImage/3",
              stoneImage:require("../../assets/images/myCenter/stone4.png"),
            },
            {
              stoneName:"飞黄腾达",
              stoneAuthor:"传奇",
              stoneType:"九龙壁",
              stoneTime:"2019-1-31",
              stoneUrl:"/stoneImage/4",
              stoneImage:require("../../assets/images/myCenter/stone2.jpg"),
            },
          ],
        }
      },
      methods:{
        changeType(type){
          this.collectionType=type;
        },
        goToDetails(url){
          this.$router.push({ path:url});
        }
      },
    }
</script>

<style scoped>
  .my-collection{
    width: 100%;
    /*height: 500px;*/
    padding-bottom: 30px;
    font-family: Arial;
    background-color: #fff;
  }
  /*nav切换*/
  .collection-nav{
    display: -webkit-box;
    width: 100%;
    height: 40px;
    background: #8ccce7;
  }
  .collection-nav .nav-item{
    height: 40px;
    line-height: 40px;
    text-align: center;
    -webkit-box-flex: 1;
    border-right: 1px solid #fff;
    color: #555;
    font-size: 16px;
    font-weight: bold;
  }
  .collection-nav .nav-item:hover{
    cursor: pointer;
    font-size: 18px;
  }
  .collection-nav .nav-item-checked{
    background: #FF7F50;
    color: #fff;
  }
  .collection-nav .nav-item-unchecked{
    background: #8ccce7;
    color: #fff;
  }
  /*收藏内容*/

  .collection-content{

  }
  /*收藏的帖子*/
  .love-port-content{
    /*width: 100%;*/
    /*background: skyblue;*/
    margin: 0 10px;
  }
  .port-nav{
    padding: 0 10px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    display: -webkit-box;
    -webkit-box-orient: horizontal;
    -webkit-box-align: center;
    -webkit-box-pack: justify;
    color: #333;
    font-size: 14px;
    font-weight: bold;
  }

  /*.port-nav p{*/
    /*-webkit-box-flex: 1;*/
    /*text-align: center;*/
  /*}*/
  .port-item{
    /*width: 100%;*/
    height: 60px;
    padding: 0 10px;
    background: #fff;
    margin: 10px 0;
    border-radius: 5px;
    display: -webkit-box;
    -webkit-box-orient: horizontal;
    -webkit-box-align: center;
    /*-webkit-box-pack: justify;*/
  }
  .port-title{
    width: 60%;
    text-align: left;
  }
  .port-author{
    width: 20%;
    text-align: left;
  }
  .port-time{
    width: 20%;
    text-align: right;
  }
  .port-item .port-title{
    font-size: 16px;
    color: #333;
  }
  .port-item .port-author{
    font-size: 16px;
    color: #3a3a3a;
  }
  .port-item .port-time{
    font-size: 16px;
    color: #999;
  }
  /*收藏的文章*/
  .love-article-content{
    margin: 0 10px;
  }
  .article-nav{
    padding: 0 10px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    display: -webkit-box;
    -webkit-box-orient: horizontal;
    -webkit-box-align: center;
    -webkit-box-pack: justify;
    color: #333;
    font-size: 14px;
    font-weight: bold;
  }
  .article-item{
    height: 60px;
    padding: 0 10px;
    background: #fff;
    margin: 10px 0;
    border-radius: 5px;
    display: -webkit-box;
    -webkit-box-orient: horizontal;
    -webkit-box-align: center;
  }
  .article-title{
    width: 60%;
    text-align: left;
  }
  .article-author{
    width: 20%;
    text-align: left;
  }
  .article-time{
    width: 20%;
    text-align: right;
  }
  .article-item .article-title{
    font-size: 16px;
    color: #333;
    padding-left: 10px;
  }
  .article-item .article-author{
    font-size: 16px;
    color: #3a3a3a;
  }
  .article-item .article-time{
    font-size: 16px;
    color: #999;
  }

  /*收藏的奇石*/
  .love-stone-content{
    margin: 0 10px;
  }
  .stone-list{
    /*display: flex;*/
    margin: 0 auto;
    padding:10px;
  }
  .stone-item{
    margin: 11px;
    width: 255px;
    padding: 0;
    height: 250px;
    background: coral;
  }
  .stone-item .stone-img{
    width: 100%;
    height: 73%;
  }
  .stone-info{
    width: 100%;
    height: 27%;
    padding: 10px;
    background: #fff;
    display: -webkit-box;
  }
  .stone-info .info-left{
    width: 70%;
  }
  .stone-info .info-right{
    width: 30%;
  }
  .stone-info .stone-name{
    font-size: 16px;
    font-weight: bold;
    color: #333;
    padding-bottom: 5px;
  }
  .stone-info .stone-author{
    font-size: 14px;
    font-weight: bold;
    color: #333;
    padding-bottom: 5px;
    text-align: right;
  }
  .stone-info .stone-endtime{
    color: #999;
    font-size: 14px;
  }
  .stone-info .stone-type{
    color: #3a3a3a;
    font-size: 14px;
    text-align: right;
  }
</style>

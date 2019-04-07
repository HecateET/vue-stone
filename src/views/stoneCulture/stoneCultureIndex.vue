<template>
    <section class="stone-culture">
      <div class="stone-culture-box container">
        <!--分类栏-->
        <div class="article-classify">
          <div class="classify-item" v-for="(item,index) in cityList" :key="index">{{item.cityName }}</div>
          <div class="classify-extend" v-show="false">
            <p v-for="(i,index) in cityList[0].cityStoneClassify" :key="index">{{i.stoneName}}</p>
          </div>
        </div>
        <!--文章内容区-->
        <div class="article-content">
          <div class="article-item" @click="articleDetails(item.articleId)" v-for="(item,index) in hotArticleList" :key="index">
            <div class="article-img">
              <img :src="item.img">
            </div>
            <div class="article-info">
              <p class="article-title">奇石dfasdafsdfsdfsddsfadsf文化的有啦大幅多少sdfasd发撒打发</p>
              <p class="article-des">中华答复哈附件啊法艰苦大师傅爱的世界看的说法健康上的方式艰苦的时看得十分艰苦大师傅骄傲地说啊撒打发空间阿三地方刻阿道夫安徽是大家看法和啊实打实大反击和fsdfudhfajdskfhjasd石dfasdafsdfs石dfasdafsdfs石dfasdafsdfsdfsddsfadsf文化的有啦dfsddsfadsf文化的有啦dfsddsfadsf文化的有啦kfhkjadsfdsf</p>
              <div class="article-bottom">
                <div class="author-box">
                  <img class="author-icon" src="../../assets/images/myCenter/headpic1.jpg">
                  <span class="author-name">Hecate</span>
                </div>
                <div class="publish-info">
                  <p>阅读数：39492</p>
                  <p>发布时间：2019-2-27 19:00:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--推荐长栏区域-->
        <div class="push-content">
          <div class="search-box">
            <input type="text" id="search" placeholder="请输入搜索关键字">
            <button class="btn btn-info">搜索</button>
            <!--<div class="search-btn">搜索</div>-->
          </div>
          <div class="push-1">
            <div class="push-nav">今日推荐</div>
            <div class="push-item" v-for="(item,index) in hotArticleList" :key="index">
              <img class="push-img" :src="item.img">
              <p class="push-title">{{item.title}}</p>
            </div>

          </div>

        </div>
      </div>
    </section>
</template>

<script>
    export default {
      name: "stoneCultureIndex",
      components:{

      },
      data(){
        return{
          Height:$(window).height(),
          Width:$(window).width(),
          cityList:[
            {
              cityId:"",
              cityPinYin:"BeiJing",
              cityPY:"BJ",
              cityName:"北京",
              cityStoneClassify:[
                {
                  stoneId:"",
                  stoneName:"",
                  stonePinYin:"金海石",
                  stonePY:"",
                },
                {
                  stoneId:"",
                  stoneName:"轩辕石",
                  stonePinYin:"xuanyuanshi",
                  stonePY:"XYS",
                },
                {
                  stoneId:"",
                  stoneName:"房山太湖石",
                  stonePinYin:"fangshantaihushi",
                  stonePY:"FSTHS",
                },
                {
                  stoneId:"",
                  stoneName:"燕山石",
                  stonePinYin:"yanshanshi",
                  stonePY:"YSS",
                },
                {
                  stoneId:"",
                  stoneName:"硅化木",
                  stonePinYin:"guihuamu",
                  stonePY:"GHM",
                },
                {
                  stoneId:"",
                  stoneName:"京西菊花石",
                  stonePinYin:"jingxijuhuashi",
                  stonePY:"JXJHS",
                },
                {
                  stoneId:"",
                  stoneName:"汉白玉石",
                  stonePinYin:"hanbaiyushi",
                  stonePY:"HBYS",
                },
              ],
            },
            {
              cityId:"",
              cityPinYin:"shanghai",
              cityPY:"SH",
              cityName:"上海",
              cityStoneClassify:[
                {
                  stoneId:"",
                  stoneName:"黄蜡石",
                  stonePinYin:"huanglashi",
                  stonePY:"HLS",
                },
              ],
            },
            {
              cityId:"",
              cityPinYin:"chongqing",
              cityPY:"CQ",
              cityName:"重庆",
              cityStoneClassify:[
                {
                  stoneId:"",
                  stoneName:"wujiangshi",
                  stonePinYin:"乌江石",
                  stonePY:"WJS",
                },
                {
                  stoneId:"",
                  stoneName:"长江三峡石",
                  stonePinYin:"changjiangsanxiashi",
                  stonePY:"CJSXS",
                },
                {
                  stoneId:"",
                  stoneName:"角石",
                  stonePinYin:"jiaoshi",
                  stonePY:"JS",
                },
                {
                  stoneId:"",
                  stoneName:"响石",
                  stonePinYin:"xiangshi",
                  stonePY:"XS",
                },
                {
                  stoneId:"",
                  stoneName:"石松",
                  stonePinYin:"shisong",
                  stonePY:"SS",
                },
              ],
            },
            {
              cityId:"",
              cityPinYin:"hebei",
              cityPY:"HB",
              cityName:"河北",
              cityStoneClassify:[
                {
                  stoneId:"",
                  stoneName:"太湖石",
                  stonePinYin:"taihushi",
                  stonePY:"THS",
                },
                {
                  stoneId:"",
                  stoneName:"模树石",
                  stonePinYin:"moshushi",
                  stonePY:"MSS",
                },
                {
                  stoneId:"",
                  stoneName:"菊花石",
                  stonePinYin:"juhuashi",
                  stonePY:"JHS",
                },
                {
                  stoneId:"",
                  stoneName:"雪浪石",
                  stonePinYin:"xuelangshi",
                  stonePY:"XLS",
                },
                {
                  stoneId:"",
                  stoneName:"冰洲石",
                  stonePinYin:"bingzhoushi",
                  stonePY:"BZS",
                },
              ],
            },
            {
              cityId:"",
              cityPinYin:"shanxi",
              cityPY:"SX",
              cityName:"山西",
              cityStoneClassify:[
                {
                  stoneId:"",
                  stoneName:"梅花石",
                  stonePinYin:"meihuashi",
                  stonePY:"MHS",
                },
                {
                  stoneId:"",
                  stoneName:"大寨石",
                  stonePinYin:"dazhaishi",
                  stonePY:"DZS",
                },
                {
                  stoneId:"",
                  stoneName:"硅化木",
                  stonePinYin:"guihuamu",
                  stonePY:"GHM",
                },
                {
                  stoneId:"",
                  stoneName:"黄河石",
                  stonePinYin:"huangheshi",
                  stonePY:"HHS",
                },
                {
                  stoneId:"",
                  stoneName:"绛洲石",
                  stonePinYin:"jiangzhoushi",
                  stonePY:"JZS",
                },
                {
                  stoneId:"",
                  stoneName:"石洲石",
                  stonePinYin:"shizhoushi",
                  stonePY:"SZS",
                },
              ],
            },
            {
              cityId:"",
              cityPinYin:"shanxi",
              cityPY:"SX",
              cityName:"山西",
              cityStoneClassify:[],
            },
            {
              cityId:"",
              cityPinYin:"neimenggu",
              cityPY:"NMG",
              cityName:"内蒙古",
              cityStoneClassify:[],
            },
            {
              cityId:"",
              cityPinYin:"heilongjiang",
              cityPY:"HLJ",
              cityName:"黑龙江",
              cityStoneClassify:[],
            },
            {
              cityId:"",
              cityPinYin:"jilin",
              cityPY:"JL",
              cityName:"吉林",
              cityStoneClassify:[],
            },
            {
              cityId:"",
              cityPinYin:"liaoning",
              cityPY:"LN",
              cityName:"辽宁",
              cityStoneClassify:[],
            },
            {
              cityId:"",
              cityPinYin:"shandong",
              cityPY:"SD",
              cityName:"山东",
              cityStoneClassify:[],
            },
          ],
          hotArticleList:[
            {
              articleId:1,
              img:require('../../assets/images/myCenter/stone1.jpg'),
              title:"奇石的由来众说纷纭"
            },
            {
              articleId:2,
              img:require('../../assets/images/myCenter/stone3.png'),
              title:"奇石的由来众说纷纭"
            },
            {
              articleId:3,
              img:require('../../assets/images/myCenter/stone2.jpg'),
              title:"奇石的由的撒客户来范德萨发众说纷纭"
            },
            {
              articleId:4,
              img:require('../../assets/images/myCenter/stone1.jpg'),
              title:"奇石的由来众说大撒法纷纭"
            },
          ]
        }
      },
      created() {
      },
      mounted() {
        // $(".stone-culture").css("min-height",this.Height-$("#myHeader").height());
        console.log(this.Height);
      },
      methods:{
        //跳转至文章详情
        articleDetails(articleId){
          let url = `/stoneArticle/${articleId}`;
          this.$router.push({ path:url});
        }
      },
    }
</script>

<style scoped>
  .stone-culture{
    width: 100%;
    padding-top: 10px;
    background-color: #f5f6f7;
  }
  .stone-culture-box.container{
    display: flex;
    /*height: 300px;*/
    /*background-color: snow;*/
    padding-right: 0;
    padding-left: 0;
  }
  /*文章分类栏*/
  .article-classify{
    position: relative;
    width: 100px;
    height: auto;
    /*background-color: white;*/
  }
  .article-classify .classify-item{
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: #333;
    font-size: 14px;
    background-color: #fff;
  }
  .article-classify .classify-item:hover{
    background-color: palegreen;
  }
  .classify-extend{
    position: absolute;
    top: 0;
    left: 100px;
    width: 300px;
    height: auto;
    /*height: 300px;*/
    /*height: 100%;*/
    background: honeydew;
    z-index: 100;
  }
  /*文章内容栏*/
  .article-content{
    /*height: auto;*/
    /*padding: 10px;*/
    min-height: 300px;
    flex: 1;
    margin: 0 15px;
    /*background-color: #edff7e;*/
  }
  .article-content .article-item{
    display: -webkit-box;
    padding: 10px;
    margin-bottom: 10px;
    width: 100%;
    height: 200px;
    background: #fff;
  }
  .article-item:hover{
    cursor: default;
  }
  .article-item .article-img{
    margin-right: 10px;
    width: 250px;
    height: 100%;
    background: aquamarine;
  }
  .article-item .article-img img{
    width: 100%;
    height: 100%;
  }
  .article-item .article-info{
    -webkit-box-flex: 1;
    position: relative;
  }
  .article-info .article-title{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    font-size: 18px;
    font-weight: bold;
    color: #333;
    height: 55px;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    line-clamp: 2;
  }
  .article-info .article-des{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    height: 65px;
    font-size: 14px;
    color: #8a8a8a;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp:3;
    line-clamo:3;
  }
  .article-info .article-bottom {
    display: -webkit-box;
    position: absolute;
    width:100%;
    /*height: 50px;*/
    bottom: 0;
    -webkit-box-pack: justify;
    /*background: aquamarine;*/

  }
  .article-bottom .author-box{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-box-pack: center;
    font-family: Arial;
    font-size: 14px;
    color: #333;
  }
  .author-box .author-icon{
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
  .article-bottom .publish-info{
    text-align: right;
    color: #8a8a8a;
  }
  /*推荐长栏区域*/
  .push-content{
    /*min-height: 200px;*/
    /*height: auto;*/
    width: 300px;
    /*padding: 10px;*/
  }
  .push-content .search-box{
    display: -webkit-box;
    padding: 10px;
    margin-bottom: 10px;
    background-color: #fff;

  }
  .push-content .search-box #search{
    width: 70%;
    height: 40px;
    font-size: 18px;
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid #f4f4f4;
  }
  .push-content .search-box .btn{
    margin-left: 10px;
    margin-bottom: 10px;
  }
  /*.push-content .search-box .search-btn{*/
    /*-webkit-box-flex: 1;*/
    /*line-height: 30px;*/
    /*height: 30px;*/
    /*font-size: 16px;*/
    /*color: #555;*/
    /*text-align: center;*/

    /*border: 1px #fff solid;*/
    /*background: #FFFAF0;*/
  /*}*/
  .push-content .push-1{
    padding: 10px;
    margin-bottom: 10px;
    background-color: #fff;
  }
  .push-content .push-nav{
    position: relative;
    width: 100%;
    height: 30px;
    padding: 0 10px;
    font-size: 20px;
  }
  .push-content .push-nav::before{
    position: absolute;
    content: '';
    left: 0;
    width: 5px;
    height: 30px;
    background: #f00;

  }
  .push-content .push-item{
    display: -webkit-box;
    /*width: 100%;*/
    height: 60px;
    -webkit-box-pack: center;
    margin: 10px 0;
  }
  .push-content .push-item .push-img{
    width: 80px;
    height: 60px;
    border-radius: 5px;
  }
  .push-content .push-item .push-title{
    padding: 0 5px;
    height: 50px;
    -webkit-box-flex: 1;
    font-size: 16px;
    font-weight: bold;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }
</style>

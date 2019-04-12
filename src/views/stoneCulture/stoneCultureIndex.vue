<template>
    <section class="stone-culture">
      <div class="stone-culture-box container">
        <!--分类栏-->
        <div class="article-classify">
          <div class="classify-item" @click="getStoneType(item.provinceId)" v-for="(item,index) in cityLists" :key="index">{{item.provinceName }}</div>
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
              <p class="article-title">{{item.title}}</p>
              <p class="article-des">{{item.content}}</p>
              <div class="article-bottom">
                <div class="author-box">
                  <img class="author-icon" :src="item.headPic">
                  <span class="author-name">{{item.author}}</span>
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
          cityLists:[],
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
              title:"奇石的由来众说纷纭",
              content:"奇石，是立体的画，让人百看不厌。奇石，是烂漫的诗，让人百咏不烦。奇石，是无字的书，让人百读不倦。奇石，是多情的歌，让人吟唱不断。奇石，是清香的茶，让人愈品愈鲜。奇石，是醇厚的酒。让人欲醉欲仙。奇石，是迷魂的汤，让人如痴如癫。",
              author:"Hecate",
              headPic:require('../../assets/images/myCenter/headpic.jpg'),
            },
            {
              articleId:2,
              img:require('../../assets/images/myCenter/stone3.png'),
              title:"明白了奇石收藏的十大原则，出门淘宝贝不再是难事",
              content:"所谓“国有国法，行有行规”，奇石收藏也要讲究原则。概括起来，奇石收藏主要有以下十大原则：一、浓厚兴趣一般人都有爱石情结，但要成为优秀的藏石家，还必须有一种强烈的、浓厚的兴趣，有一种嗜石如命的内在动力，追逐好石头有一种“上穷碧落下黄泉”的精神。",
              author:"小番茄",
              headPic:require('../../assets/images/myCenter/headpic3.jpg'),
            },
            {
              articleId:3,
              img:require('../../assets/images/myCenter/stone2.jpg'),
              title:"不评奖不估价只欣赏，上海石友藏石品鉴",
              content:"近日，上海秦石轩开展了一场资深石友“寻美之旅”邀请展，展会遵循不评奖、不估价、只欣赏的原则展出了众多石友的优秀作品，以下是奇石圈整理的部分资深石友藏石，供欣赏！",
              author:"小土豆",
              headPic:require('../../assets/images/myCenter/headpic2.jpg'),
            },
            {
              articleId:4,
              img:require('../../assets/images/myCenter/stone1.jpg'),
              title:"这就是各国国石，为什么选的就是它们呢？",
              content:"国石是一个国家人们所喜爱的或具有优异特性和重要价值，或是在该国出产和加工方面具有物色的宝石或玉石。如同许多国家已经选定本国的国花和国鸟一样，目前世界上已有近40个国家选出了自己的国石。那么，接下来各位就和小编一道去看看各国的国石都长啥样。中国——寿山石中国素有“宝玉石之国”的美称，而中国国石评选活动是从1998年开始酝酿和实施的。",
              author:"Vias",
              headPic:require('../../assets/images/myCenter/headpic4.jpg'),
            },
          ]
        }
      },
      created() {
        this.getCityLists();
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
        },
        getCityLists(){
          this.$ajax({
            methods:'get',
            url:`${this.$store.state.baseURL}/stoneArticle/cityList`,
          }).then((res)=>{
            this.cityLists = res.data.data;
          });
        },
        getStoneType(proId,proName){
          $.ajax({
            url: `${this.$store.state.baseURL}/stoneArticle/stoneTypeLists`,
            type: "post",
            data: {
                provinceId:proId,
                provinceName:proName
            },
            success: function (result) {
              console.log(result);
            }
          })
          // axios.post(`${this.$store.state.baseURL}/stoneArticle/stoneTypeLists`,{
          //   provinceId:proId,
          //   provinceName:proName
          // }).then((res)=>{
          //   console.log(res);
          // })
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

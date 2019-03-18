<template>
    <section class="stone-culture">
      <div class="stone-culture-box container">
        <!--分类栏-->
        <div class="article-classify">
          <div class="classify-item" v-for="(item,index) in cityList" :key="index">{{item.cityName }}</div>
        </div>
        <!--文章内容区-->
        <div class="article-content"></div>
        <!--推荐长栏区域-->
        <div class="push-content"></div>
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
          ]
        }
      },
      created() {
      },
      mounted() {
        $(".stone-culture").css("min-height",this.Height-$("#myHeader").height());
        console.log(this.Height);
      },
      methods:{

      },
    }
</script>

<style scoped>
  .stone-culture{
    width: 100%;
    padding-top: 10px;
    background-color: aqua;
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
    width: 100px;
    height: auto;
    background-color: white;
  }
  .article-classify .classify-item{
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: #333;
    font-size: 14px;
  }
  .article-classify .classify-item:hover{
    background-color: palegreen;
  }
  /*文章内容栏*/
  .article-content{
    /*height: auto;*/
    min-height: 300px;
    flex: 1;
    margin: 0 15px;
    background-color: gold;
  }
  /*推荐长栏区域*/
  .push-content{
    min-height: 200px;
    /*height: auto;*/
    width: 300px;
    background-color: deepskyblue;
  }
</style>

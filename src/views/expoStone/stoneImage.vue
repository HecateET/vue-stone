<template>
  <section class="article-index">
    <div class="container">
      <div class="author-info">
        <div class="header-box">
          <img src="../../assets/images/myCenter/headpic1.jpg">
          <p>{{userInfo.userNickName}}</p>
          <div class="follow-btn" @click="addAttention()">{{btnText}}</div>
        </div>
        <div class="info-details">
          <div class="item-box">
            <p class="title">粉丝</p>
            <p class="number">{{userAther.fansNum.fansNum}}</p>
          </div>
          <div class="item-box">
            <p class="title">文章</p>
            <p class="number">10</p>
          </div>
          <div class="item-box">
            <p class="title">帖子</p>
            <p class="number">{{userAther.portNum.portNum}}</p>
          </div>
          <div class="item-box">
            <p class="title">奇石</p>
            <p class="number">10</p>
          </div>
        </div>
        <div class="motto">
          <p>Good Good Study Day Day Up</p>
        </div>
      </div>
      <div class="article-content">
        <div class="title-info">
          <p class="title">{{stoneInfo.stoneName}}</p>
          <div class="publish">
            <p class="publish-date">2019年04月05日 23:42:33</p>
            <p class="author-name">Hecate</p>
            <p class="views">阅读量：322</p>
            <p class="tag">标签：
              <span class="tag-item">九龙壁</span>
            </p>
            <p class="stars">点赞<span class="glyphicon glyphicon-heart-empty"></span>:432141</p>
            <div class="collection">
              <span>收藏</span>
              <span class="glyphicon glyphicon-star-empty"></span>
              <span>:10</span>
            </div>
          </div>
        </div>
        <div class="article-details">
          <div>
            <img :src="stoneInfo.stonePicture">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "articleIndex",
    data(){
      return{
        id: this.$route.params.id,
        authorId:"1",
        stoneInfo:{},
        userInfo:{},
        userAther:{},
        btnText:"关注",
        content:"国石是一个国家人们所喜爱的或具有优异特性和重要价值，或是在该国出产和加工方面具有物色的宝石或玉石。如同许多国家已经选定本国的国花和国鸟一样，目前世界上已有近40个国家选出了自己的国石。那么，接下来各位就和小编一道去看看各国的国石都长啥样。中国——寿山石中国素有“宝玉石之国”的美称，而中国国石评选活动是从1998年开始酝酿和实施的。",
      }
    },
    created(){
      this.getStoneInfo();
      console.log(this.id);
    },
    methods:{
      getStoneInfo(){
        let that = this;
        $.ajax({
          url:`${this.$store.state.baseURL}/stoneArticle/stoneInfo/${this.id}`,
          method:"get",
        }).then((res)=>{
          this.stoneInfo = res.data[0];
          this.stoneInfo.stonePicture = this.getImageUrl(this.stoneInfo.stonePicture);
          console.log(this.stoneInfo.author);
          // that.authorId = that.stoneId.author;
          // console.log(this.authorId);
          that.getUsersInfo(3);
        })
      },
      getUsersInfo(userId){
        $.ajax({
          url:`${this.$store.state.baseURL}/users/${userId}`,
          methods:'get',
        }).then((res)=>{
          this.userInfo = res.data.userinfo[0];
          this.userAther = res.data;
          this.userInfo.userHeadPic = this.getImageUrl(this.userInfo.userHeadPic);
          console.log(this.userAther);
          console.log(this.userInfo.userId);
        })
      },
      getImageUrl(oUrl){
        return `${this.$store.state.baseURL}${oUrl}`;
      },
      addAttention(){
        this.btnText = "取消关注";
      }
    }
  }
</script>

<style scoped>
  .article-index{
    margin: 10px 0;
    background: #f5f6f7;
  }
  .container{
    display: -webkit-box;
    /*background: #f0f;*/
  }
  /*作者信息部分*/
  .author-info{
    width: 250px;
    height: 220px;
    background: #fff;
    margin-right: 10px;
  }

  .author-info .header-box{
    position: relative;
    width: 100%;
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }
  .author-info .header-box img{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    /*margin-right: 10px;*/
  }
  .header-box p{
    display: inline-block;
    font-size: 18px;
    font-weight: bold;
    color: #333;
    padding: 10px;
  }
  .author-info .header-box .follow-btn{
    /*display: inline-block;*/
    position: absolute;
    padding: 0 6px;
    top: 30%;
    right: 10px;
    color: #f00;
    font-size: 16px;
    border: 1px solid #f00;
    border-radius: 5px;
  }
  .author-info .info-details{
    width: 100%;
    padding: 10px 0;
    display: -webkit-box;
    -webkit-box-pack: justify;
    border-bottom: 1px solid #ccc;
  }
  .author-info .info-details .item-box{
    width: 25%;
    -webkit-box-flex: 1;
    display: -webkit-box;
    -webkit-box-align: center;
    -webkit-box-orient: vertical;
    -webkit-box-pack: center;
    border-right: 1px solid #ccc;
  }
  .author-info .info-details .item-box:last-child{
    border-right: none;
  }
  .info-details .title{
    font-size: 14px;
    font-weight: bold;
    color: #555;
  }
  .info-details .number{
    font-family: Arial;
    font-size: 12px;
    color: #666;
  }
  .author-info .motto{
    padding: 20px 10px;
    text-align: center;
    font-size: 14px;
  }
  /*文章部分*/
  .article-content{
    -webkit-box-flex: 1;
    background: #fff;
  }
  .article-content .title-info{
    width: 100%;
    padding: 20px 10px;
    border-bottom: 1px solid #ccc;
    /*height: 10px;*/
  }
  .article-content .title-info .title{
    padding: 10px;
    font-size: 30px;
    font-weight: bold;
    color: #333;
  }
  .article-content .publish{
    display: -webkit-box;
    width: 100%;
    /*-webkit-box-pack: justify;*/
  }
  .article-content .publish .publish-date{
    font-size: 14px;
    color: #777;
    padding: 0 10px;
  }
  .article-content .publish .author-name{
    padding: 0 10px;
    font-size: 14px;
    color: #44daff;
  }
  .article-content .publish .views{
    padding: 0 10px;
    font-size: 14px;
    color: #777;
  }
  .article-content .publish .stars{
    padding: 0 10px;
    font-size: 14px;
    color: #777;
  }
  .article-content .publish .tag{
    padding: 0 10px;
    font-size: 14px;
    color: #777;
  }
  .article-content .publish .tag-item{
    padding: 3px 6px;
    color: #44daff;
    border: 1px solid #44daff;
    border-radius: 10px;
  }
  .article-content .publish .collection{
    padding: 0 10px;
    color: #777;
    font-size: 14px;
  }
  .article-content .publish .collection span{

  }
  .article-details{
    font-size: 18px;
    color: #333;
    text-align: center;
  }
  .article-details img{
    width: 400px;
    height: auto;
    text-align: center;
    margin: 10px;
  }
</style>

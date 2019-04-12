<template>
  <section class="article-index">
    <div class="container">
      <div class="author-info">
        <div class="header-box">
          <img src="../../assets/images/myCenter/headpic1.jpg">
          <p>Hecate</p>
          <div class="follow-btn">关注</div>
        </div>
        <div class="info-details">
          <div class="item-box">
            <p class="title">粉丝</p>
            <p class="number">10</p>
          </div>
          <div class="item-box">
            <p class="title">文章</p>
            <p class="number">10</p>
          </div>
          <div class="item-box">
            <p class="title">帖子</p>
            <p class="number">10</p>
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
          <p class="title">奇石头的由来</p>
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

        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
        name: "articleIndex"
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
</style>

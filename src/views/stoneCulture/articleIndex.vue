<template>
  <section class="article-index">
    <div class="container">
      <div class="author-info">
        <div class="header-box">
          <img src="../../assets/images/myCenter/headpic1.jpg">
          <div class="follow-btn">关注</div>
        </div>
      </div>
      <div class="article-content">
        <div class="title-info">
          <p class="title">奇石头的由来</p>
          <div class="publish">
            <p class="publish-date">2019年04月05日 23:42:33</p>
            <p class="author-name">Hecate</p>
            <p>阅读量：322</p>
            <p>点赞数：432141</p>
            <p >标签：
              <span>九龙壁</span>
            </p>
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
    background: #f0f;
  }
  /*作者信息部分*/
  .author-info{
    width: 250px;
    height: 250px;
    background: #fff;
    margin-right: 10px;
  }

  .author-info .header-box{
    width: 100%;
    height: 70px;
    background: aquamarine;
  }
  .author-info .header-box img{
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
  .author-info .header-box .follow-btn{
    color: #f00;
    font-size: 16px;
    border: 1px solid #f00;
  }
  /*文章部分*/
  .article-content{
    -webkit-box-flex: 1;
    background: #fff;
  }
</style>

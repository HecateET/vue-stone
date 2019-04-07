<template>
    <section class="expo-stone-index">
      <div class="container">
        <p>博览奇石</p>
        <!--奇石资源，木桶布局-->
        <div class="ct">

        </div>

        <!--<vue-barrel :list="brands" class="main" ele="vue-barrel">-->
          <!--<div v-for="item in brands" :key="item.brand" class="vue-barrel">-->
            <!--{{item.brand}}-->
          <!--</div>-->
        <!--</vue-barrel>-->

      </div>
    </section>
</template>



<script>
    export default {
      name: "expoStoneIndex",
      components:{

      },
      data(){
        return{
          Height:$(window).height(),
          Width:$(window).width(),
        //   brands: [{
        //     "brand": "朋客"
        //   },
        //     {
        //       "brand": "三的"
        //     }],
          ct:$(".ct"),
          width:parseInt(window.getComputedStyle(ct, null).getPropertyValue("width")),
          rowHeight:150,
          imgArr:[],
        }
      },
      created() {
      },
      mounted() {
        this.init();
        $(".expo-stone-index").css("min-height",this.Height-$("#myHeader").height());
        // let contain = document.querySelector(".ct");
        // Barrel.Barrel(contain,100,100);
        setTimeout(function () {
          $(".img-box").css("float","left");
          $(".img-row::after").css({
            "content":"''",
            "display":"block",
            "clear":"both",
          });
        },2000);

      },
      methods:{
        init(){
          let contain = document.querySelector(".ct");
          this.barrel(contain,30,200);
        },
        barrel(ct,imgNum,height){
          this.ct = ct;
          this.width = parseInt(window.getComputedStyle(ct, null).getPropertyValue("width"));
          this.rowHeight = height; // 每行图片的高度
          this.imgArr = [];
          this.loadImg(imgNum);
        },
        loadImg(imgNum){
          let imgUrls = this.getImgUrls(imgNum);
          for (let i = 0; i < imgNum; i++) {
            let _this = this;
            let img = new Image();
            img.src = imgUrls[i];
            img.onload = function () {
              // Image 对象拥有 width & height 属性
              let ratio = this.width / this.height;
              let imgInfo = {
                target: this,
                ratio: ratio,
                height: _this.rowHeight,
                width: ratio * _this.rowHeight,
              };
              _this.render(imgInfo);
            }
          }
        },
        render(imgInfo){
          // 定义该行图片宽度
          let wholeWidth = 0;
          this.imgArr.push(imgInfo);
          for (let i = 0; i < this.imgArr.length; i++) {
            wholeWidth += this.imgArr[i].width;
          }
          if (wholeWidth > this.width) {
            // 若该行图片占满，弹出最后一张图片，并调整之前图片的大小
            let lastImg = this.imgArr.pop();
            wholeWidth -= lastImg.width;

            // 交由layout()方法来调整之前图片大小，并完成布局。调整成面积相等
            let newHeight = this.rowHeight * this.width / wholeWidth;
            this.layout(newHeight);
            // 开始另一行图片的渲染
            this.imgArr = [];
            this.imgArr.push(lastImg);
          }
        },
        layout(newHeight){
          let imgRow = document.createElement("div");
          imgRow.classList.add("img-row");
          this.imgArr.forEach(function (ele, idx) {
            let imgCt = document.createElement("div");
            imgCt.classList.add("img-box");
            let childImg = ele.target;
            childImg.style.height = newHeight + "px";
            imgCt.appendChild(childImg);
            imgRow.appendChild(imgCt);
          });
          this.ct.appendChild(imgRow);
        },
        getImgUrls(imgNum){
          // 生成一个可以取颜色值的数组: [1-9,A-F]
          let colorArr = [];
          for (let i = 0; i < 16; i++) {
            if (i < 10) {
              colorArr.push(i);
            } else {
              // charCode(65) == "A"
              colorArr.push(String.fromCharCode(65 + (i - 10)));
            }
          }
          let imgUrls = [];
          for (let j = 0; j < imgNum; j++) {
            // 随机生成图片宽高
            let imgWidth = Math.floor(Math.random() * 150 + 50);
            let imgHeight = Math.floor(Math.random() * 30 + 50);
            // 生成随机的背景颜色与文本颜色
            let bgColor = "",textColor = "";
            for (let k = 0; k < 6; k++) {
              bgColor += colorArr[Math.floor(Math.random() * 16)];
              textColor += colorArr[Math.floor(Math.random() * 16)];
            }
            let urls = "http://via.placeholder.com/" + imgWidth + "x" + imgHeight + "/" + bgColor + "/" +
              textColor;
            // let urls= "../../assets/images/myCenter/stone"+(j+1);
            imgUrls.push(urls);
          }
          return imgUrls;
        },
      },
    }
</script>

<style scoped>
  .expo-stone-index{
    /*width: 100%;*/
    background-color: #f5f6f7;
  }
  .expo-stone-index .container{
    background: #fff;
  }
  /*奇石布局容器*/
  .ct{
    margin: 0 auto;
    width: 100%;
    background: greenyellow;
  }
  .img-box{
    float: left;
  }
  .img-row::after{
    content:"";
    display: block;
    clear: both;
  }
</style>

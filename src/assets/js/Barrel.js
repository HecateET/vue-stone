class  Barrel{
  constructor(ct,imgNum,height){
   this.ct = ct;
   this.width = parseInt(window.getComputedStyle(ct,null).getPropertyValue("width"));
   this.rowHeight = height;
   this.imgArr = [];
   this.loadImg(imgNum);
  }
  /**
   * loadImg:加载图片，imgNum:总图片数量
   * render：渲染图片，计算可以容纳多少个img
   * layout:计算完毕后，对图片进行布局
   * */
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
  }
  render(imgInfo){
    let wholeWidth = 0;
    this.imgArr.push(imgInfo);
    for(let i=0; i<this.imgArr.length;i++){
      wholeWidth += this.imgArr[i].width;
    }
    if(wholeWidth>this.width){
    // 若改行图片占满，弹出最后一张图片，并调整之前图片的大小
      let lastImg = this.imgArr.pop();
      wholeWidth -= lastImg.width;

      //交友layout()方法来调整之前图片大小，并完成布局，调整面积相等
      let newHeight = this.rowHeight * this.width/wholeWidth;
      this.layout(newHeight);

      //开始零一行图片的渲染，并将上行多余的图片存入下一行
      this.imgArr = [];
      this.imgArr.push(lastImg);
    }
  }
  layout(newHeight){
    //创建行容器并且加上类 交由CSS渲染
    let imgRow = document.createElement("div");
    imgRow.classList.add("img-row");

    //遍历尚未清空的数组，改变图片宽度以适应整行宽度
    this.imgArr.forEach(function (ele,idx) {
      let imgCt = document.createElement("div");
      imgCt.classList.add("img-box");

      let childImg = ele.target;
      //改变高度之后，宽度自适应更改
      childImg.style.height = newHeight +"px";
      imgCt.appendChild(childImg);
      imgRow.appendChild(imgCt);
    });
    this.ct.appendChild(imgRow);
  }

  getImgUrls(imgNum){
    //生成一个可以去颜色的数组：【1-9，A-F】
    let colorArr=[];
    for(let i=0; i<16;i++){
      if(i<10){
        colorArr.push(i);
      }else{
        colorArr.push(String.fromCharCode(65+(i-10)));
      }
    }

  //  生成一个存放土拍你链接的数组，并返回该数组
    let imgUrls = [];
    for(let j=0;j<imgNum;j++){
    //  随机生成图片宽高
      let imgWidth = Math.floor(Math.random()*150+50),
          imgHeight = Math.floor(Math.random()*30+50);

    //  生成随机的背景颜色与文本颜色
      let bgColor ="",
          textColor = "";
      for (let k=0;k<6;k++){
        bgColor += colorArr[Math.floor(Math.random()*16)];
        textColor += colorArr[Math.floor(Math.random()*16)];
      }

      let urls = "http://via.placeholder.com/" + imgWidth + "x" + imgHeight + "/" + bgColor + "/" +
        textColor;
      imgUrls.push(urls);
    }
    return imgUrls;
  }
}
module.exports = new Barrel();


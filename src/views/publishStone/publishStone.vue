<template>
  <section class="publish-stone">
    <div class="form-box">
      <form class="form-horizontal">
        <div class="form-group">
          <label for="stone-title" class="stone-title col-sm-2 control-label">奇石标题</label>
          <div class="col-sm-8">
            <input type="text" class="form-control" id="stone-title" placeholder="请输入奇石头标题">
          </div>
        </div>
        <!--<div class="form-group">-->
          <!--<label for="publish-time" class="publish-time col-sm-2 control-label">发布时间</label>-->
          <!--<div class="col-sm-4">-->
            <!--<input type="date" class="form-control" id="publish-time">-->
          <!--</div>-->
          <!--<div class="col-sm-4">-->
            <!--<input type="time" class="form-control">-->
          <!--</div>-->
        <!--</div>-->

        <div class="form-group">
          <label for="select" class="stone-type col-sm-2 control-label">奇石种类</label>
          <div class="col-sm-4">
            <select id="select" class="form-control" >
              <option>寿山石</option>
              <option>九龙壁</option>
            </select>
          </div>
        </div>
      </form>
    </div>
    <!--富文本编辑器-->
    <div ref="editor" class="editor"></div>

    <div class="btn-content">
      <button class="btn btn-info publish-btn">发布</button>
      <button class="btn btn-danger cancel-btn">取消</button>
    </div>
  </section>
</template>

<script>
  import E from 'wangeditor';
    export default {
      name: "publishStone",
      components:{

      },
      data(){
        return{
          Height:$(window).height(),
          Width:$(window).width(),
          editorContent:'',
        }
      },
      created() {
      },
      mounted() {
        $(".publish-stone").css("min-height",this.Height-$("#myHeader").height());
        this.createEdioter();
      },
      methods:{
        createEdioter(){
          var editor = new E(this.$refs.editor);
          editor.customConfig.onchange = (html)=>{
            this.editorContent = html;
          };
          editor.customConfig.colors = [
            '#000000',
            '#eeece0',
            '#1c487f',
            '#4d80bf',
            '#c24f4a',
            '#8baa4a',
            '#7b5ba1',
            '#46acc8',
            '#f9963b',
            '#ffffff',
            '#DB70DB',
            '#cc1d18'
          ];
          // 表情面板可以有多个 tab ，因此要配置成一个数组。数组每个元素代表一个 tab 的配置
          editor.customConfig.menus = [
            'head',  // 标题
            'bold',  // 粗体
            'fontSize',  // 字号
            'fontName',  // 字体
            'italic',  // 斜体
            'underline',  // 下划线
            'strikeThrough',  // 删除线
            'foreColor',  // 文字颜色
            'backColor',  // 背景颜色
            'link',  // 插入链接
            'list',  // 列表
            'justify',  // 对齐方式
            'quote',  // 引用
            'emoticon',  // 表情
            'table',  // 表格
            'undo',  // 撤销
            'redo'  // 重复
          ];
          //配置服务器端地址
          //editor.customConfig.uploadImgServer = 'http://localhost:3000/activityEdit';
          editor.create();
        },
      },
    }
</script>

<style scoped>
  .publish-stone{
    font-family: Arial;
    width: 100%;
    background-color: whitesmoke;
  }
  .form-box{
    width: 90%;
    padding: 10px;
  }
  .editor{
    margin: 10px 0;
    width: 100%;
    text-align:left;
    background-color: #fff;
  }
  .stone-title,.publish-time,.stone-type{
    font-size: 16px;
    font-weight: bold;
    color: #333;
  }

</style>

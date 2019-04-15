<template>
    <section class="my-info">
      <div class="base-info">
        <form class="form-horizontal">
          <div class="form-group">
            <label for="nick-name" class="stone-title col-sm-3 control-label">昵称：</label>
            <div class="col-sm-8">
              <input type="text" class="form-control" id="nick-name" v-model="userInfo.userNickName" placeholder="昵称">
            </div>
          </div>
          <div class="form-group">
            <label for="motto" class="stone-title col-sm-3 control-label">个性签名：</label>
            <div class="col-sm-8">
              <input type="text" class="form-control" id="motto" v-model="userInfo.userMotto" placeholder="昵称">
            </div>
          </div>
          <div class="form-group">
            <label class="stone-title col-sm-3 control-label">性别：</label>

            <div class="col-sm-8 radio">
              <label>
                <input type="radio" name="optionsRadios" id="sex-woman" value="option1" checked> 女
              </label>
              <label>
                <input type="radio" name="optionsRadios" id="sex-man" value="option1"> 男
              </label>
            </div>
          </div>
          <div class="form-group">
            <label for="email" class="stone-title col-sm-3 control-label">email：</label>
            <div class="col-sm-8">
              <input type="email" class="form-control" id="email" v-model="userInfo.userEmail" placeholder="请输入邮箱号">
            </div>
          </div>
          <div class="form-group">
            <label class="stone-title col-sm-3 control-label">所在地：</label>
            <div class="col-sm-8">
              <input type="text" class="form-control" v-model="userInfo.born" placeholder="请输入所在地">
            </div>
          </div>
          <div class="form-group">
            <label for="old-password" class="stone-title col-sm-3 control-label">旧密码：</label>
            <div class="col-sm-8">
              <input type="password" class="form-control" id="old-password" v-model="userInfo.password" placeholder="请输入原密码">
            </div>
          </div>
          <div class="form-group">
            <label for="new-password" class="stone-title col-sm-3 control-label">新密码：</label>
            <div class="col-sm-8">
              <input type="password" class="form-control" id="new-password" v-model="newPassword" placeholder="请输入新密码">
            </div>
          </div>

          <div class="btn-content">
            <button class="btn btn-info publish-btn">保存</button>
            <button class="btn btn-danger cancel-btn">取消</button>
          </div>
        </form>
      </div>
      <div class="my-picture">
        <p>头像设置</p>
        <img class="head-pic" :src="userInfo.userHeadPic">
        <div class="head-content">
          <p class="edit"><span class="glyphicon glyphicon-pencil"></span>设置</p>
        </div>
      </div>
    </section>
</template>

<script>
    export default {
      name: "personInfo",
      data(){
        return{
          userInfo:{
            nickName:"Hecate",
            email:"1060526453@qq.com",
            motto:"Good Study Day Day Up",
            headPic:require("../../assets/images/myCenter/headpic.jpg"),
            password:"",
            province:"福建省",
            city:"龙岩市",
          },
          newPassword:"",
        }
      },
      created(){
        this.getUsersInfo(1);
      },
      methods:{
        getUsersInfo(userId){
          $.ajax({
            url:`${this.$store.state.baseURL}/users/${userId}`,
            methods:'get',
          }).then((res)=>{
            this.userInfo = res.data.userinfo[0];
            this.userInfo.userHeadPic = this.getImageUrl(this.userInfo.userHeadPic);
          })
        },
        getImageUrl(oUrl){
          return `${this.$store.state.baseURL}${oUrl}`;
        },
      },

    }
</script>

<style scoped>
  .my-info{
    font-family: Arial;
    display: -webkit-box;
    font-size: 16px;
    background-color: #fff;
    padding: 20px 10px;
  }
  .base-info{
    -webkit-box-flex: 1;
  }
  .my-picture{
    position: relative;
    width: 200px;
    margin: 10px;
  }
  .my-picture p{
    font-size: 16px;
    color: #333;
    font-weight: bold;
    padding-bottom: 5px;
  }
  .my-picture .head-pic{
    width: 200px;
    height: 200px;
    border: 1px #ccc solid;
    border-radius: 5px;
  }
  .my-picture .head-content{
    position: absolute;
    top: 11%;
    width: 200px;
    height: 200px;
    /*background: indianred;*/
    /*opacity: 0.7;*/
  }
  .head-content .edit{
    position: absolute;
    bottom: 0;
    width: 100%;
    font-size: 18px;
    color: #f6fff1;
    padding: 5px;
    background:rgba(0,0,0,0.3);
  }
  .head-content .edit span{
    padding: 0 8px;
    font-size: 16px;
    color: #f6fff1;
  }
  .btn-content{
    margin: 20px 10px;
  }
  .btn-content button{
    width: 100px;
    margin: 0 10px;
    font-size: 16px;
  }

</style>

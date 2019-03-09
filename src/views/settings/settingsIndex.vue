<template>
    <section class="settings-index">
      <p>用户设置信息页</p>
    </section>
</template>

<script>
    export default {
      name: "settingsIndex",
      components:{

      },
      data(){
        return{
          Height:$(window).height(),
          Width:$(window).width(),
        }
      },
      created() {
      },
      mounted() {
        $(".settings-index").css("min-height",this.Height-$("#myHeader").height());
      },
      methods:{

      },
    }
</script>

<style scoped>
  .settings-index{
    width: 100%;
    background-color: aqua;
  }
</style>

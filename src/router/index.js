import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index/index'
import expoStoneIndex from '@/views/expoStone/expoStoneIndex'
import circleStoneIndex from '@/views/circleStone/circleStoneIndex'
import stoneCultureIndex from '@/views/stoneCulture/stoneCultureIndex'
import login from '@/views/login/login'
import register from '@/views/register/register'
import myCenter from '@/views/myCenter/myCenterIndex'
import personInfo from '@/views/myCenter/personInfo'
import myPort from '@/views/myCenter/myPort'
import myCollection from '@/views/myCenter/myCollection'
import myFans from '@/views/myCenter/myFans'
import myFollow from '@/views/myCenter/myFollow'




import settings from '@/views/settings/settingsIndex'
import publishStone from '@/views/publishStone/publishStone'
import stoneAssessment from '@/views/stoneAssessment/stoneAssessmentIndex'

Vue.use(Router)

export default new Router({
  routes: [
    { //首页
      path: '/',
      name: 'index',
      component: index
    },
    { //博览奇石
      path: '/expoStone',
      name: 'expoStoneIndex',
      component: expoStoneIndex
    },
    { //奇石圈
      path: '/circleStone',
      name: 'circleStoneIndex',
      component: circleStoneIndex
    },
    { //奇石文化
      path: '/stoneCulture',
      name: 'stoneCultureIndex',
      component: stoneCultureIndex
    },
    { //登录
      path: '/login',
      name: 'login',
      component: login
    },
    { //注册
      path: '/register',
      name: 'register',
      component: register
    },
    { //个人中心
      path: '/myCenter',
      name: 'myCenter',
      component: myCenter,
      redirect:"/myCenter/personInfo",
      children:[
        {
          path:"personInfo",
          name:"personInfo",
          component:personInfo,
        },
        {
          path:"myCollection",
          name:"myCollection",
          component:myCollection,
        },
        {
          path:"myPort",
          name:"myPort",
          component:myPort,
        },
        {
          path:"myFans",
          name:"myFans",
          component:myFans,
        },
        {
          path:"myFollow",
          name:"myFollow",
          component:myFollow,
        },
      ],
    },
    { //设置页面
      path: '/settings',
      name: 'settings',
      component: settings
    },
    { //发布奇石
      path: '/publishStone',
      name: 'publishStone',
      component: publishStone
    },
    { //奇石评估
      path: '/stoneAssessment',
      name: 'stoneAssessment',
      component: stoneAssessment
    },
  ]
})

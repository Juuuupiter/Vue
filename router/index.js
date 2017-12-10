import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CommonFooter from '@/components/Common/CommonFooter'
import Found from '@/components/Found/found'
import FoundNav from '@/components/Found/FoundNav'
import MyMusic from '@/components/Mymusic/mymusic'
import MusicNav from '@/components/Mymusic/MusicNav'
import MusicList from '@/components/Mymusic/musiclist'
import Tuijian from '@/components/Mymusic/tuijian'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/music/found'
    },{
      path:'/music/found',
      component: Found,
    },{
      path:'/music/mymusic',
      component:MyMusic,
      // redirect:'/music/mymusic',
      },{
        path:'/music/mymusic/list1',
        component:MusicList
      }
  ]
})

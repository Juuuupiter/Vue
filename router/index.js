import Vue from 'vue'
import Router from 'vue-router' 
import VueAwesomeSwiper from 'vue-awesome-swiper'
import HelloWorld from '@/components/HelloWorld'
import CommonFooter from '@/components/Common/CommonFooter'
import Found from '@/components/Found/found'
import FoundNav from '@/components/Found/FoundNav'
import MyMusic from '@/components/Mymusic/mymusic'
import MusicNav from '@/components/Mymusic/MusicNav'
import MusicList from '@/components/Mymusic/musiclist'
import Tuijian from '@/components/Mymusic/tuijian'
import Listen from  '@/components/Listening/listen'
import dynamic from  '@/components/Dynamic/dynamic'
import All from '@/components/Dynamic/all'
import User from '@/components/User/user'
import Login from '@/components/User/login'
// import Index from '@/components/User/index'
Vue.use(Router)
Vue.use(VueAwesomeSwiper, /* { default global options } */)

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
      component:MyMusic
      },{
        path:'/music/mymusic/list1',
        component:MusicList
      },{
        path:'/music/listen',
        component:Listen
      },{
        path:'/music/dynamic',
        component:dynamic,
        redirect:'/music/dynamic/all',
        children:[
          {path:'/music/dynamic/all',component:All}
        ]
      },{
        path:'/music/user',
        component:User
      },{
        path:'/music/login',
        component:Login
      }
  ]
})

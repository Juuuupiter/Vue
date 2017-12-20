<template>
   <div class="all">
       <div class="talk">
           <div class="to-talk">
               <p>推荐话题</p>
               <p>看全部164条></p>
           </div>
            <swiper :options="swiperOption">
        <swiper-slide> 
          <div class="swiper-list">
          <img src="http://pic.xiami.net/images/album/img75/2075/21029686771512575947.jpg@1e_1c_100Q_185w_185h">
          <p>没什么大不了</p>
          <span>123条动态</span>
          </div>
          </swiper-slide>
               <swiper-slide> 
          <div class="swiper-list">
          <img src="http://pic.xiami.net/images/album/img64/444764/4447641512444764.jpg@1e_1c_100Q_185w_185h">
          <p>听首歌让自己乐一下</p>
          <span>121条动态</span>
          </div>
          </swiper-slide>        <swiper-slide> 
          <div class="swiper-list">
         <img src="http://pic.xiami.net/images/appv5/common/20837/5a2d5705aaa65_XWOt_1512920837.jpg@1e_1c_100Q_185w_185h">
          <p>今年冬天最期待？</p>
          <span>565条动态</span>
          </div>
          </swiper-slide>        <swiper-slide> 
          <div class="swiper-list">
          <img src="http://pic.xiami.net/images/appv5/common/15007/5922fc2f5f193_BnTL_1495465007.jpg@1e_1c_100Q_185w_185h">
          <p>充电能量的鸡血歌单</p>
          <span>152条动态</span>
          </div>
          </swiper-slide>        <swiper-slide> 
          <div class="swiper-list">
          <img src="http://pic.xiami.net/images/album/img95/44/5a2a2f35446ec_2216495_1512714037.jpg@1e_1c_100Q_185w_185h">
          <p>哪首歌听起来很好吃</p>
          <span>783条动态</span>
          </div>
          </swiper-slide>
                  <swiper-slide> 
          <div class="swiper-list">
          <img class="cdCover185" src="http://pic.xiami.net/images/album/img10/3110/3059791379063569.jpg@4e_1c_100Q_185w_185h" rel="v:photo" alt="后青春期的诗">
          <p>ddddddddddddddddddddddd</p>
          <span>456条动态</span>
          </div>
          </swiper-slide>
                 
           <!-- <div class="swiper-pagination" slot="pagination"></div> -->
      </swiper>
       </div>
       <div class="find-friend">
           <div class="recommend" v-for="n in 3">
               <div class="user">
                   <img src="../../../static/img/1.jpg" alt="">
                   <div class="user-talk">
                       <p>我是你的小太阳</p>
                       <p>最近 热门评论</p>
                   </div>
                   <div class="user-talk">
                       <i class="fa fa-user-circle-o" aria-hidden="true"></i>
                       <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
                   </div>
               </div>
            <p>&nbsp&nbsp当你哪天想起我的好的时候，或许我已经没那么喜欢你了。</p>
            <div class="user-music">
                <div class="music-intro">
                <p>单曲<br>
                   学不会<br>
                   林俊杰<br>
                </p>
                </div>
                <img src="http://pic.xiami.net/images/album/img97/266097/2660971513266098.jpg@1e_1c_100Q_100w_100h" alt="">
            </div>
                <p style="width:50%,float:left">hdskfjh,love… 等12人都赞过</p>
                <div class="zan">
                    <ul class="zan-list">
                        <li><i class="fa fa-thumbs-up" aria-hidden="true"></i>点赞</li>
                        <li><i class="fa fa-commenting-o" aria-hidden="true"></i>评论</li>
                        <li><i class="fa fa-share" aria-hidden="true"></i>分享</li>
                   </ul>
                </div>
                <div class="user-talks">
                    <p>aaaaaa:smile</p>
                    <p>aaaaaa:smile</p>
                    <p>更多评论</p>
                </div>
           </div>
       </div>
   </div>
   
</template>

<script>
import {swiper, swiperSlide } from 'vue-awesome-swiper'
import "../../assets/css/swiper.css"
export default {
  data () {
    return {
          swiperOption: {
          slidesPerView: 2.3,
          // spaceBetween: 30,
          freeMode: true,
          pagination: {
          el: '.swiper-pagination',
          clickable: true
          }
        }
    }
  },
       
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style scoped>
   .talk{
       width: 100%;
       height: 3rem;
       background:whitesmoke;
   }  
   .talk img{
       width: 2.8rem;
       height: 1.5rem;
   }
   .to-talk{
       width: 100%;
       height: 0.7rem;
       line-height: 0.7rem;
   }
   .to-talk p{
       font-weight: bolder;
       float: left;
       /* margin-left: 0.1rem; */
       width: 50%;
   }
   .to-talk p:last-child,span{
        font-weight:lighter;
        font-size: 0.18rem;
        text-align: right
        /* float: right;/ */
   }
   .recommend{
       margin-top: 0.1rem;
       width: 100%;
       height: 4.8rem;
       background: whitesmoke;
   }
   .user{
      width: 100%;
      height: 1rem;
      /* background: darkcyan */
   }
   .user img{
       margin-top: 0.1rem;
       height: 50px;
       width: 50px;
       border-radius: 50%;
       float: left;
   }
   .user-talk{
       margin-left: 0.2rem;
       float: left;
       margin-top: 0.1rem;
   }
   .user-talk:last-child{
       float: right;
   }
   .user-talk i{
       font-size: 0.45rem;
       margin-top: 0.2rem;
       margin-left: 0.5rem;
   }
   .user-music{
      width: 100%;
      height: 1.2rem;
      background:url("http://pic.xiami.net/images/album/img97/266097/2660971513266098.jpg@1e_1c_100Q_100w_100h") no-repeat; 
      background-size: cover;
      opacity: 0.7;
   }
   .user-music p{
       width: 50%;
   }
   .user-music img{
       margin-left: 1.5rem;
       height: 77px;
   }
   .music-intro{
       width: 50%;
       float: left;
   }
   .zan-list li{
       height: 0.6rem;
       line-height: 0.6rem;
       width: 33.33%;
       float: left;
       text-align: center;
       border-bottom: 1px solid grey;
       border-top: 1px solid grey;
   }
   .user-talks p{
    font-size: 0.23rem;
    line-height: 0.3rem;
   }
</style>
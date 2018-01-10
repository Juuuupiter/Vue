<template>
  <div class="found">
      <div id="header">
          <div class="search">
              <input type="text" placeholder="你不是真正的快乐">
              <i class="fa fa-bell" aria-hidden="true"></i>
          </div>
      </div>
      <swipe class="my-swipe">
        <swipe-item class="slide1"></swipe-item>
        <swipe-item class="slide2"></swipe-item>
        <swipe-item class="slide3"></swipe-item>
        <swipe-item class="slide4"></swipe-item>
        <swipe-item class="slide5"></swipe-item>
      </swipe>
      <router-view></router-view>
      <found-nav></found-nav>
      <div class="more-music">
        <div class="square">
          <img src="http://pic.xiami.net/images/album/img33/1718627433/21002923601466497235.jpg@1e_1c_100Q_100w_100h">
          <img src="http://pic.xiami.net/images/album/img54/1654/17127509771472753573.jpg@1e_1c_100Q_100w_100h">
          <img src="http://pic.xiami.net/images/album/img89/88/59c1f16eba5c4_4439089_1505882478.jpg@1e_1c_100Q_100w_100h">
          <img src="http://pic.xiami.net/images/album/img41/102841/18696425331459314419.jpg@1e_1c_100Q_100w_100h">
          <!-- <i class="fa fa-play-circle-o" aria-hidden="true"></i> -->
        </div>
        <div class="square">
          <img src="http://pic.xiami.net/images/album/img41/430815841/370431512037044.jpg@1e_1c_100Q_185w_185h">
        </div>
        <div class="square">
          <img src="http://pic.xiami.net/images/album/img50/2450/21029662671512486228.jpg@1e_1c_100Q_185w_185h">
        </div>
      </div>
      <div class="must-listen">
        <span>必听·歌单推荐</span>
        <p>></p>
      </div>
    <!-- <md-card-media> -->
      <!-- swiper -->
      <swiper :options="swiperOption">
        <swiper-slide> 
          <div class="swiper-list">
          <img src="http://pic.xiami.net/images/album/img75/2075/21029686771512575947.jpg@1e_1c_100Q_185w_185h">
          <p>ddddddddddddddddddddddd</p>
          <img src="http://pic.xiami.net/images/collect/643/43/279498643_58fb51757f5d3_jqmv_1492865397.jpg@1e_1c_100Q_185w_185h">
          <p>ddddddddddddddddddddddd</p>
          </div>
          </swiper-slide>
               <swiper-slide> 
          <div class="swiper-list">
          <img src="http://pic.xiami.net/images/album/img64/444764/4447641512444764.jpg@1e_1c_100Q_185w_185h">
          <p>ddddddddddddddddddddddd</p>
          <img src="http://pic.xiami.net/images/album/img49/295449/27995271508295449.jpg@1e_1c_100Q_185w_185h">
          <p>ddddddddddddddddddddddd</p>
          </div>
          </swiper-slide>        <swiper-slide> 
          <div class="swiper-list">
          <img src="http://pic.xiami.net/images/album/img18/35/5a2a362a5e470_1777318_1512715818.jpg@1e_1c_100Q_185w_185h">
          <p>ddddddddddddddddddddddd</p>
         <img src="http://pic.xiami.net/images/appv5/common/20837/5a2d5705aaa65_XWOt_1512920837.jpg@1e_1c_100Q_185w_185h">
          <p>ddddddddddddddddddddddd</p>
          </div>
          </swiper-slide>        <swiper-slide> 
          <div class="swiper-list">
          <img src="http://pic.xiami.net/images/appv5/common/15007/5922fc2f5f193_BnTL_1495465007.jpg@1e_1c_100Q_185w_185h">
          <p>ddddddddddddddddddddddd</p>
          <img src="http://pic.xiami.net/images/collect/83/83/360144083_1512546141_3qrs.jpg@1e_1c_100Q_185w_185h">
          <p>ddddddddddddddddddddddd</p>
          </div>
          </swiper-slide>        <swiper-slide> 
          <div class="swiper-list">
          <img src="http://pic.xiami.net/images/collect/263/63/8504263_1322020093.jpg@1e_1c_100Q_185w_185h">
          <p>ddddddddddddddddddddddd</p>
          <img src="http://pic.xiami.net/images/album/img95/44/5a2a2f35446ec_2216495_1512714037.jpg@1e_1c_100Q_185w_185h">
          <p>ddddddddddddddddddddddd</p>
          </div>
          </swiper-slide>
                  <swiper-slide> 
          <div class="swiper-list">
          <img class="cdCover185" src="http://pic.xiami.net/images/album/img10/3110/3059791379063569.jpg@4e_1c_100Q_185w_185h" rel="v:photo" alt="后青春期的诗">
          <p>ddddddddddddddddddddddd</p>
          <img src="http://pic.xiami.net/images/collect/643/43/279498643_58fb51757f5d3_jqmv_1492865397.jpg@1e_1c_100Q_185w_185h">
          <p>ddddddddddddddddddddddd</p>
          </div>
          </swiper-slide>
                  <swiper-slide> 
          <div class="swiper-list">
          <img src="http://pic.xiami.net/images/album/img75/2075/21029686771512575947.jpg@1e_1c_100Q_185w_185h">
          <p>ddddddddddddddddddddddd</p>
          <img src="http://pic.xiami.net/images/collect/643/43/279498643_58fb51757f5d3_jqmv_1492865397.jpg@1e_1c_100Q_185w_185h">
          <p>ddddddddddddddddddddddd</p>
          </div>
          </swiper-slide>
                  <swiper-slide> 
          <div class="swiper-list">
          <img src="http://pic.xiami.net/images/album/img75/2075/21029686771512575947.jpg@1e_1c_100Q_185w_185h">
          <p>ddddddddddddddddddddddd</p>
          <img src="http://pic.xiami.net/images/collect/643/43/279498643_58fb51757f5d3_jqmv_1492865397.jpg@1e_1c_100Q_185w_185h">
          <p>ddddddddddddddddddddddd</p>
          </div>
          </swiper-slide>
                  <swiper-slide> 
          <div class="swiper-list">
          <img src="http://pic.xiami.net/images/album/img75/2075/21029686771512575947.jpg@1e_1c_100Q_185w_185h">
          <p>ddddddddddddddddddddddd</p>
          <img src="http://pic.xiami.net/images/collect/643/43/279498643_58fb51757f5d3_jqmv_1492865397.jpg@1e_1c_100Q_185w_185h">
          <p>ddddddddddddddddddddddd</p>
          </div>
          </swiper-slide>
           <!-- <div class="swiper-pagination" slot="pagination"></div> -->
      </swiper>
    <!-- </md-card-media> -->
    <div class="advertise">
      <span>广告</span>
      <p class="adv">我真的很棒呀<i class="fa fa-heart-o" aria-hidden="true"></i></p>
    </div>
      <common-footer></common-footer>
  </div>


</template>

<script>
import CommonFooter from "../Common/CommonFooter"
import FoundNav from "./FoundNav"
import {Swipe,SwipeItem} from "vue-swipe"
import {swiper, swiperSlide } from 'vue-awesome-swiper'
import Axios from 'axios'
import "../../assets/css/vue-swipe.css";
import "../../assets/css/swiper.css";
// import Swiper from 'swiper'
// Swiper.use({
//   name: 'pluginName',
//   params: {
//     pluginSwitch: false,
//   },
//   on: {
//     init() {
//       if (!this.params.pluginSwitch) return
//       console.log('init')
//     },
//     // swiper callback...
//   }
// })
export default {
  data () {
    return {
          swiperOption: {
          slidesPerView: 3.1,
          // spaceBetween: 30,
          freeMode: true,
          pagination: {
          el: '.swiper-pagination',
          clickable: true
          }
        }
    }
  },
  mounted(){
      window.onscroll=function(){
      let scrollTop= document.documentElement.scrollTop;
      console.log(scrollTop);
         if(scrollTop>=161) {
            let header = document.getElementById('header');
            header.style.position='absolute';
         }
       }
  },
  components: {
    CommonFooter,
    FoundNav,
    Swipe,
    SwipeItem,
    swiper,
    swiperSlide
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    #header{
      width: 100%;
      height: 0.8rem;
      background:whitesmoke;
      position: fixed;
      top: 0;
      z-index: 2;
    }  
    .search{
        width: 90%;
        height: 0.6rem;
        margin: 0.1rem auto;
        z-index: 5;
        
    }
    .search input{
        width: 90%;
        border-radius: 50px;
        border: none;
        height: 0.4rem;
        margin: 0.1rem auto;
        background-color: lightgrey;
        outline: none;
          } 
    .search i{
        font-size: 0.3rem;
        float: right;
        margin: 0.12rem auto;
    } 
    .my-swipe {
    width: 100%;
    height    : 2.5rem;
    color     : #fff;
    font-size : 30px;
    text-align: center;
    margin-top: 0.8rem;
    z-index: 1;
    }

    .slide1 {
    background:url('http://pic.xiami.net/images/common/uploadpic/47/1512306564347.jpg');
    color     : #fff;
    }

    .slide2 {
    background:url("http://pic.xiami.net/images/common/uploadpic/13/1512451882013.jpg");
    color     : #000;
    }

    .slide3 {
    background: url("http://pic.xiami.net/images/common/uploadpic/18/1512382266018.jpg");
    color     : #fff;
    }
    .slide4 {
    background:url("http://pic.xiami.net/images/common/uploadpic/71/1512483619971.jpg");
    color     : #fff;
    }
    .slide5 {
    background: url("http://pic.xiami.net/images/common/uploadpic/15/1512377761315.jpg");
    color     : #fff;
    }
    .nav{
      height: 1.4rem;
      background: blue;
      width: 100%;
    }
    .more-music{
      height: 2.3rem;
      width: 100%;
      /* background: lightcoral; */
      margin-top:1.2rem;
    }
    .square{
      height: 2.1rem;
      width: 33%;
      background: darkblue;
      float: left;
      margin-top: 0.1rem;
    }
    .square:nth-child(2){
      margin-left: 0.04rem
    }
    .square:last-child{
      float: right;
    }
    .square:first-child img{
    float: left;
    width: 50%;
    height: 50%;
    background-color: #CCC;
    }
    .square i{
    color: silver;
    font-size: 0.8rem;
    position: relative;
    z-index: 3;
    left: 0.7rem;
    top: -1.5rem;
    width: 48px;
    height: 48px;
    }
    .letter{
      z-index: 3;
      position: relative;
    }
    .must-listen{
      height: 1rem;
      width: 100%;
    }
   .must-listen span {
     line-height: 1rem;
     font-weight: bolder;
     width: 95%;
     float: left;
   }
    .must-listen p {
     line-height: 1rem;
     font-weight: bolder;
     width: 5%;
     float: left;
   }
   .swiper-list p{
    word-break: break-all;
    line-height: 0.3rem;
    height: 0.8rem;
   }
   .advertise{
     height: 2rem;
     width: 100%;
     background: pink;
     margin-bottom: 0.8rem;
   }
   .adv{
     text-align: center;
     font-size: 0.5rem;
   }
</style>

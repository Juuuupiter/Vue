<template>
  <div class="found">
      <div class="header">
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
          <i class="fa fa-play-circle-o" aria-hidden="true"></i>
        </div>
        <div class="square">
          <img src="http://pic.xiami.net/images/album/img41/430815841/370431512037044.jpg@1e_1c_100Q_185w_185h">
        </div>
        <div class="square">
          <img src="http://pic.xiami.net/images/album/img50/2450/21029662671512486228.jpg@1e_1c_100Q_185w_185h">
        </div>
      </div>
      <common-footer></common-footer>
  </div>
</template>

<script>
import CommonFooter from "../Common/CommonFooter"
import FoundNav from "./FoundNav"
import {Swipe,SwipeItem} from "vue-swipe"
import Axios from 'axios'
import "../../assets/css/vue-swipe.css";

export default {
  data () {
    return {
            // movieList:[],
            // isShow   : false
    }
  },
       
  components: {
    CommonFooter,
    FoundNav,
    Swipe,
    SwipeItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .header{
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

</style>

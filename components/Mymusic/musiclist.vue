<template>
  <div class="list">
    <div class="back-to-list">
      <div class="back">
        <p><</p>
        <p>歌单</p>
      </div>
      <div class="radio">
          <img src="http://pic.xiami.net/images/collect/273/73/360194273_1512626398_sW1s.jpg@!c-185-185" width="185" height="185" alt="一切的梦想都终将实现">
          <div class="radio-intro">
            <p>我是一个戏子在别人的故事里流泪<br>#流行#伤感</p>
          </div>
          <div class="radio-nav">
            <ul>
              <li></li>
              <li><i class="fa fa-heart-o" aria-hidden="true"></i>4378</li>
              <li></li>
              <li></li>
            </ul>
          </div>
      </div>
      
    </div>
    <div class="list">
    <Tuijian v-for="(obj,index) in shu" :key="index" :shuxing="index"></Tuijian>
    </div>
       <router-view></router-view>
      <common-footer></common-footer>
  </div>
</template>

<script>
import CommonFooter from "../Common/CommonFooter"
import Tuijian from "../Mymusic/tuijian"
import Axios from 'axios'

export default {
   data(){
           return {
             shu:[]
           }
    },
  mounted(){
       Axios.get(API_PROXY + "http://tingapi.ting.baidu.com/v1/restserver/ting?format=json&method=baidu.ting.billboard.billList&type=1&size=10&offset=0")
       .then((res)=>{
               this.shu=res.data.song_list;
       })
   },  
  components: {
    Tuijian,
    CommonFooter
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.back-to-list{
  width: 100%;
  height: 3.7rem;
  background:pink;
}
.back{
  height: 0.8rem;
}
.back p{
  font-size: 0.3rem;
}
.back p:first-child{
  width: 5%;
  float: left;
}
.back p:last-child{
  float: left;
  width: 95%;
  text-align: center;
}
.radio img{
  width: 2rem;
  height: 2rem;
  float: left;
}
.radio-intro{
  float: left;
  margin-left: 0.3rem;
}
</style>

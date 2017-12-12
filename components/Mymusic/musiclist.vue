<template>
  <div class="list">
    <div class="back-to-list">
      <div class="back">
        <p><</p>
        <p>歌单</p>
      </div>
    </div>
    <Tuijian v-for="(obj,index) in shu" :key="index" :shuxing="index"></Tuijian>
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
  height: 3rem;
  background: darkblue;
  
}
.back{
  height: 0.8rem;
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
  
  

</style>

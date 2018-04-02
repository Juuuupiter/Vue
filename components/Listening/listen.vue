<template>
  <div class="listening">
    <a-player :music="musicList" v-if="isShow"></a-player>
    <common-footer></common-footer>
  </div>
</template>
<script>
import CommonFooter from "../Common/CommonFooter"
import Axios from 'axios'
import APlayer from 'vue-aplayer' 
export default {
     data(){
       return{
         musicData:[],
         musicList:[],
         isShow : false
       }
     },
     mounted(){
        Axios.get('/static/music-data.json')
        .then(res=>{
          
          this.musicData = res.data.musicData;
          for(var i=0; i<this.musicData.length;i++){
                  var obj   = new Object();
                  obj.title = this.musicData[i].title;
                  obj.artist= this.musicData[i].author;
                  obj.src   = this.musicData[i].src;
                  obj.pic   = this.musicData[i].musicImgSrc;
                  obj.lrc   = this.musicData[i].lrc;
                  this.musicList = obj;  
          }
         
          this.isShow = true; 
        });
     },
     components: {
        APlayer,
        CommonFooter
       }
}
</script>
<style>
    
</style>

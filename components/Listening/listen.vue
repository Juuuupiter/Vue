<template>
  <div class="listening">
    <a-player autoplay  :music="D" v-if="isShow" :showLrc="true" :mutex="true" />
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
         D:{},
         isShow : false
       }
     },
     mounted(){
        Axios.get('/static/music-data.json')
        .then(res=>{
          this.musicData = res.data.musicData;
          for(var i=0; i<this.musicData.length;i++){
                  var obj = new Object();
                  obj.title = this.musicData[i].title;
                  obj.artist= this.musicData[i].author;
                  obj.src   = this.musicData[i].src;
                  obj.pic   = this.musicData[i].musicImgSrc;
                  obj.lrc   = "/static/"+this.musicData[i].lrc;

                  // var music = new Object();
                  // music[i]= obj;
                  // var musicList = {}; 
                  // // this.musicList.push(music[i]);
                  
                  // // musicList = musicList + music[i];
                  // // musicList.filed[i]=
                  // // console.log(music)
                  
                  // musicList.filed[i] = music[i]
                  this.musicList.push(obj)
                  var D = Object.assign(this.musicList)
                  // var json = JSON.stringify(this.musicList);  
                  // var jsonObj =  JSON.parse(json);
                  // var jsonObj = String.parseJSON(json);
                  // alert(json);  
      
                  // var jsonElem = document.getElementById("json");  
                  // jsonElem.innerHTML = json; 
          }
          // this.musicObj = D
          // console.log(D)
          // console.log(typeof(D))
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

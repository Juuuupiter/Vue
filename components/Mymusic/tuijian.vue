<template>
  <div class="list">
    <div class="music-intro">
      <div class="intro">
        <img :src="src" alt="">
        <div class="singer">
          <span>{{title}}</span>
          <p>{{singer}}</p>
          <p>专辑：{{album}}</p>
        </div>
      </div>
    </div>
       <router-view></router-view>
  </div>
</template>

<script>
import Axios from 'axios'

export default {
    props:['shuxing'],
    data(){
           return {
             src:"",
             shu:[],
             title:"",
             singer:"",
             album:"",
           }
    },
    mounted(){
       Axios.get(API_PROXY + "http://tingapi.ting.baidu.com/v1/restserver/ting?format=json&method=baidu.ting.billboard.billList&type=1&size=10&offset=0")
       .then((res)=>{
              //  console.log(res.data.song_list);
               this.shu=res.data.song_list;
               this.src=res.data.song_list[this.shuxing].pic_small; 
               this.title=res.data.song_list[this.shuxing].title;
               this.singer=res.data.song_list[this.shuxing].artist_name;
               this.album=res.data.song_list[this.shuxing].album_title;
       })
   },  
  components: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.intro{
  width: 100%;
  /* height: 5rem; */
  background: firebrick;
  overflow: hidden;
}
.intro img{
  height: 0.8rem;
  width: 0.8rem;
  background: salmon;
  float: left;
}
.singer{
   float: left;

}
  
  

</style>

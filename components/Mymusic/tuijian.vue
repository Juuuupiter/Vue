<template>
  <div class="list">
    <div class="music-intro">
      <div class="intro">
        <router-link to='/music/listen'>
        <img :src="src" alt="">
        <div class="singer">
          <span>{{title}}</span>
          <p>{{singer}}</p>
          <p>专辑：{{album}}</p>
        </div>
        </router-link>
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
       Axios.get(API_PROXY + "http://tingapi.ting.baidu.com/v1/restserver/ting?format=json&method=baidu.ting.billboard.billList&type=2&size=10&offset=0")
       .then((res)=>{
               console.log(55555);
               this.shu=res.data.song_list;
               this.src=res.data.song_list[this.shuxing].pic_small; 
               this.title=res.data.song_list[this.shuxing].title;
               this.singer=res.data.song_list[this.shuxing].artist_name;
               this.album=res.data.song_list[this.shuxing].album_title;
               this.song=res.data.song_list[this.shuxing].song_id; 
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
  overflow: hidden;
}
.intro img{
  height: 0.8rem;
  width: 0.8rem;
  float: left;
}
.singer{
   float: left;
   color: #000;

}
.list{
  margin-bottom:0.3rem; 
}
.list:last-child{
  margin-bottom: 0.8rem;
}
  
  

</style>

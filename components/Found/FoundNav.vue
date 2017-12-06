<template>
  <div class="found-nav">
       <ul>
           <li>
               <div class="icon"><i class="fa fa-star-o" aria-hidden="true"></i></div>
               <div class="icon-nav">猜你喜欢</div>
           </li>
           <li>
               <div class="icon"><i class="fa fa-music" aria-hidden="true"></i></div>
               <div class="icon-nav">歌单</div>
           </li>
           <li>
               <div class="icon"><i class="fa fa-bar-chart" aria-hidden="true"></i></div>
               <div class="icon-nav">排行榜</div>
           </li>
           <li>
               <div class="icon"><i class="fa fa-file-audio-o" aria-hidden="true"></i></div>
               <div class="icon-nav">电台</div>
           </li>
           <li>
              <div class="icon"><i class="fa fa-television" aria-hidden="true"></i></div>
               <div class="icon-nav">音乐视频</div> 
           </li>
       </ul>
  </div>
</template>

<script>
// export default {
//    props: ['bgColor']
//   }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
       a{
         color: white;
       }
       .found-nav{
           background:whitesmoke;
           height:1.2rem;
           width: 100%;
           position: absolute;
       }
       .found-nav ul{
           display: flex;
           margin: 0.2rem auto;
       }
       .found-nav li{
           flex: 1;
           text-align: center;
       }
       .icon{
           height: 0.5rem;   
           font-size: 0.4rem;
           line-height: 0.6rem;
       }
       .icon-nav{
           height:0.3rem;
           color: black;
       }

    

</style>

<template>
  <div class="footer">
       <ul>
           <li>
               <router-link to='/music/found'>
               <div class="icon"><i class="fa fa-dot-circle-o" aria-hidden="true"></i></div>
               <div class="icon-nav">发现</div>
                </router-link>
           </li>
           <li>
               <router-link to='/music/mymusic'>
               <div class="icon"><i class="fa fa-headphones" aria-hidden="true"></i></div>
               <div class="icon-nav">我的音乐</div>
               </router-link>
           </li>
           <li></li>
           <li>
               <div class="icon"><i class="fa fa-smile-o" aria-hidden="true"></i></div>
               <div class="icon-nav">动态</div>
           </li>
           <li>
              <div class="icon"><i class="fa fa-user-o" aria-hidden="true"></i></div>
               <div class="icon-nav">账号</div> 
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
       .footer{
           background:whitesmoke;
           height:0.8rem;
           width: 100%;
           position: fixed;
           z-index: 5;
           bottom: 0;
       }
       .footer ul{
           display: flex;
       }
       .footer li{
           flex: 1;
           color:black;
           /* line-height: 1rem; */
           text-align: center;
       }
       .icon{
           color: #000;
           height: 0.5rem;   
           font-size: 0.4rem;
           line-height: 0.6rem;
       }
       .icon-nav{
           height:0.3rem;
           color: black;
       }

    

</style>

<template>
  <div class="found-nav">
       <ul>
           <li>
               <div class="icon"><i class="fa fa-television" aria-hidden="true"></i></div>
               <div class="icon-nav">猜你喜欢</div>
           </li>
           <li>
               <div class="icon"><i class="fa fa-shopping-bag" aria-hidden="true"></i></div>
               <div class="icon-nav">已购音乐</div>
           </li>
           <li>
               <div class="icon"><i class="fa fa-wifi" aria-hidden="true"></i></div>
               <div class="icon-nav">离线音乐包</div>
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
           height:1rem;
           width: 100%;
       }
       .found-nav ul{
           display: flex;
           margin: 0 auto;
       }
       .found-nav li{
           flex: 1;
           text-align: center;
       }
       .icon{
           height: 0.5rem;   
           font-size: 0.3rem;
           line-height: 0.6rem;
       }
       .icon-nav{
           height:0.3rem;
           color: black;
           font-size: 0.2rem;
       }

    

</style>

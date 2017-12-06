<template>
  <div class="book">
      <div class="header">
              <img src="../../../static/img/1.jpg" alt="">
              <h6>我的音乐</h6>
              <i class="fa fa-bell" aria-hidden="true"></i>
      </div>
      <common-footer></common-footer>
  </div>
</template>
<script>
import CommonFooter from "../Common/CommonFooter"
export default {
  
  components:{
      CommonFooter
  }
}
</script>
<style scoped>
      .header{
      width: 100%;
      height: 0.8rem;
      background:whitesmoke;
      position: fixed;
      top: 0;
      z-index: 2;
    }  
    .header img{
        float: left;
        height: 0.6rem;
        margin: 0.1rem auto;
        
    }
    .header h6 {
        font-size: 0.3rem;
        text-align: center;
        float: left;
        width: 75%;
        height: 0.4rem;
        margin: 0.12rem auto;
          } 
    .header i{
        font-size: 0.3rem;
        float: left;
        margin: 0.25rem auto;
    } 
</style>
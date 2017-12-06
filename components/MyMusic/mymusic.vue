<template>
  <div class="book">
      <div class="header">
              <img src="../../../static/img/1.jpg" alt="">
              <h6>我的音乐</h6>
              <i class="fa fa-bell" aria-hidden="true"></i>
      </div>
      <div class="recently">
          <div class="listen">

          </div>
          <div class="listen">
              <img class="cdCover185" src="http://pic.xiami.net/images/album/img0/18/5907f58a2f72a_946100_1493693834.jpg@4e_1c_100Q_185w_185h" rel="v:photo" alt="志明与春娇">
              <p>最近播放</p>
          </div>
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
    .recently{
        margin-top: 0.9rem;
        width: 100%;
        height: 2rem;
        background: firebrick;
    }
    .listen{
        /* position: absolute; */
        width: 50%;
        height: 1.6rem;
        background: darkblue;
        margin-top: 0.2rem;
        display:inline-block;
        float: left;
    }
    .listen img{
        width: 40%;
        margin-top: 0.1rem;
        -moz-box-shadow: 6px 6px 5px #888888; /* 老的 Firefox */
        box-shadow: 6px 6px 5px #888888;
    }
</style>
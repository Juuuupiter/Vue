<template>
  <div class="book">
      <div class="header">
              <img src="../../../static/img/1.jpg" alt="">
              <h6>我的音乐</h6>
              <i class="fa fa-bell" aria-hidden="true"></i>
      </div>
      <div class="recently">
          <div class="listen">
              <img src="http://pic.xiami.net/images/collect/61/61/359923061_1512220697_KHe9.jpg@1e_1c_100Q_185w_185h">
              <div class="listen-letter">
                  <p>本地歌曲&nbsp&nbsp&nbsp&nbsp<i class="fa fa-play-circle-o" aria-hidden="true"></i></p>
                  <span>0首</span>
              </div>
          </div>
          <div class="listen">
              <img class="cdCover185" src="http://pic.xiami.net/images/album/img0/18/5907f58a2f72a_946100_1493693834.jpg@4e_1c_100Q_185w_185h" rel="v:photo" alt="志明与春娇">
              <div class="listen-letter">
                  <p>最近播放&nbsp&nbsp&nbsp&nbsp<i class="fa fa-play-circle-o" aria-hidden="true"></i></p>
                  <span>30首</span>
              </div>
          </div>
      </div>
      <div class="collection"></div>
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
        height: 2rem；
    }
    .listen{
        width: 50%;
        height: 1.6rem;
        margin-top: 0.1rem;
        display:inline-block;
        float: left;
        background:whitesmoke;
    }
    .listen img{
        float: left;
        width: 40%;
        margin-top: 0.1rem;
        -moz-box-shadow: 6px 6px 5px #888888; /* 老的 Firefox */
        box-shadow: 6px 6px 5px #888888;
        margin-left: 0.05rem;
    }
    .listen-letter{
        height: 1rem;
        width: 55%;
        float: right;
        margin: 0.3rem auto;
    }
    .listen p{
       font-size: 0.25rem;
    }
    .listen span{
        color: darkgray
    }
</style>
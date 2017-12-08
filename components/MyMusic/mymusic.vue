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
      <music-nav></music-nav>
      <div class="collection">
         <p>创建的歌单</p>
         <div class="add-music">
             <p>导入外部歌单</p>
         </div>
      </div>
       <p class="like">可能喜欢的歌单</p>
       <div class="like-list">
           <div class="list">
           <img src="http://pic.xiami.net/images/collect/428/28/359722428_1512028999_2RPL.jpg@1e_1c_100Q_185w_185h">
           <span>in the darkness</span>
           </div>
           <div class="list">
           <img src="http://pic.xiami.net/images/collect/373/73/117499373_1442464523_d9U1.jpg@1e_1c_100Q_185w_185h">
           <span>ddddddddd</span>
           </div>
           <div class="list">
           <img src="http://pic.xiami.net/images/collect/498/98/357554498_1509203178_L8Te.jpeg@1e_1c_100Q_185w_185h">
           <span>ddddddddd</span>
           </div> 
       </div>
        <div class="like-list">
           <div class="list">
           <img src="http://pic.xiami.net/images/collect/643/43/279498643_58fb51757f5d3_jqmv_1492865397.jpg@1e_1c_100Q_185w_185h">
           <span>ddddddddd</span>
           </div>
           <div class="list">
           <img src="http://pic.xiami.net/images/album/img50/466550/4665501512466550.jpg@1e_1c_100Q_185w_185h">
           <span>ddddddddd</span>
           </div>
           <div class="list">
           <img src="http://pic.xiami.net/images/album/img3/62/5a24a6243fcf4_3126803_1512351268.jpg@1e_1c_100Q_185w_185h">
           <span>你知道自己是谁吗</span>
           </div> 
       </div>
        <div class="like-list">
           <div class="list">
           <img src="http://pic.xiami.net/images/collect/461/61/12884461_1346250994.jpg@1e_1c_100Q_185w_185h">
           <span>多听五月天</span>
           </div>
           <div class="list">
           <img src="http://pic.xiami.net/images/album/img84/2099991784/21028780721509354296.jpg@1e_1c_100Q_185w_185h">
           <span>twice</span>
           </div>
           <div class="list">
           <img src="http://pic.xiami.net/images/album/img85/171/59e458e5385a6_8566285_1508137189.jpg@1e_1c_100Q_185w_185h">
           <span>ddddddddd</span>
           </div> 
       </div>
       <div class="more">查看更多></div>
       <div class="white"></div>
      <common-footer></common-footer>
  </div>
</template>
<script>
import CommonFooter from "../Common/CommonFooter"
import MusicNav from "../Mymusic/MusicNav"
import Axios from "axios"
export default {
  components:{
      MusicNav,
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
        height: 1.7rem;
        overflow: hidden;
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
    .collection{
        margin-top: 0.1rem;
        height: 0.8rem;
        width: 100%;
    }
    .collection p{
       line-height: 0.8rem;
       width: 40%;
       float: left;
       font-weight: bold;
    }
    .add-music{
        margin-top: 0.15rem;
        width: 30%;
        height: 0.5rem;
        float: right;
        margin-right: 0.3rem;
        border: 1px solid orange;
        border-radius: 50px;
    }
    .add-music p{
        line-height: 0.5rem;
        width: 100%;
        text-align: center;
        color: orange;
        font-weight: lighter;
    }
    .like{
     line-height: 0.8rem;
       width: 100%;
       float: left;
       font-weight: bold; 
       background: whitesmoke;
    }
    .like-list{
        width: 100%;
        height: 2.5rem;
        margin-top: 0.8rem;
    }
    .list{
        width: 33.33%;
        float: left;
    }
    .list img{
        width: 100%;
        height: 2rem;
    }
    .more{
        height: 0.8rem;
        width: 100%;
        background:whitesmoke;
        margin-top: 0.8rem;
        line-height: 0.8rem;
        text-align: center;
        color: gray;
    }
    .white{
        height: 1.5rem;
        width: 100%;
        background: white;
    }
</style>
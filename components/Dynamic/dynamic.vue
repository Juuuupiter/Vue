<template>
  <div class="dynamic">
      <div class="header">
              <i class="fa fa-user-circle-o" aria-hidden="true"></i>
              <h6>动态</h6>
              <i class="fa fa-pencil" aria-hidden="true"></i>
              <i class="fa fa-bell" aria-hidden="true"></i>
              
      </div>
      <div class="nav">
          <p> <router-link to='/music/dynamic/all'>全部</router-link></p>
          <p>关注</p>
      </div>

      <all></all>
       <!-- <router-view></router-view> -->
      <common-footer></common-footer>
  </div>
</template>

<script>
import CommonFooter from "../Common/CommonFooter"
import All from "../Dynamic/all"
import Axios from "axios"
export default {
  components:{
      CommonFooter,
      All
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
      /* overflow: hidden; */
    }  
    .header h6 {
        font-size: 0.3rem;
        text-align: center;
        float: left;
        width: 70%;
        height: 0.4rem;
        margin: 0.12rem auto;
          } 
    .header i{
        font-size: 0.3rem;
        float: left;
        margin: 0.25rem 0.25rem;
    } 
       .header i:last-child{
        float: right;
        margin: 0.25rem 0;
    } 
    .nav{
        margin-top: 0.8rem;
        width: 100%;
        height: 0.6rem;
    }
    .nav p{
        width: 4;
        width: 50%;
        float: left;
        text-align: center;
        line-height: 0.6rem;
    }
    .nav p:active{
        color: orange;
    }
    </style>
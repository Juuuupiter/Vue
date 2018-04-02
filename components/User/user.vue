<template>
  <div class="user">
    <div class="header">
              <i class="fa fa-user-circle-o" aria-hidden="true"></i>
              <h6>账号</h6>
              <i class="fa fa-bell" aria-hidden="true"></i>         
    </div>
    <div class="login">
        <router-link to='/music/login'>
           <p>登陆/注册</p>            
        </router-link>
        
    </div>
    <common-footer></common-footer>
  </div>
</template>
<script>
import CommonFooter from "../Common/CommonFooter"
import Axios from 'axios'

export default {

     components: {
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
    .login{
      height: 1.5rem;
      background:whitesmoke;
      margin-top:0.8rem; 
    }
</style>

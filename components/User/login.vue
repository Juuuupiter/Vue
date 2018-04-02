<template>
  <div class="user">
    <div class="header">
              <i class="fa fa-user-circle-o" aria-hidden="true"></i>
              <h6>虾</h6>
              <i class="fa fa-bell" aria-hidden="true"></i>         
    </div>
    <div class="login">
       <form action="">
        <p>用户名：<input type="text" v-model="username"></p>
        <p>密  码：<input type="text" v-model="pwd"></p> 
        <input type="submit" @click="login">
        </form> 
    </div>
    <!-- <common-footer></common-footer> -->
  </div>
</template>
<script>
import Axios from 'axios'
Axios.defaults.withCredentials = true;
export default {
      data(){
    return {
      username: '',
      pwd     : ''
    }
  },
  mounted(){
      
  },
  methods:{
   login(){
      Axios.get('http://127.0.0.1:3000/users/vue_login',{
        params:{
          username: this.username,
          pwd     : this.pwd
        }
      })
      .then(res=>{
         location.href = 'http://127.0.0.1:8080/#/index';
        // console.log(res.data);
      });
      
    }
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

<template>
    <div class="header">
      <div class="search-box">
        <input type="search" placeholder="type a keyword">
      </div>
      <div class="profile-notifecations fa-lg" >
        <router-link to="/notifications">
          <i @click="clear" class="fa-regular fa-bell fa-lg" :class="{clear: !notificationstate}"></i>
        </router-link>
        <span class="profile-photo"><router-link to="/profile"><img src="@/assets/defulteImage.png"></router-link></span>
      </div>
    </div>
</template>
<script>
import ApiCalls from "@/services/ApiCalls.js"
export default {
  name: "Header" ,
  data(){
    return{
      notificationstate : true  , 
    }
  },
  methods:{
    clear(){
      this.notificationstate = false ;
    }
  }
}
</script>
<style scoped>
.header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 10px 15px;
}
input{
  padding: 8px;
  position: relative;
  border: 2px solid #eee;
  text-transform: capitalize;
  border-radius: 8px;
  width: 150px;
  transition: width 0.6s;
}
input::before{
  font-family: "Font Awesome 6 Free";
  content: "\f002";
  position: absolute;
}
input:focus{
  outline-color:#dddddd7a ;
  width: 200px;
}
input:focus::placeholder{
  opacity: 0;
}
.search-box{
  display: flex;
  align-items: center;
}
a{
  color: black;
}
.profile-notifecations{
  display: flex;
  align-items: center;
}
.profile-notifecations i {
  margin-right: 15px;
  cursor: pointer;
  position: relative;
}
.profile-notifecations i::after{
  content: "";
  width: 10px;
  height: 10px;
  border-radius: 50%;
  position: absolute;
  top: -16px;
  right: -5px;
  background-color: #e74c3c;
}
.profile-notifecations .profile-photo{
  width: 30px;
  height: 30px;
  cursor: pointer;
  border-radius: 50%;
  overflow: hidden;
  background-color: #333;
}
.profile-notifecations .profile-photo img{
  width: 100%;
}
.clear::after{
  display: none;
}
</style>
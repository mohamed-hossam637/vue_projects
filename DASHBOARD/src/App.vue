<template>
  <SeidBar />
  <div class="content-container">
    <Header />

      <router-view />
  </div>
</template>
<script>
import Header from "../src/components/Header.vue"
import SeidBar from "../src/components/SeidBar.vue"
export default {
  components:{
    Header , 
    SeidBar
  }
}
</script>

<style>
/* global rules */
:root{
  --gray-color : #9e9e9e ;
}
*{
  box-sizing: border-box;
}
ul{
  list-style: none;
  margin: 0;
  padding: 0;
}
a{
  text-decoration: none;
}
input:focus::placeholder , 
textarea:focus::placeholder{
  opacity: 0;
}
/* end global rules */
/* start app styling */
#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  min-height: 100vh;
  background-color: #f1f5f9;
}
@media(max-width :  767px){
  #app{
    flex-direction: column;
  }
}
/* end app styling */
.content-container{
  width: 100%;
  height: 100vh;
  overflow-y: auto;
}
.content::-webkit-scrollbar{
  width: 5px;
  background-color: var(--gray-color);
}
.cont{
  padding: 0 15px;
}
.title{
  position: relative;
  padding: 10px 0;
  margin: 0;
  margin-bottom: 15px;
}
.title::after{
  content: "";
  width: 70px;
  height: 3px;
  background-color: black;
  position: absolute;
  left: 0;
  bottom: 0;
  border-radius: 5px;
}
@media(max-width :  767px){
  .dash-board-name{
    font-size: 15px;
    margin-bottom: 25px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .dash-board-name::after , 
  .dash-board-name::before {
    display: none;
  }
}
.content-container::-webkit-scrollbar{
    background-color: #2ecc7152;
    width: 5px;
}
.content-container::-webkit-scrollbar-thumb{
    background-color: #1abc9c;
    border-radius: 5px;
}
</style>

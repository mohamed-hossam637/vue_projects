<template>
  <div class="dashboard cont">
    <h1 class="title">Dashboard</h1>
    <div class="dash-content">
      <Welcome :info="info"/>
      <QuickDraft />
      <YearlyTarget />
      <LastTasks :tasks="tasks"/>
      <SocialMediaStatus />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Welcome from "@/components/dashboardComponents/welcome.vue"
import QuickDraft from "@/components/dashboardComponents/QuickDraft.vue"
import LastTasks from "@/components/dashboardComponents/LastTasks.vue"
import YearlyTarget from "@/components/dashboardComponents/YearlyTarget.vue"
import SocialMediaStatus from "@/components/dashboardComponents/SocialMediaStatus.vue"
import ApiCalls from "@/services/ApiCalls.js"

export default {
  name: 'Dashboard' , 
  components:{
    Welcome ,
    QuickDraft ,
    LastTasks ,
    YearlyTarget ,
    SocialMediaStatus
  } ,
  data(){
    return{
      tasks : null , 
      info : null
    }
  } ,
  created(){
        ApiCalls.getRepos().then(response => {
            this.tasks = response.data ;
        }).catch(err =>{
            console.log(err)
        }) , 
        ApiCalls.getInfo().then(response => {
            this.info = response.data ;
        }).catch(err =>{
            console.log(err)
        })
    }
}
</script>
<style>
.dashboard{
  padding: 0 15px;
}
.dash-content{
  display: grid;
  grid-template-columns: repeat(auto-fill , minmax(300px , 1fr)) ;
  grid-template-rows: repeat(2, auto);
  gap:10px;
  /* display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-bottom: 25px;
  justify-content: space-between; */
}
@media(max-width :  767px){
  .dash-content{
  flex-direction: column;
}
}
/* for all content */
.box{
    flex: 1;
    background-color: white;
    height: 300px;
    border-radius: 7px;
    padding: 0;
    text-transform: capitalize;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    margin-right: 10px;
}
.btn-shape{
    padding: 5px 10px;
    background-color: #3498db;
    color: white;
    font-size: 15px;
    text-transform: capitalize;
    border-radius: 6px;
    transition: background-color 0.6s;
    display: inline-block;
    margin: 15px 10px 10px auto;
    cursor: pointer;
}
.btn-shape:hover{
    background-color: #2980b9;
}

@media(max-width: 767px){
  .dash-content{
    flex-direction: column;
  }
  .box{
    width: 100%;
    margin-bottom: 5px;
  }
}
</style>

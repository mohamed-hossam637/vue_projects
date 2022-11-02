<template>
<div class="cont">
    <h1 class="title">Projects</h1>
    <div class="projects-container">
        <ProjectComponent v-for="project in projects" :key="project.project_id" :project="project"/>
    </div>
</div>
</template>
<script>
import ProjectComponent from "@/components/ProjectsComponents/ProjectComponents.vue"
import ApiCalls from "@/services/ApiCalls.js"
export default {
    components:{
        ProjectComponent
    } ,
    data(){
        return{
            projects : null
        }
    },
    created(){
        ApiCalls.getProjects().then(response => {
            this.projects = response.data ;
        }).catch(err =>{
            console.log(err)
        }) 
    }
}
</script>
<style scoped>
.projects-container{
    display: grid;
    grid-template-columns: repeat(auto-fill , minmax(350px , 1fr)) ;
    grid-template-rows: repeat(2, auto);
    gap:10px;
}
@media(max-width: 767px){
    .projects-container{
        display: flex;
        flex-direction: column;
    }
}
</style>
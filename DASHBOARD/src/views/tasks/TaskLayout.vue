<template>
    <div class="task-container" v-if="task">
        <h2><i class="fa-solid fa-hashtag fa-fw"></i> {{task.taskTitle}}</h2>
        <nav class="sup-links">
            <router-link :to="{name : 'TaskDetails'}">
                task details
            </router-link> |
            <router-link :to="{name : 'TaskEdit'}">
                <i class="fa-solid fa-pen-to-square fa-fw"></i> edit task
            </router-link> |
            <router-link :to="{name : 'TaskProgress'}">
                <i class="fa-solid fa-bars-progress fa-fw"></i> task progress
            </router-link>
        </nav>
        <div class="actions">
            <router-view :task="task"/>
        </div>
    </div>
</template>
<script>
import ApiCalls from "@/services/ApiCalls.js"
export default {
    name:  "TaskLayout" , 
    props : ["id"]  ,
    data(){
        return {
            task: null
        }
    } ,
    created(){
        ApiCalls.getTask(this.id).then(response => {
            this.task = response.data ;
            console.log(response.data)
        }).catch(err =>{
            console.log(err)
        })
    }
}
</script>
<style scoped>
.task-container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.task-container h2{
    text-transform: capitalize;
}
.task-container .sup-links{
    padding: 15px;
    text-transform: capitalize;
}
.task-container .sup-links a{
    color: black;
    font-weight: bold;
    padding: 10px;
    transition: background-color 0.6s;
    border-radius: 6px;
}
.task-container .sup-links a:hover{
    background-color: #ddd;
}
.task-container .sup-links a.router-link-exact-active {
    background-color: #ddd;
}
</style>
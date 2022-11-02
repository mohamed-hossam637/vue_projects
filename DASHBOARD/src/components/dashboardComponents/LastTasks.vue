<template>
    <div class="box lastTasks">
        <h3>latest tasks</h3>
        <div class="tasks-container">
            <Task v-for="task in tasks" :key="task.id" :task="task"/>
        </div>
    </div>
</template>
<script>
import Task from "@/components/tasksComponents/Task.vue" ;

export default {
    name: "LastTasks" ,
    components:{
        Task
    } ,
    props:{
        tasks : Object
    } 
}
</script>
<style scoped>
h3{
    margin: 0;
    padding: 10px 15px;
    position: relative;
}
h3::after{
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 3px;
    width: 200px;
    background-color: #eee;
    border-radius: 6px;
}
.tasks-container{
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
    overflow-y: auto;
}
.alert{
    font-size: 25px;
    font-weight: bold;
    color: #ddd;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50% , -50%);
    user-select: none;
}
.tasks-container::-webkit-scrollbar{
    background-color: #2ecc7152;
    width: 5px;
}
.tasks-container::-webkit-scrollbar-thumb{
    background-color: #1abc9c;
    border-radius: 5px;
}
</style>
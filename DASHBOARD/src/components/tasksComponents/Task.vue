<template>
    <router-link class="task" :to="{ name : 'TaskLayout' , params:{ id : task.id } }">
            <h4 class="task_tilte">
                {{task.taskTitle}}
            </h4>
            <div class="task-content">
                <p class="task-desc">{{task.taskContent}}</p>
                <span class="delete-icon">
                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </span>
            </div>
    </router-link>
</template>
<script>
export default {
    name: "Task" ,
    props: {
        task : Object
    }
}
</script>
<style scoped>
p{
    padding: 0;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.task{
    display: block;
    width: 100%;
    padding: 5px;
    padding-left: 10px;
    transition: background-color 0.7s;
    border-radius: 6px;
    position: relative;
    text-decoration: none;
    color: #34495e;
}
.task:hover{
    background-color: #ddd;
}
.task:not(:last-child){
    margin-bottom: 5px;
}

.task_tilte{
    font-size: 15px;
    padding: 0;
    margin: 0;
}
.task-content{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.task-content .task-desc{
    width: calc(100% - 40px);
    font-size: 13px;
}
.task-content .delete-icon{
    width: 40px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
</style>
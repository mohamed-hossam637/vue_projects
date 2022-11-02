<template>
    <p class="task-details">{{this.task.taskContent}}</p>
</template>
<script>
export default {
    name : "TaskDetails" , 
    props : {
        task : Object
    }
}
</script>
<style scoped>
.task-details{
    padding: 15px 5px;
    background-color: white;
    text-transform: capitalize;
    color: black;
    font-size: 24px;
    min-height: 250px;
}
</style>
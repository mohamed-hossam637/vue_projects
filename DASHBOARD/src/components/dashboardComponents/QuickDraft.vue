<template>
    <div class="box quickDraft">
        <h3>quick draft</h3>
        <p>write a draft for your ideas</p>
        <form >
            <input type="text" placeholder="title" name="title" required v-model="tasktitle">
            <textarea placeholder="write here..." name="task_desc" required v-model="taskContent"></textarea>
            <input type="submit" value="Save" class="btn-shape">
        </form>
    </div>
</template>
<script>
export default {
    name: "QuickDraft" ,
    data(){
        return{
            tasktitle : "" ,
            taskContent : "" ,
        }
    } 
}
</script>
<style scoped>
h3{
    margin: 0;
    padding: 10px 15px;
}
p{
    padding-left: 15px;
    margin: 0;
    font-size: 13px;
}
form{
    padding: 0 15px;
}
form input:not([type="submit"])  ,
form textarea{
    padding: 5px;
    display: block;
    border: none;
    outline: none;
    background-color: #eee;
    margin: 0;
    margin-top: 10px;
    width: 100%;
    font-size: 15px;
    text-transform: capitalize;
}
form textarea{
    resize: none;
    height: 130px;
}
input[type="submit"]{
    border: none;
    outline: none;
    display: block;
}
</style>
<template>
    <div class="edit-details">
        <form class="edit">
            <div>
                <label for="title">task title</label>
                <input id="title" :placeholder="task.taskTitle">
            </div>
            <div>
                <label for="content">task content</label>
                <textarea id="content" :placeholder="task.taskContent"></textarea>
            </div>
            <button class="submit">submit</button>
        </form>
    </div>
</template>
<script>
export default {
    name : "TaskEdit" , 
    props : {
        task : Object
    }
}
</script>
<style scoped>
.edit-details{
    background-color: white;
    border-radius: 6px;
    min-height: 300px;
    width: 400px;
    padding: 15px;
}
.edit-details .edit{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.edit-details .edit > div{
        display: flex;
    flex-direction: column;
}
.edit-details .edit > div label{
    text-transform: capitalize;
    font-weight: bold;
    padding: 10px;
}
.edit-details .edit > div input{
    padding: 5px;
    font-size: 17px;
    border: 2px solid #eee;
    background-color: white;
    color: black;
    border-radius: 8px;
}
.edit-details .edit > div input::placeholder{
    color: var(--gray-color);
}
.edit-details .edit > div input:focus{
    outline: none;
    border-color: #ddd;
}
.edit-details .edit > div textarea{
    border: 2px solid #eee;
    height: 200px;
    background-color: white;
    color: black;
    padding: 5px 10px;
    resize: none;
    font-size: 15px;
    margin-bottom: 10px;
    border-radius: 8px;
}
.edit-details .edit > div textarea::placeholder{
    color: var(--gray-color);
    text-transform: capitalize;
}
.edit-details .edit > div textarea:focus{
    outline: none;
    border-color: #ddd;
}
.edit-details .edit .submit{
    padding: 6px;
    text-transform: capitalize;
    color: white;
    background-color: #2ecc71;
    cursor: pointer;
    border: none;
    border-radius: 8px;
    font-size: 17px;
    font-weight: bold;
}
</style>
<template>
    <div class="project">
        <div class="name-date">
            <span class="project-name">{{project.project_name}}</span>
            <span class="creation-date">{{project.creation_date}}</span>
        </div>
        <p class="disc">{{project.project_desc}}</p>
        <div class="projectMemburs-tasks">
            <div class="memburs">
                    <img v-for="membur in project.memburs" :key="membur.membur_id" src="@/assets/avatar02.png" class="membur" >
            </div>
            <div class="project-tasks">
                <div class="project-task" v-for="task in project.tasks" :key="task.id">{{task.name}}</div>
            </div>
        </div>
        <div class="progress-cost">
            <div class="progress-bar" :class="this.progress_background">
                <span :style="{width : `${project.project_progress}%`}" :class="this.progress_color"></span>
            </div>
            <div class="cost">${{project.project_cost}}</div>
        </div>
    </div>
</template>
<script>
export default {
    name : "ProjectComponent" ,
    props : {
        project : Object
    } , 
    data(){
        return{
            progress_color : "" , 
            progress_background : ""
        }
    }  , 
    created(){
        if(this.project.project_progress <= 50){
            this.progress_color = "red" 
            this.progress_background = "background-red" 
        }else if(this.project.project_progress > 50 && this.project.project_progress <= 70){
            this.progress_color = "green" 
            this.progress_background = "background-green" 
        }else{
            this.progress_color = "blue" 
            this.progress_background = "background-blue" 
        }
    }
}
</script>
<style scoped>
.project{
    background-color: white;
    height: 280px;
    border-radius: 6px;
    padding: 5px;

}
.project .name-date{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    font-size: 15px;
    color: var(--gray-color);
    text-transform: capitalize;
}
.project .name-date .project-name{
    color: black;
    font-weight: 600;
}
.project .name-date .creation-date{
    font-size: 12px;
}
.project .disc{
    padding: 0;
    margin: 0;
    margin-bottom: 30px;
    font-size: 12px;
    text-transform: capitalize;
    color: var(--gray-color);
}
.project .projectMemburs-tasks{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-bottom: 30px;
}
.project .projectMemburs-tasks .memburs{
    margin-bottom: 40px;
    display: flex;
    padding-left: 15px;
}
.project .projectMemburs-tasks .memburs .membur{
    width: 35px;
    height: 35px;
    overflow: hidden;
    margin-left: 15px;
    border-radius: 50%;
    border: 2px solid white;
    display: block;
    margin-left: -12px;
}
.project .projectMemburs-tasks .project-tasks{
    width: 100%;
    display: flex;
    justify-content: flex-end;
}
.project .projectMemburs-tasks .project-tasks .project-task{
    padding: 5px;
    font-size: 12px;
    background-color: #eee;
    color: black;
    border-radius: 8px;
    text-transform: capitalize;
    margin-right: 8px;
}
.project .progress-cost{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.project .progress-cost .progress-bar{
    width: 70%;
    background-color: #eee;
    border-radius: 6px;
    overflow: hidden;
    height: 5px;
    position: relative;
}
.project .progress-cost .progress-bar span{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
}
.project .progress-cost .progress-bar span.red{
    background-color: #CD201F;
}
.project .progress-cost .progress-bar.background-red{
    background-color: #cd201f5e;
}
.project .progress-cost .progress-bar span.green{
    background-color: #27ae60;
}
.project .progress-cost .progress-bar.background-green{
    background-color: #2ecc7152;
}
.project .progress-cost .progress-bar span.blue{
    background-color: #2980b9;
}
.project .progress-cost .progress-bar.background-blue{
    background-color: #3498db6b;
}
.project .progress-cost .cost{
    font-size: 15px;
    color: var(--gray-color);
}
</style>
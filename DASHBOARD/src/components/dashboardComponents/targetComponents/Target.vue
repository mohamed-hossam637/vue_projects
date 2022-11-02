<template>
    <div class="target">
        <div class="target-icon" :class="this.icon_container">
            <i class="fa-solid fa-lg" :class="this.icon"></i>
        </div>
        <div class="target-content">
            <p class="target-title">{{this.target.target_title}}</p>
            <p class="aim">{{this.target.target_aim}}</p>
            <div class="target-progress" :class="this.progress_container">
                <span class="progress-bar" :class="this.progress_bar" :style="{width : `${this.target.target_progress}%`}">
                    <span class="progress-persent" :class="this.progress_persent" >{{this.target.target_progress}}%</span>
                </span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name  : "Target" , 
    props :{
        target : Object
    } , 
    data(){
        return{
            icon : "" ,
            icon_container : "" ,
            progress_container : "" ,
            progress_bar : "" ,
            progress_persent : ""
        }
    } , 
    created(){
            if(this.target.target_title == "Money"){
                this.icon = "fa-dollar-sign" ;
                this.icon_container = "money-icon" ;
                this.progress_container = "money-progress" ;
                this.progress_bar = "money-progressbar" ;
                this.progress_persent = "money-progress-persent" ;

            }else if(this.target.target_title == "Projects"){
                this.icon = "fa-code" ;
                this.icon_container = "code-icon" ;
                this.progress_container = "code-progress" ;
                this.progress_bar = "code-progressbar" ;
                this.progress_persent = "code-progress-persent" ;

            }else if(this.target.target_title == "Team"){
                this.icon = "fa-people-group" ;
                this.icon_container = "team-icon" ;
                this.progress_container = "team-progress" ;
                this.progress_bar = "team-progressbar" ;
                this.progress_persent = "team-progress-persent" ;
            }
    }
}
</script>
<style scoped>
p {
    margin: 0;
    padding: 0;
}
.target{
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
}
.target:not(:last-child){
    margin-bottom: 15px;
}
.target .target-icon{
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

}
/* start theme icon */
.target .target-icon.money-icon{
    background-color: #2ecc7152;
    color: #27ae60;
}
.target .target-icon.code-icon{
    background-color: #f1c40f73;
    color: #f39c12;
}
.target .target-icon.team-icon{
    background-color: #3498db6b;
    color: #2980b9;
}
/* end theme icon */
.target .target-content{
    padding: 5px 10px;
    width: calc(100% - 50px);
}
.target .target-content .target-title{
    font-size: 12px;
    color: black;
}
.target .target-content .aim{
    font-size: 14px;
    font-weight: bold;
}
.target .target-content .target-progress{
    height: 4px;
    margin-top: 10px;

    position: relative;
}
/* start theme progress */
.target .target-content .target-progress.money-progress{
    background-color: #2ecc7152 ;
}
.target .target-content .target-progress.code-progress{
    background-color: #f1c40f73;
}
.target .target-content .target-progress.team-progress{
    background-color: #3498db6b;
}
/* end theme progress */
.target .target-content .target-progress .progress-bar{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
}
/* start progressbar theme */
.target .target-content .target-progress .progress-bar.money-progressbar{
    background-color:#2ecc71;
}
.target .target-content .target-progress .progress-bar.code-progressbar{
    background-color: #f39c12;
}
.target .target-content .target-progress .progress-bar.team-progressbar{
    background-color:#2980b9;
}
/* end progressbar theme */
.target .target-content .target-progress .progress-persent{
    position: absolute;
    padding: 3px;
    font-size: 10px;
    color: white;
    top: -25px;
    border-radius: 5px;
    right: -10px;
}
.target .target-content .target-progress .progress-persent::after{
    content: "";
    border: 5px solid;
    position: absolute;
    border-bottom: -5px;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
}
/* theme */
.target .target-content .target-progress .progress-persent.money-progress-persent{
    background-color: #27ae60;
}
.target .target-content .target-progress .progress-persent.money-progress-persent::after{
    border-color: #27ae60 transparent transparent transparent;
}
.target .target-content .target-progress .progress-persent.code-progress-persent{
    background-color: #f39c12;
}
.target .target-content .target-progress .progress-persent.code-progress-persent::after{
    border-color: #f39c12 transparent transparent transparent;
}
.target .target-content .target-progress .progress-persent.team-progress-persent{
    background-color: #2980b9;
}
.target .target-content .target-progress .progress-persent.team-progress-persent::after{
    border-color: #2980b9 transparent transparent transparent;
}
</style>
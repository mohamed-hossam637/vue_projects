<template>
    <div class="yearly-target-container box">
        <h3>Yearly Target</h3>
        <p>Targets Of The Year</p>
        <div class="targets">
            <Target v-for="target in targets" :key="target.id" :target="target"/>
        </div>
    </div>
</template>
<script>
import Target from "@/components/dashboardComponents/targetComponents/Target.vue"
export default {
    name : "YearlyTarget" , 
    components :{
        Target
    } , 
    data(){
        return{
            targets:[{
                id : "1335" , 
                target_title : "Money" , 
                target_aim : "20,000$" , 
                target_progress : 80 , 
            } ,
            {
                id : "2354" , 
                target_title : "Projects" , 
                target_aim : "24" , 
                target_progress : 55
            },
            {
                id : "5897" , 
                target_title : "Team" , 
                target_aim : "12" , 
                target_progress : 75
            } ]
        }
    }
}
</script>
<style scoped>
h3 , p{
    margin: 0;
    padding: 0;
}
.yearly-target-container{
    background-color: white;
    min-height: 300px;
    padding: 15px;
    border-radius: 6px;
}
.yearly-target-container h3{
    padding-bottom:10px ;
}
.yearly-target-container > p{
    color: var(--gray-color);
    font-size: 13px;
}
.yearly-target-container .targets{
    display: flex;
    flex-direction: column;
    padding: 10px 0 ;
}
</style>
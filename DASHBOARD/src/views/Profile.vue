<template>
    <div class="cont">
        <h1 class="title">Profile</h1>
        <div class="container"> 
            <GeneralInfo />
            <Skills />
            <LatestActivites />
        </div>
    </div>
</template>
<script>
import GeneralInfo from "@/components/profileComponents/GeneralInfo.vue"
import Skills from "@/components/profileComponents/Skills.vue"
import LatestActivites from "@/components/profileComponents/LatestActivites.vue"

export default {
    name : "Profile" ,
    components : {
        GeneralInfo ,
        Skills ,
        LatestActivites
    }
}
</script>
<style scoped>
.container{
    display: grid;
    grid-template-areas: 
    "head head head head head head head head head head" 
    "skill skill activ activ activ activ activ activ activ activ";
    gap: 10px;
}
@media(max-width :  767px){
.container{
    display : flex ;
    flex-direction : column ;
}
}
</style>
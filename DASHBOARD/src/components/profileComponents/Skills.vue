<template>
    <div class="container-skills">
        <h4>my skills</h4>
        <p>complete skills list</p>
        <div class="skills">
            <span class="skill">html</span>
            <span class="skill">css</span>
            <span class="skill">javaScript</span>
            <span class="skill">pugJs</span>
            <span class="skill">typescript</span>
            <span class="skill">vueJs</span>
            <span class="skill">reactJs</span>
            <span class="skill">python</span>
            <span class="skill">c++</span>
        </div>
    </div>
</template>
<script>
export default {
    name: "Skills"
}
</script>
<style scoped>
.container-skills{
    grid-area: skill;
    width: 400px;
    background-color: white;
    padding: 15px;
    position: relative;
}
.container-skills h4{
    margin: 0;
    padding: 0;
    text-transform: capitalize;
}
.container-skills p{
    margin: 0;
    padding: 0;
    font-size: 13px;
    color: var(--gray-color);
}
.skills{
    padding: 10px 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
}
.skills .skill{
    padding: 5px;
    background-color: #eee;
    text-transform: capitalize;
    color: black;
    border-radius: 6px;
    margin-right: 15px;
    margin-bottom: 10px;
}
@media(max-width :  767px){
.container-skills{
    width: 100%;
}
.skills{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
}
}
</style>
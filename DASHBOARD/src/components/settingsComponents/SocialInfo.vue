<template>
    <div class="SocialInfo">
        <h3>social info</h3>
        <p>social media information</p>
        <div class="social-row" data-social="twitter">
            <span class="icon">
                <i class="fa-brands fa-twitter fa-fw"></i>
                </span>
            <input class="social-url" placeholder="twitter">
        </div>
        <div class="social-row" data-social="facebook">
            <span class="icon">
                <i class="fa-brands fa-facebook-f fa-fw"></i>
                </span>
            <input class="social-url" placeholder="facebook" >
        </div>
        <div class="social-row" data-social="linkdin">
            <span class="icon">
                <i class="fa-brands fa-linkedin-in fa-fw"></i>
                </span>
            <input class="social-url" placeholder="linkdin" >
        </div>
        <div class="social-row" data-social="mail">
            <span class="icon">
                <i class="fa-regular fa-envelope fa-fw"></i>
                </span>
            <input class="social-url" placeholder="mail" >
        </div>
    </div>
</template>
<script>
export default {
    name: "SocialInfo" , 
}
</script>
<style scoped>
.SocialInfo{
    background-color: white;
    padding: 15px;
    border-radius: 6px;
}
.SocialInfo h3 ,
.SocialInfo p{
    padding: 0;
    margin: 0;
    margin-bottom: 10px;
    text-transform: capitalize;
}
.SocialInfo p{
    padding: 0;
    margin: 0;
    margin-bottom: 10px;
    font-size: 12px;
    color: var(--gray-color);
}
.social-row{
    display: flex;
    position: relative;
}
.social-row:not(:last-child){
    margin-bottom: 10px;
}
.social-row .icon{
    padding: 8px;
    margin: 0;
    border: 2px solid #eee;
    color: black;
    text-align: center;
}
input{
    width: 100%;
    padding: 5px 8px;
    position: relative;
    border: 2px solid #eee;
    text-transform: capitalize;
    color: var(--gray-color);
}
input:focus{
    outline: #ccc;
}
</style>
<template>
    <div class="SecurityInfo">
        <h3>security info</h3>
        <p>security information aboute your account</p>
        <div class="row">
            <div class="password">
                <h4>password</h4>
                <p>last change on <span class="last-chnage">25/10/2022</span></p>
            </div>
            <button class="change-password btn-shape">change</button>
        </div>
        <div class="row">
            <div class="auth">
                <h4>tow-factor authentication</h4>
                <p>enabile/disable the feature</p>
            </div>
            <span class="toggile-btn" :class="{close : !toggile }" @click="toggileOpen">
                <span class="icon">
                    <i class="fa-solid fa-check"></i>
                </span>
            </span>
        </div>
        <div class="row">
            <div class="devices">
                <h4>devices</h4>
                <p>check the login devices list</p>
            </div>
            <button class="show-devices">devices</button>
        </div>
    </div>
</template>
<script>
export default {
    name : "SecurityInfo" ,
    data(){
        return{
            toggile : true
        }
    } ,
    methods:{
        toggileOpen(){
            if(this.toggile == true){
                this.toggile = false ;
            }else{
                this.toggile = true ;
            }
        }
    }
}
</script>
<style scoped>
h4{
    padding: 0;
    margin: 0;
    margin-bottom: 10px;
    text-transform: capitalize;
}
.SecurityInfo{
    background-color: white;
    padding: 15px;
    border-radius: 6px;
}
.SecurityInfo h3 , 
.SecurityInfo p{
    margin: 0;
    padding: 0;
    text-transform: capitalize;
}
.SecurityInfo h3{
    margin-bottom: 10px;
}
.SecurityInfo p{
    font-size: 12px;
    color: var(--gray-color);
    margin-bottom: 10px;
}
.row{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.row:not(:last-child){
    margin-bottom: 15px;
    border-bottom: 2px solid #eee;
}
.change-password{
    outline: none;
    border: none;
}
.toggile-btn{
    width: 65px;
    height: 25px;
    padding: 5px;
    border-radius: 20px;
    background-color: #2196f3;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    cursor: pointer;
}
.toggile-btn .icon{
    width: 20px;
    height: 20px;
    background-color: white;
    border-radius: 50%;
    transition: all 0.5s;
    text-align: center;
    color: #2196f3;
}
.toggile-btn.close{
    justify-content: flex-start;
    background-color: #ddd;
}
.toggile-btn.close .icon{
    color: #ddd;
}
.toggile-btn.close .icon{
    background-color: #eee;
    background-color: white;
}
.toggile-btn.close .icon i{
    display: none;
}
.show-devices{
    color: black;
    background-color: #eee ; 
    border: none;
    outline: none;
    cursor: pointer;
    padding: 5px 10px;
    font-size: 14px;
    border-radius: 6px;
    text-transform: capitalize;
    transition: background-color 0.5s;
}
.show-devices:hover{
    background-color: #ddd;
}
</style>
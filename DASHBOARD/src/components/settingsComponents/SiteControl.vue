<template>
    <div class="setting-box">
        <div class="site-control-box-header">
            <h3 class="setting-box-title">site control</h3>
            <p>control the website if there is maintenance</p>
        </div>
        <div class="close-open-website">
            <span class="website-controle">
                <h5>website controle</h5>
                <p>open/close website and type the resone</p>
            </span>
            <span class="toggile-btn" :class="{close : !toggile }" @click="toggileOpen">
                <span class="icon">
                    <i class="fa-solid fa-check fa-small"></i>
                </span>
            </span>
        </div>
        <textarea :disabled="toggile" :class="{disabled : toggile}" placeholder="close message content" ></textarea>
    </div>
</template>
<script>
export default {
    name : "SiteControl"  , 
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
p{
    color:var(--gray-color) ;

}
.setting-box{
    background-color: white;
    padding: 10px 15px;
    border-radius: 6px;
}
.setting-box-title{
    margin:0;
    margin-bottom : 10px;
    text-transform: capitalize;
}
.setting-box p {
    margin: 0;
    margin-bottom: 15px;
    font-size: 13px;
}
.close-open-website{
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.close-open-website h5 , 
.close-open-website p {
    padding: 0;
    margin: 0;
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
textarea{
    resize: none;
    height: 150px;
    padding: 5px;
    display: block;
    border-radius: 6px;
    border: none;
    outline: none;
    background-color: #eee;
    margin: 0;
    margin-top: 10px;
    width: 100%;
    font-size: 15px;
    text-transform: capitalize;
    color: black;
}
textarea::placeholder{
    font-size: 12px;
}
.disabled{
    cursor: no-drop;
}
</style>
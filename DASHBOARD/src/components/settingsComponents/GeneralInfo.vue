<template>
    <div class="general-info">
        <h3>general info</h3>
        <p>general information about your account</p>
        <form class="form-info">
            <div class="first">
                <label for="first-name">first name</label>
                <input id="first-name" placeholder="first name" type="text">
            </div>
            <div class="last">
                <label for="last-name">last name</label>
                <input id="last-name" placeholder="last name" type="text">
            </div>
            <div class="email">
                <span>
                    <label for="email">email</label>
                    <input id="email" placeholder="n@nn.nn" type="email">
                </span>
                <button class="change-btn">change</button>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    name : "GeneralInfo"
}
</script>
<style scoped>
.general-info{
    height: 300px;
    background-color: white;
    padding: 10px 15px 15px;
    border-radius: 6px;
}
.general-info h3 ,
.general-info p{
    padding: 0;
    margin: 0;
    margin-bottom: 10px;
    text-transform: capitalize;
}
.general-info p{
    padding: 0;
    margin: 0;
    margin-bottom: 10px;
    font-size: 12px;
    color: var(--gray-color);
}
.form-info{
    padding: 0;
    margin: 0;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
}
.form-info div{
    width: 100%;
}
.form-info div ,
.form-info div span{
    display: flex;
    align-items: flex-start;
    flex-direction: column;
}
label{
        font-size: 13px;
    padding: 10px 0;
    text-transform: capitalize;
}
input:not([type = "email"]){
    width: 100%;
    padding: 8px;
    position: relative;
    border: 2px solid #eee;
    text-transform: capitalize;
    border-radius: 8px;
}
input[type="email"]{
    background-color: #f1f5f9;
}
input:focus{
    outline: #ccc;
}
.email{
    flex-direction: row !important;
    align-items: flex-end !important;
    justify-content: center !important;
}
.email span{
    width: 80%;
}
.email span input{
    width: 100%;
    padding: 8px;
    position: relative;
    border: 2px solid #eee;
    border-radius: 8px;
}
.change-btn{
    padding: 5px;
    margin: 0;
    margin-left: 10px;
    background-color: white;
    color: #3498db;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 15px;
    text-transform: capitalize;
}
</style>
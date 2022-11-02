<template>
    <div class="general-info-container">
        <div class="profile-info">
            <div class="avatar">
                <img src="@/assets/defulteImage.png">
            </div>
            <h4 class="user-name">mohamed hossam</h4>
            <p class="level">level 20</p>
            <div class="progress"></div>
            <div class="rating">
                <div class="rating-icon">
                    <i class="fa-solid fa-star fa-small"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <p class="rate">350 rating</p>
            </div>
        </div>
        <div class="profile-setting">
            <div class="row">
                <p class="row-title">general information</p>
                <div>
                    <p>full name : <span>mohamed hossam</span></p>
                    <p>gender : <span>male</span></p>
                    <p>country : <span>egypt</span></p>
                </div>
            </div>
            <div class="row">
                <p class="row-title">personal information</p>
                <div>
                    <p>email : <span>n@mm.com</span></p>
                    <p>phone : <span>01145332511</span></p>
                    <p>date of birth : <span>19/7/2001</span></p>
                </div>
            </div>
            <div class="row">
                <p class="row-title">jop information</p>
                <div>
                    <p>title : <span>frontend web developer</span></p>
                    <p>programming language : <span>python</span></p>
                    <p>years of experience : <span>4</span></p>
                </div>
            </div>
            <div class="row">
                <p class="row-title">billing information</p>
                <div>
                    <p>payment method : <span>paypal</span></p>
                    <p>email : <span>email@website.com</span></p>
                    <p>supscription : <span>monthly</span></p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name : "GeneralInfo",

}
</script>
<style scoped>
/* #ffd43b */
h4 , p {
    margin: 0;
    padding: 0;
}
.general-info-container{
    grid-area: head;
    background-color: white;
    display: grid;
    grid-template-areas:"left right right right right right right right . ." ;
    padding: 15px 15px;
}
.profile-info{
    grid-area: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
}
.profile-info .avatar{
    width: 100px;
}
.profile-info .avatar img{
    width: 100%;
}
.user-name{
    text-transform: capitalize;
    padding: 10px 0;
}
.level{
    color: var(--gray-color);
    text-transform: capitalize;
    padding: 5px 0 10px;
}
.progress{
    width: 150px;
    position: relative;
    background-color: #eee;
    height: 5px;
    border-radius: 5px;
    overflow: hidden;
    margin-bottom: 10px;
}
.progress::after{
    content: "";
    position: absolute;
    width: 50%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #3498db;
}
.rating{
    display: flex;
    flex-direction: column;
}
.rating .rate{
    text-transform: capitalize;
    font-size: 15px;
    color: var(--gray-color);
    text-align: center;
}
.rating-icon{
    padding: 10px;
}
.rating-icon i{
    color: #ffd43b;
}
.rating-icon i:not(:last-child){
    margin-right: 5px;
}
/* start profile setting */
.profile-setting{
    grid-area: right;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.row{
    padding-bottom: 15px;
    margin-bottom: 10px;
}
.row:not(:last-child){
    border-bottom: 1.5px solid #eee;
}
.row-title{
    font-size: 13px;
    text-transform: capitalize;
    margin-bottom: 10px;
    color: var(--gray-color);
}
.row div{
    display: flex;
}
.row div p{
    color: var(--gray-color);
    font-size: 13px;
    text-transform: capitalize;
    margin-right: 30px;
}
.row div p span{
    color: black;
    font-weight: bold;
}
/* end profile setting */
/* start media  */
@media(max-width : 767px){
.general-info-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.general-info-container .profile-setting .row > div{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}
}
/* end media  */
</style>
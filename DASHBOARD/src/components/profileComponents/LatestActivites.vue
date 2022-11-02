<template>
    <div class="latest-activites-container">
        <h4>Latest Activites</h4>
        <p>Latest Activites Done By User</p>
        <div class="activites">
            <div class="activite-row">
                <div class="left">
                    <div class="icon">
                        <i class="fa-solid fa-store fa-lg"></i>
                    </div>
                    <div class="type-desc">
                        <p>store</p>
                        <p>bought the mastering python course</p>
                    </div>
                </div>
                <div class="time">
                    <p class="clock">18:10</p>
                    <p class="day">yesterday</p>
                </div>
            </div>
            <div class="activite-row">
                <div class="left">
                    <div class="icon">
                        <i class="fa-solid fa-graduation-cap"></i>
                    </div>
                    <div class="type-desc">
                        <p>Academy</p>
                        <p>Got The PHP Certficate</p>
                    </div>
                </div>
                <div class="time">
                    <p class="clock">16:05</p>
                    <p class="day">yesterday</p>
                </div>
            </div>
            <div class="activite-row">
                <div class="left">
                    <div class="icon">
                        <i class="fa-solid fa-check"></i>
                    </div>
                    <div class="type-desc">
                        <p>Badges</p>
                        <p>Unlocked The 10 Skills Badges</p>
                    </div>
                </div>
                <div class="time">
                    <p class="clock">18:05</p>
                    <p class="day">yesterday</p>
                </div>
            </div>
            <div class="activite-row">
                <div class="left">
                    <div class="icon">
                        <i class="fa-solid fa-store fa-lg"></i>
                    </div>
                    <div class="type-desc">
                        <p>store</p>
                        <p>Bought The Typescript course</p>
                    </div>
                </div>
                <div class="time">
                    <p class="clock">18:05</p>
                    <p class="day">yesterday</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name : "LatestActivites"
}
</script>
<style scoped>
.latest-activites-container{
    grid-area: activ;
    background-color: white;
    padding: 15px;
}
.latest-activites-container h4{
    margin: 0;
    padding: 0;
    text-transform: capitalize;
}
.latest-activites-container p{
    margin: 0;
    padding: 0;
    font-size: 13px;
    color: var(--gray-color);
}
.activites{
    padding: 15px 0;
}
.activite-row{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.activite-row:not(:last-child){
    margin-bottom: 10px;
}
.activite-row .left{
    display: flex;
    align-items: center;
}
.activite-row .left .icon{
    width: 55px;
    height: 55px;
    background-color: #e91e63;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
}
.activite-row .left .icon i{
    color: white;
    font-size: 25px;
}
.type-desc p:first-child{
    color: #333;
}
.time .clock{
    color: #333;
    text-align: center;
}
.activite-row:nth-child(2) .left .icon{
    background-color:#c0392b ;
}
.activite-row:nth-child(3) .left .icon{
    background-color:#3498db ;
}
@media(max-width :  767px){
.latest-activites-container .activites .activite-row{
    display: flex;
    flex-direction: column-reverse;
}
.latest-activites-container .activites .activite-row .left{
    display: flex;
    justify-content: flex-start;
    width: 100%;
}
.latest-activites-container .activites .activite-row .time{
    display: flex;
    justify-content: center;
    width: 100%;
    flex-direction: column;
    align-items: flex-end;
}
.latest-activites-container .activites .activite-row .time .clock{
    font-size: 10px;
}
.latest-activites-container .activites .activite-row .time .day{
    font-size: 11px;
}
}
</style>
<template>
    <div class="BackupManager">
        <h3>backup manager</h3>
        <p>control backup time and location</p>
        <form>
            <ul class="backup-time-container">
                <li class="backup-time">
                    <input type="radio" id="daily" name="time">
                    <label for="daily">daily</label>
                </li>
                <li class="backup-time">
                    <input type="radio" id="weekly" name="time">
                    <label for="weekly">weekly</label>
                </li>
                <li class="backup-time">
                    <input type="radio" id="monthly" name="time">
                    <label for="monthly">monthly</label>
                </li>
            </ul>
            <ul class="backup-location-container">
                <li class="backup-location">
                    <i class="fa-solid fa-server fa-small"></i>
                    <p>megaman</p>
                </li>
                <li class="backup-location selected">
                    <i class="fa-solid fa-server fa-small"></i>
                    <p>zero</p>
                </li>
                <li class="backup-location">
                    <i class="fa-solid fa-server fa-small"></i>
                    <p>sigma</p>
                </li>
            </ul>
        </form>
    </div>
</template>
<script>
export default {
    name: "BackupManager"
}
</script>
<style scoped>
.BackupManager{
    background-color: white;
    padding: 15px;
    border-radius: 6px;
}
.BackupManager h3 ,
.BackupManager p{
    padding: 0;
    margin: 0;
    margin-bottom: 10px;
    text-transform: capitalize;
}
.BackupManager p{
    padding: 0;
    margin: 0;
    margin-bottom: 10px;
    font-size: 12px;
    color: var(--gray-color);
}
.backup-time{
    margin-bottom: 10px;
}
.backup-time input{
    margin-right: 5px;
}
.backup-time{
    font-size: 14px;
    text-transform: capitalize;
}
.backup-time-container{
    margin-bottom: 20px;
}
.backup-location-container{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}
.backup-location-container .backup-location{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 140px;
    padding: 15px;
    margin-right: 5px;
    cursor: pointer;
    background-color: #eee;
    border-radius: 10px;
    transition: background-color 0.7s;
}
.backup-location-container .backup-location p{
    font-size: 13px;
    color: black;
}
.backup-location-container .backup-location.selected{
    background-color: #ddd;
}
.backup-location-container .backup-location:hover{
    background-color: #ddd;
}
</style>
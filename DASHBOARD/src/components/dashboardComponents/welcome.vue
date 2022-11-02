<template>
    <div v-if="info" class="box welcome-box">
        <div class="header-box">
            <div>
                <h4>welcome</h4>
                <span class="user-name">{{info.name}}</span>
            </div>
            <img class="welcome" src="@/assets/man_presenting.png">
            <img class="user-image" src="@/assets/defulteImage.png">
        </div>
        <div class="info">
            <span class="name-desc">
                <h5>{{info.name}}</h5>
                <p>{{info.title}}</p>
            </span>
            <span class="projects-desc">
                <h5>{{info.project}}</h5>
                <p>projects</p>
            </span>
        </div>
        <router-link to="/profile" class="btn-shape">Profile</router-link>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
    name: 'Welcome',
    props :{
        info : Object
    }
}
</script>

<style scoped>
.box .header-box{
    background-color: #eee;
    height: 35%;
    position: relative;
    padding: 10px 15px;
    display: flex;
    justify-content: space-between;
}
.box .header-box h4{
    padding: 0;
    margin: 0;
}
.box .header-box .user-name{
    font-size: 12px;
}
.box .header-box .user-image{
    position: absolute;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #333;
    border: 3px solid white;
    bottom: -30px;
    left: 30px;
    outline: none;
}
.info{
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  padding-top: 15px;
  text-align: center;
}
.info::before{
  content: "";
  width: 200px;
  height: 2px;
  background-color: #eee;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
.name-desc h5 , 
.projects-desc h5{
  padding: 0;
  margin: 0;
}
.name-desc p ,
.projects-desc p{
  margin: 0;
  padding: 0;
  font-size: 12px;
}

</style>

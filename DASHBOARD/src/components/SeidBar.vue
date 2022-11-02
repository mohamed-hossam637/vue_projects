<template>
    <div class="side-bar">
    <h3 class="dash-board-name">#Dashboard</h3>
    <ul class="links">
      <li>
        <router-link to="/">
          <i class="fa-solid fa-chart-bar fa-fw"></i>
          <span>Dashboard</span>
        </router-link>
      </li>
      <li>
        <router-link to="/settings">
        <i class="fa-solid fa-gear fa-fw"></i>
          <span>settings</span>
        </router-link>
      </li>
      <li>
        <router-link to="/profile">
        <i class="fa-regular fa-user fa-fw"></i>
          <span>profile</span>
        </router-link>
      </li>
      <li>
        <router-link to="/projects">
        <i class="fa-solid fa-diagram-project fa-fw"></i>
          <span>projects</span>
        </router-link>
      </li>
      <li>
        <router-link to="/files">
        <i class="fa-regular fa-file fa-fw"></i>
          <span>files</span>
        </router-link>
      </li>
      <li>
        <router-link to="/tasks">
        <i class="fa-solid fa-list-check fa-fw"></i>
          <span>tasks</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
    name: "SeidBar"
}
</script>
<style scoped>
.side-bar{
  width: 250px;
  padding: 20px;
  margin: 0;
  box-shadow: 0 0 10px #ddd;
  position: relative;
  background-color: white;
}
.dash-board-name{
  text-transform: capitalize;
  text-align: center;
  margin-top: 0;
  margin-bottom: 50px;
  position:relative;
}
.dash-board-name::before{
  content: "";
  position: absolute;
  background-color: black;
  bottom: -25px;
  left: 50%;
  width: 105px;
  height: 3px;
  transform: translateX(-50%);
  border-radius: 5px;
}
.dash-board-name::after{
  content: "";
  position: absolute;
  background-color: black;
  border-radius: 50%;
  border: 5px solid white;
  width: 15px;
  height: 15px;
  bottom: -35px;
  transform: translateX(-50%);
  left: 50%;
}

.links li a{
  font-size: 15px;
  font-weight: bold;
  text-transform: capitalize;
  color: black;
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 15px;
  transition: 0.5s;
  margin-bottom: 5px;
}
.links li a i {
  margin-right: 10px;
}
.links li a.router-link-exact-active , 
.links li a:hover
{
  background-color: #eee;
}
@media(max-width :  767px){
  .side-bar{
    width: 100%;
    padding: 5px;
  }
  .side-bar .dash-board-name{
    margin-bottom: 20px;
  }
  .side-bar .links{
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .side-bar .links li a{
    padding: 10px;
  }
  .links li a span {
    display:none;
  }
}
</style>
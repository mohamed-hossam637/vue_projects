<template>
  <div class="cont">
    <h1 class="title">Settings</h1>
    <div class="container">
      <SiteControl />
      <GeneralInfo />
      <SecurityInfo />
      <SocialInfo />
      <WidgetsControl />
      <BackupManager />
    </div>
  </div>
</template>
<script>
import SiteControl from "@/components/settingsComponents/SiteControl.vue"
import GeneralInfo from "@/components/settingsComponents/GeneralInfo.vue"
import SecurityInfo from "@/components/settingsComponents/SecurityInfo.vue"
import SocialInfo from "@/components/settingsComponents/SocialInfo.vue"
import WidgetsControl from "@/components/settingsComponents/WidgetsControl.vue"
import BackupManager from "@/components/settingsComponents/BackupManager.vue"

export default {
  name: "Settings" , 
  components: {
    SiteControl , 
    GeneralInfo ,
    SecurityInfo ,
    SocialInfo ,
    WidgetsControl ,
    BackupManager
  }
}
</script>
<style scoped>
.container{
  display: grid;
  grid-template-columns: repeat(auto-fill , minmax(300px , 1fr)) ;
  grid-template-rows: repeat(2, auto);
  gap:10px;
}

</style>
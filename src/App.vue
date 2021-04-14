<template>
  <div id="app">
    <keep-alive>
      <Header v-show="isShow"/>
    </keep-alive>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: 'App',
  components:{
    Header
  },
  data(){
    return{
      isShow: true,
    }
  },
  watch:{
    $route(e){
      if((e.name == 'registered') || (e.name == 'login')){
        this.isShow = false
      }else {
        this.isShow = true;
      }
    }
  }

}
</script>

<style>
#app {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>

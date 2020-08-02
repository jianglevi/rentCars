<template>
  <div class="index">
    <cars />
    <!-- 地图 -->
    <a-map />
    <!-- 导航 -->
    <nav-bar></nav-bar>
    <div class="children-view"  :class="{open:navMenu}">
      <router-view />
    </div>
  </div>
</template>

<script>
import AMap from '../amap/AMap'
import Cars from '../cars/Cars'
import NavBar from '@/components/NavBar'
export default {
  name: "Index",
  components: {
    AMap,Cars,NavBar
  },
  data() {
    return {
      map:null,
      isShow:false
    };
  },
  computed:{
    navMenu(){
      let route = this.$route.name !== 'Index' 
      return route
    }
  },
  watch:{
    // '$route':{
    //   handler(newVal){
    //     const routeName = newVal.name;
    //     this.isShow = 'Index' === routeName ? false : true
    //   }
      
    // }
  }
}
</script>
<style lang="scss" scope>
.index {
  height: 100vh;
}
.children-view{
  position: fixed;
  top: 0;
  // left: 0;
  right: -600px;
  z-index: 100;
  width: 410px;
  background-color: #34393f;
  height: 100vh;
  -webkit-transition: all .3s ease 0s;
  -moz-transition: all .3s ease 0s;
  -o-transition: all .3s ease 0s;
  transition: all .3s ease 0s;
  &.open{
    right: 0px;
  }
}

</style>
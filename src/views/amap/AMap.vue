<template>
  <div class="amap">
    <el-amap vid="amapDemo" ></el-amap>
  </div>
</template>

<script>
import { AMapManager, lazyAMapApiLoaderInstance } from "vue-amap";
export default {
  name: "AMap",
  components: {},
  data() {
    return {
      map:null,
    };
  },
  mounted() {
    lazyAMapApiLoaderInstance.load().then(() => {
      // your code ...
      this.map = new AMap.Map("amapDemo", {
        center: new AMap.LngLat(121.59996, 31.197646),
        zoom:13
      });
    });
  }
};
</script>
<style lang="scss" scope>
.amap {
  height: 100vh;
  .amap-demo {
    height: 100vh;
  }
}
</style>
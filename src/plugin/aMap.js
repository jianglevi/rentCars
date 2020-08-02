// 引入vue-amap
import Vue from "vue";
import AMap from 'vue-amap';
Vue.use(AMap);
 
// 初始化vue-amap
AMap.initAMapApiLoader({
  // 高德的key
  key: 'fa39537808b1b41c21dd781eed8caa35',
  // 插件集合 （插件按需引入）
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
});
<template>
  <div class="navbar">
      <ul class="nav_main">
          <li><i class="icon iconfont icon-wenhao"></i></li>
          <li><i class="icon iconfont icon-sousuo"></i></li>
          <li class="center">选择车辆</li>
          <li><i class="icon iconfont icon-dingwei"></i></li>
          <li><i class="icon iconfont icon-yonghu"></i></li>
      </ul>
  </div>
</template>

<script>
export default {
    name:'NavBar',
    data(){
        return{

        }
    }

}
</script>

<style lang='scss' scope>
@import '../styles/main.scss';
    .navbar{
        position: fixed;
        bottom: 25%;
        left: 0;
        right: 0;
        text-align: center;
        height: 80px;
    }
    .nav_main{
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
        li{
            margin: 20px;
            cursor: pointer;
        }
        .center{
                height: 44px;
                width: 100px;
                line-height: 44px;
                color: #FFF;
                border-radius: 20px;
                background-color: $color_main;
        }
    }
    .iconfont{
        font-size: 25px;
        color: #FFF;
        
    }
</style>
<template>
  <div>
    <div class="car-item">
      <header class="car-logo">
        <h4>
          <img src="~@/assets/images/cars-logo.png" alt="Mustang 2019款" />
          <span class="name">Mustang 2019款</span>
        </h4>
        <p>新能源汽车 5座</p>
      </header>
      <div class="car-content">
        <div class="info">
          <h4 class="car-number">粤 B7845NB</h4>
          <div class="car-info">
            <ul class="car-eletric active-li-8">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <div>
              约
              <span>600</span>KM
            </div>
          </div>
        </div>
        <img src="~@/assets/images/pic001.jpg" alt />
      </div>
      <footer>
        <a href="javasript:void();" class="parking-lot">广发停车场</a>
      </footer>
    </div>
    <div :style="'height:'+height+'px'" class="car-item car-item-detail" style="padding:20px">
      <div class="scroll_bar">
        <div class="car-title-detail">
          <h3>广发停车场</h3>
          <i class="close"></i>
        </div>
        <header class="car-logo">
          <h4>
            <img src="~@/assets/images/cars-logo.png" alt="Mustang 2019款" />
            <span class="name">Mustang 2019款</span>
          </h4>
          <p>新能源汽车 5座</p>
        </header>
        <div class="car-image">
          <img src="~@/assets/images/pic001.jpg" alt />
        </div>
        <div class="car-base-info">
          <h4 class="car-number">粤 B7845NB</h4>
          <div>
            约
            <span>600</span>KM
          </div>
        </div>
        <div class="car-bar">
          <div class="bar-container">
            <div class="bar-percent" style="width:80%"></div>
          </div>
        </div>
        <div class="explain">取车约支付12.0元停车费，实际补贴12.0元</div>
        <ul class="car-list">
          <li>
            <div>日租车</div>
            <div>￥300/1天</div>
          </li>
          <li>
            <div>3日租车</div>
            <div>￥499.00/3天</div>
          </li>
          <li>
            <div>5日租车</div>
            <div>￥799.00/5天</div>
          </li>
          <li>
            <div>小时租车</div>
            <div>￥99.00/1小时</div>
          </li>
        </ul>
        <div class="plause">
          <div>参保《全面保障服务》用车更放心</div>
          <div class="selected select">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    height: {
      type: String,
      default: "180"
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang='scss' scope>
@import "../styles/main.scss";
.plause{
  display: flex;
  justify-content:space-between;
  font-size: 14px;
  align-items: center;
  padding: 20px 0;
  .select{
    width: 20px;
    height: 20px;
    background-color: #EEE;
    border-radius: 50%;
    position: relative;
    &::after{
      content: '';
      display: block;
      position: absolute;
      width: 10px;
      height: 4px;
      border-left: 2px solid #fff;
      border-bottom: 2px solid #fff;
      top: 50%;
      left: 50%;
      transform:translate(-50%,-50%) rotate(-45deg)
    }
  }
  .selected{
    background-color: #000;
  }
}
.car-list {
  li {
    margin: 0 auto;
    background-color: #eee;
    display: flex;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 0 20px;
    align-items: center;
    width: 350px;
    height: 40px;
    justify-content: space-between;
    margin-bottom: 10px;
  }
}
.explain {
  padding-bottom: 20px;
  font-size: 14px;
  color: #aaa;
  text-align: center;
}
.car-bar {
  margin: 20px auto;
  padding: 10px;
  width: 350px;
  height: 10px;
  background-color: #fff;
  border-radius: 100px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  .bar-container {
    width: 100%;
    height: 100%;
    background-color: #ccc;
    border-radius: 100px;
    position: relative;
    .bar-percent {
      position: absolute;
      height: 100%;
      top: 0;
      left: 0;
      border-radius: 100px;
      background-color: #108dd9;
    }
  }
}
.car-base-info {
  display: flex;
  justify-content: space-between;
  car-number {
    font-weight: 600;
  }
  div {
    font-size: 12px;
    color: #aaa;
    span {
      font-size: 16px;
      font-weight: 600;
      color: #000;
    }
  }
}
.car-image {
  text-align: center;
  img {
    width: 90%;
  }
}
.car-title-detail {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  h3 {
    color: #333;
    font-size: 15px;
  }
  i {
    width: 20px;
    height: 20px;
    position: relative;
    &::before {
      content: "";
      display: block;
      height: 20px;
      width: 2px;
      background-color: #333;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      margin: auto;
      transform: rotate(-45deg);
    }
    &::after {
      content: "";
      display: block;
      height: 20px;
      width: 2px;
      background-color: #333;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      margin: auto;
      transform: rotate(45deg);
    }
  }
}
.car-item-detail {
  position: absolute;
  padding: 5px;
  bottom: 0;
  width: 422px;
  box-sizing: border-box;
}
.scroll_bar {
  padding: 10px;
  overflow: auto;
  width: 100%;
  height: 100%;
}
.scroll_bar::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 10px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}
.scroll_bar::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  // box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #EEE;
}
.scroll_bar::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  // box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background: #FFF;
}
.car-item {
  // width: 380px;
  // height: 250px;

  padding: 15px;
  background-color: #fff;
  margin: auto;
  border-radius: 24px;
  @include inclusiveKey(box-shadow, 0 0 10px 0 rgba(0, 0, 0, 0.2));
  @include inclusiveKey(box-sizing, border-box);
  header {
    h4 {
      display: flex;
      align-items: center;
      flex: 1;
    }
  }
}
.car-logo {
  display: flex;
  align-items: center;
  img {
    height: 24px;
    margin-right: 10px;
  }
  p {
    opacity: 0.5;
  }
}
.car-content {
  margin: 0 0 7px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    height: 80px;
  }
  .info {
    height: 100%;
    .car-number {
      font-size: 16px;
      margin-bottom: 10px;
    }
    .car-eletric {
      li {
        display: inline-block;
        width: 5px;
        height: 18px;
        margin-right: 3px;
        background-color: #e1e1e1;
        border-radius: 100px;
      }
      // .active{
      //     // background:linear-gradient(#17a8fa,#108dd9) ;
      //     @include inclusiveValue(background,linear-gradient(#17a8fa,#108dd9))
      // }
    }
    @for $i from 1 through 10 {
      .active-li-#{$i} {
        li:nth-child(-n + #{$i}) {
          @include inclusiveValue(
            background,
            linear-gradient(#17a8fa, #108dd9)
          );
        }
      }
    }
  }
}
.car-info {
  display: flex;
  position: relative;
  div {
    margin-left: 8px;
    font-size: 13px;
    color: #333;
    position: relative;
    bottom: -5px;
    right: 0;
    span {
      font-size: 20px;
      font-weight: 700;
      color: #000;
    }
  }
}
.parking-lot {
  display: block;
  border-top: 1px solid #ccc;
  color: $color-main;
  opacity: 0.8;
  font-size: 14px;
  margin-top: 8px;
  padding-top: 15px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    border-top: 1px solid #333;
    border-right: 1px solid #333;
    @include inclusiveKey(transform, rotate(45deg));
    right: 0;
    width: 10px;
    height: 10px;
    color: $color-main;
    opacity: 0.8;
    top: 15px;
  }
}
a {
  text-decoration: none;
}
</style>
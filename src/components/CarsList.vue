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
  </div>
</template>

<script>
export default {

};
</script>

<style lang='scss' scope>
@import '../styles/main.scss';
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
a{
    text-decoration: none;
}
</style>
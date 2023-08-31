<template>
  <view class="info--partial-info flex info--flex">
    <view class="info--partial-info__thumb animation info--animation fadeInLeft info--fadeInLeft">
      <image class="info--partial-info__thumbnail" mode="aspectFill"
        src="https://image.caiyunyi.com/camping/uploads/58/camp_img/20221212/8a41e0ce9cd19b8ef7b50bfd7925a1b0.jpg?imageView2/1/w/260/h/360">
      </image>
    </view>
    <view class="info--partial-info__meta flex__auto info--flex__auto animation info--animation fadeInUp info--fadeInUp">
      <view class="info--partial-info__name otw info--otw">太湖湾露营</view>
      <view class="info--partial-info__author otw info--otw"><text>太湖湾</text></view>
      <view class="info--partial-info__property flex info--flex">
        <view><text>设施1</text></view>
      </view>
      <view class="info--partial-info__property flex info--flex fwap info--fwap">
        <view><text>烧烤设备</text></view>
        <view><text>餐厅</text></view>
        <view><text>咖啡厅</text></view>
        <view><text>WIFI</text></view>
      </view>
      <view class="info--component__bot flex info--flex">
        <view class="flex__auto info--flex__auto"><text class="unit info--unit thought info--thought">
            ¥100.00</text>
          <view class="info--component__bot__price t-gp info--t-gp d info--d">
            <text>¥</text><text class="bold info--bold">99.00 /位</text>
          </view>
        </view>
        <view class="info--component__bot__reduce">-</view>
        <view class="info--component__bot__num d info--d">1</view>
        <view class="info--component__bot__increase disable info--disable">+</view>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  options: {
    styleIsolation: 'shared'
  }
}
</script>
<style lang="scss" scoped>
.info--partial-info {
  align-items: center;
  position: relative;
  z-index: 1;

  &__thumb {
    border-radius: 8px;
    box-shadow: 0 0 30px #303030;
    height: 180px;
    min-width: 125px;
    position: relative;
    width: 130px
  }

  &__thumbnail {
    border-radius: 8px;
    height: 100%;
    width: 100%
  }

  &__corner {
    height: 15px;
    left: 0;
    position: absolute;
    top: 0;
    width: 32px
  }

  &__robbin {
    bottom: 10px;
    height: 15px;
    left: 10px;
    position: absolute;
    width: 28px
  }

  &__meta {
    height: 180px;
    margin-left: 12px;
    padding-top: 8px;
    position: relative
  }

  &__name {
    font-size: 19px;
    font-weight: 700;
    margin-bottom: 7px
  }

  &__author {
    margin-bottom: 12px;

    & text {
      font-size: 13px;
      font-weight: 500;
      opacity: .6
    }

    & image {
      height: 16px;
      margin-right: 3px;
      width: 16px
    }
  }


  &__property {
    margin-bottom: 6px;

    & view {
      border: 1px solid #aeabb7;
      border-radius: 5px;
      font-size: 9px;
      font-weight: 500;
      line-height: 1.75;
      margin-bottom: 3px;
      margin-right: 10px;
      padding: 0 5px
    }

    & view:last-child {
      margin-right: 0
    }

    & view text {
      opacity: .6
    }

    & view image {
      height: 11px;
      margin-right: 3px;
      vertical-align: -1px;
      width: 11px
    }
  }


  &__price {
    &__price view {
      display: inline-block;
      font-weight: 700;
      margin-right: 10px;

      & .info--unit {
        font-size: 11px
      }

      & .info--r {
        font-size: 18px;
        margin: 0 1px;
        vertical-align: -1px
      }

      & image {
        height: 14px;
        margin-right: 1px;
        vertical-align: -3px;
        width: 14px
      }

      &:last-child {
        margin-right: 0
      }
    }

    .info--question {
      height: 20px;
      opacity: .5;
      width: 20px
    }
  }

  &__action {
    bottom: 4px;
    left: 0;
    position: absolute
  }

  &__action button {
    color: #fff;
    display: inline-block;
    line-height: 1;
    padding: 8px 16px;
    position: relative
  }

  &__action button view {
    background: var(--darkness);
    height: 100%;
    left: 0;
    opacity: .5;
    position: absolute;
    top: 0;
    width: 100%
  }

  &__action button image {
    height: 14px;
    margin-right: 6px;
    position: relative;
    vertical-align: -1px;
    width: 16.66px
  }

  &__action button text {
    font-size: 12px;
    font-weight: 500;
    opacity: .8;
    position: relative;
    vertical-align: 1px
  }

  &__action button:last-child {
    margin-left: 15px
  }

  &__action button:last-child image {
    height: 14px;
    width: 14px
  }

  &__played {
    align-items: center;
    border-radius: 6px;
    bottom: 4px;
    display: flex;
    left: 0;
    overflow: hidden;
    padding: 10px 15px;
    position: absolute;
    width: 100%
  }

  &__played__bg {
    background: var(--darkness);
    height: 100%;
    left: 0;
    opacity: .5;
    position: absolute;
    top: 0;
    width: 100%
  }

  &__played__left {
    flex: auto;
    position: relative
  }

  &__played__left text {
    font-size: 12px;
    font-weight: 700;
    margin-right: 6px;
    vertical-align: 2px
  }

  &__played__right {
    position: relative
  }

  &__played__right image {
    height: 11px;
    opacity: .3;
    vertical-align: 1px;
    width: 11px
  }
}

.info--component__bot {
  bottom: 0;
  left: 0;
  position: absolute;
  width: 100%;

  &__price {
    display: inline-block;

    & text {
      font-size: 11px;
      margin-right: 1px;

      &.info--bold {
        font-size: 12px;
        font-weight: 700
      }
    }
  }

  &__reduce {
    border: 1px solid #55b6c8;
    border-radius: 6px;
    font-size: 16px;
    font-weight: 700;
    height: 20px;
    line-height: 17px;
    text-align: center;
    width: 20px
  }

  &__num {
    font-size: 13px;
    font-weight: 500;
    text-align: center;
    width: 30px
  }

  &__increase {
    background: linear-gradient(90deg, #55e9bc, #55b6c8);
    border-radius: 6px;
    color: #232326;
    font-size: 16px;
    font-weight: 700;
    height: 20px;
    line-height: 17px;
    text-align: center;
    width: 20px
  }
}



.info--unit {
  font-size: 12px;
  margin-right: 5px;

  &.info--thought {
    color: #888;
    font-weight: 400;
    margin-left: 4px;
    text-decoration: line-through
  }
}
</style>
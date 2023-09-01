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
    border-radius: 16rpx;
    box-shadow: 0 0 60rpx #303030;
    height: 340rpx;
    min-width: 250rpx;
    position: relative;
    width: 260rpx;
  }

  &__thumbnail {
    border-radius: 16rpx;
    height: 100%;
    width: 100%
  }

  &__corner {
    height: 30rpx;
    left: 0;
    position: absolute;
    top: 0;
    width: 64rpx
  }

  &__robbin {
    bottom: 20rpx;
    height: 30rpx;
    left: 20rpx;
    position: absolute;
    width: 216rpx
  }

  &__meta {
    height: 340rpx;
    margin-left: 24rpx;
    padding-top: 16rpx;
    position: relative
  }

  &__name {
    font-size: 38rpx;
    font-weight: 700;
    margin-bottom: 14rpx;
  }

  &__author {
    margin-bottom: 24rpx;

    & text {
      font-size: 26rpx;
      font-weight: 500;
      opacity: .6
    }

    & image {
      height: 32rpx;
      margin-right: 6rpx;
      width: 32rpx;
    }
  }


  &__property {
    margin-bottom: 12rpx;

    & view {
      border: 2rpx solid #aeabb7;
      border-radius: 10rpx;
      font-size: 18rpx;
      font-weight: 500;
      line-height: 2.5;
      margin-bottom: 6rpx;
      margin-right: 20rpx;
      padding: 0 10rpx
    }

    & view:last-child {
      margin-right: 0
    }

    & view text {
      opacity: .6
    }

    & view image {
      height: 22rpx;
      margin-right: 6rpx;
      vertical-align: -2rpx;
      width: 22rpx
    }
  }


  &__price {
    &__price view {
      display: inline-block;
      font-weight: 700;
      margin-right: 20rpx;

      & .info--unit {
        font-size: 22rpx
      }

      & .info--r {
        font-size: 116rpx;
        margin: 0 2rpx;
        vertical-align: -2rpx
      }

      & image {
        height: 28rpx;
        margin-right: 2rpx;
        vertical-align: -6rpx;
        width: 28rpx
      }

      &:last-child {
        margin-right: 0
      }
    }

    .info--question {
      height: 40rpx;
      opacity: .5;
      width: 40rpx
    }
  }

  &__action {
    bottom: 8rpx;
    left: 0;
    position: absolute
  }

  &__action button {
    color: #fff;
    display: inline-block;
    line-height: 1;
    padding: 16rpx 32rpx;
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
    height: 28rpx;
    margin-right: 12rpx;
    position: relative;
    vertical-align: -2rpx;
    width: 33.32rpx
  }

  &__action button text {
    font-size: 24rpx;
    font-weight: 500;
    opacity: .8;
    position: relative;
    vertical-align: 2rpx
  }

  &__action button:last-child {
    margin-left: 30rpx
  }

  &__action button:last-child image {
    height: 28rpx;
    width: 28rpx
  }

  &__played {
    align-items: center;
    border-radius: 12rpx;
    bottom: 8rpx;
    display: flex;
    left: 0;
    overflow: hidden;
    padding: 20rpx 30rpx;
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
    font-size: 24rpx;
    font-weight: 700;
    margin-right: 12rpx;
    vertical-align: 4rpx
  }

  &__played__right {
    position: relative
  }

  &__played__right image {
    height: 22rpx;
    opacity: .3;
    vertical-align: 2rpx;
    width: 22rpx
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
      font-size: 22rpx;
      margin-right: 2rpx;

      &.info--bold {
        font-size: 24rpx;
        font-weight: 700
      }
    }
  }

  &__reduce {
    border: 2rpx solid #55b6c8;
    border-radius: 12rpx;
    font-size: 32rpx;
    font-weight: 700;
    height: 40rpx;
    line-height: 34rpx;
    text-align: center;
    width: 40rpx
  }

  &__num {
    font-size: 26rpx;
    font-weight: 500;
    text-align: center;
    width: 60rpx;
  }

  &__increase {
    background: linear-gradient(90deg, #55e9bc, #55b6c8);
    border-radius: 12rpx;
    color: #232326;
    font-size: 32rpx;
    font-weight: 700;
    height: 40rpx;
    line-height: 34rpx;
    text-align: center;
    width: 40rpx;
  }
}



.info--unit {
  font-size: 24rpx;
  margin-right: 5px;

  &.info--thought {
    color: #888;
    font-weight: 400;
    margin-left: 8rpx;
    text-decoration: line-through
  }
}
</style>
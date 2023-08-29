<template>
  <view class="">
    <view class="card--component flex">
      <image class="card--component__thumbnail" src="/static/partial-card.jpg" mode="aspectFill" role="img"></image>
      <view class="card--component__meta flex__auto">
        <view class="card--component__name">巴旦木</view>
        <view class="card--component__info">库存 540</view>
        <view class="user__tags card--user__tags">
        </view>
        <view class="card--component__bot flex">
          <view class="flex__auto">
            <view class="card--component__bot__price t-gp card--t-gp d card--d">
              <text>¥</text>
              <text class="bold card--bold">0.03</text>
            </view>
          </view>
          <view class="card--component__tag">
            选规格
          </view>
          <view class="card--component__bot__reduce">-</view>
          <view class="card--component__bot__num">
            3
          </view>
          <view class="card--component__bot__increase">+</view>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
</script>
<style lang="scss" scoped>
.card--component {
  color: hsla(0, 0%, 100%, .9);
  line-height: 1;
  margin-bottom: 60rpx;

  &__thumbnail {
    border-radius: 8rpx;
    height: 180rpx;
    width: 180rpx;
  }

  &__meta {
    height: 170rpx;
    margin-left: 20rpx;
    position: relative;
  }

  &__name {
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    font-size: 28rpx;
    font-weight: 700;
    line-height: 40rpx;
    margin-bottom: 16rpx;
    opacity: .9;
    overflow: hidden;
  }

  &__info {
    font-size: 22rpx;
    margin-bottom: 10rpx;
    opacity: .5;
  }

  &__bot {
    bottom: 0;
    left: 0;
    position: absolute;
    width: 100%;

    &__price {
      display: inline-block;
    }

    &__price text {
      font-size: 22rpx;
      margin-right: 2px;
    }

    &__price text.card--bold {
      font-size: 30rpx;
      font-weight: 700;
    }
  }

  &__tag {
    background: linear-gradient(90deg, #55e9bc, #55b6c8);
    border-radius: 12rpx;
    color: #232326;
    font-size: 24rpx;
    height: 40rpx;
    line-height: 40rpx;
    padding: 0 6rpx;
  }
}

.card--component__bot {
  &__reduce {
    border: 2rpx solid #55b6c8;
    border-radius: 12rpx;
    font-size: 32rpx;
    font-weight: 700;
    height: 40rpx;
    line-height: 36rpx;
    text-align: center;
    width: 40rpx;
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

.t-gp,
.t-gy {
  color: transparent !important;
}

.flex {
  display: flex;
  align-items: center;
}
</style>
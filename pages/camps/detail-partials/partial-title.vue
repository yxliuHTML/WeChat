<template>
  <view class="">
    <scroll-view class="damned" style="height: 100vh;white-space: nowrap;" :scroll-y="true" refresher-enabled="true"
      :refresher-triggered="triggered" :refresher-threshold="100" refresher-background="#232326"
      @refresherrefresh="onRefresh" @refresherrestore="onRestore">
      <view class="container" style="padding-top: 75px; scroll-snap-align: none;">
        <view class="container__gradient"></view>
        <image class="" src="https://static.deerscript.com/uploads/2021-09-09/6139c9daeec53.png"
          style="position: absolute; left: 0; top: 0; width: 100%;"></image>
        <PartialInfo></PartialInfo>
        <view class="calendar fwb">
          <view class="left flex-center">
            <view class="t1">周四入营</view>
            <view class="t2">08月31日</view>
          </view>
          <view class="center">
            <view class="t1">共 1
              天</view>
          </view>
          <view class="right flex-center">
            <view class="t1">周四离营</view>
            <view class="t2">08月31日</view>
          </view>
        </view>
        <!-- 套餐说明 -->
        <DetailDesc></DetailDesc>
        <!-- 套餐说明 end-->
        <!-- 图片详情 -->
        <view class="margin-top30">
          <image class="info_image radius" mode="widthFix"
            src="https://image.caiyunyi.com/camping/uploads/20/camp_img/20221117/9e054c48baad6e1ab5d9f707017fe481.jpg"
            role="img" style="height: 459.681px;">
          </image>
        </view>
        <!-- 图片详情 end -->
        <!-- 须知 -->
        <DetailNotice></DetailNotice>
        <!-- 须知 end-->
      </view>
    </scroll-view>
    <view class="container__toolbar flex active">
      <view class="container__toolbar__bg"></view>
      <view class="circle">
        <image src="@/static/circle_friends.png">
        </image>
        <view>海报</view>
      </view>
      <view class="circle">
        <image src="@/static/link.png">
        </image>
        <view>链接</view>
      </view>
      <button class="flex__auto primary">立即预定</button>
      <button class="flex__auto green">
        <text>分享</text>
        <image src="/static/arrow-right-l.png">
        </image>
      </button>
    </view>
  </view>
</template>
<script>
import PartialInfo from './partial-info.vue'
import DetailDesc from './detail-desc.vue'
import DetailNotice from './detail-notice.vue'
export default {
  options: {
    styleIsolation: 'shared'
  },
  components: {
    PartialInfo,
    DetailDesc,
    DetailNotice
  },
  data() {
    return {
      freshing: false,
      triggered: true,
    }
  },
  onLoad() {
    // this.freshing = false;
    // setTimeout(() => {
    //   this.triggered = true;
    // }, 500)
  },
  methods: {
    onRefresh() {
      if (this.freshing) return;
      this.freshing = true;
      setTimeout(() => {
        this.triggered = false;
        this.freshing = false;
      }, 1500)
    },
    onRestore() {
      this.triggered = 'restore'; // 需要重置
    },
  }
}
</script>
<style lang="scss" scoped>
.damned {
  background: $--primary
}

.container {
  color: hsla(0, 0%, 100%, .9);
  padding: 30rpx 30rpx 240rpx;
  position: relative
}

.container__gradient {
  background: linear-gradient(to bottom, $--bright, $--primary);
  left: 0;
  position: absolute;
  top: 0;
  width: 100%
}

.container__boxable {
  margin: 50rpx 0;
  position: relative;
  z-index: 2
}

.container__boxable__title {
  font-size: 32rpx;
  font-weight: 700;
  margin-bottom: 30rpx
}

.container__boxable__title__q {
  height: 36rpx;
  margin-left: 6rpx;
  opacity: .5;
  vertical-align: -8rpx;
  width: 36rpx
}

.container__boxable__title__right {
  opacity: .3
}

.container__boxable__title__right image {
  height: 20rpx;
  width: 20rpx
}

.container__boxable__title__right text {
  font-size: 24rpx;
  margin: 0 4rpx
}

.container__card {
  background: $--darkness;
  border-radius: 20rpx;
  margin: 50rpx 0;
  padding: 24rpx;
  position: relative;
  z-index: 2
}

.container__card__title {
  border-bottom: 2rpx solid hsla(0, 0%, 100%, .05);
  margin-bottom: 30rpx;
  padding-bottom: 30rpx
}

.container__card__title__left {
  font-size: 30rpx;
  font-weight: 700
}

.container__card__title__right {
  opacity: .3
}

.container__card__title__right text {
  font-size: 24rpx;
  margin: 0 2rpx
}

.container__card__title__right image {
  height: 18rpx;
  width: 18rpx
}

.container__toolbar {
  bottom: 0;
  left: 0;
  padding: 40rpx 40rpx 60rpx;
  position: fixed;
  transform: translate(0, 100%);
  transition: all .5s ease;
  width: 100%;
  box-sizing: border-box;
}

.container__toolbar.active {
  transform: translate(0, 0)
}

.container__toolbar__bg {
  background: $--darkness;
  border-radius: 40rpx 40rpx 0 0;
  border-top: 2rpx solid $--primary;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%
}

.container__toolbar .circle {
  margin-right: 50rpx;
  position: relative;
  text-align: center;
  z-index: 1
}

.container__toolbar .circle image {
  height: 48rpx;
  margin-bottom: 16rpx;
  width: 48rpx
}

.container__toolbar .circle view {
  color: hsla(0, 0%, 100%, .6);
  font-size: 22rpx;
  font-weight: 500
}

.container__toolbar button {
  color: hsla(0, 0%, 100%, .9);
  display: inline-block;
  font-size: 28rpx;
  font-weight: 700;
  line-height: 48px;
  padding: 0 40rpx
}

.container__toolbar button.primary {
  background: #55b6c8;
  box-shadow: 0 6rpx 40rpx 0 rgba(32, 210, 209, .2)
}

.container__toolbar button.green {
  background: #57bd6a;
  box-shadow: 0 20rpx 40rpx 0 rgba(87, 189, 106, .2);
  margin-left: 40rpx
}

.container__toolbar button.green image {
  height: 28rpx;
  margin-left: 16rpx;
  vertical-align: -4rpx;
  width: 28rpx
}

.page-container {
  background: $--primary;
  color: #fff;
  height: 100vh;
  padding-bottom: 240rpx;
  position: relative;
  width: 100%;
  z-index: 99999
}

.calendar {
  background: rgba(0, 0, 0, .2);
  border-radius: 12rpx;
  margin-top: 52rpx;
  padding: 20rpx
}

.calendar .left,
.calendar .right {
  flex-direction: column
}

.calendar .left .t1,
.calendar .right .t1 {
  color: #999;
  font-size: 24rpx
}

.calendar .left .t2,
.calendar .right .t2 {
  color: #fff;
  font-size: 30rpx;
  margin-top: 14rpx
}

.van-calendar {
  color: #000
}

.margin-top30 {
  margin-top: 30rpx
}

.info_image {
  width: 100%
}

.l_card {
  background: rgba(0, 0, 0, .2)
}

.l_card .tit {
  font-size: 26rpx
}

.l_card .container_brief {
  font-size: 24rpx;
  height: 20rpx;
  letter-spacing: 2rpx;
  line-height: 20rpx;
  margin-top: 20rpx
}

.fwb {
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}

.center {
  align-items: center;
}

.flex-center {
  justify-content: center;
}
</style>
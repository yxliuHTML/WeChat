<template>
  <view class="notice--container__boxable">
    <view class="notice--container__boxable__title">
      <view class="flex__auto notice--flex__auto t1 notice--t1"><text>入营须知</text></view>
      <view class="notice--content fwb notice--fwb">
        <view class="notice--content_t1">倡导无痕露营</view>
        <view class="notice--content_t2">更多</view>
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
.notice--container__boxable {
  margin: 25px 0;
  position: relative;
  z-index: 2;
}

.notice--container__boxable__title {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 15px;
}

.notice--container__boxable__title .notice--t1 {
  width: 100%
}

.notice--container__boxable__title .notice--content {
  margin-top: 10px
}

.notice--container__boxable__title .notice--content_t1 {
  color: #cdcdcd;
  font-size: 12px
}

.notice--container__boxable__title .notice--content_t2 {
  color: #fff;
  font-size: 12px
}

.notice--partial-video {
  white-space: nowrap
}

.notice--partial-video wx-view {
  display: inline-block;
  height: 100%;
  padding-right: 20px;
  width: 100%
}

.notice--partial-video wx-view wx-video {
  border-radius: 10px;
  height: 100%;
  width: 100%
}

.fwb {
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}
</style>

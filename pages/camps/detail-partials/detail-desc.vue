<template>
  <view class="desc--container__boxable">
    <view class="desc--container__boxable__title">
      <view class="flex__auto desc--flex__auto t1 desc--t1"><text>套餐说明</text></view>
      <view class="desc--content fwb desc--fwb">
        <text class="desc--content_t1">营地简介</text>
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
.desc--container__boxable {
  margin: 25px 0;
  position: relative;
  z-index: 2;
}


.desc--container__boxable__title .desc--t1 {
  width: 100%
}

.desc--container__boxable__title .desc--content {
  margin-top: 10px
}

.desc--container__boxable__title .desc--content_t1 {
  color: #cdcdcd;
  font-size: 12px;
  line-height: 17px
}

.desc--container__boxable__title .desc--content_t2 {
  color: #fff;
  font-size: 12px
}

.desc--partial-video {
  white-space: nowrap
}

.desc--partial-video view {
  display: inline-block;
  height: 100%;
  padding-right: 20px;
  width: 100%
}

.desc--partial-video view video {
  border-radius: 10px;
  height: 100%;
  width: 100%
}
</style>

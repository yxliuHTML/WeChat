<template>
  <view>
    <view class="modal eva--modal eva--visible" :class="isclose ? 'visible' : ''" hover-stop-propagation="">
      <view class="modal__title eva--modal__title flex eva--flex">
        <view class="flex__auto eva--flex__auto">
          <view class="otw eva--otw">授权手机号</view>
        </view>
        <view class="close eva--close" @click="close"><text class="i eva--i i-close eva--i-close"></text></view>
      </view>
      <view class="modal__body eva--modal__body">
        <view class="mb4">便于店家在组队成功时通知您~</view>
        <view class="form__block">
          <view class="form__field">
            <view class="re">手机号</view>
            <view class="form__field__details">
              <input placeholder="请输入您的手机号" v-model="Value" />
            </view>
          </view>
        </view>
      </view>
      <view class="modal__bottom eva--modal__bottom promise eva--promise">
        <button @click="close">取消</button>
        <button style="color: #55b6c8;" @click="mandate">立即授权</button>
      </view>
    </view>
    <view v-if="isclose" class="modal__mask" @click="close"></view>
  </view>
</template>

<script>
export default {
  options: {
    styleIsolation: 'shared'
  },
  components: {
  },
  data() {
    return {
      isclose: false,
      Value: ''
    }
  },
  onLoad() {
  },
  methods: {
    close() {
      this.isclose = !this.isclose
    },
    mandate() {
      
    }
  }
}
</script>

<style lang="scss" scoped>
.form__field__title {
  background: #3b3a40;
}

.eva--modal__body {
  color: hsla(0, 0%, 100%, .7);
  font-size: 28rpx;
  line-height: 1.75
}

.eva--modal__bottom.eva--promise {
  align-items: center;
  display: flex
}

.eva--modal__bottom.eva--promise button {
  width: 50%
}

.mb4 {
  margin-bottom: 8rpx;
}
</style>
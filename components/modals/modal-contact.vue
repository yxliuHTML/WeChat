<template>
  <view>
    <view class="modal hidden" :class="isclose ? 'visible' : ''">
      <view class="modal__title flex">
        <view class="flex__auto">
          <view>联系门店</view>
          <view class="sub">请联系客服微信</view>
        </view>
        <view class="close" @click="close"><text class="i i-close"></text></view>
      </view>
      <scroll-view scroll-y="" class="modal__body">
        <view class="wx-scroll-view">
          <view style="overflow: hidden auto; scroll-snap-type: none;"
            class="wx-scroll-view wx-scroll-view-hide-scrollbar">
            <view style="height: 100%;">
              <view style="padding: 30rpx; scroll-snap-align: none;">
                <view class="modal__qrcode">
                  <view>长按二维码即可添加店家微信</view>
                  <image mode="widthFix"
                    src="https://image.caiyunyi.com/camping/uploads/20/qrcode/mp/20221206/424fe1b8da7531ffd8eee5113191d220.jpg"
                    role="img" style="height: 425.866px;">
                  </image>
                  <view style="height: 95px;"></view>
                </view>
                <view class="modal__actions flex">
                  <button class="flex__auto green">
                    <image src="/static/wechat.png" role="img">
                    </image><text>复制微信号</text>
                  </button>
                  <button class="flex__auto">
                    <text>拨打电话</text>
                    <image src="/static/tel.png" role="img"></image>
                  </button>
                </view>
              </view>
            </view>
          </view>
        </view>
      </scroll-view>
    </view>
    <view v-if="isclose" class="modal__mask"></view>
  </view>
</template>
<script>
import yCard from '@/components/y-card.vue'
export default {
  options: {
    styleIsolation: 'shared'
  },
  components: {
    yCard
  },
  data() {
    return {
      isclose: false
    }
  },
  onLoad() {
  },
  methods: {
    close() {
      this.isclose = !this.isclose
    }
  }
}
</script>
<style lang="scss" scoped>
.modal.visible {
  transform: translateY(0);
  transition: transform .3s;
  background: #232326;
}

.modal__body {
  max-height: 72.5vh;
  overflow: scroll;
  padding: 0 0 env(safe-area-inset-bottom)
}

.modal__qrcode {
  padding: 30rpx;

  image {
    border-radius: 20rpx;
    width: 100%
  }
}

.modal__qrcode view {
  margin-bottom: 30rpx
}

.modal__empty,
.modal__qrcode view {
  font-size: 24rpx;
  opacity: .4;
  text-align: center
}

.modal__empty {
  padding: 80rpx 0 200rpx
}

.modal__actions {
  background: #232326;
  bottom: 0;
  left: 0;
  padding: 30rpx 60rpx 70rpx;
  position: fixed;
  width: 100%;
  z-index: 1;
  box-sizing: border-box;
}

.modal__actions button {
  background: #55b6c8;
  box-shadow: 0 20rpx 40rpx 0 rgba(101, 208, 207, .2);
  color: hsla(0, 0%, 100%, .9);
  font-size: 28rpx;
  font-weight: 700;
  line-height: 96rpx;
  margin: 0 40rpx 0 0;
  width: auto;

  image {
    height: 36rpx;
    margin-left: 8rpx;
    margin-right: -8rpx;
    vertical-align: -8rpx;
    width: 36rpx
  }
}

.modal__actions button:last-child {
  margin-right: 0
}

.modal__actions button.green {
  background: #57bd6a;
  box-shadow: 0 20rpx 40rpx 0 rgba(87, 189, 106, .2);

  image {
    margin-left: -8rpx;
    margin-right: 8rpx
  }
}
</style>

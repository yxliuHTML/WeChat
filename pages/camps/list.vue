<template>
  <scroll-view class="container" :style="{ paddingTop: iStatusBarHeight + 'px' }" @scroll="onScroll" id="scroller" scroll-y="true" refresher-enabled="true"
    :refresher-triggered="triggered" :refresher-threshold="100" refresher-background="#232326"
    @refresherrefresh="onRefresh" @refresherrestore="onRestore">
    <yCard ref="yCard"></yCard>
  </scroll-view>
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
      triggered: false,
      _freshing: false,
    }
  },
  computed: {
    iStatusBarHeight() {
      let iStatusBarHeight = uni.getSystemInfoSync().statusBarHeight;
      return iStatusBarHeight
    }
  },
  onLoad() {
    this._freshing = false;
    setTimeout(() => {
      this.triggered = true;
    }, 500)
  },
  methods: {
    onScroll(e) {
      this.$refs.yCard.getElInfo()
    },
    onRefresh() {
      if (this._freshing) return;
      this._freshing = true;
      setTimeout(() => {
        this.triggered = false;
        this._freshing = false;
      }, 1500)
    },
    onRestore() {
      this.triggered = 'restore'; // 需要重置
    },
  }
}
</script>
<style lang="scss" scoped>
.container {
  padding: 0rpx 20rpx 240rpx;
  box-sizing: border-box;
  white-space: nowrap;
  height: 100vh;
}
</style>

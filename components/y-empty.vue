<template>
  <view class="empty--empty">
    <image src="/static/empty.png" role="img">
    </image>
    <view class="empty--empty-text">暂无相关数据</view>
  </view>
</template>

<script>
export default {
  props: {
    current: {
      type: Number,
      default: 0
    },
    values: {
      type: Array,
      default() {
        return ['点单', '我的订单']
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  watch: {
    current(val) {
      if (val !== this.currentIndex) {
        this.currentIndex = val
      }
    }
  },
  created() {
    this.currentIndex = this.current
  },
  methods: {
    _onClick(index) {
      if (this.currentIndex !== index) {
        this.currentIndex = index
        this.$emit('clickItem', {
          currentIndex: index
        })
      }
    }
  }
}
</script>

<style lang="scss">
.empty--empty {
  padding: 80px 0;
  text-align: center;

  image {
    height: 150px;
    margin-bottom: 15px;
    opacity: .5;
    width: 150px;
  }

  &-text {
    font-size: 12px;
    margin: 0 10px;
    opacity: .4;
    vertical-align: -3px;
  }
}
</style>
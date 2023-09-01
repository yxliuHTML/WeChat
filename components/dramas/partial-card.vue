<template>
  <view class="y-card" @click.stop="toCamps">
    <u-image :src="item.src" width="75px" height="105px" radius="8"></u-image>
    <view class="y-card-meta">
      <view class="card-name">{{ item.title }}</view>
      <view class="mb-2">
        <view class="y-card-tag" v-for="(tags, index) in item.sceneryList" :key="index">
          {{ tags.name }}
        </view>
      </view>
      <view class="mb-2">
        <view class="y-card-tag" v-for="(tags, index) in item.sceneryList" :key="index">
          {{ tags.name }}
        </view>
      </view>
      <view class="y-card-bottom">
        <view class="y-card-atter">{{ item.info }}</view>
        <view class="y-card-price t-gp">
          <span>￥</span>
          <span class="card-price">{{ item.price }}</span>
          <span>/位</span>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  name: 'PartialCard',
  options: {
    styleIsolation: 'shared'
  },
  emits: ['click'],
  props: {
    item: {
      type: Object,
      default: {}
    },
  },
  data() {
    return {
      icons: icons.glyphs
    }
  },
  computed: {
    unicode() {
      let code = this.icons.find(v => v.font_class === this.type)
      if (code) {
        return unescape(`%u${code.unicode}`)
      }
      return ''
    },
    iconSize() {
      return getVal(this.size)
    }
  },
  methods: {
    _onClick() {
      this.$emit('click')
    },
    toCamps() {
      uni.navigateTo({
        url: `/pages/camps/detail-partials/partial-title`
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.y-card {
  background: #2f2e33;
  border-radius: 20rpx;
  margin-bottom: 30rpx;
  padding: 20rpx;
  display: flex;

  &-meta {
    margin-left: 20rpx;
    flex: 1;

    .card-name {
      color: #ffffffe6;
      font-size: 32rpx;
      font-weight: 700;
      margin-bottom: 20rpx;
    }
  }

  &-tag {
    white-space: nowrap;
    border-radius: 6rpx;
    display: inline-block;
    font-size: 22rpx;
    font-weight: 500;
    margin-right: 12rpx;
    padding: 10rpx 12rpx;
    background: #ffffff0d;
    color: #ffffff80;
    line-height: 1;
  }

  &-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    font-size: 24rpx;
    margin-top: 20rpx;
  }

  &-atter {
    flex: auto;
    color: #ffffffe6;
    opacity: .5;
  }

  &-price {
    color: #55b6c8;
  }
}

@media(prefers-color-scheme:dark) {
  .component__tags view {
    background: hsla(0, 0%, 100%, .05);
    color: hsla(0, 0%, 100%, .5)
  }
}
</style>

<template>
  <scroll-view scroll-y="" class="damned">
    <view class="wx-scroll-view">
      <view style="overflow: hidden auto; scroll-snap-type: none;" class="wx-scroll-view wx-scroll-view-hide-scrollbar">
        <view style="height: 100%;">
          <view style="scroll-snap-align: none;">
            <view class="stores">
              <view class="store flex card">
                <image class="store__thumbnail" mode="aspectFill"
                  src="https://image.caiyunyi.com/camping/uploads/13/camp_img/20220926/bb5c0a955e338a85c912db9369ff0652.jpg"
                  role="img">
                </image>
                <view class="store__meta flex__auto">
                  <view class="store__name otw">次元露营地</view>
                  <view class="container__tags container_brief">
                    <scroll-view scroll-x="" class="container__nodes padding_over">
                      <view>荔枝采摘</view>
                      <view>露天电影</view>
                      <view>研学团建</view>
                      <view>自助烧烤</view>
                      <view>萤火虫童心瓶</view>
                      <view>特色下午茶</view>
                    </scroll-view>
                  </view>
                  <view class="store__address otw">
                    <view class="i i-location"></view><text>江苏省无锡市梁溪区中山路华联商厦B座401</text>
                  </view>
                </view>
                <icon class="store__check" color="#55b6c8" size="18px" type="success" role="img">
                </icon>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </scroll-view>
</template>
<script>
</script>
<style lang="scss" scoped>
.damned {
  height: 100vh;
  overflow: scroll;
}

.stores {
  padding: 10px;
}

.card {
  background: #2f2e33;
  border-radius: 10px;
  margin-bottom: 15px;
  padding: 10px;
  align-items: center;
}

.stores .store__thumbnail {
  border-radius: 50px;
  height: 55px;
  width: 55px;
}

.stores .store__meta {
  margin-left: 10px;
}

.stores .store__name {
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 10px;
}

.otw {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.container__tags {
  box-sizing: border-box;
  font-size: 10px;
}

.container_brief {
  margin-top: 10px;
}

.stores .store__address {
  font-size: 11px;
  opacity: .4;
}

.container__tags view {
  background: #f4f4f4;
  border: 1px solid transparent;
  border-radius: 4px;
  color: #8c8c8d;
  display: inline-block;
  font-weight: 500;
  margin: 3px 5px 3px 0px;
  padding: 2px 5px;
  transition: all .3s ease;
  vertical-align: middle;
}

.stores .store__address {
  font-size: 11px;
  opacity: .4;
}

.stores .store__check {
  margin-left: 10px;
}

.container__tags view {
  background: hsla(0, 0%, 100%, .05);
  color: hsla(0, 0%, 100%, .4);
  border: 1px solid transparent;
  border-radius: 4px;
  display: inline-block;
  font-weight: 500;
  margin: 3px 5px 3px 0px;
  padding: 2px 5px;
  transition: all .3s ease;
  vertical-align: middle;
}
</style>
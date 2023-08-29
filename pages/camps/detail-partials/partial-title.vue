<template>
  <view class="">
    <scroll-view refresher-enabled="" scroll-y="" class="damned" refresher-default-style="white">
      <view class="wx-scroll-view">
        <view style="overflow: hidden auto; scroll-snap-type: none;" class="wx-scroll-view wx-scroll-view-hide-scrollbar">
          <!-- <refresher-impl default-style="white" threshold="55" background=""> -->
          <view style="width: 100%; height: 844px; position: absolute; top: -844px; transform: translateY(0px);"
            class="wx--refresher--container--private">
            <view style="position: absolute; bottom: 0; left: 0; width: 100%; height: 75px;">
              <view
                style="width: 100%; height: 100%; max-height: 53px; display: flex; align-items: flex-end; justify-content: center;">
                <view class="wx-refresher-default-dot wx-refresher-default-white wx-refresher-default-dot-1-fold"
                  style="transform: translateX(-1px);"></view>
                <view class="wx-refresher-default-dot wx-refresher-default-white"></view>
                <view class="wx-refresher-default-dot wx-refresher-default-white wx-refresher-default-dot-3-fold"
                  style="transform: translateX(1px);"></view>
              </view>
            </view>
          </view>
          <!-- </refresher-impl> -->
          <view class="wx--refresher--content--private" style="height: 100%;">
            <view class="container" style="padding-top: 75px; scroll-snap-align: none;">
              <view class="container__gradient"></view>
              <image src="https://static.deerscript.com/uploads/2021-09-09/6139c9daeec53.png"
                style="position: absolute; left: 0; top: 0; width: 100%;">
              </image>
              <!-- <partial-info is="pages/camps/detail-partials/partial-info"> -->
              <view class="partial-info info--partial-info flex info--flex">
                <view
                  class="partial-info__thumb info--partial-info__thumb animation info--animation fadeInLeft info--fadeInLeft">
                  <image class="partial-info__thumbnail info--partial-info__thumbnail" mode="aspectFill"
                    src="https://image.caiyunyi.com/camping/uploads/58/camp_img/20221212/8a41e0ce9cd19b8ef7b50bfd7925a1b0.jpg?imageView2/1/w/260/h/360">
                  </image>
                </view>
                <view
                  class="partial-info__meta info--partial-info__meta flex__auto info--flex__auto animation info--animation fadeInUp info--fadeInUp">
                  <view class="partial-info__name info--partial-info__name otw info--otw">太湖湾露营</view>
                  <view class="partial-info__author info--partial-info__author otw info--otw">
                    <text><span>太湖湾</span></text>
                  </view>
                  <view class="partial-info__property info--partial-info__property flex info--flex">
                    <view><text><span>设施1</span></text></view>
                  </view>
                  <view class="partial-info__property info--partial-info__property flex info--flex fwap info--fwap">
                    <view><text><span>烧烤设备</span></text></view>
                    <view><text><span>餐厅</span></text></view>
                    <view><text><span>咖啡厅</span></text></view>
                    <view><text><span>WIFI</span></text></view>
                  </view>
                  <view class="component__bot info--component__bot flex info--flex">
                    <view class="flex__auto info--flex__auto"><text class="unit info--unit thought info--thought"><span>
                          ¥100.00</span></text>
                      <view class="component__bot__price info--component__bot__price t-gp info--t-gp d info--d">
                        <text><span>¥</span></text><text class="bold info--bold"><span>99.00
                            /位</span></text>
                      </view>
                    </view>
                    <view class="component__bot__reduce info--component__bot__reduce">-</view>
                    <view class="component__bot__num info--component__bot__num d info--d">1</view>
                    <view class="component__bot__increase info--component__bot__increase disable info--disable">+</view>
                  </view>
                </view>
              </view>
              <!-- </partial-info> -->
              <view class="calendar fwb">
                <view class="left flex-center">
                  <view class="t1">周二入营</view>
                  <view class="t2">08月29日</view>
                </view>
                <view class="center">
                  <view class="t1">共 1
                    天</view>
                </view>
                <view class="right flex-center">
                  <view class="t1">周二离营</view>
                  <view class="t2">08月29日</view>
                </view>
              </view>
              <view>
                <!-- <detail-desc is="pages/camps/detail-partials/detail-desc"> -->
                <view class="container__boxable desc--container__boxable">
                  <view class="container__boxable__title desc--container__boxable__title">
                    <view class="flex__auto desc--flex__auto t1 desc--t1"><text><span>套餐说明</span></text></view>
                    <view class="content desc--content fwb desc--fwb" data-wpy-evt="130-0"><text
                        class="content_t1 desc--content_t1"><span
                          style="display:none;">营地简介</span><span>营地简介</span></text></view>
                  </view>
                </view>
                <!-- </detail-desc> -->
              </view>
              <view class="margin-top30">
                <image class="info_image radius" mode="widthFix"
                  src="https://image.caiyunyi.com/camping/uploads/20/camp_img/20221117/9e054c48baad6e1ab5d9f707017fe481.jpg"
                  style="height: 479.667px;">
                </image>
                <image class="info_image radius" mode="widthFix"
                  src="https://image.caiyunyi.com/camping/uploads/20/camp_img/20221117/c27152afef80211db12f330cac75f172.jpg"
                  style="height: 479.667px;">
                </image>
                <image class="info_image radius" mode="widthFix"
                  src="https://image.caiyunyi.com/camping/uploads/20/camp_img/20221117/3276d6bf99f3c36569effaf06342d363.jpg"
                  style="height: 480px;">
                </image>
                <image class="info_image radius" mode="widthFix"
                  src="https://image.caiyunyi.com/camping/uploads/20/camp_img/20221117/a3a8ff668e650696083475ac456da7fa.jpg"
                  style="height: 479.667px;">
                </image>
                <image class="info_image radius" mode="widthFix"
                  src="https://image.caiyunyi.com/camping/uploads/20/camp_img/20221117/5002e87c230b672e234eaa885bd78044.jpg"
                  style="height: 479.667px;">
                </image>
                <image class="info_image radius" mode="widthFix"
                  src="https://image.caiyunyi.com/camping/uploads/20/camp_img/20221117/97a2ff5ed6e8d9442a36148a1364c392.jpg"
                  style="height: 479.667px;">
                </image>
                <image class="info_image radius" mode="widthFix"
                  src="https://image.caiyunyi.com/camping/uploads/20/camp_img/20221117/2c573f1734f3eaed45092678cfdeac01.jpg"
                  style="height: 479.667px;">
                </image>
                <image class="info_image radius" mode="widthFix"
                  src="https://image.caiyunyi.com/camping/uploads/20/camp_img/20221117/ff90be79a52afde282f234a142126005.jpg"
                  style="height: 479.667px;">
                </image>
              </view>
              <view>
                <!-- <detail-notice is="pages/camps/detail-partials/detail-notice"> -->
                <view class="container__boxable notice--container__boxable">
                  <view class="container__boxable__title notice--container__boxable__title">
                    <view class="flex__auto notice--flex__auto t1 notice--t1"><text><span>入营须知</span></text></view>
                    <view class="content notice--content fwb notice--fwb">
                      <view class="content_t1 notice--content_t1">倡导无痕露营</view>
                      <view class="content_t2 notice--content_t2">更多</view>
                    </view>
                  </view>
                </view>
                <!-- </detail-notice> -->
              </view>
            </view>
          </view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>
<script>
</script>
<style scoped>
.damned {
  background: rgba(79, 72, 98, 1)
}

.container {
  color: hsla(0, 0%, 100%, .9);
  padding: 15px 15px 120px;
  position: relative
}

.container__gradient {
  background: linear-gradient(to bottom, var(--bright), rgba(79, 72, 98, 1));
  left: 0;
  position: absolute;
  top: 0;
  width: 100%
}

.container__boxable {
  margin: 25px 0;
  position: relative;
  z-index: 2
}

.container__boxable__title {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 15px
}

.container__boxable__title__q {
  height: 18px;
  margin-left: 3px;
  opacity: .5;
  vertical-align: -4px;
  width: 18px
}

.container__boxable__title__right {
  opacity: .3
}

.container__boxable__title__right image {
  height: 10px;
  width: 10px
}

.container__boxable__title__right text {
  font-size: 12px;
  margin: 0 2px
}

.container__card {
  background: var(--darkness);
  border-radius: 10px;
  margin: 25px 0;
  padding: 12px;
  position: relative;
  z-index: 2
}

.container__card__title {
  border-bottom: 1px solid hsla(0, 0%, 100%, .05);
  margin-bottom: 15px;
  padding-bottom: 15px
}

.container__card__title__left {
  font-size: 15px;
  font-weight: 700
}

.container__card__title__right {
  opacity: .3
}

.container__card__title__right text {
  font-size: 12px;
  margin: 0 1px
}

.container__card__title__right image {
  height: 9px;
  width: 9px
}

.container__toolbar {
  bottom: 0;
  left: 0;
  padding: 20px 20px 30px;
  position: fixed;
  transform: translate(0, 100%);
  transition: all .5s ease;
  width: 100%
}

.container__toolbar.active {
  transform: translate(0, 0)
}

.container__toolbar__bg {
  background: var(--darkness);
  border-radius: 20px 20px 0 0;
  border-top: 1px solid rgba(79, 72, 98, 1);
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%
}

.container__toolbar .circle {
  margin-right: 25px;
  position: relative;
  text-align: center;
  z-index: 1
}

.container__toolbar .circle image {
  height: 24px;
  margin-bottom: 8px;
  width: 24px
}

.container__toolbar .circle view {
  color: hsla(0, 0%, 100%, .6);
  font-size: 11px;
  font-weight: 500
}

.container__toolbar button {
  color: hsla(0, 0%, 100%, .9);
  display: inline-block;
  font-size: 14px;
  font-weight: 700;
  line-height: 48px;
  padding: 0 20px
}

.container__toolbar button.primary {
  background: #55b6c8;
  box-shadow: 0 3px 20px 0 rgba(32, 210, 209, .2)
}

.container__toolbar button.green {
  background: #57bd6a;
  box-shadow: 0 10px 20px 0 rgba(87, 189, 106, .2);
  margin-left: 20px
}

.container__toolbar button.green image {
  height: 14px;
  margin-left: 8px;
  vertical-align: -2px;
  width: 14px
}

.container partial-reviews reviews-partial-card .review {
  border-bottom: 1px solid hsla(0, 0%, 100%, .05);
  margin-bottom: 12px;
  padding-bottom: 12px
}

.container partial-reviews reviews-partial-card:last-child .review {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0
}

.page-container {
  background: rgba(79, 72, 98, 1);
  color: #fff;
  height: 100vh;
  padding-bottom: 120px;
  position: relative;
  width: 100%;
  z-index: 99999
}

.calendar {
  background: rgba(0, 0, 0, .2);
  border-radius: 6px;
  margin-top: 26px;
  padding: 10px
}

.calendar .left,
.calendar .right {
  flex-direction: column
}

.calendar .left .t1,
.calendar .right .t1 {
  color: #999;
  font-size: 12px
}

.calendar .left .t2,
.calendar .right .t2 {
  color: #fff;
  font-size: 15px;
  margin-top: 7px
}

.van-calendar {
  color: #000
}

.margin-top30 {
  margin-top: 15px
}

.info_image {
  width: 100%
}

.l_card {
  background: rgba(0, 0, 0, .2)
}

.l_card .tit {
  font-size: 13px
}

.l_card .container_brief {
  font-size: 12px;
  height: 10px;
  letter-spacing: 1px;
  line-height: 10px;
  margin-top: 10px
}

.damned {
  background: rgba(79, 72, 98, 1)
}

.container {
  color: hsla(0, 0%, 100%, .9);
  padding: 15px 15px 120px;
  position: relative
}

.container__gradient {
  background: linear-gradient(to bottom, var(--bright), rgba(79, 72, 98, 1));
  left: 0;
  position: absolute;
  top: 0;
  width: 100%
}

.container__boxable {
  margin: 25px 0;
  position: relative;
  z-index: 2
}

.container__boxable__title {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 15px
}

.container__boxable__title__q {
  height: 18px;
  margin-left: 3px;
  opacity: .5;
  vertical-align: -4px;
  width: 18px
}

.container__boxable__title__right {
  opacity: .3
}

.container__boxable__title__right wx-image {
  height: 10px;
  width: 10px
}

.container__boxable__title__right wx-text {
  font-size: 12px;
  margin: 0 2px
}

.container__card {
  background: var(--darkness);
  border-radius: 10px;
  margin: 25px 0;
  padding: 12px;
  position: relative;
  z-index: 2
}

.container__card__title {
  border-bottom: 1px solid hsla(0, 0%, 100%, .05);
  margin-bottom: 15px;
  padding-bottom: 15px
}

.container__card__title__left {
  font-size: 15px;
  font-weight: 700
}

.container__card__title__right {
  opacity: .3
}

.container__card__title__right wx-text {
  font-size: 12px;
  margin: 0 1px
}

.container__card__title__right wx-image {
  height: 9px;
  width: 9px
}

.container__toolbar {
  bottom: 0;
  left: 0;
  padding: 20px 20px 30px;
  position: fixed;
  transform: translate(0, 100%);
  transition: all .5s ease;
  width: 100%
}

.container__toolbar.active {
  transform: translate(0, 0)
}

.container__toolbar__bg {
  background: var(--darkness);
  border-radius: 20px 20px 0 0;
  border-top: 1px solid rgba(79, 72, 98, 1);
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%
}

.container__toolbar .circle {
  margin-right: 25px;
  position: relative;
  text-align: center;
  z-index: 1
}

.container__toolbar .circle image {
  height: 24px;
  margin-bottom: 8px;
  width: 24px
}

.container__toolbar .circle view {
  color: hsla(0, 0%, 100%, .6);
  font-size: 11px;
  font-weight: 500
}

.container__toolbar button {
  color: hsla(0, 0%, 100%, .9);
  display: inline-block;
  font-size: 14px;
  font-weight: 700;
  line-height: 48px;
  padding: 0 20px
}

.container__toolbar button.primary {
  background: #55b6c8;
  box-shadow: 0 3px 20px 0 rgba(32, 210, 209, .2)
}

.container__toolbar button.green {
  background: #57bd6a;
  box-shadow: 0 10px 20px 0 rgba(87, 189, 106, .2);
  margin-left: 20px
}

.container__toolbar button.green image {
  height: 14px;
  margin-left: 8px;
  vertical-align: -2px;
  width: 14px
}

.container partial-reviews reviews-partial-card .review {
  border-bottom: 1px solid hsla(0, 0%, 100%, .05);
  margin-bottom: 12px;
  padding-bottom: 12px
}

.container partial-reviews reviews-partial-card:last-child .review {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0
}

.page-container {
  background: rgba(79, 72, 98, 1);
  color: #fff;
  height: 100vh;
  padding-bottom: 120px;
  position: relative;
  width: 100%;
  z-index: 99999
}

.calendar {
  background: rgba(0, 0, 0, .2);
  border-radius: 6px;
  margin-top: 26px;
  padding: 10px
}

.calendar .left,
.calendar .right {
  flex-direction: column
}

.calendar .left .t1,
.calendar .right .t1 {
  color: #999;
  font-size: 12px
}

.calendar .left .t2,
.calendar .right .t2 {
  color: #fff;
  font-size: 15px;
  margin-top: 7px
}

.van-calendar {
  color: #000
}

.margin-top30 {
  margin-top: 15px
}

.info_image {
  width: 100%
}

.l_card {
  background: rgba(0, 0, 0, .2)
}

.l_card .tit {
  font-size: 13px
}

.l_card .container_brief {
  font-size: 12px;
  height: 10px;
  letter-spacing: 1px;
  line-height: 10px;
  margin-top: 10px
}

.info--partial-info {
  align-items: center;
  position: relative;
  z-index: 1
}

.info--partial-info__thumb {
  border-radius: 8px;
  box-shadow: 0 0 30px #303030;
  height: 180px;
  min-width: 125px;
  position: relative;
  width: 130px
}

.info--partial-info__thumbnail {
  border-radius: 8px;
  height: 100%;
  width: 100%
}

.info--partial-info__corner {
  height: 15px;
  left: 0;
  position: absolute;
  top: 0;
  width: 32px
}

.info--partial-info__robbin {
  bottom: 10px;
  height: 15px;
  left: 10px;
  position: absolute;
  width: 28px
}

.info--partial-info__meta {
  height: 180px;
  margin-left: 12px;
  padding-top: 8px;
  position: relative
}

.info--partial-info__name {
  font-size: 19px;
  font-weight: 700;
  margin-bottom: 7px
}

.info--partial-info__author {
  margin-bottom: 12px
}

.info--partial-info__author text {
  font-size: 13px;
  font-weight: 500;
  opacity: .6
}

.info--partial-info__author image {
  height: 16px;
  margin-right: 3px;
  width: 16px
}

.info--partial-info__property {
  margin-bottom: 6px
}

.info--partial-info__property view {
  border: 1px solid #aeabb7;
  border-radius: 5px;
  font-size: 9px;
  font-weight: 500;
  line-height: 1.75;
  margin-bottom: 3px;
  margin-right: 10px;
  padding: 0 5px
}

.info--partial-info__property view:last-child {
  margin-right: 0
}

.info--partial-info__property view text {
  opacity: .6
}

.info--partial-info__property view image {
  height: 11px;
  margin-right: 3px;
  vertical-align: -1px;
  width: 11px
}

.info--partial-info__price view {
  display: inline-block;
  font-weight: 700;
  margin-right: 10px
}

.info--partial-info__price view .info--unit {
  font-size: 11px
}

.info--partial-info__price view .info--r {
  font-size: 18px;
  margin: 0 1px;
  vertical-align: -1px
}

.info--partial-info__price view image {
  height: 14px;
  margin-right: 1px;
  vertical-align: -3px;
  width: 14px
}

.info--partial-info__price view:last-child {
  margin-right: 0
}

.info--partial-info__price .info--question {
  height: 20px;
  opacity: .5;
  width: 20px
}

.info--partial-info__action {
  bottom: 4px;
  left: 0;
  position: absolute
}

.info--partial-info__action button {
  color: #fff;
  display: inline-block;
  line-height: 1;
  padding: 8px 16px;
  position: relative
}

.info--partial-info__action button view {
  background: var(--darkness);
  height: 100%;
  left: 0;
  opacity: .5;
  position: absolute;
  top: 0;
  width: 100%
}

.info--partial-info__action button image {
  height: 14px;
  margin-right: 6px;
  position: relative;
  vertical-align: -1px;
  width: 16.66px
}

.info--partial-info__action button text {
  font-size: 12px;
  font-weight: 500;
  opacity: .8;
  position: relative;
  vertical-align: 1px
}

.info--partial-info__action button:last-child {
  margin-left: 15px
}

.info--partial-info__action button:last-child image {
  height: 14px;
  width: 14px
}

.info--partial-info__played {
  align-items: center;
  border-radius: 6px;
  bottom: 4px;
  display: flex;
  left: 0;
  overflow: hidden;
  padding: 10px 15px;
  position: absolute;
  width: 100%
}

.info--partial-info__played__bg {
  background: var(--darkness);
  height: 100%;
  left: 0;
  opacity: .5;
  position: absolute;
  top: 0;
  width: 100%
}

.info--partial-info__played__left {
  flex: auto;
  position: relative
}

.info--partial-info__played__left text {
  font-size: 12px;
  font-weight: 700;
  margin-right: 6px;
  vertical-align: 2px
}

.info--partial-info__played__right {
  position: relative
}

.info--partial-info__played__right image {
  height: 11px;
  opacity: .3;
  vertical-align: 1px;
  width: 11px
}

.info--component__bot {
  bottom: 0;
  left: 0;
  position: absolute;
  width: 100%
}

.info--component__bot__price {
  display: inline-block
}

.info--component__bot__price text {
  font-size: 11px;
  margin-right: 1px
}

.info--component__bot__price text.info--bold {
  font-size: 12px;
  font-weight: 700
}

.info--component__bot__reduce {
  border: 1px solid #55b6c8;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 700;
  height: 20px;
  line-height: 15px;
  text-align: center;
  width: 20px
}

.info--component__bot__num {
  font-size: 13px;
  font-weight: 500;
  text-align: center;
  width: 30px
}

.info--component__bot__increase {
  background: linear-gradient(90deg, #55e9bc, #55b6c8);
  border-radius: 6px;
  color: #232326;
  font-size: 16px;
  font-weight: 700;
  height: 20px;
  line-height: 17px;
  text-align: center;
  width: 20px
}

.info--unit {
  font-size: 12px;
  margin-right: 5px
}

.info--unit.info--thought {
  color: #888;
  font-weight: 400;
  margin-left: 4px;
  text-decoration: line-through
}
</style>
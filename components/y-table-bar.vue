<template>
	<view class="tab">
		<view class="navView" v-for="(item, index) in list" :key="item.text" @click="change(index)">
			<image :src="currentIndex == index ? item.selectedIconPath : item.iconPath" class="navView-img"></image>
			<view class="navText" :class="{ 'navTextActive': currentIndex == index }">{{ item.text }}</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "Tab",
		props: ['currentIndex'],
		data() {
			return {
				list: [{
					"pagePath": "/pages/index/index",
					"iconPath": "../../../static/home.png",
					"selectedIconPath": "../../../static/home-active.png",
					"text": "首页"
				}, {
					"pagePath": "/pages/user/index",
					"iconPath": "../../../static/user.png",
					"selectedIconPath": "../../../static/user-active.png",
					"text": "我的"
				}, ]
			}
		},
		created() {
			uni.hideTabBar()
		},
		methods: {
			//自定义tabbar里通过switchTab来跳转页面，这样可以让页面切换不会有闪烁效果
			//但是第一次加载页面的时候会有闪烁效果，这个官方也说了
			//通过官方tabbar跳转页面
			change(index) {
				const route = this.list[index].pagePath
				uni.switchTab({
					url: route
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.tab {
		position: fixed;
		bottom: 0;
		display: flex;
		z-index: 10;
		align-items: center;
		width: 100%;
		overflow: hidden;
		background: #2f2e33;
		box-shadow: 0px -2px 20px 0px rgba(0, 0, 0, 0.2), 15px 14px 8px 12px rgba(0, 0, 0, 0.1);
		border-top: 1px solid hsla(0, 0%, 100%, .05);
		padding-bottom: 1px solid hsla(0, 0%, 100%, .05);
		padding-bottom: constant(safe-area-inset-bottom);
		padding-bottom: env(safe-area-inset-bottom);
	}

	.navView {
		flex: 1;
		text-align: center;
		padding: 12rpx 0;

		&-img {
			height: 54rpx;
			width: 54rpx;
			vertical-align: middle;
		}

		.navText {
			font-size: 20rpx;
			color: #999999;
		}

		.navTextActive {
			font-size: 20rpx;
			color: #0055FE;
		}
	}
</style>
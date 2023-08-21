<template>
	<view>
		<swiper class="swiper" :autoplay="false" :duration="1000" :vertical="true" style="height: 100vh;">
			<swiper-item>
				<yCover ref="yCover"></yCover>
			</swiper-item>
			<swiper-item>
				<scroll-view style="height: 100vh;white-space: nowrap;" @scroll="onScroll" id="scroller" scroll-y="true"
					refresher-enabled="true" :refresher-triggered="triggered" :refresher-threshold="100"
					refresher-background="#232326" @refresherrefresh="onRefresh"
					@refresherrestore="onRestore">
					<view class="container">
						<!-- 当前门店信息 -->
						<view class="container-store flex" :style="{ paddingTop: iStatusBarHeight + 'px' }">
							<image class="container-store-thumbnail" src="/static/logo.jpg"></image>
							<view class="container-store-name flex__auto otw">
								Camping Tomorrow 露营俱乐部
							</view>
							<image class="container-store-icon" src="/static/toggle-l.png"></image>
						</view>
						<!-- 当前门店信息 end-->
						<view class="swiper-box">
							<u-swiper height="332rpx" radius="16rpx" :autoplay="false" :list="banner"></u-swiper>
						</view>
						<view class="four-box">
							<image class="four-box-img" v-for=" (item, index) in four" :key="index" :src="item"></image>
						</view>
						<view class="camp-box marWgin-top30">
							<view class="container-tags-t1">营地简介</view>
							<view class="container-brief wx-text">
								武汉Camping Tomorrow露营俱乐部</br>一站式露营解决方案服务商
							</view>
							<view class="container-tags-t1">营地设施</view>
							<view class="container-brief flex">
								<view class="camp-box-tag" v-for="(item, index) in campsiteList" :key="index">
									{{ item.name }}
								</view>
							</view>
							<view class="container-tags-t1">自然景观</view>
							<view class="container-brief flex">
								<view class="camp-box-tag" v-for="(item, index) in sceneryList" :key="index">
									{{ item.name }}
								</view>
							</view>
							<view class="container-tags-t1">活动/服务</view>
							<view class="container-brief">
								<u-scroll-list :indicator="false">
									<view class="camp-box-activity" v-for="(item, index) in list" :key="index">
										<view class="title">{{ item.thumb }}</view>
										<view class="descr">{{ item.thumb1 }}</view>
									</view>
								</u-scroll-list>
							</view>
						</view>
						<yCard ref="yCard"></yCard>
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import yCard from '@/components/y-card.vue'
	import yCover from '@/components/y-cover.vue'
	export default {
		components: {
			yCard,
			yCover
		},
		data() {
			return {
				banner: [
					'https://image.caiyunyi.com/camping/season/banner1.jpg',
					'https://image.caiyunyi.com/camping/season/banner2.jpg'
				],
				four: [
					'https://image.caiyunyi.com/camping/season/a.jpg',
					'https://image.caiyunyi.com/camping/season/c.jpg',
					'https://image.caiyunyi.com/camping/season/d.jpg'
				],
				list: [{
					thumb: "露天电影",
					thumb1: "浪漫夜晚必备",

				}, {
					thumb: "露天电影",
					thumb1: "浪漫夜晚必备",

				}, {
					thumb: "露天电影",
					thumb1: "浪漫夜晚必备",

				}, {
					thumb: "露天电影",
					thumb1: "浪漫夜晚必备",

				}, {
					thumb: "露天电影",
					thumb1: "浪漫夜晚必备",

				}],
				campsiteList: [{
					name: "游乐场",
				}, {
					name: "餐厅",
				}, {
					name: "咖啡厅",
				}],
				sceneryList: [{
					name: "湖泊",
				}, {
					name: "星空",
				}],
				keyword: "",
				triggered: false,
				_freshing: false,
				top: 0
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
			}
		}
	}
</script>

<style lang="scss" scoped>
	// 整体框架
	.container {
		background: #232326;
		margin-bottom: 4rpx;
		padding: 0rpx 20rpx 240rpx;

		// 门店信息
		.container-store {
			height: 88rpx;
			line-height: 88rpx;
			padding-right: 200rpx;
			align-items: center;
			margin-bottom: 30rpx;

			.container-store-thumbnail {
				border-radius: 50%;
				height: 60rpx;
				width: 60rpx;
			}

			.container-store-name {
				color: #fff;
				font-size: 34rpx;
				font-weight: 700;
				margin-left: 16rpx;
			}

			.container-store-icon {
				height: 32rpx;
				margin-left: 60rpx;
				width: 32rpx;
			}
		}
	}

	// banner
	.swiper-box {
		margin-bottom: 20rpx;
	}

	// 图片导航
	.four-box {
		width: 100%;
		align-items: center;
		display: flex;
		flex-wrap: wrap;
		margin-bottom: 20rpx;
		justify-content: space-between;

		&-img {
			height: 228rpx;
			width: 48%;
			border-radius: 8rpx;
			margin-bottom: 20rpx;
		}
	}

	// 简介
	.camp-box {
		background-color: #2f2e33;
		border-radius: 20rpx;
		margin-bottom: 30rpx;
		padding: 20rpx;

		&-activity,
		&-tag {
			background: #ffffff0d;
			border: 2rpx solid transparent;
			border-radius: 8rpx;
			color: #8c8c8d;
			display: inline-block;
			font-size: 24rpx;
			font-weight: 500;
			margin: 10rpx 24rpx 10rpx 0rpx;
			padding: 12rpx 16rpx;
			transition: all .3s ease;
			vertical-align: middle;
			white-space: nowrap;

			.title {
				color: #f4f4f4;
				font-size: 26rpx;
			}

			.descr {
				color: #a4a1a1;
				font-size: 24rpx;
				margin-top: 18rpx;
			}
		}
	}

	.wx-text {
		color: #9c9ea3;
		font-size: 26rpx;
		letter-spacing: 4rpx;
	}

	// 公共样式
	.flex {
		display: flex;
	}

	.flex__auto {
		flex: auto;
		flex-grow: 1;
		position: relative;
		width: 0;
	}

	.otw {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.margin-top30 {
		margin-top: 30rpx;
	}

	.container-tags-t1 {
		margin-top: 30rpx;
		color: hsla(0, 0%, 100%, .9);
	}

	.container-brief {
		margin-top: 20rpx;
		flex-wrap: wrap;

		.u-transition {
			margin: 10rpx 24rpx 10rpx 0rpx;
		}
	}

	.container__tags {
		box-sizing: border-box;
		font-size: 30rpx;
		padding: 0 30rpx;
	}
</style>
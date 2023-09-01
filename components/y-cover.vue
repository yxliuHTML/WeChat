<template>
	<view class="landing--container">
		<ModalContact ref="ModalContact"></ModalContact>
		<view class="swiper-box">
			<u-swiper height="100vh" :list="list" @change="currentChange" circular :autoplay="false">
			</u-swiper>
		</view>
		<view class="landing--container__stationary">
			<view class="landing--container__stationary__header">
				<view class="landing--container landing--container__stationary__header__switcher">
					<image src="/static/toggle.png">
					</image>
					<text>切换门店</text>
				</view>
				<view class="landing--container__stationary__header__dots">
					<view v-for="(item, index) in list" :key="index" :class="[index === current && 'landing--is-active']">
					</view>
				</view>
			</view>
			<view class="landing--container__stationary__store">
				<image src="/static/logo.jpg" class="landing--container__stationary__store__thumbnail"></image>
				<view class="landing--container__stationary__store__meta flex__auto">
					<view class="landing--container__stationary__store__name otw">Camping Tomorrow 露营俱乐部</view>
					<view class="landing--container__stationary__store__address otw">
						<image src="/static/positioning.png">
						</image>
						<text>湖北省武汉市新长江滨江花园7-1-602</text>
					</view>
				</view>
				<view class="landing--container__stationary__store__tel" @click="close">
					<image src="/static/tel.png"></image>
				</view>
			</view>
			<view class="landing--container__stationary__down">
				<image mode="aspectFit" src="/static/arrow-down.gif">
				</image>
				<text>下滑查看更多信息</text>
			</view>
		</view>
	</view>
</template>

<script>
import ModalContact from '@/components/modals/modal-contact.vue'
export default {
	components: {
		ModalContact
	},
	options: {
		styleIsolation: 'shared'
	},
	data() {
		return {
			list: [
				'https://image.caiyunyi.com/camping/uploads/230235/camp_img/20230404/6103282e094afa004c72fae4deea3baa.jpg',
				'https://image.caiyunyi.com/camping/uploads/230235/camp_img/20230404/ba6a84a98c112c9df3ced77cab063d0d.jpg',
				'https://image.caiyunyi.com/camping/uploads/230235/camp_img/20230404/b18afd677acf6580e1fa094e6fd7bf06.jpg',
			],
			current: 0
		}
	},
	computed: {
		iStatusBarHeight() {
			let iStatusBarHeight = uni.getSystemInfoSync().statusBarHeight;
			return iStatusBarHeight + 3
		}
	},
	onLoad() { },
	mounted() { },
	methods: {
		currentChange(e) {
			this.current = e.current
		},
		close() {
			this.$refs.ModalContact.close()
		}
	}
}
</script>
<style lang="scss" scoped>
// 轮播图
.indicator {
	@include flex(row);
	justify-content: center;

	&__dot {
		height: 12rpx;
		width: 12rpx;
		border-radius: 200rpx;
		background-color: rgba(255, 255, 255, 0.35);
		margin: 0 10rpx;
		transition: background-color 0.3s;

		&--active {
			background-color: #ffffff;
		}
	}
}

.swiper-box {
	position: fixed;
	top: 0px;
	left: 0px;
	right: 0px;
	bottom: 0px;
	z-index: -1;
	overflow: hidden;
}

// 店铺信息
.landing--container {
	color: hsla(0, 0%, 100%, .9);
	position: relative;

	&__stationary {
		background: linear-gradient(180deg, rgba(35, 35, 38, .6), #232326);
		border-radius: 30rpx 30rpx 0 0;
		bottom: 0;
		left: 0;
		overflow: hidden;
		padding: 40rpx;
		position: fixed;
		transition: all .5s ease;
		width: 100%;
		z-index: 9;
		box-sizing: border-box;
		color: #fff;
		height: 340rpx;

		&__header {
			justify-content: space-between;
			margin-bottom: 40rpx;
			position: relative;
			display: flex;
			align-items: center;

			&__switcher {
				opacity: .6;
				padding-left: 12rpx;
				font-size: 24rpx;
				font-weight: 500;

				image {
					height: 24rpx;
					margin-right: 8rpx;
					vertical-align: -4rpx;
					width: 24rpx;
				}
			}

			&__dots {
				align-items: center;
				display: flex;
				justify-content: flex-end;

				.landing--is-active {
					background: linear-gradient(90deg, #55e9bc, #0dceda);
					border-radius: 6rpx 0;
					opacity: 1;
					width: 40rpx;
				}

				view {
					background: #fff;
					border-radius: 40rpx;
					height: 12rpx;
					margin: 0 6rpx;
					opacity: .6;
					transition: all .5s ease;
					width: 12rpx;
				}
			}
		}

		&__store {
			position: relative;
			display: flex;
			align-items: center;

			&__thumbnail {
				border: 4rpx solid hsla(0, 0%, 100%, .1);
				border-radius: 50%;
				height: 110rpx;
				width: 110rpx;
			}

			&__meta {
				margin-left: 20rpx;
			}

			&__name {
				color: #fff;
				font-size: 32rpx;
				font-weight: 700;
				line-height: 45rpx;
				margin-bottom: 18rpx;
			}

			&__address {
				font-size: 22rpx;
				opacity: .4;

				image {
					height: 20rpx;
					margin-right: 4rpx;
					vertical-align: -2rpx;
					width: 20rpx;
				}
			}

			&__tel {
				margin-left: 20rpx;
				opacity: .8;

				image {
					height: 44rpx;
					width: 44rpx;
				}
			}
		}

		&__down {
			box-sizing: border-box;
			opacity: .3;
			padding-top: 40rpx;
			text-align: center;
			transition: all .5s ease;
			display: flex;
			align-items: center;
			justify-content: center;

			image {
				height: 24rpx;
				margin-right: 12rpx;
				vertical-align: -4rpx;
				width: 24rpx;
			}

			text {
				font-size: 24rpx;
			}
		}
	}
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
</style>
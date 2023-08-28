<template>
	<view class="bread-box" style="padding-top: 80px">
		<view class="bread" style="padding-top: 88rpx;">
			<view class="bread__ctx">
				<view class="bread__toggle">
					<image class="i-toggle" src="/static/toggle-l.png" mode=""></image>
				</view>
				<text>在线买单</text>
			</view>
		</view>
		<view class="container">
			<view class="container__paid">
				<view class="container__paid__store flex">
					<image class="container__paid__store__thumbnail" src="/static/logo.jpg"></image>
					<view class="container__paid__store__meta flex__auto">
						<view class="container__paid__store__name otw">
							Camping Tomorrow 露营俱乐部
						</view>
						<view class="container__paid__store__address otw">
							<image class="i-location" src="/static/location-l.png" mode=""></image>
							<text>湖北省武汉市新长江滨江花园7-1-602</text>
						</view>
					</view>
					<view class="container__paid__store__mobile">
						<image src="/static/mobile.png"></image>
					</view>
				</view>
				<view class="sign--partial-sign">
					<image src="/static/empty.png"></image>
					<view>
						<view class="sign--partial-sign__title">
							授权电话号码
						</view>
						<view class="sign--partial-sign__desc">
							便于门店联系您
						</view>
					</view>
					<view class="sign--partial-sign">
						<button>确定授权</button>
					</view>
				</view>
			</view>
		</view>
		<!-- 底部 -->
		<yTabbar :currentIndex="1" ref="yTabbar"></yTabbar>
	</view>
</template>

<script>
	import yTabbar from '@/components/y-table-bar.vue'
	export default {
		components: {
			yTabbar
		},
		data() {
			return {}
		}
	}
</script>

<style lang="scss">
	.bread-box {
		height: 100vh;
		background: #232326;
	}

	.bread {
		left: 0;
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 1;

		.bread__ctx {
			height: 80rpx;
			line-height: 80rpx;
			padding: 0 30rpx;
			position: relative;
			display: flex;

			text {
				width: 100%;
				text-align: center;
				padding-right: 88rpx;
				box-sizing: border-box;
				flex: 1;
				color: #fff;
				font-weight: 700;
			}
		}

		.bread__toggle {
			background: #2f2e33;
			border-radius: 50%;
			box-shadow: 0 0 4rpx 0 rgba(0, 0, 0, .05);
			display: inline-block;
			height: 72rpx;
			line-height: 68rpx;
			text-align: center;
			width: 72rpx;

			.i-toggle {
				height: 34rpx;
				transform: rotate(-180deg);
				vertical-align: middle;
				width: 34rpx;
			}
		}

		.bread__title {
			font-size: 34rpx;
			font-weight: 700;

		}
	}

	.container {
		box-sizing: border-box;
		overflow: hidden;
		padding: 30rpx;

		.container__paid {
			border-radius: 30rpx;
			box-shadow: 0 0 4rpx 0 rgba(0, 0, 0, .05);
			padding: 40rpx 40rpx 60rpx;
			background: #2f2e33;
			margin-bottom: 30rpx;

			&__store {
				border-bottom: 2rpx solid hsla(0, 0%, 100%, .03);
				margin-bottom: 50rpx;
				padding-bottom: 30rpx;
				color: #fff;

				&__thumbnail {
					border: 4rpx solid hsla(0, 0%, 100%, .3);
					border-radius: 20rpx;
					height: 110rpx;
					width: 110rpx;
				}

				&__meta {
					margin-left: 16rpx;
				}

				&__name {
					font-size: 32rpx;
					font-weight: 700;
					margin-bottom: 18rpx;
					padding-top: 8rpx;
				}

				&__address {
					font-size: 24rpx;
					opacity: .4;

					.i-location {
						height: 24rpx;
						margin-right: 2rpx;
						vertical-align: -3rpx;
						width: 24rpx;
					}
				}

				&__mobile {
					margin-left: 40rpx;

					image {
						height: 60rpx;
						width: 60rpx;
					}
				}
			}
		}
	}

	.sign--partial-sign {
		text-align: center;
		color: #fff;

		&__icon {
			height: 400rpx;
			opacity: .5;
			width: 400rpx;
		}

		&__title {
			font-size: 34rpx;
			font-weight: 700;
			margin-bottom: 30rpx;
		}

		&__desc {
			font-size: 24rpx;
			margin-bottom: 100rpx;
			opacity: .3;
		}

		button {
			background: #55b6c8;
			border-radius: 12rpx;
			box-shadow: 0 0 4rpx 0 rgba(13, 206, 218, .2);
			color: #fff;
			font-size: 26rpx;
			font-weight: 700;
			padding: 30rpx 0;
			text-align: center;
			width: 300rpx;
			line-height: 1;
		}
	}

	// 公共样式
	.flex {
		display: flex;
		align-items: center;
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
<template>
	<view class="store flex">
		<image class="store__thumbnail" src="/static/logo.jpg">
		</image>
		<view class="store__meta flex__auto">
			<view class="store__name otw">
				Camping Tomorrow
				露营俱乐部
			</view>
			<view class="store__address otw">
				<image class="i-location" src="/static/location-l.png" mode=""></image>
				<text>湖北省武汉市新长江滨江花园7-1-602</text>
			</view>
		</view>
		<image class="store__mobile" src="/static/mobile.png">
		</image>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	.store {
		padding: 30rpx 30rpx 20rpx;
		background: #232326;
		position: relative;
		display: flex;
		align-items: center;
		color: #fff;

		&__thumbnail {
			border-radius: 10rpx;
			box-sizing: border-box;
			height: 100rpx;
			width: 100rpx;
		}

		&__meta {
			margin-left: 20rpx;
		}

		&__name {
			font-size: 34rpx;
			font-weight: 700;
			margin-bottom: 20rpx;
			padding-top: 8rpx;
		}

		&__address {
			font-size: 22rpx;
			opacity: .4;

			.i-location {
				height: 24rpx;
				margin-right: 2rpx;
				vertical-align: -3rpx;
				width: 24rpx;
			}
		}

		&__mobile {
			margin-left: 20rpx;
			height: 70rpx;
			width: 70rpx;
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
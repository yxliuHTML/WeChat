<template>
	<view style="height:100vh;background: #232326;">
		<!-- 天气模块 -->
		<view class="weather--partial-weather" style="padding-top: 88rpx;">
			<view class="weather--partial-weather__bg" style="opacity: 0;"></view>
			<view class="partial-weather__ctx weather--partial-weather__ctx flex">
				<image src="/static/101.png"></image>
				<view class="partial-weather__meta">
					<text class="partial-weather__title weather--partial-weather__title">晴</text>
					<view class="partial-weather__desc weather--partial-weather__desc">
						<text>体感温度 33℃</text><text style="margin-left: 6px;">北风</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 天气模块 end -->
		<view class="user-box">
			<view class="user-bg">
				<image src="../../static/132.jpg"></image>
			</view>
			<view class="user-liner"></view>
			<button open-type="chooseAvatar" @chooseavatar="chooseavatar" class="user-avatar">
				<image :src="avatarUrl"></image>
			</button>
			<view class="user-meta">
				<!-- <button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber"> -->
				<view @click="getPhoneNumber">
					<view class="user-name">
						授权手机号
					</view>
					<view class="user-signature">
						便于店家在组队成功时通知您~
					</view>
				</view>
				<!-- </button> -->
				<view class="user-group">
					<image src="../../static/group.png"></image>
					<text>门店群</text>
				</view>
			</view>
		</view>
		<view class="partial-meta">
			<view class="partial-meta-achievement">
				<view class="partial-meta-achievement-item flex">
					<view>粉丝</view>
					<text>0</text>
				</view>
				<view class="flex">
					<image class="meta-coin" src="../../static/coin.png"></image>
					<text class="meta-text">0</text>
					<view class="meta-i"></view>
				</view>
			</view>
			<view class="portals-box flex">
				<view class="portals-box-item" v-for="(item, index) in portals" :key="index">
					<view class="portals-box-item-thumb">
						<image class="portals-box-item-thumbnail" :src="item.icon" mode=""></image>
					</view>
					<view class="portals-box-item-title">
						{{ item.title }}
					</view>
				</view>
			</view>
		</view>
		<!-- 底部 -->
		<yTabbar :currentIndex="2" ref="yTabbar"></yTabbar>
		<yUserPhone ref="yUserPhone"></yUserPhone>
	</view>
</template>

<script>
import yTabbar from '@/components/y-table-bar.vue'
import yUserPhone from '@/components/y-user-phone.vue'
export default {
	components: {
		yTabbar,
		yUserPhone
	},
	data() {
		return {
			isclose: false,
			avatarUrl: '../../static/132.jpg',
			portals: [{
				icon: '../../static/payment-icon.png',
				title: '买单'
			}, {
				icon: '../../static/order.png',
				title: '订单'
			}, {
				icon: '../../static/wallet.png',
				title: '钱包'
			}, {
				icon: '../../static/coupon.png',
				title: '优惠券'
			}, {
				icon: '../../static/bureaus.png',
				title: '活动'
			}]
		}
	},
	methods: {
		/**
		 * 手机号授权
		 */
		getUserPhone() {
			this.$refs.yUserPhone.close()
		},
		// 获取用户头像
		chooseavatar(e) {
			this.avatarUrl = e.detail.avatarUrl
		},
		/**
		 * 一键获取手机号
		 */
		getPhoneNumber() {
			let than = this
			uni.login({
				provider: 'weixin', //使用微信登录
				success: function (loginRes) {
					than.$request('/backend/test/wx/login', { code: loginRes.code }).then(res => {
						console.log('接口成功：', res)
					}).catch(err => {
						uni.showToast({
							title: "" + err.msg,
							icon: 'none'
						})
					})
				}
			});
		}
	}
}
</script>

<style lang="scss" scoped>
.user-box {
	color: hsla(0, 0%, 100%, .9);
	height: 600rpx;
	left: 0;
	overflow: hidden;
	position: relative;
	top: 0;
	width: 100%;
	background-color: #232326;

	.user-bg {
		filter: blur(15px) brightness(80%);
		left: 0;
		top: 0;
		height: 100%;
		position: absolute;
		width: 100%;

		image {
			width: 100%;
			height: 100%;
		}
	}

	.user-liner {
		background: linear-gradient(180deg, transparent, rgba(0, 187, 240, .25));
		height: 300rpx;
		left: 0;
		position: absolute;
		top: 300rpx;
		width: 100%;
	}

	.user-avatar {
		border: 4rpx solid hsla(0, 0%, 100%, .8);
		border-radius: 50%;
		height: 200rpx;
		left: 50%;
		overflow: hidden;
		position: absolute;
		text-align: center;
		top: 50%;
		transform: translateY(-50%) translateX(-50%);
		width: 200rpx;
		padding: 0;

		image {
			width: 100%;
			height: 100%;
		}
	}

	.user-meta {
		align-items: flex-end;
		bottom: 70rpx;
		padding: 0 30rpx;
		position: absolute;
		width: 100%;
		display: flex;
		justify-content: space-between;
		box-sizing: border-box;
		line-height: 1;

		.user-name {
			font-size: 40rpx;
			font-weight: 700;
			margin-bottom: 20rpx;
		}

		.user-signature {
			font-size: 22rpx;
			font-weight: 500;
			opacity: .5;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}

		.user-group {
			background: rgba(0, 0, 0, .2);
			border-radius: 16rpx;
			display: inline-block;
			margin-bottom: 16rpx;
			padding: 6rpx 16rpx;
			line-height: 1;

			image {
				display: inline-block;
				height: 22rpx;
				margin-right: 8rpx;
				opacity: .5;
				vertical-align: 2rpx;
				width: 28rpx;
			}

			text {
				font-size: 22rpx;
				font-weight: 500;
				opacity: .5;
				vertical-align: 4rpx;
			}
		}
	}
}

// 粉丝
.partial-meta {
	background: #232326;
	border-top-left-radius: 40rpx;
	border-top-right-radius: 40rpx;
	margin-bottom: 10rpx;
	position: relative;
	top: -40rpx;
	width: 100%;

	&-achievement {
		align-items: center;
		display: flex;
		margin: 0 50rpx;
		padding: 40rpx 0;
		justify-content: space-between;
		color: #fff;

		text {
			margin-left: 8rpx;
			opacity: .4;
		}

		&-item {
			font-size: 26rpx;
			font-weight: 500;
			margin-right: 40rpx;
		}
	}

	.meta-i {
		height: 9px;
		margin-left: 4px;
		opacity: .2;
		vertical-align: -1px;
		width: 9px;
		background-image: url(../../static/right-l.png);
		background-size: 100% 100%;
	}

	.meta-coin {
		height: 40rpx;
		margin-right: 8rpx;
		width: 40rpx;
	}

	.meta-text {
		color: #f19e55;
		font-size: 26rpx;
		font-weight: 700;
		opacity: 1;
	}
}

// 金刚区
.portals-box {
	background: #2f2e33;
	border-radius: 16rpx;
	justify-content: space-around;
	margin: 0 30rpx;
	padding: 24rpx 0;

	&-item {
		display: inline-block;
		text-align: center;

		&-thumb {
			height: 60rpx;
			margin: 0 auto 16rpx;
			position: relative;
			width: 60rpx;
		}

		&-thumbnail {
			height: 100%;
			width: 100%;
		}

		&-title {
			font-size: 24rpx;
			font-weight: 500;
			color: hsla(0, 0%, 100%, .9);
		}
	}
}

.weather--partial-weather {
	left: 0;
	top: 0;
	padding: 0 24rpx;
	position: fixed;
	box-sizing: border-box;
	width: 100%;
	z-index: 500;
	color: hsla(0, 0%, 100%, .9);

	&__bg {
		background: #232326;
		border-bottom: 1px solid hsla(0, 0%, 100%, .03);
		height: 100%;
		left: 0;
		position: absolute;
		top: 0;
		width: 100%;
	}

	&__ctx {
		align-items: center;
		display: flex;
		height: 80rpx;
		position: relative;
		z-index: 501;

		image {
			display: inline-block;
			height: 50rpx;
			margin-right: 12rpx;
			width: 50rpx;
		}
	}

	&__title {
		font-size: 22rpx;
		font-weight: 700;
		margin-bottom: 8rpx;
	}

	&__desc {
		font-size: 18rpx;
		font-weight: 500;
		opacity: .4;
	}
}

// 公共样式
.flex {
	display: flex;
	align-items: center;
}
</style>
<template>
	<view style="min-height: 100vh;">
		<view class="search-box" id="search" :style="{ paddingTop: iStatusBarHeight + 'px' }">
			<uni-search-bar class="uni-search-bar" :class="[searchWidth ? 'searchWidth' : '']" placeholder="搜索营地套餐"
				:radius="16" bgColor="#2f2e33" cancelButton="none" v-model="searchValue" />
		</view>
		<u-divider text="共计 1 个营地套餐"></u-divider>
		<view class="y-card" v-for="(item, index) in list" :key="index">
			<u-image :src="src" width="75px" height="105px" radius="8"></u-image>
			<view class="y-card-meta">
				<view class="card-name">四人基础套餐</view>
				<view class="mb-2">
					<view class="y-card-tag" v-for="(item, index) in sceneryList" :key="index">
						{{ item.name }}
					</view>
				</view>
				<view class="mb-2">
					<view class="y-card-tag" v-for="(item, index) in sceneryList" :key="index">
						{{ item.name }}
					</view>
				</view>
				<view class="y-card-bottom">
					<view class="y-card-atter">武汉露营装备租赁</view>
					<view class="y-card-price t-gp">
						<span>￥</span>
						<span class="card-price">179.00</span>
						<span>/位</span>
					</view>
				</view>
			</view>
		</view>
		<u-divider text="到底啦"></u-divider>
	</view>
</template>

<script>
	export default {
		options: {
			styleIsolation: 'shared'
		},
		data() {
			return {
				searchValue: '',
				src: "https://image.caiyunyi.com/camping/uploads/230235/camp_img/20230313/16759eca2d7643f55a087c21babb546b.jpg?imageView2/1/w/150/h/210",
				sceneryList: [{
					name: "湖泊",
				}, {
					name: "星空",
				}],
				list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 1, 1, 1, 1, 1, 1, 1],
				searchWidth: false
			}
		},
		computed: {
			iStatusBarHeight() {
				let iStatusBarHeight = uni.getSystemInfoSync().statusBarHeight;
				return iStatusBarHeight + 3
			}
		},
		onLoad() {

		},

		mounted() {

		},
		methods: {
			getElInfo() {
				let query = uni.createSelectorQuery().in(this);
				query.select('#search').boundingClientRect(data => {
					this.searchWidth = data.top <= 44
				}).exec();
			},
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

	.card-price {
		font-size: 16px;
		margin: 0 1px;
		vertical-align: -1px;
		font-weight: 500;
	}

	.t-gp {
		background: linear-gradient(90deg, #55e9bc, #55b6c8) !important;
		-webkit-background-clip: text !important;
	}

	.mb-2 {
		margin-bottom: 4rpx;
	}

	// 搜索框
	.search-box {
		background-color: #232326;
		display: flex;
		align-items: center;
		position: sticky;
		z-index: 999;
		padding-bottom: 20rpx;
		top: 0;
		width: 100%;

		::v-deep {
			.uni-searchbar {
				padding: 0 !important;
			}

			.uni-search-bar {
				width: 100%;
				margin-right: 0rpx;
				transition: margin-right .5s ease;

				&.searchWidth {
					margin-right: 250rpx;
				}

				.uni-searchbar__box-search-input {
					color: #fff;
				}
			}
		}
	}
</style>
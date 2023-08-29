<template>
	<view>
		<scroll-view scroll-y :refresher-threshold="100">
			<yStore></yStore>
			<!-- 分段器 -->
			<ySection @clickItem="onClickItem" :current="current"></ySection>
			<swiper class="swiper" :current="current" :duration="500" @change="currentChange">
				<swiper-item>
					<!-- 商品列表 -->
					<view class="VerticalBox">
						<scroll-view class="VerticalNav nav" scroll-y scroll-with-animation :scroll-top="verticalNavTop"
							style="height:calc(100vh - 375rpx)">
							<view class="cu-item" :class="index == tabCur ? 'text-green cur' : ''" v-for="(item, index) in list"
								:key="index" @tap="TabSelect" :data-id="index">
								<image src="/static/cakes.png"></image>
								<text class="">
									{{ item.name }}
								</text>
								<text class="dot">3</text>
							</view>
						</scroll-view>
						<scroll-view class="VerticalMain" scroll-y scroll-with-animation :scroll-into-view="'main-' + mainCur"
							@scroll="VerticalMain" style="height:calc(100vh - 375rpx)">
							<uni-search-bar class="VerticalMain-search" placeholder="搜索营地套餐" :radius="16" bgColor="#3a3941"
								cancelButton="none" v-model="searchValue" />
							<view class="VerticalMain-list">
								<view class="partial-products__card" v-for="(item, index) in list" :key="index" :id="'main-' + index">
									<view class="partial-products__title">
										{{ item.name }}
									</view>
									<view class="cu-list menu-avatar">
										<PartialCard></PartialCard>
										<PartialCard></PartialCard>
										<PartialCard></PartialCard>
									</view>
								</view>
							</view>
						</scroll-view>
					</view>
					<!-- 购物车 -->
					<view class="partial-products__tools flex flex">
						<view class="partial-products__tools__cart">
							<image src="/static/cart.png" role="img">
							</image>
							<text>1</text>
						</view>
						<view class="flex__auto flex__auto flex flex">
							<view class="flex__auto flex__auto">
								<view class="partial-products__tools__amount">
									<view class="partial-products__tools__amount__price d t-gp">
										<text class="unit">¥</text>
										<text>
											0.03
										</text>
									</view>
								</view>
							</view>
							<button class="partial-products__tools__paid" role="button">
								去结算
							</button>
						</view>
					</view>
					<!-- 购物车 end -->
				</swiper-item>
				<swiper-item>
					<!-- 我的订单 -->
					<yEmpty></yEmpty>
				</swiper-item>
			</swiper>
		</scroll-view>
	</view>
</template>

<script>
import yStore from '@/components/y-store.vue'
import ySection from '@/components/y-section.vue'
import yEmpty from '@/components/y-empty.vue'
import PartialCard from '@/components/products/partial-card.vue'
export default {
	options: {
		styleIsolation: 'shared'
	},
	components: {
		yStore,
		ySection,
		yEmpty,
		PartialCard
	},
	data() {
		return {
			list: [{
				name: '坚果',
				id: 0
			},
			{
				name: '饮料',
				id: 1
			},
			{
				name: '炭火',
				id: 2
			},
			{
				name: '装备',
				id: 3
			},
			{
				name: '调味品',
				id: 4
			}
			],
			tabCur: 0,
			mainCur: 0,
			verticalNavTop: 0,
			load: true,
			current: 0,
			colorIndex: 0,
			searchValue: ""
		};
	},
	onLoad() {
		uni.showLoading({
			title: '加载中...',
			mask: true
		});
		this.listCur = this.list[0];
	},
	onReady() {
		uni.hideLoading()
	},
	methods: {
		TabSelect(e) {
			this.tabCur = e.currentTarget.dataset.id;
			this.mainCur = e.currentTarget.dataset.id;
			this.verticalNavTop = (e.currentTarget.dataset.id - 1) * 50
		},
		VerticalMain(e) {
			let tabHeight = 0;
			if (this.load) {
				for (let i = 0; i < this.list.length; i++) {
					let view = uni.createSelectorQuery().select("#main-" + this.list[i].id);
					view.fields({
						size: true
					}, data => {
						this.list[i].top = tabHeight;
						tabHeight = tabHeight + data.height;
						this.list[i].bottom = tabHeight;
					}).exec();
				}
				this.load = false
			}
			let scrollTop = e.detail.scrollTop + 10;
			for (let i = 0; i < this.list.length; i++) {
				if (scrollTop > this.list[i].top && scrollTop < this.list[i].bottom) {
					this.verticalNavTop = (this.list[i].id - 1) * 50
					this.tabCur = this.list[i].id
					return false
				}
			}
		},
		currentChange(e) {
			this.$nextTick(() => {
				this.current = e.detail.current
			})
		},
		onClickItem(e) {
			this.$nextTick(() => {
				if (this.current !== e.currentIndex) {
					this.current = e.currentIndex
				}
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.swiper {
	height: calc(100vh - 220rpx);
}

.VerticalNav.nav {
	width: 180rpx;
	white-space: initial;
	background-color: #232326;
}

.VerticalNav.nav .cu-item {
	width: 100%;
	text-align: center;
	background-color: #232326;
	margin: 0;
	border: none;
	height: 100rpx;
	line-height: 100rpx;
	position: relative;
	font-size: 26rpx;
	transition: all .3s ease;
	color: hsla(0, 0%, 100%, .5);

	image {
		height: 26rpx;
		margin-right: 16rpx;
		vertical-align: -4rpx;
		width: 26rpx;
	}

	.dot {
		background: #eb4d28;
		border-radius: 40rpx;
		color: #fff;
		display: inline-block;
		font-size: 20rpx;
		font-weight: 700;
		height: 30rpx;
		line-height: 30rpx;
		position: absolute;
		right: 12rpx;
		top: 12rpx;
		width: 30rpx;
	}
}

.VerticalNav.nav .cu-item.cur {
	background: #2f2e33;
	color: hsla(0, 0%, 100%, .9);
	font-weight: 700;
}

.VerticalNav.nav .cu-item.cur::after {
	background: linear-gradient(180deg, #55e9bc, #0dceda);
	border-bottom-right-radius: 8rpx;
	border-top-right-radius: 8rpx;
	box-shadow: 2rpx 0 24rpx 0 #0dceda;
	content: "";
	height: 40rpx;
	left: 0;
	position: absolute;
	top: 50%;
	transform: scaleX(1) translateY(-50%);
	transform-origin: left;
	transition: transform .5s ease;
	width: 4px;
}

.VerticalBox {
	display: flex;
}

.VerticalMain {
	background-color: #2f2e33;
	flex: 1;
	padding-top: 90rpx;

	&-list {
		padding: 15rpx 30rpx 30rpx;
		color: #fff;
	}

	&-search {
		position: fixed;
		top: 0;
		right: 0;
		width: calc(100% - 180rpx)
	}
}

::v-deep {
	.segmented-control {
		background-color: #232326;
	}
}

.partial-products {
	color: hsla(0, 0%, 100%, .9);

	&__card {
		border-bottom: 2rpx solid hsla(0, 0%, 100%, .03);
		margin-bottom: 30rpx;
		padding-bottom: 30rpx;
	}

	&__title {
		font-size: 24rpx;
		margin-bottom: 40rpx;
		opacity: .7;
		padding-top: 20rpx;
	}
}

.flex {
	align-items: center;
}

// 购物车
.partial-products__tools {
	background: #232326;
	border-top: 2rpx solid hsla(0, 0%, 100%, .03);
	box-sizing: border-box;
	height: 160rpx;
	padding: 30rpx 30rpx 50rpx;
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;

	&__cart {
		border-right: 2rpx solid hsla(0, 0%, 100%, .03);
		margin-left: -30rpx;
		position: relative;
		text-align: center;
		width: 180rpx;

		image {
			height: 80rpx;
			width: 80rpx;
		}

		text {
			background: #eb4d28;
			border-radius: 50%;
			color: #fff;
			display: inline-block;
			font-size: 18rpx;
			font-weight: 700;
			height: 30rpx;
			line-height: 32rpx;
			position: absolute;
			right: 42rpx;
			text-align: center;
			top: 0;
			width: 30rpx;
		}
	}

	&__paid {
		background: #55b6c8;
		color: hsla(0, 0%, 100%, .9);
		font-size: 28rpx;
		font-weight: 700;
		height: 80rpx;
		line-height: 80rpx;
		margin: 0 0 0 30rpx;
		padding: 0 60rpx;
	}

	&__amount {
		margin-left: 30rpx;

		&__price {
			display: inline-block;
			font-size: 40rpx;
			font-weight: 700;
			margin-bottom: 8rpx;

			&.unit {
				font-size: 24rpx;
				font-weight: 400;
				margin-right: 2rpx;
			}
		}
	}
}
</style>
<template>
	<view>
		<yStore></yStore>
		<!-- 分段器 -->
		<ySection @clickItem="onClickItem" :values="values" :current="current"></ySection>
		<swiper class="swiper" :current="current" :duration="500" @change="currentChange">
			<swiper-item>
				<!-- 商品列表 -->
				<view class="VerticalBox">
					<scroll-view class="VerticalNav nav" scroll-y scroll-with-animation :scroll-top="verticalNavTop"
						style="height:calc(100vh - 375upx)">
						<view class="cu-item" :class="index==tabCur?'text-green cur':''" v-for="(item,index) in list"
							:key="index" @tap="TabSelect" :data-id="index">
							Tab-{{item.name}}
						</view>
					</scroll-view>
					<scroll-view class="VerticalMain" scroll-y scroll-with-animation style="height:calc(100vh - 375upx)"
						:scroll-into-view="'main-'+mainCur" @scroll="VerticalMain">
						<uni-search-bar placeholder="搜索营地套餐":radius="16" bgColor="#3a3941" cancelButton="none" v-model="searchValue" />
						<view class="padding-top padding-lr" v-for="(item,index) in list" :key="index"
							:id="'main-'+index">
							<view class="cu-bar solid-bottom bg-white">
								<view class="action">
									<text class="cuIcon-title text-green"></text> Tab-{{item.name}}
								</view>
							</view>
							<view class="cu-list menu-avatar">
								<view class="cu-item">
									<view class="cu-avatar round lg"
										style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);">
									</view>
									<view class="content">
										<view class="text-grey">凯尔</view>
										<view class="text-gray text-sm flex">
											<text class="text-cut">
												<text class="cuIcon-infofill text-red  margin-right-xs"></text>
												我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。
											</text>
										</view>
									</view>
									<view class="action">
										<view class="text-grey text-xs">22:20</view>
										<view class="cu-tag round bg-grey sm">5</view>
									</view>
								</view>
								<view class="cu-item">
									<view class="cu-avatar round lg"
										style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Taric.png);">
										<view class="cu-tag badge">99+</view>
									</view>
									<view class="content">
										<view class="text-grey">
											<text class="text-cut">瓦洛兰之盾-塔里克</text>
											<view class="cu-tag round bg-orange sm">战士</view>
										</view>
										<view class="text-gray text-sm flex">
											<text class="text-cut">
												塔里克是保护者星灵，用超乎寻常的力量守护着符文之地的生命、仁爱以及万物之美。塔里克由于渎职而被放逐，离开了祖国德玛西亚，前去攀登巨神峰寻找救赎，但他找到的却是来自星界的更高层的召唤。现在的塔里克与古代巨神族的神力相融合，以瓦洛兰之盾的身份，永不疲倦地警惕着阴险狡诈的虚空腐化之力。
											</text>
										</view>
									</view>
									<view class="action">
										<view class="text-grey text-xs">22:20</view>
										<view class="cuIcon-notice_forbid_fill text-gray"></view>
									</view>
								</view>
								<view class="cu-item ">
									<view class="cu-avatar radius lg"
										style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png);">
									</view>
									<view class="content">
										<view class="text-pink"><text class="text-cut">莫甘娜</text></view>
										<view class="text-gray text-sm flex"> <text
												class="text-cut">凯尔，你被自己的光芒变的盲目！</text>
										</view>
									</view>
									<view class="action">
										<view class="text-grey text-xs">22:20</view>
										<view class="cu-tag round bg-red sm">5</view>
									</view>
								</view>
								<view class="cu-item grayscale">
									<view class="cu-avatar radius lg"
										style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81007.jpg);">
									</view>
									<view class="content">
										<view><text class="text-cut">伊泽瑞尔</text>
											<view class="cu-tag round bg-orange sm">断开连接...</view>
										</view>
										<view class="text-gray text-sm flex"> <text class="text-cut"> 等我回来一个打十个</text>
										</view>
									</view>
									<view class="action">
										<view class="text-grey text-xs">22:20</view>
										<view class="cu-tag round bg-red sm">5</view>
									</view>
								</view>
								<view class="cu-item cur">
									<view class="cu-avatar radius lg"
										style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81020.jpg);">
										<view class="cu-tag badge"></view>
									</view>
									<view class="content">
										<view>
											<text class="text-cut">瓦罗兰大陆-睡衣守护者-新手保护营</text>
											<view class="cu-tag round bg-orange sm">6人</view>
										</view>
										<view class="text-gray text-sm flex">
											<text class="text-cut"> 伊泽瑞尔：<text
													class="cuIcon-locationfill text-orange margin-right-xs"></text>
												传送中...</text>
										</view>
									</view>
									<view class="action">
										<view class="text-grey text-xs">22:20</view>
										<view class="cuIcon-notice_forbid_fill text-gray"></view>
									</view>
								</view>
							</view>
						</view>
					</scroll-view>
				</view>

			</swiper-item>
			<swiper-item>
				<!-- 我的订单 -->
				<view>
					我的订单
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import yStore from '@/components/y-store.vue'
	import ySection from '@/components/y-section.vue'
	export default {
		options: {
			styleIsolation: 'shared'
		},
		components: {
			yStore,
			ySection,
		},
		data() {
			return {
				list: [],
				tabCur: 0,
				mainCur: 0,
				verticalNavTop: 0,
				load: true,
				items: ['选项卡1', '选项卡2'],
				current: 0,
				colorIndex: 0,
				activeColor: '#007aff',
				values: ['点单', '我的订单'],
				searchValue: ""
			};
		},
		onLoad() {
			uni.showLoading({
				title: '加载中...',
				mask: true
			});
			let list = [{}];
			for (let i = 0; i < 26; i++) {
				list[i] = {};
				list[i].name = String.fromCharCode(65 + i);
				list[i].id = i;
			}
			this.list = list;
			this.listCur = list[0];
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
						console.log(scrollTop)
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
		height: 100vh;
	}

	.VerticalNav.nav {
		width: 180rpx;
		white-space: initial;
	}

	.VerticalNav.nav .cu-item {
		width: 100%;
		text-align: center;
		background-color: #232326;
		margin: 0;
		border: none;
		height: 50px;
		line-height: 50px;
		position: relative;
		font-size: 13px;
		transition: all .3s ease;
		color: hsla(0, 0%, 100%, .5);
	}

	.VerticalNav.nav .cu-item.cur {
		background: #2f2e33;
		color: hsla(0, 0%, 100%, .9);
		font-weight: 700;
	}

	.VerticalNav.nav .cu-item.cur::after {
		background: linear-gradient(180deg, #55e9bc, #0dceda);
		border-bottom-right-radius: 4px;
		border-top-right-radius: 4px;
		box-shadow: 1px 0 12px 0 #0dceda;
		content: "";
		height: 20px;
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
	}
	::v-deep {
		.segmented-control {
			background-color: #232326;
		}
	}
</style>
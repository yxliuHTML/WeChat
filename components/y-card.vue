<template>
	<view style="min-height: 100vh;">
		<view class="search-box" id="search" :style="{ paddingTop: iStatusBarHeight + 'px' }">
			<uni-search-bar class="uni-search-bar" :class="[searchWidth ? 'searchWidth' : '']" placeholder="搜索营地套餐" :radius="16"
				bgColor="#2f2e33" cancelButton="none" v-model="searchValue" />
		</view>
		<u-divider text="共计 1 个营地套餐"></u-divider>
		<PartialCard :item="item" v-for="(item, index) in list" :key="index"></PartialCard>
		<u-divider text="到底啦"></u-divider>
	</view>
</template>

<script>
import PartialCard from '@/components/dramas/partial-card.vue'
export default {
	components: {
		PartialCard
	},
	options: {
		styleIsolation: 'shared'
	},
	data() {
		return {
			searchValue: '',
			list: [{
				src: "https://image.caiyunyi.com/camping/uploads/230235/camp_img/20230313/16759eca2d7643f55a087c21babb546b.jpg?imageView2/1/w/150/h/210",
				sceneryList: [{
					name: "湖泊",
				}, {
					name: "星空",
				}],
				title: '初夏露营好去处',
				info: '一起尽享夏日快乐',
				thought: 179.00,
				price: 179.00,
			}, {
				src: "https://image.caiyunyi.com/camping/uploads/230235/camp_img/20230313/16759eca2d7643f55a087c21babb546b.jpg?imageView2/1/w/150/h/210",
				sceneryList: [{
					name: "湖泊",
				}, {
					name: "星空",
				}],
				title: '初夏露营好去处',
				info: '一起尽享夏日快乐',
				thought: 179.00,
				price: 179.00,
			}, {
				src: "https://image.caiyunyi.com/camping/uploads/230235/camp_img/20230313/16759eca2d7643f55a087c21babb546b.jpg?imageView2/1/w/150/h/210",
				sceneryList: [{
					name: "湖泊",
				}, {
					name: "星空",
				}],
				title: '初夏露营好去处',
				info: '一起尽享夏日快乐',
				thought: 179.00,
				price: 179.00,
			}],
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
		}
	}
}
</script>
<style lang="scss" scoped>
.card-price {
	font-size: 16px;
	margin: 0 1px;
	vertical-align: -1px;
	font-weight: 500;
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
<template>
	<view class="container__tabs flex">
		<view class="container__tabs__item" :class="currentIndex === index ? 'active' : ''"
			v-for="(item, index) in values" :key="index" @click="_onClick(index)">
			<text>{{ item }}</text>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			current: {
				type: Number,
				default: 0
			},
			values: {
				type: Array,
				default () {
					return []
				}
			}
		},
		data() {
			return {
				currentIndex: 0
			}
		},
		watch: {
			current(val) {
				if (val !== this.currentIndex) {
					this.currentIndex = val
				}
			}
		},
		created() {
			this.currentIndex = this.current
		},
		methods: {
			_onClick(index) {
				if (this.currentIndex !== index) {
					this.currentIndex = index
					this.$emit('clickItem', {
						currentIndex: index
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	.container__tabs {
		border-bottom: 2rpx solid hsla(0, 0%, 100%, .03);
		background: #232326;
		padding: 0 40rpx;
		position: relative;
		color: hsla(0, 0%, 100%, .9);
		height: 80rpx;

		&__item {
			font-weight: 500;
			line-height: 76rpx;
			margin-right: 80rpx;
			position: relative;
			text-align: center;

			&.active {
				text {
					font-size: 34rpx;
					font-weight: 700;
					opacity: 1;
				}

				&:after {
					transform: scaleX(1);
				}
			}

			text {
				font-size: 28rpx;
				opacity: .4;
				transition: all .3s ease;
			}

			&:after {
				background: linear-gradient(90deg, #55e9bc, #0dceda);
				bottom: -2rpx;
				content: "";
				height: 4rpx;
				left: 0;
				position: absolute;
				transform: scaleX(0);
				transform-origin: left;
				transition: transform .5s ease;
				width: 100%;
			}
		}
	}

	.flex {
		display: flex;
		align-items: center;
	}
</style>
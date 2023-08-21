<template>
	<view class="container" @touchstart="touchStart" @touchend="touchEnd">
		<view class="screen1" ref="screen1" @touchmove="handleScroll1">
			<view class="content">
				<text>第一屏内容</text>
			</view>
		</view>
		<view class="screen2" ref="screen2" @touchmove="handleTouchMove2">
			<view class="content">
				<text>第二屏内容</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				screen1Height: 0,
				screen2Height: 0,
				touchStartX: 0, // 触屏起始点x  
				touchStartY: 0, // 触屏起始点y 
				isDown: false
			}
		},
		methods: {
			/**  
			 * 触摸开始  
			 **/
			touchStart(e) {
				console.log("触摸开始")
				this.touchStartX = e.touches[0].clientX;
				this.touchStartY = e.touches[0].clientY;
			},

			/**  
			 * 触摸结束  
			 **/
			touchEnd(e) {
				console.log("触摸结束")
				let deltaX = e.changedTouches[0].clientX - this.touchStartX;
				let deltaY = e.changedTouches[0].clientY - this.touchStartY;
				if (Math.abs(deltaY) > 50 && Math.abs(deltaX) < Math.abs(deltaY)) {
					if (deltaY < 0) {
						this.isDown = false
						console.log("上滑")
					} else {
						this.isDown = true
						console.log("下滑")
					}
				} else {
					console.log("可能是误触！")
				}
			},
			handleScroll1(event) {
				if (!this.isDown) {
					// 获取第一屏幕的高度
					uni.createSelectorQuery().select('.screen1').boundingClientRect(rect => {
						this.screen1Height = rect.height
						if (event.changedTouches[0].pageY >= rect.height * 0.5) {
							uni.pageScrollTo({
								scrollTop: this.screen1Height,
								duration: 500, // 动画时长，单位为ms
							});
						}
					}).exec()
				}
				// const screen1Height = this.$refs.screen1.$el.offsetHeight;
				// 当滚动到50%时，自动滚动到第二屏幕的顶部
			},
			handleTouchMove2(event) {
				if (this.isDown) {
					// 获取第二屏幕的高度
					uni.createSelectorQuery().select('.screen2').boundingClientRect(rect => {
						this.screen2Height = rect.height
					}).exec()
					// 当第二屏幕下拉到第一屏幕的80%时，回弹到第一屏幕的顶部
					if (event.touches[0].pageY > this.screen1Height * 0.2) {
						uni.pageScrollTo({
							scrollTop: 0,
							duration: 500, // 动画时长，单位为ms
						});
					}
				}
			},
		},
	};
</script>

<style>
	.container {
		width: 100%;
		height: 100vh;
	}

	.screen1,
	.screen2 {
		width: 100%;
		height: 100%;
		overflow-y: scroll;
	}

	.content {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.screen1 {
		background-color: lightblue;
	}

	.screen2 {
		background-color: lightgreen;
	}
</style>
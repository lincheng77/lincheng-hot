<template>
	<view class="my-search-container">
		<!-- 搜索按钮 -->
		<view class="my-search-box">
			<!-- 搜索图标 -->
			<image class="icon" src="@/static/images/search.png"></image>
			<!-- placeholder -->
			<text class="placeholder">{{placeholderText}}</text>
		</view>

	</view>
</template>

<script>
	export default {
		name: "my-search",
		props: { //相当于小程序中的properties
			placeholderText: {
				type: String,
				default: "搜索"
			}
		},
		data() {
			return {

			};
			c
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/uni.scss';

	.my-search-container {
		display: flex;
		align-items: center;

		.my-search-box {
			height: 36px;
			width: 100%;
			background-color: $uni-bg-color;
			border-radius: 15px;
			border: 1px solid $uni-bg-color-border;
			display: flex;
			align-items: center;
			padding: o $uni-spacing-row-base;
		}

		.icon {
			width: $uni-img-size-sm;
			height: $uni-img-size-sm;
		}

		.placeholder {
			font-size: $uni-font-size-sm;
			margin-left: $uni-spacing-row-sm;
			color: $uni-text-color-placeholder;
		}
	}
</style>

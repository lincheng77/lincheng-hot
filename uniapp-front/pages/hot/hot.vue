<template>
	<view class="hot-container">
		<!-- @符号相当于 当前项目的根目录 -->
		<image class="logo" mode="aspectFit" src="@/static/images/logo-my.png" />
		<!-- 可以直接使用组件，无需注册 -->
		<view class="search-box">
			<my-search placeholderText="uni app自定义组件"></my-search>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss" scoped>
	//scoped 表示当前文件的 样式只能在当前组件中生效 -> 样式的隔离性
	.hot-container {
		background-color: $uni-bg-color;

		.logo {
			width: 100%;
			height: 80px;
		}

		.search-box{
			padding: 0 16px;
			margin-bottom: $uni-spacing-col-base;
		}
	}
</style>

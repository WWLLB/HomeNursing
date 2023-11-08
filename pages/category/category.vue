<template>
	<view class="classify">
		<!-- 搜索框 -->
		<!-- <view class="search">
			<view class="search-content" @click="goToSearch">
				<!-- 在uni-app官网找的图标 
				<uni-icons type="search" size="26" color="#9F9F9F"></uni-icons>
				<text>搜索</text>
			</view>
		</view>-->
		<!-- 分类部分 -->
		<view class="cate-container">
			<view class="cate-left">
				 <view :class="['cate-item',activeIndex==index?'active':'']" v-for="(item,index) in cateList" :key="index" @click="changeActive(index)">{{item.classifyName}}</view>
			</view>
			<view class="cate-right">
				<view class="cate-content" v-for="(goodItem,goodIndex) in goodList" :key="goodIndex">
					<!--image :src="goodItem.picUrl" mode=""></image-->
					<view class="cate-text">{{goodItem.picUrl}}</view>
					<view class="cate-text">{{goodItem.text}}</view>
					<view class="cate-text">{{goodItem.text1}}</view>
					
				</view>
			</view>
		</view>
	</view>
</template>
 
<script>
	export default {
		data() {
			return {
				// 初始化的分类列表
				cateList:[],
				// 当前点击项的索引号
				activeIndex:0,
				// 分类下的商品信息
				goodList:[]
			};
		},
		methods:{
			/*async getcateList(){
				const res=await uni.$http.get('/classify')
				console.log(res)
				const {data:{classify,code}}=res
				if(code!=200){
					return uni.showToast({
						title:'加载数据失败',
						duration:1000,
						icon:'none'
					})
				}else{
					this.cateList=classify
					// 获取第一个分类下的商品
					this.goodList=classify[0].children
				}
			},*/
			//更改点击项的索引号
			changeActive(i){
				this.activeIndex=i
				// 已经获取到索引号
				this.goodList=this.cateList[i].children
			},
			//点击搜索框跳转到搜索页面
			goToSearch:function(){
				uni.navigateTo({
					url:'/subpkg/goods-search/goods-search'
				})
			}
		},
		onLoad() {
			
		    uni.request({
		        url: "http://localhost:8089/classify",
		        method: 'GET',
		        success: (res) => {
		            console.log(res.data);
		            console.log(res)
		            const {data:{classify,code}}=res
		            if(code!=200){
		                return uni.showToast({
		                    title:'加载数据失败',
		                    duration:1000,
		                    icon:'none'
		                })
		            }else{
		                this.cateList=classify
		                // 获取第一个分类下的商品
		                this.goodList=classify[0].children
		            }               
		        }
		    });
		}
	}
</script>
 
<style lang="scss">
*{
	margin: 0;
	padding: 0;
}
.classify{
	background-color: #fff;
	.search{
		width: 100%;
		height: 134rpx;
		display: flex;
		align-items: center;
		.search-content{
			width: 90%;
			height: 80rpx;
			margin:auto;
			border: 1px solid #E6E6E6;
			border-radius: 100rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			color: #9F9F9F;
			text{
				margin-left: 10rpx;
			}
		}
	}
	.cate-container{
		width: 100%;
		display: flex;
		.cate-left{
			width: 200rpx;
			background-color: #F6F6F6;
			.cate-item{
				width: 100%;
				height: 100rpx;
				line-height: 100rpx;
				padding-left: 40rpx;
				box-sizing: border-box;
			}
			.active{
				background-color: #FFFFFF;
				position: relative;
				padding-left: 40rpx;
				box-sizing: border-box;
				&::before{
					content: '';
					display:block;
					width: 10rpx;
					border-radius: 6rpx;
					height: 40rpx;
					background-color: #FC4353;
					position: absolute;
					left: 0rpx;
					top: 30rpx;
				}
			}
		}
		.cate-right{
			flex: 1;
			display: flex;
			flex-wrap: wrap;
			height: 300rpx;
			.cate-content{
				width: 33%;
				height: 200rpx;
				text-align: center;
				image{
					width: 100rpx;
					height: 100rpx;
				}
				.cate-text{
					font-size: 34rpx;
				}
			}
		}
	}
}
 
</style>
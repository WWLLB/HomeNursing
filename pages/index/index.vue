<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
<template>
	<view>
		<view class="head">
			<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
				:duration="duration">
				<swiper-item>
					<view class="swiper-item ">
						<image class="image-type" src="../image/elder1.jpg"  />
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item ">
						<image class="image-type" src="../image/elder2.jpg"  />
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item ">
						<image class="image-type" src="../image/elder3.jpg"  />
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="content">
			<br>
			<view style="text-align: center;">服务宗旨：</view>
			<view class="option-wrap">
			   <br><br>
			   <mix-list-cell icon="icon-iconfontweixin" iconColor="#fa436a" title="我们致力于为您的家庭提供温馨、安全、贴心的养老服务，以确保您的家人在渡过晚年的每一天都能感受到关爱与尊重。我们的服务宗旨如下："></mix-list-cell>
			   <br>
			   <mix-list-cell icon="icon-tuanduiguanli" iconColor="#5fcda2" title="尊重与关怀： 我们尊重每一位家庭成员的独特需求和个性，为您提供个性化的关怀服务，让您感受到家一般的温暖和尊重。"></mix-list-cell>
			   <br>
			   <mix-list-cell icon="icon-dizhi" iconColor="#ee883b" title="安全与舒适： 我们致力于创造安全、舒适的居家环境，通过贴心的照料和关怀，让您的家人享受安心、愉快的生活，安享晚年。" ></mix-list-cell>
			   <br>
			   <mix-list-cell icon="icon-shoucang_xuanzhongzhuangtai" iconColor="#54b4ef" title="专业与贴心： 我们的团队成员拥有专业的养老服务知识和技能，同时怀着真诚的关怀之心，为您提供贴心的照料和支持，让您的家人感受到真正的关怀和安心。"></mix-list-cell>
			   <br>
			   <mix-list-cell icon="icon-pinglun-copy" iconColor="#ee883b" title="沟通与协作： 我们重视与家庭成员之间的沟通与协作，倾听您的意见和需求，灵活调整服务计划，确保我们的服务能够贴合您家庭的实际情况和需求。"></mix-list-cell>
			   <br>
			   <mix-list-cell icon="icon-shezhi1" iconColor="#37b0fb" title="社区与互助： 我们鼓励家庭成员之间的互助和社区间的合作，通过促进社交活动和社区参与，让您的家人保持积极乐观的生活态度，享受充实的生活。" border="" ></mix-list-cell>
			   <br>
			   <mix-list-cell icon="icon-shezhi1" iconColor="#37b0fb" title="我们坚信，每一个家庭都是独特的，每一位家庭成员都值得最好的关怀和尊重。通过我们的努力，我们希望能为您的家庭带来安宁、幸福和温馨，让您的家人在温暖的家庭氛围中度过美好的晚年时光。" border="" ></mix-list-cell>
			   <br>
			</view>
		</view>
	
		
		
	</view>
</template>


<script>
export default {
    data() {
        return {
            
            indicatorDots: true,
            autoplay: true,
            interval: 2000,
            duration: 500,
			
        }
    },
	// navigate.vue页面接受参数
	onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
		console.log(option.id); //打印出上个页面传递的参数。
		console.log(option.name); //打印出上个页面传递的参数。
	}
    
}


</script>



<style>
	.head {//头部格式
		width: 690rpx;
		width: 100%;
	}
	.swiper {//swiper框架格式
		height: 500rpx;
	}
	.swiper-item {//swiper单元格式
		display: block;
		height: 1000rpx;
		line-height: 1000rpx;
		text-align: center;
	}
	.image-type{//图片格式
		width: 1000rpx;
		height: 500rpx;
		
	}
	.content {//内容格式
		width: 690rpx;
		width: 100%;
		font-size: 38rpx;
	}
	.nav{
					width: 750rpx;
					// 四项全部在一排，开启flex布局
					display: flex;
					//自动换行
					flex-wrap: wrap;
					.nav_item{
						//四个元素，每个宽设置25%
						width: 25%;
						
						//设置文字居中
						text-align: center;
						view{
							background-color: #b50e03;
							//设置圆角为高的一半，就变成了圆
							border-radius: 60rpx;
							width: 120rpx;
							height: 120rpx;
							//设置左右auto，可以变成水平居中
							margin: 15rpx auto;
							//设置行高，可以改变字体图标的上下位置
							line-height: 120rpx;
							color: #fff;
							font-size: 50rpx;
						}
						.icon-tupian{
							font-size: 45rpx;
						}
						text{
							font-size: 30rpx;
						}
					}
				}

</style>


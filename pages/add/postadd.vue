<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
<template>
	<view>
		<view>
			<form @submit="formSubmit" @reset="formReset">
				<view class="uni-form-item uni-column">
					<view class="title" style="text-align: center;">请确认投诉对象，并说明原因</view>
				</view>
				
				
				
				<view class="uni-form-item uni-column">
					<view class="title">投诉对象</view>
				</view>
				<view class="uni-list">
					<radio-group name="favourite"  @change="radioChange">
						<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in items" :key="item.value">
							<view>
								<radio :value="item.value" :checked="index === current">
									{{item.name}}
								</radio>
								
							</view>
							<br>
						</label>
					</radio-group>
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">姓名</view>
					<input class="uni-input" name="sno"  />
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">原因</view>
					<input class="uni-input" name="name" />
				</view>
				
				<view class="uni-btn-v">
					<button form-type="submit">提交</button>
					<button type="default" form-type="reset">一键重置</button>
				</view>
			</form>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
		        return {
		            items: [
		                {
		                    value: '护工1',
		                    name: '护工1'
		                },
		                {
		                    value: '护工2',
		                    name: '护工2'
		                },
		                {
		                    value: '护工3',
		                    name: '护工3'
		                },
		            ],
		            current: 0
		        }
		    },
		methods: {
			formSubmit: function(e) {
				console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
				var formdata = e.detail.value
				uni.showModal({
					content: '提交成功，谢谢你的支持！',
					showCancel: false
				});
				
				
				uni.request({
					
				    url: "http://localhost:8089/js20080214",
				    method: 'POST',
				    data:{formdata},
				    success: (res) => {
				        console.log(res.data);
	                    console.log(res)
				        
				        if(res.data.code!=0){
				            return uni.showToast({
				                title:'加载数据失败',
				                duration:1000,
				                icon:'none'
				            })
				        }else if(res.data.code=0){
				             return uni.showToast({
				                title:'提交成功，谢谢你的支持！',
				                duration:1000,
				                icon:'none'
				            })
				        }               
				    }
				});
				
			},
			radioChange: function(evt) {
			            for (let i = 0; i < this.items.length; i++) {
			                if (this.items[i].value === evt.detail.value) {
			                    this.current = i;
			                    break;
			                }
			            }
			        },
			formReset: function(e) {
				console.log('清空数据')
			}
		}
	}
</script>
<style>
	.uni-form-item .title {
		padding: 20rpx 0;
		flex: 1;
		font-size: 32rpx;
		color: #333;
		font-weight: 700;
	}
</style>

<template>
  <div>
    <div class="login-box">
      <h2>登录系统</h2>
      <form @submit="formSubmit" @reset="formReset">
      	
      	
      	<view class="uni-form-item uni-column">
      		<view class="title">用户名</view>
      		<input class="uni-input" name="sno"  />
      	</view>
      	<view class="uni-form-item uni-column">
      		<view class="title">密码</view>
      		<input class="uni-input" name="name" />
      	</view>
      	
      	<view class="uni-form-item uni-column">
      		<view class="title">登录身份</view>
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
      	
      	
      	<view class="uni-btn-v">
      		<button form-type="submit">登录</button>
			
  			<a @click="signUp_asd" >注册 </a>
      	</view>
      </form>
    </div>
  </div>
</template>

<script>
//import axios from "axios";
export default {
		data() {
		        return {
		            items: [
		                {
		                    value: '0',
		                    name: '老人'
		                },
		                {
		                    value: '1',
		                    name: '护工'
		                },
		                {
		                    value: '2',
		                    name: '管理员'
		                },
		            ],
		            current: 0
		        }
		    },
  methods: {
    signUp_asd(){
      this.$router.replace({path: '../account/account'});
    },
    

    formSubmit: function(e) {
    	console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
    	var formdata = e.detail.value
    	uni.showModal({
    		content: '提交成功，谢谢你的支持！',
    		showCancel: false
    	});
    	this.$router.replace({path: '../index/index'});
    	
    	uni.request({
    		
    	    url: "http://localhost:8089/login",
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
  },
}
;
</script>

<style>
	.uni-form-item .title {
		padding: 20rpx 0;
		flex: 1;
		font-size: 32rpx;
		color: #333;
		font-weight: 700;
	}
	body {
	  background-image: url(https://img-blog.csdnimg.cn/a7d3536782d34024914b76d3eafbe637.jpg);
	  background-repeat: no-repeat;
	  background-size: 100%;
	  background-position: 0px -50px;
	}
	
	.login-box {
	  position: absolute;
	  top: 50%;
	  left: 50%;
	  width: 400px;
	  padding: 40px;
	  transform: translate(-50%, -50%);
	  background: rgba(0, 0, 0, .5);
	  box-sizing: border-box;
	  box-shadow: 0 15px 25px rgba(0, 0, 0, .6);
	  border-radius: 10px;
	}
	
	.login-box h2 {
	  margin: 0 0 30px;
	  padding: 0;
	  color: #fff;
	  text-align: center;
	}
	
	.login-box .user-box {
	  position: relative;
	}
	
	.login-box .user-box input {
	  width: 100%;
	  padding: 10px 0;
	  font-size: 16px;
	  color: #fff;
	  margin-bottom: 30px;
	  border: none;
	  border-bottom: 1px solid #fff;
	  outline: none;
	  background: transparent;
	}
	
	.login-box .user-box label {
	  position: absolute;
	  top: 0;
	  left: 0;
	  padding: 10px 0;
	  font-size: 16px;
	  color: #fff;
	  pointer-events: none;
	  transition: .5s;
	}
	
	.login-box .user-box input:focus ~ label,
	.login-box .user-box input:valid ~ label {
	  top: -20px;
	  left: 0;
	  color: #03e9f4;
	  font-size: 12px;
	}
	
	.login-box form a {
	  position: relative;
	  display: inline-block;
	  padding: 10px 20px;
	  color: #03e9f4;
	  font-size: 16px;
	  text-decoration: none;
	  text-transform: uppercase;
	  overflow: hidden;
	  transition: .5s;
	  margin-top: 40px;
	  letter-spacing: 4px
	}
	
	.login-box a:hover {
	  background: #03e9f4;
	  color: #fff;
	  border-radius: 5px;
	  box-shadow: 0 0 5px #03e9f4,
	  0 0 25px #03e9f4,
	  0 0 50px #03e9f4,
	  0 0 100px #03e9f4;
	}
	
	.login-box a span {
	  position: absolute;
	  display: block;
	}
	
	.login-box a span:nth-child(1) {
	  top: 0;
	  left: -100%;
	  width: 100%;
	  height: 2px;
	  background: linear-gradient(90deg, transparent, #03e9f4);
	  animation: btn-anim1 1s linear infinite;
	}
	
	@keyframes btn-anim1 {
	  0% {
	    left: -100%;
	  }
	  50%, 100% {
	    left: 100%;
	  }
	}
	
	.login-box a span:nth-child(2) {
	  top: -100%;
	  right: 0;
	  width: 2px;
	  height: 100%;
	  background: linear-gradient(180deg, transparent, #03e9f4);
	  animation: btn-anim2 1s linear infinite;
	  animation-delay: .25s
	}
	
	@keyframes btn-anim2 {
	  0% {
	    top: -100%;
	  }
	  50%, 100% {
	    top: 100%;
	  }
	}
	
	.login-box a span:nth-child(3) {
	  bottom: 0;
	  right: -100%;
	  width: 100%;
	  height: 2px;
	  background: linear-gradient(270deg, transparent, #03e9f4);
	  animation: btn-anim3 1s linear infinite;
	  animation-delay: .5s
	}
	
	@keyframes btn-anim3 {
	  0% {
	    right: -100%;
	  }
	  50%, 100% {
	    right: 100%;
	  }
	}
	
	.login-box a span:nth-child(4) {
	  bottom: -100%;
	  left: 0;
	  width: 2px;
	  height: 100%;
	  background: linear-gradient(360deg, transparent, #03e9f4);
	  animation: btn-anim4 1s linear infinite;
	  animation-delay: .75s
	}
	
	@keyframes btn-anim4 {
	  0% {
	    bottom: -100%;
	  }
	  50%, 100% {
	    bottom: 100%;
	  }
	}
</style>


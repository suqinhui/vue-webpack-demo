<template>
  <div class="login-wrap">
      <el-form class="login-container">
        <h1 class="title">用户登陆</h1>
        <el-form-item >
          <el-input type="text" v-model="username"  placeholder="用户账号" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item >
          <el-input type="password" v-model="password" placeholder="用户密码" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="doLogin" style="width: 100%;">登陆</el-button>
        </el-form-item>
        <el-row style="text-align: center;margin-top: -10px;">
            <el-link type="primary" @click="doRegister">注册账号</el-link>
            <el-link type="primary" @click="message">忘记密码</el-link>
        </el-row>
      </el-form>
  </div>
</template>
 
<script>
  import axios from 'axios'
  export default{
    name:'Login',
    data() {
      return {
        username: 'admin',
        password: '123'
      }
    },
    methods: {
      doLogin() {
        this.$router.push('/home') //路由跳转

        /*
        let username = this.username;
        let password=this.password;
        let url ="http://localhost:8080/j2eeVue/userAction.action";
        let params = {
            username:username,
            password:password,
            methodName:'userLogin'
        }
        //发起ajax请求-GET(注意参数必须保存到params属性中)
        axios.get(url,{params:params}).then(resp=>{
          this.$message({
             type: resp.data.code==1?'success':'error',
             message:resp.data.msg
          });
        }).catch(err=>{
          console.log(err);
        })
        */
      },

      doRegister() {
        this.$router.push('/hello') //路由跳转
      },

      message(){
        // this.messageBox('这是一条消息提示','info')
        // this.messageBox('这是一条成功消息提示','success')
        // this.messageBox('这是一条失败消息提示','error')
        // this.messageBox('这是一条警告消息提示','warning')
        this.test();
      }
    }
  }
</script>
 
<style>
  	.login-wrap {
  		box-sizing: border-box;
  		width: 100%;
  		height: 100%;
  		padding-top: 10%;

  	}
 
  	.login-container {
  		border-radius: 10px;
  		margin: 0px auto;
  		width: 350px;
  		padding: 30px 35px 15px 35px;
  		background: #fff;
  		border: 1px solid #eaeaea;
  		text-align: left;
  		box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);
  	}
 
  	.title {
  		margin: 0px auto 40px auto;
  		text-align: center;
  		color: #505458;
  	}
</style>
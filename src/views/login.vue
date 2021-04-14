<template>
  <div class="container">
    <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="100px" class="loginForm">
      <el-form-item label="用户名" prop="username" class="username-input">
        <el-input type="text" v-model="loginForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password" class="password-input">
        <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="loginButton" @click="submitForm('loginForm')">登录</el-button>
        <el-button class="resetButton" @click="toRegistered()">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    var validateUserName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入手机号或邮箱'));
      } else {
        if(this.validatePhoneNumber(value)){
          this.loginForm.username = value
        }else if(this.validateEmail(value)){
          this.loginForm.username = value
        }else {
          this.loginForm.username = ''
          callback(new Error('电话或邮箱格式错误'));
        }
        callback();
      }
    };
    var validatePassWord = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('密码不能为空'));
      }else {
        this.loginForm.password = value
      }
    };
    return {
      loginForm: {
        username: '',
        password: '',
      },
      rules: {
        username: [
          { validator: validateUserName, trigger: 'blur' }
        ],
        password: [
          { validator: validatePassWord, trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    async submitForm(formName) {
      if(this.loginForm.username==='' || this.loginForm.password===''){
        this.$message.error({
          message:"请检查用户名或密码，并重新输入",
          showClose:true
        })
        return
      }
      let user = await this.$axios.post(`http://localhost:8082/login/?username=${this.loginForm.username}&password=${this.loginForm.password}`)
          .then(
              async function(response){
                return await response.data;
              }
          )
          .catch(function (err) {
            console.log(err)
          });
      if(user !== ''){
        console.log(user)
        this.$message.success({
          message:"登录成功!"
        })
        sessionStorage.setItem("userName",user.userName)
        sessionStorage.setItem("collection",user.collection)
        this.$bus.$emit('change')
        this.$router.push('/news')
      }else {
        this.$message.error({
          message:"用户名或密码错误",
          showClose:true
        })
      }
    },
    toRegistered() {
      this.$router.push('/registered')
    },
    validatePhoneNumber(str) {
      const reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/
      return reg.test(str)
    },
    validateEmail(str) {
      const reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
      return reg.test(str)
    }
  }
}
</script>

<style scoped>
.container{
  height: 100%;
  width: 100%;
  background-color: #65657b;
  display: flex;
  justify-content: center;
  align-content: center;
}
.loginForm{
  width: 320px;
  height: 340px;
  margin-top: 160px;
  background-color: #fcfaef;
}
.username-input{
  margin-top: 80px;
  margin-left: -16px;
  width: 300px;
}
.password-input{
  margin-left: -16px;
  width: 300px;
}
.loginButton{
  margin-top: 16px;
  margin-left: -16px;
}
.resetButton{
  margin-left: 32px;
}
</style>
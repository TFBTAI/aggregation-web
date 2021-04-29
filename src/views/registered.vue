<template>
  <div class="container">
    <el-form :model="registeredForm" status-icon :rules="rules" ref="registeredForm" label-width="100px" class="registeredForm">
      <el-form-item label="用户名" prop="username" class="username-input">
        <el-input type="text" v-model="registeredForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password" class="password-input">
        <el-input type="password" v-model="registeredForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="regisButton" @click="submitForm('registeredForm')">注册</el-button>
        <el-button class="resetButton" @click="resetForm('registeredForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "registered",
  data() {
    var validateUserName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入手机号或邮箱'));
      } else {
        if(this.validatePhoneNumber(value)){
          this.registeredForm.username = value
        }else if(this.validateEmail(value)){
          this.registeredForm.username = value
        }else {
          this.registeredForm.username = ''
          callback(new Error('电话或邮箱格式错误'));
        }
        callback();
      }
    };
    var validatePassWord = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('密码不能为空'));
      }else {
        this.registeredForm.password = value
      }
    };
    return {
      registeredForm: {
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
      if(this.registeredForm.username==='' || this.registeredForm.password===''){
        this.$message.error({
          message:"请检查用户名或密码，并重新输入",
          showClose:true
        })
        return
      }
      let result = await this.$axios.post(`registered/?username=${this.registeredForm.username}&password=${this.registeredForm.password}`)
          .then(
              async function(response){
                return await response.data;
              }
          )
          .catch(function (err) {
            console.log(err)
          });
      if(result){
        this.$message.success({
          message:"注册成功,正在跳转到登录页...",
          showClose:true
        })
        setTimeout(()=>{
          this.$router.push('/login')
        },2000)
      }else {
        alert('该用户已存在!')
      }
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
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
  .registeredForm{
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
  .regisButton{
    margin-top: 16px;
    margin-left: -16px;
  }
  .resetButton{
    margin-left: 32px;
  }
</style>
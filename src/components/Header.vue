<template>
  <div class="container">
    <div class="header">
      <div class="header-left">
        <img class="logo" :src="logoImg">
        <el-input placeholder="请输入搜索的关键字" suffix-icon="el-icon-search" v-model="searchInput" class="search-bar"></el-input>
      </div>
      <div class="header-right">
        <el-dropdown>
          <el-avatar :size="36" :src="user_avatar" class="user-avatar"></el-avatar>
          <el-dropdown-menu class="drop-menu" slot="dropdown">
            <el-dropdown-item class="drop-item" @click.native="toPage('/login')" v-if="!isLogin">登录</el-dropdown-item>
            <el-dropdown-item class="drop-item" v-if="isLogin" disabled>{{userName}}</el-dropdown-item>
            <el-dropdown-item class="drop-item" @click.native="toPage('/registered')" v-if="!isLogin" divided>注册</el-dropdown-item>
            <el-dropdown-item class="drop-item" @click.native="toPage('/admin')" v-if="isLogin">管理页面</el-dropdown-item>
            <el-dropdown-item class="drop-item" v-if="isLogin" @click.native="loginOut()">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

      </div>
    </div>
    <div class="main">
      <el-menu :default-active="currentPath" class="router-menu" mode="horizontal" router="true" @select="handleSelect" background-color="#f3e9e9" text-color="#666363" active-text-color="#090707">
        <el-menu-item index="/index">首页</el-menu-item>
        <el-menu-item index="/news">综合</el-menu-item>
        <el-menu-item index="/tech">科技</el-menu-item>
        <el-menu-item index="/ent">娱乐</el-menu-item>
        <el-menu-item index="/community">社区</el-menu-item>
        <el-menu-item index="/finance">财经</el-menu-item>
        <el-menu-item index="/developer">开发</el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>

export default {
  name: "Header",
  data(){
    return{
      searchInput:'',
      currentPath: '',
      isLogin: false,
      userName:'',
      logoImg: require("../assets/images/logo.png"),
      user_avatar: require("../assets/images/user_notLogin.png"),
      user_avatar_noLogin: require("../assets/images/user_notLogin.png"),
      user_avatar_logined: require("../assets/images/user-img.jpg"),
      shopIcon: require("../assets/images/shop.png")
    }
  },
  methods:{
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    toPage(comman) {
      this.$router.push(comman)
    },
    loginOut(){
      this.userName = ''
      sessionStorage.removeItem('userName')
      sessionStorage.removeItem('collection')
      this.user_avatar = this.user_avatar_noLogin
      location.reload();
    }
  },
  mounted() {
    this.currentPath = this.$route.path
    this.$bus.$on('change', ()=> {
      const userName = sessionStorage.getItem('userName')
      if(userName !== null){
        this.isLogin = true;
        this.userName = userName
        this.user_avatar = this.user_avatar_logined
      }
    })
  },
  watch:{
    '$route'(to,from){
      this.currentPath = to.path
    }
  },
  activated() {
    this.currentPath = this.$route.path
    const userName = sessionStorage.getItem('userName')
    if(userName !== null){
      this.isLogin = true;
      this.userName = userName
      this.user_avatar = this.user_avatar_logined
    }
  }
}
</script>

<style scoped>
.header{
  display: flex;
  height: 64px;
  width: 100%;
  background-color: #f3e9e9;
  /*background-color: #1c1c20;*/
}
.header-left{
  display: flex;
  height: 64px;
  width: 50%;
  align-items: center;
}
.header-right{
  display: flex;
  height: 64px;
  width: 50%;
  align-items: center;
  justify-content: flex-end;
}
.logo{
  height: 42px;
  width: 42px;
  margin-left: 40px;
}
.shop-icon{
  height: 42px;
  width: 42px;
  margin-right: 40px;
}
.appLink{
  color: #1e90ff;
  margin-right: 40px;
}
.user-avatar{
  margin-right: 24px;
  margin-top: 16px;
}
.search-bar{
  width: 540px;
  margin-left: 20px;
}
.router-menu{
  display: flex;
  justify-content: center;
}
.drop-item{
  width: 120px;
  height: 40px;
}
</style>
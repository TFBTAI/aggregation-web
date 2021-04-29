<template>
<el-container>
  <el-aside width="200px">
    <el-menu>
      <el-menu-item>
        <span slot="title">用户列表</span>
      </el-menu-item>
      <el-menu-item>
        <span slot="title">节点数据</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
  <el-main style="padding: 20px">
    <el-table :data="userList">
      <el-table-column prop="id" label="Id" width="70"></el-table-column>
      <el-table-column prop="userName" label="用户名"></el-table-column>
      <el-table-column prop="email" label="邮箱"></el-table-column>
      <el-table-column prop="phone" label="手机号"></el-table-column>
      <el-table-column prop="coll" label="用户收藏节点"></el-table-column>
      <el-table-column prop="status" label="用户权限"></el-table-column>
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <el-button size="small">编辑</el-button>
          <el-button size="small" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-main>
</el-container>
</template>

<script>
export default {
  name: "admin",
  data() {
    return {
      userList: []
    }
  },
  beforeCreate() {
    // this.$parent.isShow = false
  },
  async beforeMount() {
    this.$axios.get('user/list').then(res => this.userList = res.data)
  }
}
</script>

<style scoped>

</style>
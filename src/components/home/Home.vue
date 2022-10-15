<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      background-color="#261d45"
      text-color="#fff"
      active-text-color="#ccc"
      mode="horizontal"
      router
      @select="handleSelect">
      <el-row type="flex" class="row-bg" justify="start">
        <el-col :span="12">
          <img class="logo-title" src="../../assets/logo.png" alt="logo">
        </el-col>
        <el-col :span="1.5">
          <el-menu-item index="/home">首页</el-menu-item>
        </el-col>
        <el-col :span="2.5">
          <el-menu-item index="/tipap">笔记/转换</el-menu-item>
        </el-col>
        <el-col :span="2.5">
          <el-menu-item index="/home/3">记录</el-menu-item>
        </el-col>
      </el-row>
    </el-menu>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect (res) {
      console.log(res)
    }
  }
}
</script>

<style lang="less" scoped>

.row-bg {
  width: 900px;
  .logo-title {
    margin: 1px;
    width: 50px;
  }
}
</style>
<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      background-color="#409eff"
      text-color="#fff"
      active-text-color="#ccc"
      mode="horizontal"
      router
      @select="handleSelect">
      <el-menu-item index="/home">首页</el-menu-item>
      <el-menu-item index="/tipap">记录/转换</el-menu-item>
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
    }
  }
}
</script>

<style lang="less" scoped>

</style>
<template>
  <div class="home">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      background-color="transparent"
      text-color="#fff"
      active-text-color="#ff01fc"
      mode="horizontal"
      @select="handleSelect">
      <el-row type="flex" class="row-bg" justify="start">
        <el-col :span="12">
          <img class="logo-title" src="../../assets/logo.png" alt="logo">
        </el-col>
        <el-col :span="1.5">
          <el-menu-item index="1">首页</el-menu-item>
        </el-col>
        <el-col :span="2.5">
          <el-menu-item index="2">字符/转换</el-menu-item>
        </el-col>
        <el-col :span="2.5">
          <el-menu-item index="3">暂存内容</el-menu-item>
        </el-col>
      </el-row>
    </el-menu>
    <router-view @hidden="getShowHidden"/>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      activeIndex: '1',
      showHidden: '1'
    }
  },
  created () {
    if(this.$route.path === '/home/introduce') {
      this.activeIndex = '1'
    }
    if(this.$route.path === '/tipap') {
      this.activeIndex = '2'
    }
    if(this.$route.path === '/home/temporary') {
      this.activeIndex = '3'
    }
  },
  methods: {
    handleSelect (index) {
      if(index == '1') {
        if(this.$route.path !== '/home/introduce') {
          this.$router.push('/home/introduce')
        }
      } else if(index == '2') {
        if(this.$route.path !== '/tipap') {
          this.$router.push('/tipap')
        }
      } else if(index == '3') {
        if(this.$route.path !== '/home/temporary') {
          this.$router.push('/home/temporary')
        }
      }
    },
    getShowHidden(res) {
      console.log(res)
      this.showHidden = res
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
.el-menu.el-menu--horizontal {
  border-color: transparent;
}
</style>
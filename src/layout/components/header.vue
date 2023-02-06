<template>
    <div class="layout">
        <div class="flex justify-between align-center h-64 bg-c001529">
            <div class="flex align-center">
                <img class="m-l-18 m-r-8" src="../../assets/common/logo.png" alt="" >
                <div class="login-text font-20 fw-600 text-white">TokEX Affiliate</div>
            </div>
            <div class="flex align-center">
                <el-dropdown class="text-white cursor-point" trigger="click">
                    <span class="el-dropdown-link">
                        {{ language }}<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item class="flex align-center justify-between text-c001529 p-l-32 p-r-24">
                            简体中文
                            <img src="../../assets/common/selected.png" alt="">
                        </el-dropdown-item>
                        <el-dropdown-item class="flex align-center justify-between text-c001529 p-l-32 p-r-24">
                            English
                            <img src="../../assets/common/selected.png" alt="">
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <div class="line w-1 h-20 bg-c96A0B5 m-lr-24"></div>
                <div class="flex align-center cursor-point" @click="loginOut">
                    <img src="../../assets/common/exit.png" alt="">
                    <div class="text-white m-l-4 m-r-24">退出</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      language: '简体中文'
    }
  },
  methods: {
    loginOut() {
      localStorage.clear()
      this.$router.replace({ path: '/login' })
    }
  }
}
</script>

<style lang="scss" scoped>
.el-dropdown-menu{
    width: 160px;
    top: 52px!important;
    // left: 1270px!important;
    .el-dropdown-menu__item{
        line-height: 60px;
    }
    ::v-deep .popper__arrow{
        display: none !important;
    }
}
.login-text{
    font-family: PingFang SC-Semibold, PingFang SC;
}
.line{
    opacity: .5;
}
</style>

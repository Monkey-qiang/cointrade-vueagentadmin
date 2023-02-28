<template>
  <div class="layout">
    <div class="flex justify-between align-center h-64 bg-c141518">
      <div class="flex align-center">
        <img class="m-l-18 m-r-8" src="../../assets/common/logo.png" alt="">
        <div class="login-text font-20 fw-600 text-FFC304 cursor-point" @click="jump">Tokex Affiliate</div>
      </div>
      <div class="flex align-center text-center">
        <div class="m-r-14 l-h-24 b-r-4 w-48 h-24 cursor-point bg-FFC304 ff-Medium text-c001529 font-14 fw-500"
          @click="login"
          v-if="isLogin || $route.path.indexOf('verification') > -1 || $route.path.indexOf('application') > -1 ? false : true">
          {{ $t('login.login') }}</div>
        <div class="m-r-20 l-h-24 b-r-4 w-48 h-24 cursor-point bg-c141518 ff-Medium text-FFC304 font-14 fw-500 brcolor"
          @click="apply"
          v-if="$route.path.indexOf('verification') > -1 || $route.path.indexOf('application') > -1 || isLogin ? false : true">
          {{ $t('login.apply') }}</div>
        <div class="flex align-center">
          <el-dropdown
            v-if="$route.path.indexOf('verification') > -1 || $route.path.indexOf('application') > -1 ? false : true"
            class="text-white cursor-point m-r-24" @command="handleCommand">
            <span class="el-dropdown-link">
              {{ language }}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item class="flex align-center justify-between text-c001529 p-l-32 p-r-24" command="zh">
                简体中文
                <img v-if="language == '简体中文'" src="../../assets/common/selected.png" alt="">
              </el-dropdown-item>
              <el-dropdown-item class="flex align-center justify-between text-c001529 p-l-32 p-r-24" command="en">
                English
                <img v-if="language == 'English'" src="../../assets/common/selected.png" alt="">
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <div class="line w-1 h-20 bg-c96A0B5 m-r-24" v-if="isLogin"></div>
          <div class="flex align-center cursor-point" @click="loginOut" v-if="isLogin">
            <img src="../../assets/common/exit.png" alt="">
            <div class="text-white m-l-4 m-r-24">{{ $t('common.exit') }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      language: '',
      isLogin: false
    }
  },
  watch: {
    '$store.state.token'(newVal) {
      if (newVal) {
        this.isLogin = true
      } else {
        this.isLogin = false
      }
    }
  },
  created() {
    this.isLogin = !!this.$store.state.token
    const language = localStorage.getItem('lang')
    if (language) {
      this.language = language == 'zh' ? '简体中文' : 'English'
    } else {
      this.language = '简体中文'
    }
  },
  methods: {
    jump() {
      this.$router.push({ path: '/agentPage' })
    },
    login() {
      this.$router.push({ path: '/login' })
    },
    apply() {
      this.$router.push({ path: '/agentPage/application' })
    },
    loginOut() {
      this.postRequest('agent/loginout').then(res => {
        if (res.code && res.code == 2000) {
          localStorage.clear()
          this.$store.commit('setToken', '')
          this.$router.replace({ path: '/login' })
        }
      })
    },
    handleCommand(command) {
      if (command == 'zh') {
        this.language = '简体中文'
      } else {
        this.language = 'English'
      }
      this.$i18n.locale = command
      localStorage.setItem('lang', command)
      window.location.reload()
      const language = localStorage.getItem('lang')
      this.language = language == 'zh' ? '简体中文' : 'English'
    }
  }
}
</script>

<style lang="scss" scoped>
.brcolor{
border: 1px solid #FFC304;
}
.el-dropdown-menu {
  width: 160px;
  top: 52px !important;

  // left: 1270px!important;
  .el-dropdown-menu__item {
    line-height: 60px;
  }

  ::v-deep .popper__arrow {
    display: none !important;
  }
}

.login-text {
  font-family: PingFang SC-Semibold, PingFang SC;
}

.line {
  opacity: .5;
}
</style>

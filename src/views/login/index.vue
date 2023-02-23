<template>
    <div class="login-contain flex">
        <img src="../../assets/login/login_bg.png" alt="">
        <div class="w-483 m-l-236 m-t-200">
          <!-- 欢迎登录 -->
            <div class="text-c001529 font-52 m-b-32">{{ $t("login.welcomeLogin") }}</div>
            <el-form label-position="top" label-width="80px" :model="loginForm" :rules="rules" ref="loginForm">
                <el-form-item class="m-b-40 relative" :label="$t('login.emailAddress')" prop="email">
                    <el-input :placeholder="$t('common.enter')+' '+$t('login.emailAddress')" v-model="loginForm.email"></el-input>
                    <img v-if="loginForm.email" class="absolute top-20 right-16" src="../../assets/login/close.png" alt="" @click="loginForm.email = ''">
                </el-form-item>
                <el-form-item class="m-b-40 relative" :label="$t('login.password')" prop="password">
                    <el-input :placeholder="$t('common.enter')+' '+$t('login.password')" :type="passwordType" v-model="loginForm.password"></el-input>
                    <img v-if="eyeIsOpen"  class="absolute top-20 right-16 cursor-point" src="../../assets/login/eye_open.png" alt="" @click="eyeIsOpen = false" />
                    <img v-else class="absolute top-20 right-16 cursor-point" src="../../assets/login/eye_close.png" alt="" @click="eyeIsOpen = true" />
                    <img v-if="loginForm.password" class="absolute top-20 right-48 cursor-point" src="../../assets/login/close.png" alt="" @click="loginForm.password = ''">
                </el-form-item>
            </el-form>
            <div class="w-483 h-56 l-h-56 text-center font-18 text-c001529 b-r-4 bg-FFC304 cursor-point" @click="login">{{ $t("login.login") }}</div>
            <div class="flex justify-between align-center font-14 text-c7C869B m-t-16">
                <div class="text-c1890FF cursor-point" @click="forgetPassword">{{ $t("login.forgetPassword") }}</div>
                <div>{{ $t("login.applyAgent") }}<span class="text-c1890FF cursor-point" @click="jump">{{ $t("login.apply") }}</span></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    const that = this
    function validateEmail(rule, value, callback) {
      const reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
      if (!reg.test(that.loginForm.email)) {
        callback(new Error(that.$t('common.enter') + that.$t('login.emailReg')))
      }
      callback()
    }
    return {
      loginForm: {
        email: '',
        password: ''
      },
      rules: {
        email: [
          { required: true, message: this.$t('common.enter') + this.$t('login.emailAddress'), trigger: 'blur' },
          { validator: validateEmail, trigger: 'blur' }
        ],
        password: [
          { required: true, message: this.$t('common.enter') + this.$t('login.password'), trigger: 'blur' }
        ]
      },
      eyeIsOpen: false
    }
  },
  computed: {
    passwordType() {
      let passwordType
      if (this.eyeIsOpen) {
        passwordType = 'text'
      } else {
        passwordType = 'password'
      }
      return passwordType
    }
  },
  methods: {
    jump() {
      this.$router.push({ path: '/agentPage' })
    },
    forgetPassword() {
      this.$router.push({ path: '/login/forgetPassword' })
    },
    login() {
      this.$refs['loginForm'].validate((valid) => {
        if (valid) {
          this.postRequest('agent/login', this.loginForm).then(res => {
            if (res.code == 2000) {
              localStorage.setItem('token', res.data.token)
              const token = localStorage.getItem('token')
              this.$store.commit('setToken', token)
              this.$router.replace('/')
            }
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep{
    .el-form-item__label{
        font-size: 20px;
        color: #001529;
        padding-bottom: 12px;
    }
    .el-input{
        font-size: 16px;
    }
    .el-input__inner{
        height: 56px;
        line-height: 56px;
        background-color: #FAFBFC;
    }
}
</style>

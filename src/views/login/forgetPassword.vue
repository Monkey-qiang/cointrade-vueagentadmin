<template>
    <div class="login-contain flex">
        <img src="../../assets/login/login_bg.png" alt="">
        <div class="w-483 m-l-236 m-t-200">
            <div class="text-c001529 font-52 m-b-32">{{ $t("login.forgetPassword") }}</div>
            <el-form label-position="top" label-width="80px" :model="loginForm" :rules="rules" ref="loginForm">
                <el-form-item class="m-b-40" :label="$t('login.emailAddress')" prop="email">
                    <el-input :placeholder="$t('common.enterEm')" v-model="loginForm.email"></el-input>
                </el-form-item>
                <el-form-item class="m-b-40 relative" :label="$t('login.verifyCode')" prop="code">
                    <el-input :placeholder="$t('common.enterPw')" :maxlength="6" v-model="loginForm.code" @input="handleInput"></el-input>
                    <div class="text-c1890FF absolute top-8 right-16 cursor-point" @click="sendCode" v-if="!cutdownShow">{{ $t("common.sendVerifyCode") }}</div>
                    <div class="text-A9B3C9 absolute top-8 right-16" v-else>{{ cutdown }}s {{ $t("common.sendAgain") }}</div>
                </el-form-item>
            </el-form>
            <div class="w-483 h-56 l-h-56 text-center font-18 text-c001529 b-r-4 bg-FFC304 cursor-point" @click="next">{{ $t("login.next") }}</div>
        </div>
    </div>
</template>

<script>
import { checkfindpasswd } from '@/api/agent.js'
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
        code: ''
      },
      rules: {
        email: [
          { required: true, message: this.$t('common.enter') + this.$t('login.emailAddress'), trigger: 'blur' },
          { validator: validateEmail, trigger: 'blur' }
        ],
        code: [
          { required: true, message: this.$t('common.enter') + this.$t('login.verifyCode'), trigger: 'blur' },
          { min: 6, max: 6, message: this.$t('common.code'), trigger: 'change' }
        ]
      },
      cutdown: 60,
      cutdownShow: false,
      timer: null
    }
  },
  methods: {
    sendCode() {
      this.$refs['loginForm'].validateField('email', emailError => {
        if (!emailError) {
          this.cutdownShow = true
          this.timer = setInterval(() => {
            this.cutdown--
            if (this.cutdown == 0) {
              this.cutdown = 60
              this.cutdownShow = false
              clearInterval(this.timer)
            }
          }, 1000)
          const data = {
            email: this.loginForm.email
          }
          this.postRequest('agent/sendcodebyfind', data).then(res => {
            console.log(res)
            if (res.code && res.code == 2000) {
              this.$message.success(res.msg)
            } else {
              this.cutdown = 60
              this.cutdownShow = false
              clearInterval(this.timer)
            }
          })
        } else {
          return false
        }
      })
    },
    handleInput() {
      this.loginForm.code = this.loginForm.code.replace(/[^\d]/g, '')
    },
    next() {
      this.$refs['loginForm'].validate(async(valid) => {
        if (valid) {
          const res = await checkfindpasswd(this.loginForm)
          if (res.data.code == 2000) {
            this.$router.push({ path: '/login/newPassword', query: { email: this.loginForm.email, code: this.loginForm.code }})
          }
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

<template>
    <div class="login-contain flex">
        <img src="../../assets/login/login_bg.png" alt="">
        <div class="w-483 m-l-236 m-t-200">
            <div class="text-c001529 font-52 m-b-32">{{ $t("login.forgetPassword") }}</div>
            <el-form label-position="top" label-width="80px" :model="loginForm" :rules="rules" ref="loginForm">
                <el-form-item class="m-b-40" :label="$t('common.newPassword')" prop="newPassword">
                    <el-input :placeholder="$t('common.enter')+$t('common.newPassword')" :type="passwordType" v-model="loginForm.newPassword"></el-input>
                    <img v-if="eyeIsOpen"  class="absolute top-20 right-16" src="../../assets/login/eye_open.png" alt="" @click="eyeIsOpen = false" />
                    <img v-else class="absolute top-20 right-16" src="../../assets/login/eye_close.png" alt="" @click="eyeIsOpen = true" />
                </el-form-item>
                <el-form-item class="m-b-40 relative" :label="$t('common.newPasswordConfirm')" prop="confirmNewPassword">
                    <el-input :placeholder="$t('common.confirmNewpassword')" :type="passwordType1" v-model="loginForm.confirmNewPassword"></el-input>
                    <img v-if="eyeIsOpen1"  class="absolute top-20 right-16" src="../../assets/login/eye_open.png" alt="" @click="eyeIsOpen1 = false" />
                    <img v-else class="absolute top-20 right-16" src="../../assets/login/eye_close.png" alt="" @click="eyeIsOpen1 = true" />
                </el-form-item>
            </el-form>
            <div class="w-483 h-56 l-h-56 text-center font-18 text-c001529 b-r-4 bg-FFC304 cursor-point" @click="complete">{{ $t("login.complete") }}</div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    const that = this
    function validatePasswordFormat(rule, value, callback) {
      const reg = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,32}$/
      if (!reg.test(that.loginForm.newPassword)) {
        callback(new Error(that.$t('common.passwordFormat')))
      }
      callback()
    }
    function validatePassword(rule, value, callback) {
      if (that.loginForm.newPassword != that.loginForm.confirmNewPassword) {
        callback(new Error(that.$t('common.passwordAtypism')))
      }
      callback()
    }
    return {
      loginForm: {
        newPassword: '',
        confirmNewPassword: ''
      },
      rules: {
        newPassword: [
          { required: true, message: this.$t('common.enter') + this.$t('common.newPassword'), trigger: 'blur' },
          { validator: validatePasswordFormat, trigger: 'blur' }
        ],
        confirmNewPassword: [
          { required: true, message: this.$t('common.confirmNewpassword'), trigger: 'blur' },
          { validator: validatePassword, trigger: 'blur' }
        ]
      },
      eyeIsOpen: false,
      eyeIsOpen1: false
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
    },
    passwordType1() {
      let passwordType
      if (this.eyeIsOpen1) {
        passwordType = 'text'
      } else {
        passwordType = 'password'
      }
      return passwordType
    }
  },
  methods: {
    complete() {
      this.$refs['loginForm'].validate((valid) => {
        if (valid) {
          const data = {
            email: this.$route.query.email,
            password: this.loginForm.newPassword,
            code: this.$route.query.code
          }
          this.postRequest('agent/findpasswd', data).then(res => {
            // console.log(res)
            if (res.code && res.code == 2000) {
              this.$toast(this.$t('common.setPasswordSuccess'))
              setTimeout(() => {
                this.$router.replace({ path: '/login' })
              }, 1500)
            } else {
              this.$toast(res.msg)
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
        padding-right: 48px;
    }
}
</style>

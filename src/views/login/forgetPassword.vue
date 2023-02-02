<template>
    <div class="login-contain flex">
        <img src="../../assets/login/login_bg.png" alt="">
        <div class="w-483 m-l-236 m-t-200">
            <div class="text-c001529 font-52 m-b-32">忘记密码</div>
            <el-form label-position="top" label-width="80px" :model="loginForm">
                <el-form-item class="m-b-40" label="邮箱地址">
                    <el-input placeholder="请输入邮箱地址" v-model="loginForm.email"></el-input>
                </el-form-item>
                <el-form-item class="m-b-40 relative" label="验证码">
                    <el-input placeholder="请输入验证码" :maxlength="6" v-model="loginForm.verifyCode" @input="handleInput"></el-input>
                    <div class="text-c1890FF absolute top-8 right-16 cursor-point" @click="sendCode" v-if="!cutdownShow">发送验证码</div>
                    <div class="text-A9B3C9 absolute top-8 right-16" v-else>{{ cutdown }}s 重新发送</div>
                </el-form-item>
            </el-form>
            <div class="w-483 h-56 l-h-56 text-center font-18 text-c001529 b-r-4 bg-FFC304" @click="next">下一步</div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        email: '',
        verifyCode: ''
      },
      cutdown: 10,
      cutdownShow: false,
      timer: null
    }
  },
  methods: {
    sendCode() {
      this.cutdownShow = true
      this.timer = setInterval(() => {
        this.cutdown--
        if (this.cutdown == 0) {
          this.cutdown = 10
          this.cutdownShow = false
          clearInterval(this.timer)
        }
      }, 1000)
    },
    handleInput() {
      this.loginForm.verifyCode = this.loginForm.verifyCode.replace(/[^\d]/g, '')
    },
    next() {
      this.$router.push({ path: '/login/newPassword' })
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

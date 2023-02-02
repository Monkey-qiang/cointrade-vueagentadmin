<template>
    <div class="login-contain flex">
        <img src="../../assets/login/login_bg.png" alt="">
        <div class="w-483 m-l-236 m-t-200">
            <div class="text-c001529 font-52 m-b-32">忘记密码</div>
            <el-form label-position="top" label-width="80px" :model="loginForm">
                <el-form-item class="m-b-40" label="新密码">
                    <el-input placeholder="请输入新密码" :type="passwordType" v-model="loginForm.newPassword"></el-input>
                    <img v-if="eyeIsOpen"  class="absolute top-20 right-16" src="../../assets/login/eye_open.png" alt="" @click="eyeIsOpen = false" />
                    <img v-else class="absolute top-20 right-16" src="../../assets/login/eye_close.png" alt="" @click="eyeIsOpen = true" />
                </el-form-item>
                <el-form-item class="m-b-40 relative" label="新密码确认">
                    <el-input placeholder="请确认新密码" :type="passwordType1" :maxlength="6" v-model="loginForm.confirmNewPassword"></el-input>
                    <img v-if="eyeIsOpen1"  class="absolute top-20 right-16" src="../../assets/login/eye_open.png" alt="" @click="eyeIsOpen1 = false" />
                    <img v-else class="absolute top-20 right-16" src="../../assets/login/eye_close.png" alt="" @click="eyeIsOpen1 = true" />
                </el-form-item>
            </el-form>
            <div class="w-483 h-56 l-h-56 text-center font-18 text-c001529 b-r-4 bg-FFC304">完成</div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        newPassword: '',
        confirmNewPassword: ''
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

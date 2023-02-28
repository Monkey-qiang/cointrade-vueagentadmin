<template>
  <div class="login-contain flex">
    <div class="w-p60 relative">
      <div class="svg_icon" style="width:100%; height: 100%;">
        <div id="svgaplayerweb" style="width:100%; height: 100%;" />
      </div>
    </div>
    <div class="w-p25 m-t-136 m-b-138 b-r-16 bg-c1F222C">
      <!-- 欢迎登录 -->
      <div class="p-lr-40 p-tb-60">
        <div class="text-white font-48 m-b-60">{{ $t("login.welcomeLogin") }}</div>
        <el-form :model="loginForm" :rules="rules" ref="loginForm">
          <div class="h-20 l-h-20 m-b-16 flex">
            <div class="w-20"><img class="img" src="@/assets/login/sms.png" alt=""></div>
            <div class="m-l-12 font-18 ff-Medium fw-500 text-white">{{ $t('login.emailAddress') }}</div>
          </div>
          <el-form-item class="m-b-40 relative" label="" prop="email">
            <el-input :placeholder="$t('common.enterEm')" v-model="loginForm.email"></el-input>
            <img v-if="loginForm.email" class="absolute top-20 right-16" src="../../assets/login/close.png" alt=""
              @click="loginForm.email = ''">
          </el-form-item>
          <div class="h-20 l-h-20 m-b-16 flex">
            <div class="w-20"><img class="img" src="@/assets/login/unlock.png" alt=""></div>
            <div class="m-l-12 font-18 ff-Medium fw-500 text-white">{{ $t('login.password') }}</div>
          </div>
          <el-form-item class="m-b-40 relative" label="" prop="password">
            <el-input :placeholder="$t('common.enterPw')" :type="passwordType" v-model="loginForm.password"></el-input>
            <img v-if="eyeIsOpen" class="absolute top-20 right-16 cursor-point" src="../../assets/login/eye_open.png"
              alt="" @click="eyeIsOpen = false" />
            <img v-else class="absolute top-20 right-16 cursor-point" src="../../assets/login/eye_close.png" alt=""
              @click="eyeIsOpen = true" />
            <img v-if="loginForm.password" class="absolute top-20 right-48 cursor-point"
              src="../../assets/login/close.png" alt="" @click="loginForm.password = ''">
          </el-form-item>
        </el-form>
        <div class="h-56 l-h-56 text-center font-18 text-c001529 b-r-4 bg-FFC304 cursor-point" @click="login">{{
          $t("login.login") }}</div>
        <div class="flex justify-between align-center font-14 text-c7C869B m-t-16">
          <div class="text-c1890FF cursor-point" @click="forgetPassword">{{ $t("login.forgetPassword") }}</div>
          <div>{{ $t("login.applyAgent") }}<span class="text-c1890FF cursor-point" @click="jump">[{{ $t("login.apply")
          }}]</span></div>
        </div>
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
  mounted() {
    this.loadSvga()
  },
  methods: {
    loadSvga() {
      const SVGA = require('svgaplayerweb')
      const parser = new SVGA.Parser('#svgaplayerweb')
      const player = new SVGA.Player('#svgaplayerweb')
      parser.load('image/login.svga', (videoItem) => {
        player.setVideoItem(videoItem)
        player.startAnimation()
      }, (error) => {
        console.log(error)
      })
    },
    jump() {
      this.$router.push({ path: '/agentPage/application' })
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
// html,body{
//   height: 100%;
// }
.login-contain {
  height: 100%;
  overflow: hidden;
  background: #141518;
}

.svg_icon {
  position: absolute;
  top: 0;
  left: 0;
}

::v-deep {
  .el-form-item__label {
    font-size: 20px;
    // color: #75809D;
    padding-bottom: 12px;
  }

  .el-input {
    font-size: 16px;
    font-family: PingFang SC-Medium, PingFang SC;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 19px;
  }

  .el-input__inner {
    height: 56px;
    line-height: 56px;
    font-family: PingFang SC-Medium, PingFang SC;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 19px;
    background-color: #34384C !important;
    border: #34384C;
  }
}
</style>

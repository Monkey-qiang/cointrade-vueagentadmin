<template>
  <div class="w-794 bg-white m-lr-auto ">
    <div class="m-b-40 p-t-80">
      <div class="m-b-20 fw-600 font-44 l-h-44 ff-SCBold">Tokex Affiliate Program Application</div>
      <div class="fw-500 font-28 l-h-40 ff-Medium text-c070707">No fee is required, just register a Tokex trading
        account to join the
        Tokex Affiliate Program</div>
    </div>
    <div v-if="sub">
      <div class="m-b-40">
        <div class="m-b-20 fw-600 font-32 l-h-32 ff-SCBold text-c070707">Set Password</div>
        <div class="m-b-20 fw-500 font-22 l-h-24 text-c070707 ff-Medium">Email Address：{{ form.email }}</div>
        <div class="fw-400 font-24 l-h-24 ff-Regular text-c636B75">After the application is appproved.you can use this
          Email and Password to log in to the Affiliate system</div>
      </div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
        <el-form-item prop="Password">
          <div class="input">Password</div>
          <el-input clearable v-model.trim="ruleForm.Password"></el-input>
        </el-form-item>
        <el-form-item prop="Verification">
          <div class="input">Verification Code</div>
          <!-- <el-input v-model="ruleForm.Verification"></el-input> -->
          <el-input placeholder="" :maxlength="6" v-model="ruleForm.Verification"></el-input>
          <div class="text-c2880BF font-14 fw-500 absolute ff-Medium  top-23 right-20 cursor-point" @click="sendCode" v-if="!cutdownShow">Send Code
          </div>
          <div class="text-A9B3C9 font-14 fw-500 absolute ff-Medium top-23 right-20" v-else >{{ cutdown }}s Send Code</div>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="checked">
            <div class="text-c636B75">
              I agree to the
            </div>
          </el-checkbox>
          <span class="text-c2880BF cursor-point"> Affiliate Agreement</span> and <span
                class="text-c2880BF cursor-point">Privacy Policy</span>
        </el-form-item>
        <el-form-item style="text-align: center;">
          <el-button class="btn" type="primary" @click="submitForm">Submit</el-button>
        </el-form-item>
        <el-form-item style="text-align: center;">
          <el-button class="btn b_btn" type="primary" @click="previous">Previous</el-button>
          <div class="m-t-10 m-l-11 text-c90959C font-14 fw-600">Already a Tokex affiliate? <span
              class="text-c2880BF cursor-point" @click="junmp">Log in</span></div>
        </el-form-item>
      </el-form>
    </div>
    <div class="text-center m-t-98" v-else>
      <div class="w-200 h-200  m-lr-auto"><img class="img" src="../../assets/agent/dui.png" alt=""></div>
      <div class="m-b-20 m-t-80 font-32 h-32 l-h-32">Submitted Successfully</div>
      <div class="font-24 h-24 ff-Regular text-c636B75 fw-400 l-h-24">Please be patient, we will review your
        application shortly</div>
    </div>
  </div>
</template>

<script>
import bus from '@/js/eventBus.js'
export default {
  data() {
    const check = (rule, value, callback) => {
      if (!value || value.length < 8) {
        return callback(new Error('At least 8 digits and letter combinations'))
      } else {
        if (value.replace(/^(?![0-9]+$)(?![a-zA-Z]+$)[a-zA-Z0-9]{1,50}$/)) {
          console.log(1)
        } else {
          return callback(new Error('Must be alphanumeric combination'))
        }
      }
      callback()
    }
    return {
      form: {},
      cutdown: 10,
      cutdownShow: false,
      timer: null,
      checked: true,
      sub: true,
      ruleForm: {
        Password: '',
        Verification: ''
      },
      rules: {
        Password: [
          { validator: check, trigger: 'blur' }
        ],
        Verification: [
          { required: true, message: 'Please enter the Verification Code', trigger: 'blur' },
          { min: 6, max: 6, message: 'Six digit length', trigger: 'change' }
        ]
      }
    }
  },
  created() {
    bus.$off('send')
    bus.$on('send', data => {
      this.form = data
    })
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
    junmp() {
      this.$router.push({ path: '/login' })
    },
    submitForm() {
      // console.log(1)
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          console.log(1)
        }
      })
    },
    previous() {
      this.$router.back()
    }
  }
}
</script>

<style scoped lang="scss">
::v-deep {
  .el-input__inner {
    border-color: #ededed;
    color: #000 !important;
  }

  .el-input {
    height: 40px;
  }

  .el-select {
    width: 100%;
  }

  .el-textarea__inner {
    height: 100%;
  }

  .el-button--primary {
    color: #000;
  }
}

.input {
  font-size: 12px;
  margin-bottom: 10px;
  line-height: 14px;
  font-weight: 800;
  color: #636B75;
  font-family: PingFang SC-Heavy;
}

.btn {
  width: 310px;
  height: 58px;
  border-radius: 4px;
  font-size: 16px;
  font-family: PingFang SC-Semibold;
  font-weight: 600;
  color: #000000;
  line-height: 19px;
  background: #ffc304;
  border-color: #ffc304;
}

.b_btn {
  background-color: #fff;
}
</style>

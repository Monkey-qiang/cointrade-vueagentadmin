<template>
  <div class="w-794 bg-white m-lr-auto">
    <div class="m-b-40 p-t-80">
      <div class="m-b-20 fw-600 font-44 ff-SCBold text-c070707">Tokex Affiliate Program Application</div>
      <div class="fw-500 font-28 ff-Medium text-c070707">No fee is required, just register a Tokex trading account to
        join the Tokex Affiliate Program</div>
    </div>
    <div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
        <el-form-item prop="name">
          <div class="input"><span class="text-red">*</span>Your Name</div>
          <el-input clearable v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item prop="email">
          <div class="input"><span class="text-red">*</span>Your Email</div>
          <el-input clearable v-model="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item prop="user_id">
          <div class="input"><span class="text-red">*</span>Your Tokex User ID</div>
          <el-input clearable v-model="ruleForm.user_id"></el-input>
        </el-form-item>
        <el-form-item prop="telegram">
          <div class="input"><span class="text-red">*</span>Please provide your Telegram account and we will contact you
          </div>
          <el-input clearable v-model="ruleForm.telegram"></el-input>
        </el-form-item>
        <el-form-item prop="job">
          <div class="input"><span class="text-red">*</span>Your are</div>
          <el-select clearable v-model="ruleForm.job" placeholder="">
            <el-option label="Social Media Influencer" :value="1"></el-option>
            <el-option label="Content Creator" :value="3"></el-option>
            <el-option label="Professional Affiliate Marketer" :value="5"></el-option>
            <el-option label="Trader with Trading Community" :value="7"></el-option>
            <el-option label="Developer / Trading Tool" :value="9"></el-option>
            <el-option label="Others" :value="11"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="channels">
          <div class="input"><span class="text-red">*</span>Please tell us about your promotion channels</div>
          <el-input class="h-141" type="textarea" resize="none" v-model="ruleForm.channels"></el-input>
        </el-form-item>
        <el-form-item prop="country_id">
          <!-- <el-select clearable v-model="ruleForm.country" placeholder=""> -->
          <!-- <el-option v-for="(item, index) in country" :value="item.id" :key="index">
              <div class="area_item flex align-center">
                <img class="w-30 h-30 m-r-12 b-r-p50" :src="item.countryicon"  alt="">
                <div class="flex justify-between w-p100 l-h-19">
                  <span>{{item.namezh }}</span>
                </div>
              </div>
            </el-option> -->
          <AreaCode style="width: 100%;" :areaList="area_list" @updataArea="updataArea"></AreaCode>
        </el-form-item>
        <el-form-item style="text-align: center;">
          <el-button class="btn" type="primary" @click="submitForm">Next</el-button>
          <div class="m-t-20 text-c90959C font-14 l-h-14 ff-SCBold fw-600">Already a Tokex affiliate? <span
              class="text-c2880BF cursor-point" @click="jump">Log in</span></div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
// import { agentRegister } from '@/api/agent.js'
import bus from '@/js/eventBus'
import AreaCode from './component/index.vue'
import { records } from '@/utils/country'
export default {
  components: {
    AreaCode
  },
  data() {
    return {
      area_list: records,
      ruleForm: {
        name: '',
        job: '',
        email: '',
        user_id: '',
        telegram: '',
        channels: '',
        country_id: 40
      },
      rules: {
        name: [
          { required: true, message: 'Please enter the name', trigger: 'blur' }
          //   { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        email: [
          { required: true, message: 'Please enter the email', trigger: 'blur' }
          //   { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        user_id: [
          { required: true, message: 'Please enter the user_id', trigger: 'blur' }
          //   { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        telegram: [
          { required: true, message: 'Please enter the natelegram', trigger: 'blur' }
          //   { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        job: [
          { required: true, message: 'Please select', trigger: 'change' }
        ],
        country_id: [
          { required: true, message: 'Please select Country', trigger: 'change' }
        ],
        channels: [
          { required: true, message: 'Please enter your promotion channels', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 选择某一个区号
    updataArea(item) {
      this.ruleForm.area_logo = item.img
      this.ruleForm.country_id = item.id
      console.log(this.ruleForm)
    },
    jump() {
      this.$router.push({ path: '/login' })
    },
    submitForm() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          // console.log(this.ruleForm)
          this.$router.push({ path: '/agentPage/verification' })
          bus.$emit('send', this.ruleForm)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
::v-deep {
  .el-input__inner {
    border-color: #ededed;
    color: #000 !important
  }

  .el-input {
    height: 40px;
  }

  .el-select {
    width: 100%;
  }

  .el-textarea__inner {
    height: 100%;
    border-color: #ededed;
  }

  .el-button--primary {
    color: #000;
  }

  .el-select .el-input__inner:focus {
    border-color: #ededed;
  }

  .el-select:hover .el-input__inner {
    border-color: #ededed;
  }

  .el-range-editor.is-active,
  .el-range-editor.is-active:hover,
  .el-select .el-input.is-focus .el-input__inner {
    border-color: #ededed;
  }
}

.input {
  font-family: PingFang SC-Heavy;
  font-weight: 800;
  line-height: 14px;
  margin-bottom: 10px;
  font-size: 12px;
  color: #636B75;
}

.btn {
  width: 310px;
  height: 58px;
  border-radius: 4px;
  font-size: 16px;
  font-family: PingFang SC-Semibold;
  font-weight: 600;
  color: #000;
  border: #ffc304;
  background-color: #ffc304;

}
</style>

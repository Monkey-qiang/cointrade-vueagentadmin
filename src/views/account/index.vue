<template>
    <div class="w-1200 min-h-984 text-c001529 fw-500 ff-SC p-l-24 p-t-24 m-b-32 b-l-1-solid-E4EBF1">
        <div class="flex h-192 bg-FAFBFC b-r-8">
            <img class="w-58 h-58 m-l-32 m-t-32" src="@/assets/account/email.png" alt="">
            <div class="m-l-24 m-t-40">
                <div class="font-24 ff-SCBold fw-600 m-b-20">{{ agentinfo.email }}</div>
                <div class="ff-SCMedium m-b-20">{{ $t('account.commissionRate') }}：{{ agentinfo.rate }}</div>
                <div class="font-12 fw-400 text-c7C869B ff-SCRegular">{{ $t('account.lastLoginTime') }}：{{ agentinfo.lasttime }}</div>
            </div>
        </div>
        <div class="flex p-t-24">
            <div class="w-600">
                <div class="ff-SCMedium font-20 m-t-24">{{ $t('account.inviteAddress') }}</div>
                <div class="ff-SCRegular fot-14 fw-400 text-c7C869B m-t-24">{{ $t('account.inviteCode') }}</div>
                <div class="w-443 h-40 l-h-40 p-l-16 ff-SCMedium font-14 b-1-solid-D4D9E4 b-r-4 m-t-12 relative">
                  {{ agentinfo.invitecode }}
                    <img class="absolute top-12 right-16 cursor-point" src="@/assets/account/copy.png" alt="" v-clipboard:copy="agentinfo.invitecode" v-clipboard:success="onCopy"/>
                </div>
                <div class="ff-SCRegular fot-14 fw-400 text-c7C869B m-t-24">{{ $t('account.inviteLink') }}</div>
                <div class="w-395 h-40 l-h-40 p-l-16 ff-SCMedium font-14 b-1-solid-D4D9E4 text-over b-r-4 m-t-12 p-r-48 relative">
                  {{ agentinfo.inviteUrl }}
                    <img class="absolute top-12 right-16 cursor-point" src="@/assets/account/copy.png" alt=""  v-clipboard:copy="agentinfo.inviteUrl" v-clipboard:success="onCopy"/>
                </div>
                <div class="ff-SCMedium font-14 text-c1890FF m-t-32 cursor-point" @click="download">{{ $t('account.downPoster') }}</div>
            </div>
            <div class="w-600">
                <div class="ff-SCMedium font-20 m-t-24">{{ $t('account.infoSetting') }}</div>
                <div class="flex align-center justify-between w-443 m-t-24">
                    <div class="ff-SCRegular fot-14 fw-400 text-c7C869B">{{ $t('account.name') }}</div>
                    <div class="p-l-16 ff-SCMedium font-14">{{ agentinfo.name }}</div>
                </div>
                <div class="flex align-center justify-between w-443 m-t-24">
                    <div class="ff-SCRegular fot-14 fw-400 text-c7C869B">{{ $t('account.associatedUserID') }}</div>
                    <div class="p-l-16 ff-SCMedium font-14">{{ agentinfo.userid }}</div>
                </div>
                <div class="flex align-center justify-between w-443 m-t-24">
                    <div class="ff-SCRegular fot-14 fw-400 text-c7C869B">{{ $t('account.area') }}</div>
                    <div class="p-l-16 ff-SCMedium font-14">{{ agentinfo.countryen }}</div>
                </div>
                <div class="flex align-center justify-between w-443 m-t-24">
                    <div class="ff-SCRegular fot-14 fw-400 text-c7C869B">{{ $t('account.password') }}</div>
                    <div class="p-l-16 ff-SCMedium font-14 text-c1890FF cursor-point" @click="bindDialogOptions.visible = true">{{ $t('account.modify') }}</div>
                </div>
            </div>
        </div>
        <div class="poster w-406 h-538 bg-c01060C absolute" id="poster">
          <vue-qr class="absolute left-24 bottom-24 z-index-99" :text="QRCodeUrl" :size="64" :margin="5"/>
          <img src="@/assets/common/poster.png" alt="">
        </div>
        <basic-dialog v-bind="bindDialogOptions" @confirm="handleComfirm" @cancel="cancel" @close="close">
            <el-form class="p-lr-40 p-t-24 b-t-1-solid-E4EBF1" label-position="right" label-width="96px" :model="passwordForm" :rules="rules" ref="passwordForm">
                <el-form-item :label="$t('common.newPassword')" prop="password">
                    <el-input class="w-290" :placeholder="$t('common.enter')+$t('common.newPassword')" :type="passwordType" v-model="passwordForm.password"></el-input>
                    <img v-if="eyeIsOpen" class="absolute top-12 right-16" src="@/assets/login/eye_open.png" alt="" @click="eyeIsOpen = false" />
                    <img v-else class="absolute top-12 right-16" src="@/assets/login/eye_close.png" alt="" @click="eyeIsOpen = true" />
                </el-form-item>
                <el-form-item :label="$t('common.newPasswordConfirm')" prop="confirmPassword">
                    <el-input class="w-290" :placeholder="$t('common.confirmNewpassword')" :type="passwordType1" v-model="passwordForm.confirmPassword"></el-input>
                    <img v-if="eyeIsOpen1" class="absolute top-12 right-16" src="@/assets/login/eye_open.png" alt="" @click="eyeIsOpen1 = false" />
                    <img v-else class="absolute top-12 right-16" src="@/assets/login/eye_close.png" alt="" @click="eyeIsOpen1 = true" />
                </el-form-item>
                <el-form-item :label="$t('account.emailCode')" prop="verifyCode">
                    <el-input class="w-290" :placeholder="$t('common.enter')+$t('account.emailCode')" maxlength="6" v-model="passwordForm.verifyCode" @input="handleInput"></el-input>
                    <div class="text-c1890FF absolute top-0 right-16 cursor-point" @click="sendCode" v-if="!cutdownShow">{{ $t('common.sendVerifyCode') }}</div>
                    <div class="text-A9B3C9 absolute top-0 right-16" v-else>{{ cutdown }}s {{ $t('common.sendAgain') }}</div>
                </el-form-item>
            </el-form>
        </basic-dialog>
    </div>
</template>

<script>
import VueQr from 'vue-qr'
import html2canvas from 'html2canvas'
import BasicDialog from '@/components/basic/BasicDialog.vue'
export default {
  components: {
    BasicDialog,
    VueQr
  },
  data() {
    const that = this
    function validatePasswordFormat(rule, value, callback) {
      const reg = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,32}$/
      if (!reg.test(that.passwordForm.password)) {
        callback(new Error(that.$t('common.passwordFormat')))
      }
      callback()
    }
    function validatePassword(rule, value, callback) {
      if (that.passwordForm.password != that.passwordForm.confirmPassword) {
        callback(new Error(that.$t('common.passwordAtypism')))
      }
      callback()
    }
    return {
      eyeIsOpen: false,
      eyeIsOpen1: false,
      cutdown: 10,
      cutdownShow: false,
      timer: null,
      bindDialogOptions: {
        visible: false,
        theme: 'white',
        title: this.$t('account.modify') + this.$t('account.password'),
        titleStyle: {
          fontSize: '18px',
          fontFamily: 'PingFang SC-Medium, PingFang SC',
          color: '#001529',
          paddingTop: '24px'
        },
        width: '466px',
        BtnStyle: {
          justifyContent: 'flex-end',
          paddingTop: '10px',
          paddingBottom: '27px'
        },
        cancalBtnStyle: {
          flex: 'none',
          width: '90px',
          height: '40px',
          lineHeight: '40px',
          fontFamily: 'PingFang SC-Regular, PingFang SC',
          fontSize: '14px',
          fontWeight: 400,
          color: '#001529',
          backgroundColor: 'transparent',
          border: '1px solid #A9B3C9',
          paddingTop: 0,
          paddingBottom: 0
        },
        confrimBtnStyle: {
          flex: 'none',
          width: '90px',
          height: '40px',
          lineHeight: '40px',
          fontFamily: 'PingFang SC-Regular, PingFang SC',
          fontSize: '14px',
          fontWeight: 400,
          color: '#001529',
          paddingTop: 0,
          paddingBottom: 0
        },
        showBtn: true,
        showCancelBtn: true
      },
      passwordForm: {
        password: '',
        confirmPassword: '',
        verifyCode: ''
      },
      rules: {
        password: [
          { required: true, message: this.$t('common.enter') + this.$t('common.newPassword'), trigger: 'blur' },
          { validator: validatePasswordFormat, trigger: 'blur' }
        ],
        confirmPassword: [
          { required: true, message: this.$t('common.confirmNewpassword'), trigger: 'blur' },
          { validator: validatePassword, trigger: 'blur' }
        ],
        verifyCode: [
          { required: true, message: this.$t('common.enter') + this.$t('account.emailCode'), trigger: 'blur' }
        ]
      },
      agentinfo: {},
      QRCodeUrl: ''
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
  created() {
    this.getAgentInfo()
  },
  methods: {
    onCopy() {
      this.$message.success({
        message: `${this.$t('common.copySuccess')}!`,
        duration: 1000
      })
    },
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
      const data = {
        email: this.agentinfo.email
      }
      this.postRequest('agent/sendcodebylogin', data).then(res => {
        // console.log(res)
        if (res.code && res.code == 2000) {
          this.$toast(this.$t('common.sendSuccess'))
        } else {
          this.$toast(this.$t('common.sendFailed'))
        }
      })
    },
    handleInput() {
      this.passwordForm.verifyCode = this.passwordForm.verifyCode.replace(/[^\d]/g, '')
    },
    handleComfirm() {
      this.$refs['passwordForm'].validate((valid) => {
        if (valid) {
          const data = {
            password: this.passwordForm.password,
            code: this.passwordForm.verifyCode
          }
          this.postRequest('agent/resetpasswd', data).then(res => {
            // console.log(res)
            if (res.code && res.code == 2000) {
              this.$toast(this.$t('account.modifySuccess'))
              this.bindDialogOptions.visible = false
            } else {
              this.$toast(res.msg)
            }
          })
        }
      })
    },
    cancel() {
      this.$refs['passwordForm'].resetFields()
      this.$refs['passwordForm'].clearValidate()
      this.bindDialogOptions.visible = false
    },
    close() {
      this.$refs['passwordForm'].resetFields()
      this.$refs['passwordForm'].clearValidate()
      this.bindDialogOptions.visible = false
    },
    getAgentInfo() {
      this.getRequest('agent/getagentinfo').then(res => {
        // console.log(res)
        if (res.code && res.code == 2000) {
          this.agentinfo = res.data
          this.QRCodeUrl = this.agentinfo.inviteUrl
        }
      })
    },
    download() {
      const domObj = document.getElementById('poster')
      setTimeout(() => {
        html2canvas(domObj, {
          width: domObj.clientWidth,
          height: domObj.clientHeight,
          useCORS: true,
          allowTaint: true,
          onclone(doc) {
            const e = doc.querySelector('#poster')
            e.style.display = 'block'
          }
        }).then(canvas => {
          domObj.style.display = 'none'
          const url = canvas.toDataURL('image/png')
          let aLink = document.createElement('a')
          aLink.download = this.$t('account.downPoster')
          aLink.href = url
          aLink.click()
          aLink = null
        })
      }, 500)
    }
  }
}
</script>

<style lang="scss" scoped>
.poster{
  left: -406px;
  z-index: 9;
}
::v-deep{
  .el-input__inner{
    padding-right: 35px;
  }
  .el-dialog__header{
      height: 72px;
  }
  .el-dialog__headerbtn{
      top: 22px;
      .el-dialog__close{
          color: #A9B3C9;
      }
  }
}
</style>

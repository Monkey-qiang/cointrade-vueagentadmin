<template>
    <div class="text-c001529 fw-500 ff-SC m-l-24">
        <div class="flex w-1200 h-192 bg-FAFBFC b-r-8 m-t-24">
            <img class="w-58 h-58 m-l-32 m-t-32" src="@/assets/account/email.png" alt="">
            <div class="m-l-24 m-t-40">
                <div class="font-24 ff-SCBold fw-600 m-b-20">yonghuming@gmail.com</div>
                <div class="ff-SCMedium m-b-20">佣金比例：40%+10%</div>
                <div class="font-12 fw-400 text-c7C869B ff-SCRegular">上次登录时间：2023-01-29 15:54</div>
            </div>
        </div>
        <div class="flex p-t-24">
            <div class="w-600">
                <div class="ff-SCMedium font-20 m-t-24">邀请地址</div>
                <div class="ff-SCRegular fot-14 fw-400 text-c7C869B m-t-24">邀请码</div>
                <div class="w-443 h-40 l-h-40 p-l-16 ff-SCMedium font-14 b-1-solid-D4D9E4 b-r-4 m-t-12 relative">
                    4N7RSDST
                    <img class="absolute top-12 right-16 cursor-point" src="@/assets/account/copy.png" alt="" />
                </div>
                <div class="ff-SCRegular fot-14 fw-400 text-c7C869B m-t-24">邀请链接</div>
                <div class="w-443 h-40 l-h-40 p-l-16 ff-SCMedium font-14 b-1-solid-D4D9E4 b-r-4 m-t-12 relative">
                    https://https://accounts.bitechan.info/zh-CN/lsfhkllnk...
                    <img class="absolute top-12 right-16 cursor-point" src="@/assets/account/copy.png" alt="" />
                </div>
                <div class="ff-SCMedium font-14 text-c1890FF m-t-32 cursor-point">下载海报</div>
            </div>
            <div class="w-600">
                <div class="ff-SCMedium font-20 m-t-24">信息设置</div>
                <div class="flex align-center justify-between w-443 m-t-24">
                    <div class="ff-SCRegular fot-14 fw-400 text-c7C869B">姓名</div>
                    <div class="p-l-16 ff-SCMedium font-14">zhangsan</div>
                </div>
                <div class="flex align-center justify-between w-443 m-t-24">
                    <div class="ff-SCRegular fot-14 fw-400 text-c7C869B">关联用户ID</div>
                    <div class="p-l-16 ff-SCMedium font-14">43258697</div>
                </div>
                <div class="flex align-center justify-between w-443 m-t-24">
                    <div class="ff-SCRegular fot-14 fw-400 text-c7C869B">地区</div>
                    <div class="p-l-16 ff-SCMedium font-14">France</div>
                </div>
                <div class="flex align-center justify-between w-443 m-t-24">
                    <div class="ff-SCRegular fot-14 fw-400 text-c7C869B">密码</div>
                    <div class="p-l-16 ff-SCMedium font-14 text-c1890FF cursor-point" @click="bindDialogOptions.visible = true">修改</div>
                </div>
            </div>
        </div>
        <basic-dialog v-bind="bindDialogOptions" @confirm="handleComfirm" @close="close">
            <el-form class="p-lr-40 p-t-24 b-t-1-solid-E4EBF1" label-position="right" label-width="96px" :model="passwordForm" :rules="rules" ref="ruleForm">
                <el-form-item label="新密码" prop="password">
                    <el-input class="w-290" placeholder="请输入新密码" v-model="passwordForm.password"></el-input>
                </el-form-item>
                <el-form-item label="新密码确认" prop="confirmPassword">
                    <el-input class="w-290" placeholder="请输入新密码" v-model="passwordForm.confirmPassword"></el-input>
                </el-form-item>
                <el-form-item label="邮箱验证码" prop="verifyCode">
                    <el-input class="w-290" placeholder="请输入邮箱验证码" v-model="passwordForm.verifyCode"></el-input>
                </el-form-item>
            </el-form>
        </basic-dialog>
    </div>
</template>

<script>
import BasicDialog from '@/components/basic/BasicDialog.vue'
export default {
  components: {
    BasicDialog
  },
  data() {
    return {
      bindDialogOptions: {
        visible: false,
        theme: 'white',
        title: '修改密码',
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
        //   width: '100%',
        //   padding: '11px 0',
        //   'text-align': 'center',
        //   background: this.GLOBAL.basicColor,
        //   'font-size': '16px',
        //   'font-family': 'PingFang_Medium',
        //   color: '#222326'
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
          { required: true, message: '请输入新密码', trigger: 'blur' }
        ],
        confirmPassword: [
          { required: true, message: '请输入新密码', trigger: 'blur' }
        ],
        verifyCode: [
          { required: true, message: '请输入邮箱验证码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleComfirm() {

    },
    close() {
      this.bindDialogOptions.visible = false
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep{
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

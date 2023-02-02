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
        <passwordDialog></passwordDialog>
    </div>
</template>

<script>
import passwordDialog from './components/passwordDialog.vue'
export default {
  components: {
    passwordDialog
  },
  data() {
    return {

    }
  },
  methods: {
    confirm() {

    },
    close() {
      this.bindDialogOptions.visible = false
    }
  }
}
</script>

<style lang="scss" scoped></style>

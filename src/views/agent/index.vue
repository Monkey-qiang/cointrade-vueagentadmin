<template>
    <div>
        <div class="w-p100 bg1">
            <div class="w-1024 m-lr-auto">
                <div class="flex justify-between h-544 m-b-83">
                    <div class="m-t-91">
                        <div class="title">Tokex</div>
                        <div class="title m-b-21">Affiliate Program</div>
                        <div class="font-26 fw-400 ff-Regular l-h-30 m-b-48">{{ $t("agent.description") }}</div>
                        <el-button class="btn" type="primary" @click="application">{{
                            $t("agent.startEarning")
                        }}</el-button>
                    </div>
                    <div class="w-361 h-388 m-t-77"><img class="img" src="../../assets/agent/top.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="m-b-100">
            <div class="flex w-1024 m-lr-auto">
                <div class="box_inner">
                    <div class="w-64 h-77 absolute left-128 icon"><img class="img" src="@/assets/agent/Group2.png"
                            alt="">
                    </div>
                    <div class="m-t-64">{{ $t("agent.step1") }}</div>
                </div>
                <div class="box_inner center_box">
                    <div class="w-64 h-77 absolute left-128 icon"><img class="img" src="@/assets/agent/Group1.png"
                            alt="">
                    </div>
                    <div class="m-t-64">{{ $t("agent.step2") }}</div>
                </div>
                <div class="box_inner">
                    <div class="w-64 h-77 absolute left-128 icon"><img class="img" src="@/assets/agent/Group3.png"
                            alt="">
                    </div>
                    <div class="m-t-64">{{ $t("agent.step3") }}</div>
                </div>
            </div>
        </div>
        <div class="m-b-86">
            <div class="w-1024 m-lr-auto flex justify-between">
                <div>
                    <div class="font-48 fw-800 ff-Heavy l-h-34 m-b-81">{{ $t("agent.agencyInterest") }}</div>
                    <div class="flex">
                        <div class="h-23 w-23 m-t-3"><img class="img" src="@/assets/agent/Group34460.png" alt=""></div>
                        <div class="font-20 ff-SCBold fw-600 l-h-30 m-b-29 m-l-23">{{ $t("agent.agencyInterest1") }}
                        </div>
                    </div>
                    <div class="flex">
                        <div class="h-23 w-23 m-t-3"><img class="img" src="@/assets/agent/Group34672.png" alt=""></div>
                        <div class="font-20 ff-SCBold fw-600 l-h-30 m-b-29 m-l-23">{{ $t("agent.agencyInterest2") }}
                        </div>
                    </div>
                    <div class="flex">
                        <div class="h-23 w-23 m-t-3"><img class="img" src="@/assets/agent/Group34673.png" alt=""></div>
                        <div class="font-20 ff-SCBold fw-600 l-h-30 m-b-29 m-l-23">{{ $t("agent.agencyInterest3") }}
                        </div>
                    </div>
                    <div class="flex">
                        <div class="h-23 w-23 m-t-3"><img class="img" src="@/assets/agent/Vector.png" alt=""></div>
                        <div class="font-20 ff-SCBold fw-600 l-h-30 m-l-23">{{ $t("agent.agencyInterest4") }}</div>
                    </div>
                </div>
                <div class="w-426 h-319 m-t-51 m-r-59"><img class="img" src="@/assets/agent/bottom.png" alt="">
                </div>
            </div>
        </div>
        <div v-if="language == 'English'" class="bg-F8F8F8  m-b-100">
            <div class="w-1024 m-lr-auto h-491 flex justify-between">
                <div class="p-t-100">
                    <div class="font-48 fw-800 l-h-34 m-b-1 ff-Heavy text-c070707">You Can Earn</div>
                    <div class="flex m-t-108">
                        <div>
                            <div
                                class="w-122 h-122 bg-FFC304 b-r-p50 text-center m-lr-auto font-46 ff-Heavy fw-800 l-h-122">
                                40%</div>
                            <span class="inline-block m-t-15 font-12 w-182 fw-800 color-c070707 ff-Heavy">on your
                                referrals' trading fees</span>
                        </div>
                        <div class="font-58 m-l-8 m-t-30 m-r-15" style="color:#A4A8AB">+</div>
                        <div>
                            <div
                                class="w-122 h-122 bg-black b-r-p50 text-center m-lr-auto font-46 text-FFC304 ff-Heavy fw-800 l-h-122">
                                10%</div>
                            <span class="inline-block font-12 m-t-15 w-200 fw-800 color-c070707 ff-Heavy">on what your
                                Sub-Affiliates earn</span>
                        </div>
                    </div>
                </div>
                <div class="w-446 h-274 m-t-135 m-r-49"><img class="img" src="@/assets/agent/human.png" alt="">
                </div>
            </div>
        </div>
        <div class="w-1024 m-lr-auto p-b-120">
            <div class="w-p100">
                <div class="font-48 ff-Heavy fw-800 l-h-34 text-c070707 m-b-54">FAQ</div>
                <div class="w-p100 m-lr-auto">
                    <el-collapse v-model="activeNames">
                        <div v-for="(item, index) in problemList" :key="index">
                            <el-collapse-item :title="item.title" :name="item.id">
                                {{ item.content }}
                            </el-collapse-item>
                        </div>
                    </el-collapse>
                </div>
            </div>
        </div>
        <div class="h-308 text-center back_bt">
            <div class="p-t-79 font-48 ff-Bold fw-600 text-white l-h-60">{{ $t("agent.become") }}</div>
            <el-button class="btn2" type="primary" @click="application">{{ $t("agent.applyImmediately") }}</el-button>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      activeNames: '',
      language: '',
      problemList: [
        {
          title: this.$t('agent.tokexPlan1'),
          content: this.$t('agent.tokexPlanContent1'),
          id: '1'
        },
        {
          title: this.$t('agent.tokexPlan2'),
          content: this.$t('agent.tokexPlanContent2'),
          id: '2'
        },
        {
          title: this.$t('agent.tokexPlan3'),
          content: this.$t('agent.tokexPlanContent3'),
          id: '3'
        },
        {
          title: this.$t('agent.tokexPlan4'),
          content: this.$t('agent.tokexPlanContent4'),
          id: '4'
        },
        {
          title: this.$t('agent.tokexPlan5'),
          content: this.$t('agent.tokexPlanContent5'),
          id: '5'
        }
      ]
    }
  },
  created() {
    const language = localStorage.getItem('lang')
    if (language) {
      this.language = language == 'zh' ? '简体中文' : 'English'
    } else {
      this.language = '简体中文'
    }
  },
  methods: {
    application() {
      this.$router.push({ path: '/agentPage/application' })
    }
  }
}
</script>

<style scoped lang="scss">
::v-deep {
    .el-collapse-item__header.is-active {
        background: #f6f6f6;
        color: #070707;
        font-family: PingFang SC-Regular, PingFang SC;
        font-weight: 500;
    }

    .el-collapse-item__header {
        height: 70px;
        font-size: 18px;
        font-family: PingFang SC-Regular, PingFang SC;
        color: #333333;
        line-height: 21px;
        font-weight: 400;
        padding-left: 20px;
        // padding-top: 23px;
    }

    .el-collapse-item__content {
        font-size: 18px;
        font-family: PingFang SC-Medium, PingFang SC;
        font-weight: 500;
        color: #636B75;
        background: #f6f6f6;
        line-height: 21px;
        padding-left: 52px;
        padding-right: 51px;
    }
}

.back_bt {
    background: url('../../assets/agent/CTA.png') no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
}

.bg1 {
    background: linear-gradient(-176deg, #E8E8E8 0%, rgba(244, 244, 244, 0) 100%);
    opacity: 1
}

.title {
    font-size: 58px;
    font-family: FZYunDongHeiS-H-GB-Regular, FZYunDongHeiS-H-GB;
    font-weight: 400;
    line-height: 94px;
}

.btn2,
.btn {
    // width: 274px;
    height: 62px;
    background: #FFC304;
    border-radius: 8px 8px 8px 8px;
    font-size: 20px;
    font-weight: 500;
    color: #101C3D;
    font-family: PingFang SC-Medium, PingFang SC;
    border: #FFC304;
}

.btn2 {
    margin-top: 30px;
    width: 188px;
    font-family: PingFang SC-Semibold, PingFang SC;
    font-weight: 600;
}

.center_box {
    margin-left: 32px;
    margin-right: 32px;
}

.box_inner {
    position: relative;
    width: 320px;
    // height: 206px;
    padding-left: 30px;
    padding-right: 30px;
    font-size: 18px;
    font-weight: 500;
    font-family: PingFang SC-Medium, PingFang SC;
    color: #050505;
    line-height: 30px;
    background-color: #f8f8f8;

}

.icon {
    top: -19px;
}
</style>

<template>
    <div class="w-1920">
        <div class="w-p100 bg1">
            <div class="w-1024 m-lr-auto">
                <div class="flex justify-between h-544 m-b-83">
                    <div class="m-t-91">
                        <div class="title">TokEX</div>
                        <div class="title m-b-21">Affiliate Program</div>
                        <div class="font-26 fw-400 ff-Regular l-h-30 m-b-48">邀请交易者来Tokex，赚取最高50%佣金收入</div>
                        <el-button class="btn" type="primary" @click="application">开始赚取最高50%佣金</el-button>
                    </div>
                    <div class="w-361 h-388 m-t-77 line"><img class="img" src="../../assets/agent/top.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="m-b-100">
            <div class="flex w-1024 m-lr-auto">
                <div class="box_inner">
                    <div class="w-64 h-64 absolute left-128 icon"><img class="img" src="@/assets/agent/Group2.png"
                            alt="">
                    </div>
                    <div class="m-t-64">准备好材料，提交申请</div>
                </div>
                <div class="box_inner center_box">
                    <div class="w-64 h-64 absolute left-128 icon"><img class="img" src="@/assets/agent/Group1.png"
                            alt="">
                    </div>
                    <div class="m-t-64">我们将审核您的申请，通过后您将获得专属邀请链接，邀请交易员来Tokex</div>
                </div>
                <div class="box_inner">
                    <div class="w-64 h-64 absolute left-128 icon"><img class="img" src="@/assets/agent/Group3.png"
                            alt="">
                    </div>
                    <div class="m-t-64">您可以将邀请链接分享至您的社交平台、社区内容或其他推广渠道中，同时您可以使用专属后台查看您的数据</div>
                </div>
            </div>
        </div>
        <div class="m-b-86">
            <div class="w-1024 m-lr-auto flex justify-between">
                <div>
                    <div class="font-48 fw-800 ff-Heavy l-h-34 m-b-81">代理权益</div>
                    <div class="flex">
                        <div class="h-23 w-23 m-t-3"><img class="img" src="@/assets/agent/Group34460.png" alt=""></div>
                        <div class="font-20 ff-SCBold fw-600 l-h-30 m-b-29 m-l-23">丰厚的佣金奖励，依靠被动收入致富</div>
                    </div>
                    <div class="flex">
                        <div class="h-23 w-23 m-t-3"><img class="img" src="@/assets/agent/Group34672.png" alt=""></div>
                        <div class="font-20 ff-SCBold fw-600 l-h-30 m-b-29 m-l-23">永久返佣，持久收益</div>
                    </div>
                    <div class="flex">
                        <div class="h-23 w-23 m-t-3"><img class="img" src="@/assets/agent/Group34673.png" alt=""></div>
                        <div class="font-20 ff-SCBold fw-600 l-h-30 m-b-29 m-l-23">一对一，专业客户经理</div>
                    </div>
                    <div class="flex">
                        <div class="h-23 w-23 m-t-3"><img class="img" src="@/assets/agent/Vector.png" alt=""></div>
                        <div class="font-20 ff-SCBold fw-600 l-h-30 m-l-23">专属后台，报表级数据报告</div>
                    </div>
                </div>
                <div class="w-426 h-319 m-t-51 line m-r-59"><img class="img" src="@/assets/agent/bottom.png" alt="">
                </div>
            </div>
        </div>
        <div class="bg-F8F8F8  m-b-100">
            <div class="w-1024 m-lr-auto h-491 flex justify-between">
                <div class="p-t-100">
                    <div class="font-48 fw-800 l-h-34 m-b-1 ff-Heavy text-c070707">You Can Earn</div>
                    <div class="flex align-center m-t-108 m-l-23">
                        <div class="w-122 h-122 bg-FFC304 b-r-p50 text-center m-lr-auto">
                            <div class="font-46 ff-Heavy fw-800 l-h-46 p-t-38">40%</div>
                        </div>
                        <div class="font-58 m-l-43 m-r-50" style="color:#A4A8AB">+</div>
                        <div class="w-122 h-122 bg-black b-r-p50 text-center m-lr-auto">
                            <div class="font-46 text-FFC304 ff-Heavy fw-800 l-h-46 p-t-38">10%</div>
                        </div>
                    </div>
                </div>
                <div class="w-446 h-274 m-t-135 line m-r-49 m-b-80"><img class="img" src="@/assets/agent/human.png"
                        alt="">
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
            <div class="p-t-79 font-48 ff-Bold fw-600 text-white l-h-60">现在成为代理商</div>
            <el-button class="btn2" type="primary" @click="application">立即申请</el-button>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      activeNames: '',
      problemList: [
        {
          title: '1，什么是TokEX代理计划？',
          content: 'Tokex目前提供市场上顶级加密货币的交易互换，包括主流数字资产 Bitcoin (BTC), Ethereum (ETH), Tether (USDT), USD Coin (USDC)等。',
          id: '1'
        },
        {
          title: '2，如何申请TokEX代理计划？',
          content: '在Tokex购买数字资产无需手续费。',
          id: '2'
        },
        {
          title: '3，加入TokEX代理计划需要什么条件？',
          content: '我们欢迎任何有推广渠道的客户来申请我们欢迎任何有推广渠道的客户来申请我们欢迎任何有推广渠道的客户来申请我们欢迎任何有推广渠道的客户来申请我们欢迎任何有推广渠道的客户来申请我们欢迎任何有推广渠道的客户来申请我们欢迎任何有推广渠道的客户来申请',
          id: '3'
        },
        {
          title: '4，加入TokEX代理计划有什么好处？',
          content: '您首先需要完成身份认证（KYC）和手机验证后，然后，您可以在快捷区直接下单，或在自选区浏览所有广告，并选择合适的广告。点击“购买“按钮下单，输入您要购买的金额，并根据卖方提供的支付方式进行转账。最后，回到订单页，点击“已付款”，等待卖方放币，即可获得您的数字货币。',
          id: '4'
        },
        {
          title: '5，我如何查看我的报酬和推荐人列表？',
          content: 'Tokex会对数字货币订单的资产进行托管保护，卖家发布广告后，我们将冻结广告中的资产进行托管，如果交易过程中卖家不放行资产，我们会将冻结中托管的资产放行给买家。',
          id: '5'
        }
      ]
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
    background-size: 100%;
    width: 100%;
    height: 100%;
}

.bg1 {
    background: linear-gradient(176deg, #E8E8E8 0%, rgba(244, 244, 244, 0) 100%);
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
    width: 274px;
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
    height: 206px;
    padding-left: 30px;
    padding-right: 30px;
    font-size: 18px;
    font-weight: 500;
    font-family: PingFang SC-Medium, PingFang SC;
    color: #050505;
    line-height: 30px;
    background-color: #f8f8f8;

}

.line {
    border: 1px dotted #8c94a3;
}

.icon {
    top: -19px;
}
</style>

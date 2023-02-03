<template>
    <div class="w-1024 m-lr-auto text-black">
        <!-- <div class="p-l-100 p-r-100"> -->
        <div class="flex justify-between p-t-77 p-b-76  m-b-48">
            <div>
                <div class="title">TokEX</div>
                <div class="title m-b-21">Affiliate Program</div>
                <div class="font-26 fw-400 ff-Regular l-h-30 m-b-48">邀请交易者来Tokex，赚取最高50%佣金收入</div>
                <el-button class="btn" type="primary" @click="application">开始赚取最高50%佣金</el-button>
            </div>
            <div class="w-363 h-390"><img class="img" src="../../assets/agent/top.png" alt=""> </div>
        </div>
        <div class="m-b-100 flex align-center justify-between">
                <div class="box_inner"><span>准备好材料，提交申请</span></div>
                <div class="box_inner center_box"><span>我们将审核您的申请，通过后您将获得专属邀请链接，邀请交易员来Tokex</span></div>
                <div class="box_inner"><span>您可以将邀请链接分享至您的社交平台、社区内容或其他推广渠道中，同时您可以使用专属后台查看您的数据</span></div>
        </div>
        <div class="m-b-50">
            <!-- <span>{{ $t('message.agent.agencyInterest') }}</span> -->
            <span>代理权益</span>
            <div class="flex justify-between">
                <div>
                    <div class="box_inner inline-block"></div>
                    <!-- <span>{{ $t('message.agent.agencyInterest1') }}</span> -->
                    <span>Easy to Customize Components</span>
                </div>
                <div>
                    <div class="box_inner inline-block"></div>
                    <!-- <span>{{ $t('message.agent.agencyInterest2') }}</span> -->
                    <span>Superfast Run Time To Load</span>
                </div>
            </div>
            <div class="flex justify-between">
                <div>
                    <div class="box_inner inline-block"></div>
                    <!-- <span>{{ $t('message.agent.agencyInterest3') }}</span> -->
                    <span>User Friendly interface</span>
                </div>
                <div>
                    <div class="box_inner inline-block"></div>
                    <!-- <div>{{ $t('message.agent.agencyInterest4') }}</div> -->
                    <span>Easy Intragition Any Platform</span>
                </div>
            </div>
        </div>
        <!-- <div>{{ $t('message.agent.earn') }}</div> -->
        <div>You Can Earn</div>
        <div class="flex justify-between  m-b-50">
            <!-- <div class="p-10 p-t-20 w-220 h-100 bg-white">{{ $t('message.agent.hight') }}<span class="m-t-10"
                        style="display:block">{{ $t('message.agent.hight1') }}</span></div> -->
            <div class="p-10 p-t-20 w-220 h-100 bg-white">40%<span class="m-t-10" style="display:block">on your
                    referrals' trading fees</span></div>
            <div class="l-h-100">+</div>
            <div class="p-10 p-t-20 w-220 h-100 bg-white">40%<span class="m-t-10" style="display:block">on what your
                    Sub-Affiliates earn</span></div>
        </div>
        <div class="w-p100 p-b-60">
            <div class="font-20 ff-Bold m-b-20">FAQ</div>
            <div class="w-600 m-lr-auto">
                <el-collapse v-model="activeNames">
                    <div v-for="(item, index) in problemList" :key="index">
                        <el-collapse-item :title="item.title" :name="item.id">
                            {{ item.content }}
                        </el-collapse-item>
                    </div>
                </el-collapse>
            </div>
        </div>
        <div class="text-center">
            <!-- <div>{{ $t('message.agent.become') }}</div> -->
            <div>现在成为代理商</div>
            <!-- <el-button type="primary" @click="application">{{ $t('message.agent.applyImmediately') }}</el-button> -->
            <el-button type="primary" @click="application">立即申请</el-button>
        </div>
        <!-- </div> -->
    </div>
</template>

<script>
export default {
  components: {},
  created() { },
  data() {
    return {
      activeNames: '',
      problemList: [
        {
          title: '什么是TokEX代理计划？',
          content: 'Tokex目前提供市场上顶级加密货币的交易互换，包括主流数字资产 Bitcoin (BTC), Ethereum (ETH), Tether (USDT), USD Coin (USDC)等。',
          id: '1'
        },
        {
          title: '如何申请TokEX代理计划？',
          content: '在Tokex购买数字资产无需手续费。',
          id: '2'
        },
        {
          title: '加入TokEX代理计划需要什么条件？',
          content: '我们欢迎任何有推广渠道的客户来申请我们欢迎任何有推广渠道的客户来申请我们欢迎任何有推广渠道的客户来申请我们欢迎任何有推广渠道的客户来申请我们欢迎任何有推广渠道的客户来申请我们欢迎任何有推广渠道的客户来申请我们欢迎任何有推广渠道的客户来申请',
          id: '3'
        },
        {
          title: '加入TokEX代理计划有什么好处？',
          content: '您首先需要完成身份认证（KYC）和手机验证后，然后，您可以在快捷区直接下单，或在自选区浏览所有广告，并选择合适的广告。点击“购买“按钮下单，输入您要购买的金额，并根据卖方提供的支付方式进行转账。最后，回到订单页，点击“已付款”，等待卖方放币，即可获得您的数字货币。',
          id: '4'
        },
        {
          title: '我如何查看我的报酬和推荐人列表？',
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
.title {
    font-size: 58px;
    font-family: FZYunDongHeiS-H-GB-Regular, FZYunDongHeiS-H-GB;
    font-weight: 400;
    color: #000000;
    line-height: 94px;
}

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
.center_box{
        margin-left: 32px;
        margin-right: 32px;
    }
.box_inner {
    width: 320px;
    height: 206px;
    background-color: #f8f8f8;

}
</style>

<template>
    <div class="w-800 box bg-grey m-lr-auto">
        <div class="p-l-100 p-r-100">
            <div class="flex justify-between p-t-30 m-b-70 ">
                <div>
                    <div>TokEX</div>
                    <div>Affiliate Program</div>
                    <div>{{ $t('message.agent.description') }}</div>
                    <el-button type="primary" @click="application">{{ $t('message.agent.startEarning') }}</el-button>
                </div>
                <div class="w-236 h-175 bg-white"></div>
            </div>
            <div class="flex justify-between m-b-50 ">
                <div>
                    <div class="box_inner"></div>
                    <span>{{ $t('message.agent.aubmitApplication') }}</span>
                </div>
                <div class="line"></div>
                <div>
                    <div class="box_inner"></div>
                    <span>{{ $t('message.agent.applicationDescription1') }}</span>
                </div>
                <div class="line"></div>
                <div>
                    <div class="box_inner"></div>
                    <span>{{ $t('message.agent.applicationDescription2') }}</span>
                </div>
            </div>
            <div class="m-b-50">
                <span>{{ $t('message.agent.agencyInterest') }}</span>
                <div class="flex justify-between">
                    <div>
                        <div class="box_inner inline-block"></div>
                        <span>{{ $t('message.agent.agencyInterest1') }}</span>
                    </div>
                    <div>
                        <div class="box_inner inline-block"></div>
                        <span>{{ $t('message.agent.agencyInterest2') }}</span>
                    </div>
                </div>
                <div class="flex justify-between">
                    <div>
                        <div class="box_inner inline-block"></div>
                        <span>{{ $t('message.agent.agencyInterest3') }}</span>
                    </div>
                    <div>
                        <div class="box_inner inline-block"></div>
                        <div>{{ $t('message.agent.agencyInterest4') }}</div>
                    </div>
                </div>
            </div>
            <div>{{ $t('message.agent.earn') }}</div>
            <div class="flex justify-between  m-b-50">
                <div class="p-10 p-t-20 w-220 h-100 bg-white">{{ $t('message.agent.hight') }}<span class="m-t-10"
                        style="display:block">{{ $t('message.agent.hight1') }}</span></div>
                <div class="l-h-100">+</div>
                <div class="p-10 p-t-20 w-220 h-100 bg-white">{{ $t('message.agent.subagent') }}<span class="m-t-10"
                        style="display:block">{{ $t('message.agent.subagent1') }}</span></div>
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
                <div>{{ $t('message.agent.become') }}</div>
                <el-button type="primary" @click="application">{{ $t('message.agent.applyImmediately') }}</el-button>
            </div>
        </div>
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
.line {
    width: 100%;
    height: 1px;
    margin-top: 20px;
    margin-left: 10px;
    margin-right: 10px;
    background-color: #44454D;
}

.box_inner {
    width: 40px;
    height: 40px;
    background-color: white;
}
</style>

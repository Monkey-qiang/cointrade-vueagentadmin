<template>
    <div class="w-1200 min-h-984 text-c001529 fw-500 ff-SC p-l-24 p-t-24 m-b-32 b-l-1-solid-E4EBF1">
      <div class="flex justify-between align-center">
        <div class="flex align-center w-592 h-148 bg-FAFBFC b-r-8">
          <div class="m-l-24">
            <div class="ff-SCRegular fw-400">累计直客佣金(USDT)</div>
            <div class="ff-SCBold font-24 fw-600 m-t-20">{{ rewardSummary.total_straight }}</div>
          </div>
          <div class="w-1 h-80 bg-E4EBF1 m-l-64"></div>
          <div class="m-l-24">
            <div class="flex align-center">
              <div class="ff-SCRegular font-14 fw-400 text-c7C869B">昨日直客佣金(USDT)</div>
              <div class="ff-SCBold fw-600 m-l-20">{{ rewardSummary.yesterday_agent }}</div>
            </div>
            <div class="flex align-center m-t-28">
              <div class="ff-SCRegular font-14 fw-400 text-c7C869B">本月直客佣金(USDT)</div>
              <div class="ff-SCBold fw-600 m-l-20">{{ rewardSummary.month_straight }}</div>
            </div>
          </div>
        </div>
        <div class="flex align-center w-592 h-148 bg-FAFBFC b-r-8">
          <div class="m-l-24">
            <div class="ff-SCRegular fw-400">累计代理佣金(USDT)</div>
            <div class="ff-SCBold font-24 fw-600 m-t-20">{{ rewardSummary.total_agent }}</div>
          </div>
          <div class="w-1 h-80 bg-E4EBF1 m-l-64"></div>
          <div class="m-l-24">
            <div class="flex align-center">
              <div class="ff-SCRegular font-14 fw-400 text-c7C869B">昨日代理佣金(USDT)</div>
              <div class="ff-SCBold fw-600 m-l-20">{{ rewardSummary.yesterday_agent }}</div>
            </div>
            <div class="flex align-center m-t-28">
              <div class="ff-SCRegular font-14 fw-400 text-c7C869B">本月代理佣金(USDT)</div>
              <div class="ff-SCBold fw-600 m-l-20">{{ rewardSummary.month_agent }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="m-t-24">
        <div class="flex justify-between align-center ff-SCMedium font-20 p-t-24">
          奖励记录
          <div class="ff-SCRegular font-12 fw-400 text-c7C869B">每日UTC+8时间10:00结算前一日奖励</div>
        </div>
        <div class="flex justify-between align-center m-t-20">
          <div class="flex align-center">
            <div>
              <span class="ff-Regular font-14 fw-400 m-r-10">币种</span>
              <el-select v-model="coin" clearable placeholder="全部">
                <el-option
                  v-for="item in coinOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div class="m-l-32">
              <span class="ff-Regular font-14 fw-400 m-r-10">奖励类型</span>
              <el-select v-model="awardType" clearable placeholder="全部">
                <el-option
                  v-for="item in awardTypeOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div class="m-l-32">
              <span class="ff-Regular font-14 fw-400 m-r-10">日期</span>
              <el-date-picker
                class="h-32"
                v-model="date"
                type="daterange"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                >
              </el-date-picker>
            </div>
          </div>
          <div class="w-80 h-32 l-h-32 text-center ff-Regular font-14 fw-400 bg-FFC304 b-r-4">查询</div>
        </div>
      </div>
      <basic-table class="m-t-24" v-bind="tableOptions"></basic-table>
    </div>
</template>

<script>
import BasicTable from '@/components/basic/BasicTable.vue'
import { tableColumns } from './js'
export default {
  components: {
    BasicTable
  },
  data() {
    return {
      coin: '',
      coinOptions: [
        {
          value: '22',
          label: 'BTC'
        }, {
          value: '128',
          label: 'USDT'
        }
      ],
      awardType: '',
      awardTypeOptions: [
        {
          value: '1',
          label: '一等奖'
        }, {
          value: '2',
          label: '二等奖'
        }
      ],
      date: '',
      tableOptions: {
        columns: tableColumns,
        data: [],
        showPagination: true,
        paginationOp: {
          small: true,
          total: 1,
          pageSize: 3,
          currentPage: 1,
          layout: 'prev, pager, next, jumper'
        },
        theme: 'white'
      },
      rewardSummary: {}
    }
  },
  created() {
    this.getRewardSummary()
    this.getRewardList()
  },
  methods: {
    search() {
      this.getRewardList()
    },
    currentChange(page) {
      // console.log(page)
      this.tableOptions.paginationOp.currentPage = page
      this.getInviteList()
    },
    getRewardSummary() {
      this.getRequest('agent/getrewardsummary').then(res => {
        // console.log(res)
        if (res.code && res.code == 2000) {
          this.rewardSummary = res.data
        }
      })
    },
    getRewardList() {
      const data = {
        coin: this.coin,
        category: '',
        begin_time: this.date[0],
        end_time: this.date[1],
        page: this.tableOptions.paginationOp.currentPage,
        size: 3
      }
      this.getRequest('agent/getrewardlist', data).then(res => {
        // console.log(res)
        if (res.code && res.code == 2000) {
          this.tableOptions.data = res.data.data_list
          this.tableOptions.paginationOp.total = res.data.data_total
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep{
  .el-select{
    .el-input__inner{
      height: 32px;
      line-height: 32px;
    }
    .el-input__icon{
      line-height: 32px!important;
    }
  }
  .el-date-editor{
    width: 278px;
    .el-input__icon{
      height: auto;
    }
  }
  .el-range-separator{
    height: auto;
  }
  .el-table{
    color: #001529;
    .el-table__cell{
      padding: 13px 0!important;
    }
    th.el-table__cell{
      font-size: 14px!important;
      color: #7C869B!important;
      background-color: #F0F2F5!important;
    }
  }
  .el-pager{
    li{
      width: 24px;
      height: 24px;
      line-height: 24px;
      margin: 0 4px;
    }
    .active{
      color: #001529!important;
      background-color: #FFC304!important;
    }
  }
  .btn-prev,.btn-next{
    width: 24px;
    height: 24px;
    line-height: 24px;
    background-color: transparent!important;
    .el-icon{
      font-size: 16px;
    }
  }
  .white-theme{
    .first{
      padding-left: 6px!important;
    }
  }
}
</style>
<style lang="scss">
.el-select-dropdown{
  .el-select-dropdown__item{
    height: 60px!important;
    line-height: 60px!important;
  }
}
</style>

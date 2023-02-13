<template>
    <div class="w-1200 min-h-984 text-c001529 fw-500 ff-SC p-l-24 p-t-24 m-b-32 b-l-1-solid-E4EBF1">
      <div class="flex justify-between align-center">
        <div class="flex align-center w-592 h-148 bg-FAFBFC b-r-8">
          <div class="m-l-24">
            <div class="ff-SCRegular fw-400">{{ $t('award.totalStraight') }}(USDT)</div>
            <div class="ff-SCBold font-24 fw-600 m-t-20">{{ rewardSummary.total_straight }}</div>
          </div>
          <div class="w-1 h-80 bg-E4EBF1 m-l-64"></div>
          <div class="m-l-24">
            <div class="flex align-center">
              <div class="ff-SCRegular font-14 fw-400 text-c7C869B">{{ $t('award.yesterdayStraight') }}(USDT)</div>
              <div class="ff-SCBold fw-600 m-l-20">{{ rewardSummary.yesterday_straight }}</div>
            </div>
            <div class="flex align-center m-t-28">
              <div class="ff-SCRegular font-14 fw-400 text-c7C869B">{{ $t('award.monthStraight') }}(USDT)</div>
              <div class="ff-SCBold fw-600 m-l-20">{{ rewardSummary.month_straight }}</div>
            </div>
          </div>
        </div>
        <div class="flex align-center w-592 h-148 bg-FAFBFC b-r-8">
          <div class="m-l-24">
            <div class="ff-SCRegular fw-400">{{ $t('award.totalAgent') }}(USDT)</div>
            <div class="ff-SCBold font-24 fw-600 m-t-20">{{ rewardSummary.total_agent }}</div>
          </div>
          <div class="w-1 h-80 bg-E4EBF1 m-l-64"></div>
          <div class="m-l-24">
            <div class="flex align-center">
              <div class="ff-SCRegular font-14 fw-400 text-c7C869B">{{ $t('award.yesterdayAgent') }}(USDT)</div>
              <div class="ff-SCBold fw-600 m-l-20">{{ rewardSummary.yesterday_agent }}</div>
            </div>
            <div class="flex align-center m-t-28">
              <div class="ff-SCRegular font-14 fw-400 text-c7C869B">{{ $t('award.monthAgent') }}(USDT)</div>
              <div class="ff-SCBold fw-600 m-l-20">{{ rewardSummary.month_agent }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="m-t-24">
        <div class="flex justify-between align-center ff-SCMedium font-20 p-t-24">
          {{ $t('award.awardRecord') }}
          <div class="ff-SCRegular font-12 fw-400 text-c7C869B">{{ $t('award.settlementTime') }}</div>
        </div>
        <div class="flex justify-between align-center m-t-20">
          <div class="flex align-center">
            <div>
              <span class="ff-Regular font-14 fw-400 m-r-10">{{ $t('award.coin') }}</span>
              <el-select v-model="coin" filterable clearable :placeholder="$t('common.all')">
                <el-option
                  v-for="item in coinOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                  <div class="flex justify-between align-center">
                    <span style="float: left">{{ item.label }}</span>
                    <img v-if="coin == item.value" src="@/assets/common/selected.png" alt="">
                  </div>
                </el-option>
              </el-select>
            </div>
            <div class="m-l-32">
              <span class="ff-Regular font-14 fw-400 m-r-10">{{ $t('award.awardType') }}</span>
              <el-select v-model="awardType" clearable :placeholder="$t('common.all')">
                <el-option
                  v-for="item in awardTypeOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                  <div class="flex justify-between align-center">
                    <span style="float: left">{{ item.label }}</span>
                    <img v-if="awardType == item.value" src="@/assets/common/selected.png" alt="">
                  </div>
                </el-option>
              </el-select>
            </div>
            <div class="m-l-32">
              <span class="ff-Regular font-14 fw-400 m-r-10">{{ $t('common.date') }}</span>
              <el-date-picker
                class="h-32"
                v-model="date"
                type="daterange"
                value-format="yyyy-MM-dd"
                :start-placeholder="$t('common.beginDate')"
                :end-placeholder="$t('common.endDate')"
                >
              </el-date-picker>
            </div>
          </div>
          <div class="w-80 h-32 l-h-32 text-center ff-Regular font-14 fw-400 bg-FFC304 b-r-4 cursor-point" @click="search">{{ $t('common.search') }}</div>
        </div>
      </div>
      <basic-table class="m-t-24" v-bind="tableOptions" @current-change="currentChange"></basic-table>
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
        { value: '',
          label: this.$t('common.all')
        }
      ],
      awardType: '',
      awardTypeOptions: [
        {
          value: '',
          label: this.$t('common.all')
        },
        {
          value: '1',
          label: this.$t('award.straight')
        }, {
          value: '3',
          label: this.$t('award.agent')
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
          'page-size': 10,
          currentPage: 1,
          layout: 'prev, pager, next, jumper'
        },
        theme: 'white'
      },
      rewardSummary: {}
    }
  },
  created() {
    this.getCoinList()
    this.getRewardSummary()
    this.getRewardList()
  },
  methods: {
    search() {
      this.tableOptions.paginationOp.currentPage = 1
      this.getRewardList()
    },
    currentChange(page) {
      // console.log(page)
      if (typeof (page) !== 'object') {
        this.tableOptions.paginationOp.currentPage = page
        this.getRewardList()
      }
    },
    getCoinList() {
      this.getRequest('agent/allcoin').then(res => {
        // console.log(res)
        if (res.code && res.code == 2000) {
          res.data.forEach(item => {
            this.coinOptions.push({
              value: item.coin,
              label: item.coin
            })
          })
        }
      })
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
      let begin_time, end_time
      if (this.date) {
        begin_time = this.date[0]
        end_time = this.date[1]
      }
      const data = {
        coin: this.coin,
        category: this.awardType,
        begin_time,
        end_time,
        page: this.tableOptions.paginationOp.currentPage,
        size: 10
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

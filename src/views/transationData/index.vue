<template>
    <div class="w-1200 min-h-984 text-c001529 fw-500 ff-SC p-l-24 p-t-24 m-b-32 b-l-1-solid-E4EBF1">
      <div class="flex align-center m-t-24">
        <div class="ff-SCMedium font-20 text-c7C869B p-b-7 cursor-point" :class="[isActive==1?'active':'']" @click="tabToggle(1)">{{ $t('transaction.spotTransation') }}</div>
        <div class="ff-SCMedium font-20 text-c7C869B p-b-7 m-l-40 cursor-point" :class="[isActive==3?'active':'']" @click="tabToggle(3)">{{ $t('transaction.contractTransaction') }}</div>
      </div>
      <div class="m-t-24">
        <div class="flex justify-between align-center m-t-20">
          <div class="flex align-center">
            <div>
              <span class="ff-Regular font-14 fw-400 m-r-10">{{ $t('transaction.transactionPair') }}</span>
              <el-select v-model="ticker" filterable clearable :placeholder="$t('common.all')">
                <el-option
                  v-for="item in tickerOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                  <div class="flex justify-between align-center">
                    <span style="float: left">{{ item.label }}</span>
                    <img v-if="ticker == item.value" src="@/assets/common/selected.png" alt="">
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
          <div class="w-80 h-32 l-h-32 text-center ff-Regular font-14 fw-400 bg-FFC304 b-r-4 cursor-point" @click="search">查询</div>
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
      isActive: 1,
      ticker: '',
      tickerOptions: [
        {
          value: '',
          label: this.$t('common.all')
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
      }
    }
  },
  created() {
    this.getTickers()
    this.getTransactionList()
  },
  methods: {
    tabToggle(index) {
      this.isActive = index
      this.getTransactionList()
    },
    search() {
      this.tableOptions.paginationOp.currentPage = 1
      this.getTransactionList()
    },
    currentChange(page) {
      // console.log(page)
      this.tableOptions.paginationOp.currentPage = page
      this.getTransactionList()
    },
    getTickers() {
      this.getRequest('agent/gettickers ').then(res => {
        // console.log(res)
        if (res.code && res.code == 2000) {
          res.data.forEach(item => {
            this.tickerOptions.push({
              value: item.coin + '/' + item.currency,
              label: item.coin + '/' + item.currency
            })
          })
        }
      })
    },
    getTransactionList() {
      let coin, currency, begin_time, end_time
      if (this.ticker) {
        coin = this.ticker.split('/')[0]
        currency = this.ticker.split('/')[1]
      }
      if (this.date) {
        begin_time = this.date[0]
        end_time = this.date[1]
      }
      const data = {
        coin,
        currency,
        tradeid: this.isActive,
        begin_time,
        end_time,
        page: this.tableOptions.paginationOp.currentPage,
        size: 10
      }
      this.getRequest('agent/gettradelist', data).then(res => {
        // console.log(res)
        if (res.code && res.code == 2000) {
          if (res.data.data_list) {
            res.data.data_list.forEach(item => {
              item.ticker = item.coin + '/' + item.currency
            })
          }
          this.tableOptions.data = res.data.data_list
          this.tableOptions.paginationOp.total = res.data.data_total
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.active{
  color: #001529;
  position: relative;
  &::after{
    display: block;
    content: '';
    width: 100%;
    height: 3px;
    background-color: #FFC304;
    position: absolute;
    bottom: -3px;
    left: 0;
    z-index: 9;
  }
}
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

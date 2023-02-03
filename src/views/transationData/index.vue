<template>
    <div class="w-1200 min-h-984 text-c001529 fw-500 ff-SC p-l-24 p-t-24 m-b-32 b-l-1-solid-E4EBF1">
      <div class="flex align-center m-t-24">
        <div class="ff-SCMedium font-20 text-c7C869B p-b-7 cursor-point" :class="[isActive==0?'active':'']" @click="tabToggle(0)">现货交易</div>
        <div class="ff-SCMedium font-20 text-c7C869B p-b-7 m-l-40 cursor-point" :class="[isActive==1?'active':'']" @click="tabToggle(1)">合约交易</div>
      </div>
      <div class="m-t-24">
        <div class="flex justify-between align-center m-t-20">
          <div class="flex align-center">
            <div>
              <span class="ff-Regular font-14 fw-400 m-r-10">交易对</span>
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
      isActive: 0,
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
      date: '',
      tableOptions: {
        columns: tableColumns,
        data: [{
          userId: 'D5359686',
          inviteNum: 'BTC/USDT',
          totalCommission: 21551.15,
          transationCommission: 283412.04,
          inviteDate: '2023-01-30 16:58:25'
        }],
        showPagination: true,
        paginationOp: {
          small: true,
          total: 1,
          pageSize: 10,
          currentPage: 1,
          layout: 'prev, pager, next, jumper'
        },
        theme: 'white'
      }
    }
  },
  methods: {
    tabToggle(index) {
      this.isActive = index
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

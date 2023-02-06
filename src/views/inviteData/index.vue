<template>
    <div class="w-1200 min-h-984 text-c001529 fw-500 ff-SC p-l-24 p-t-24 m-b-32 b-l-1-solid-E4EBF1">
      <div class="flex justify-between align-center">
        <div class="w-389 h-148 text-center bg-FAFBFC b-r-8">
          <div class="ff-Regular fw-400 m-t-32">团队人数</div>
          <div class="ff-SCBold font-24 fw-600 m-t-20">74367</div>
        </div>
        <div class="yesterday-add w-389 h-148 text-center b-r-8">
          <div class="ff-Regular fw-400 m-t-32">昨日新增人数</div>
          <div class="ff-SCBold font-24 fw-600 m-t-20">74367</div>
        </div>
        <div class="w-389 h-148 text-center bg-FAFBFC b-r-8">
          <div class="ff-Regular fw-400 m-t-32">本月新增人数</div>
          <div class="ff-SCBold font-24 fw-600 m-t-20">74367</div>
        </div>
      </div>
      <div class="m-t-24">
        <div class="ff-SCMedium font-20 p-t-24">邀请记录</div>
        <div class="flex justify-between align-center m-t-20">
          <div>
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
      date: '',
      tableOptions: {
        columns: tableColumns,
        data: [{
          userId: 'D5359686',
          inviteNum: 34,
          totalCommission: 21551.15,
          transationCommission: 283412.04,
          agentCommission: 283412.04,
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
      },
      inviteSummary: {}
    }
  },
  created() {
    this.getAgentInfo()
  },
  methods: {
    getAgentInfo() {
      this.getRequest('agent/getinvitesummary').then(res => {
        // console.log(res)
        if (res.code && res.code == 2000) {
          this.inviteSummary = res.data
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.yesterday-add{
  background-color:rgba(255, 195, 4, .2);
}
::v-deep{
  .el-date-editor{
    width: 278px;
  }
  .el-range__icon{
    height: auto;
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

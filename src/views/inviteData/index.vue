<template>
    <div class="w-1200 min-h-984 text-c001529 fw-500 ff-SC p-l-24 p-t-24 m-b-32 b-l-1-solid-E4EBF1">
      <div class="flex justify-between align-center">
        <div class="w-389 h-148 text-center bg-FAFBFC b-r-8">
          <div class="ff-Regular fw-400 m-t-32">{{ $t('invite.teamMemberNumber') }}</div>
          <div class="ff-SCBold font-24 fw-600 m-t-20">{{ inviteSummary.total_people }}</div>
        </div>
        <div class="yesterday-add w-389 h-148 text-center b-r-8">
          <div class="ff-Regular fw-400 m-t-32">{{ $t('invite.yesterdayAdd') }}</div>
          <div class="ff-SCBold font-24 fw-600 m-t-20">{{ inviteSummary.yesterday_increase }}</div>
        </div>
        <div class="w-389 h-148 text-center bg-FAFBFC b-r-8">
          <div class="ff-Regular fw-400 m-t-32">{{ $t('invite.monthAdd') }}</div>
          <div class="ff-SCBold font-24 fw-600 m-t-20">{{ inviteSummary.month_increase }}</div>
        </div>
      </div>
      <div class="m-t-24">
        <div class="ff-SCMedium font-20 p-t-24">{{ $t('invite.inviteRecord') }}</div>
        <div class="flex justify-between align-center m-t-20">
          <div>
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
      date: '',
      tableOptions: {
        columns: tableColumns,
        data: [],
        showPagination: true,
        paginationOp: {
          small: true,
          total: 0,
          'page-size': 10,
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
    this.getInviteList()
  },
  methods: {
    search() {
      this.tableOptions.paginationOp.currentPage = 1
      this.getInviteList()
    },
    currentChange(page) {
      if (typeof (page) !== 'object') {
        this.tableOptions.paginationOp.currentPage = page
        this.getInviteList()
      }
    },
    getAgentInfo() {
      this.getRequest('agent/getinvitesummary').then(res => {
        if (res.code && res.code == 2000) {
          this.inviteSummary = res.data
        }
      })
    },
    getInviteList() {
      let begin_time, end_time
      if (this.date) {
        begin_time = this.date[0]
        end_time = this.date[1]
      }
      const data = {
        begin_time,
        end_time,
        page: this.tableOptions.paginationOp.currentPage,
        size: 10
      }
      this.getRequest('agent/getinvitelist', data).then(res => {
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
.yesterday-add{
  background-color:rgba(255, 195, 4, .2);
}
::v-deep{
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

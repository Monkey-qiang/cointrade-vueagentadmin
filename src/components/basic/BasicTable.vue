<template>
  <div
    id="BasicTable"
    :class="[bindTableOptions.theme == 'black' ? 'black-theme' : 'white-theme', bindTableOptions.showHoverBg? '': 'hide-hover' ]"
  >
    <el-table
      ref="table"
      v-bind="bindTableOptions"
      :data="bindTableOptions && bindTableOptions.data"
      style="width: 100%"
      v-on="$listeners"
    >
      <template slot="empty"><slot name="emptyPage"></slot></template>
      <template v-for="(item) in bindTableOptions && bindTableOptions.columns">
        <template v-if="item.customSlot">
          <template v-if="item.customSlot === 'expand'">
            <el-table-column width="1" type="expand" :key="item.customSlot">
              <template slot-scope="scope">
                <slot :name="item.customSlot" v-bind:scope="scope" v-bind:column="item"></slot>
              </template>
            </el-table-column>
            <el-table-column :width="item.width" :class-name="item.ClassName" :key="item.expandBtn">
              <template slot-scope="scope">
                <slot :name="item.expandBtn" v-bind:scope="scope" v-bind:column="item"></slot>
              </template>
            </el-table-column>
          </template>
          <el-table-column
            v-else
            v-bind="item"
            :min-width="item.minWidth || 100"
            :key="item.id"
          >
            <template slot-scope="scope">
              <slot :name="item.customSlot" v-bind:scope="scope" v-bind:column="item"></slot>
            </template>
          </el-table-column>
        </template>
        <template v-else>
          <el-table-column :key="item.id" v-bind="item" :min-width="item.minWidth || 100">
          </el-table-column>
        </template>
      </template>
      <template v-if="bindTableOptions && bindTableOptions.actionOptions">
        <el-table-column
          :min-width="bindTableOptions.actionOptions.minWidth || 100"
          v-bind="bindTableOptions.actionOptions"
        >
          <template slot-scope="scope">
            <template v-for="(btn, index) in bindTableOptions.actionOptions.columns">
              <el-button
                v-if="(btn.hide && !btn.hide(scope.row)) || !btn.hide"
                v-bind="btn"
                :key="index"
                :style="btn.style"
                @click="handleClickAction(btn.event, scope, btn)"
              >
                {{ btn.text }}
              </el-button>
            </template>
            <slot name="input" v-bind:scope="scope"></slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div
      class="page_box p-t-20 p-b-10 flex justify-end"
      v-if="bindTableOptions && bindTableOptions.showPagination && bindTableOptions.paginationOp.total"
    >
      <el-pagination
        v-bind="bindTableOptions && bindTableOptions.paginationOp"
        v-on="$listeners"
        ref="pagination"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BasicTable',
  data() {
    return {
      defaultOptions: {
        theme: 'white',
        // 是否显示分页
        showPagination: false,
        showHoverBg: false
      },
      // 分页配置
      paginationOp: {
        background: true,
        layout: 'prev, pager, next',
        total: 0,
        'page-size': 10
      }
    }
  },
  computed: {
    bindTableOptions() {
      // console.log(this.$attrs, 1200)
      return {
        ...this.defaultOptions,
        ...this.$attrs,
        paginationOp: { ...this.paginationOp, ...this.$attrs.paginationOp }
      }
    }
  },
  methods: {
    // 获取分页器实例
    getPaginationRef() {
      if (this.$refs.pagination) {
        return this.$refs.pagination
      }
    },
    // 获取表格实例
    getTableRef() {
      if (this.$refs.table) {
        return this.$refs.table
      }
    },
    // 分页器事件派发
    hanldePageAction(type, data) {
      this.$emit(type, data)
    },
    // 点击操作栏
    handleClickAction(type, scope, btn) {
      this.$emit(type, { scope, btn })
    }
  }
}
</script>

<style lang="scss" scoped>
.hide-hover {
  ::v-deep .el-table--enable-row-hover .el-table__body tr:hover > td.el-table__cell {
    background-color: transparent;
  }
}

.white-theme {
  ::v-deep .el-table {
    background-color: #fff;
  }
  ::v-deep .el-table .el-table__header .el-table__cell {
    padding: 10px 0 11px 0;
  }

  ::v-deep .el-table tr {
    background-color: #fff !important;
  }

  ::v-deep .el-table tr.el-table__row .el-table__cell {
    padding: 25px 0;
  }
  ::v-deep .el-table th.el-table__cell {
    background-color: #f6f6f6;
    color: #636b75;
    font-family: PingFang_Medium;
    font-size: 12px;
  }
  ::v-deep .el-table td.el-table__cell {
    border-bottom: 1px solid #ebeef5;
    font-family: PingFang_Medium;
  }
  ::v-deep .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #222226;
  }

  ::v-deep .el-pagination .btn-prev:hover {
    color: #636b75;
  }

  ::v-deep .el-pagination .btn-next:hover {
    color: #636b75;
  }

  ::v-deep .first {
    padding-left: 20px !important ;
  }
  ::v-deep .last {
    padding-right: 20px !important ;
  }
  ::v-deep .start {
    padding-left: 30px !important ;
  }
  ::v-deep .end {
    padding-right: 30px !important ;
  }
}

.black-theme {
  .page_box {
    // background-color: #181a20;
    .el-pagination{
      text-align: right;
      ::v-deep{
        button{
          background-color: transparent;
          border: none;
          padding: 0 9px 0;
          height: 30px;
          line-height: 30px;
        }
        .el-pager li{
          background-color: transparent;
          font-size: 14px;
          font-family: PingFang_Medium;
          font-weight: 400;
          color: #848E9C;
          padding: 0;
          height: 30px;
          line-height: 30px;
          margin: 0;
          margin-right: 10px;
          &:last-child{
            margin-right: 0;
          }
        }
        .el-pager li.active{
          background-color: $basicColor;
          color: #0C0C11;
          border-radius: 4px;
          box-shadow: 0px 24px 30px 0px rgba(82,92,229,0.19);
        }
        .btn-prev{
          margin: 0 10px 0 0;
        }
        .btn-next{
          margin: 0 0 0 10px;
        }
      }
    }
  }
  ::v-deep{
    .el-table__expanded-cell{
      background-color: #141515;
    }
    .el-loading-mask{
      background-color: #070707;
    }
  }
}
</style>

export const tableColumns = [
  {
    label: '币种',
    // customSlot: 'coin',
    'class-name': 'first',
    prop: 'coin',
    width: '120px'
  },
  {
    label: '奖励数量',
    prop: 'quantity',
    width: '190px'
  },
  {
    label: '奖励类型',
    prop: 'category',
    width: '170px',
    formatter: (row) => {
      return row.category == 1 ? '直客佣金' : '代理佣金'
    }
  },
  {
    label: '交易区',
    prop: 'tradeid',
    width: '170px',
    formatter: (row) => {
      return row.category == 1 ? '现货交易' : '合约交易'
    }
  },
  {
    label: '奖励来源',
    prop: 'userid',
    width: '190px'
    // align: 'right',
  },
  {
    label: '状态',
    prop: 'status',
    width: '170px',
    // align: 'right',
    formatter: (row) => {
      let statusText
      if (row.status == 1) {
        statusText = '未入账'
      } else if (row.status == 3) {
        statusText = '已入账'
      } else if (row.status == 4) {
        statusText = '已停止'
      }
      return statusText
    }
  },
  {
    label: '邀请日期',
    prop: 'createtime'
    // align: 'right',
  }
]


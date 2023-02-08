export const tableColumns = [
  {
    label: '用户ID',
    // customSlot: 'coin',
    'class-name': 'first',
    prop: 'userid',
    width: '160px'
  },
  {
    label: '用户邀请人数',
    prop: 'people',
    width: '140px'
  },
  {
    // prop: 'price',
    label: '用户产生总佣金(USDT)',
    prop: 'total',
    width: '230px'
  },
  {
    label: '用户累计交易佣金(USDT)',
    prop: 'straight',
    width: '230px'
  },
  {
    label: '用户累计代理佣金(USDT)',
    prop: 'subfee',
    width: '230px'
    // align: 'right',
  },
  {
    label: '邀请日期',
    prop: 'createtime'
    // align: 'right',
  }
]


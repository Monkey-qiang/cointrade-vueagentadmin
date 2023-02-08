export const tableColumns = [
  {
    label: '邀请人数',
    // customSlot: 'coin',
    'class-name': 'first',
    prop: 'people',
    width: '120px'
  },
  {
    label: '直客佣金(USDT)',
    prop: 'straight',
    width: '220px'
  },
  {
    // prop: 'price',
    label: '代理佣金(USDT)',
    prop: 'subfee',
    width: '220px'
  },
  {
    label: '现货交易量(USDT)',
    prop: 'spotnum',
    width: '220px'
  },
  {
    label: '合约交易量',
    prop: 'futnum',
    width: '220px'
    // align: 'right',
  },
  {
    label: '日期',
    prop: 'createtime'
    // align: 'right',
  }
]


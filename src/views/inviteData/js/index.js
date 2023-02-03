export const tableColumns = [
  {
    label: '用户ID',
    // customSlot: 'coin',
    'class-name': 'first',
    prop: 'userId',
    width: '160px'
  },
  {
    label: '用户邀请人数',
    prop: 'inviteNum',
    width: '140px'
  },
  {
    // prop: 'price',
    label: '用户产生总佣金(USDT)',
    prop: 'totalCommission',
    width: '230px'
  },
  {
    label: '用户累计交易佣金(USDT)',
    prop: 'transationCommission',
    width: '230px'
  },
  {
    label: '用户累计代理佣金(USDT)',
    prop: 'agentCommission',
    width: '230px'
    // align: 'right',
  },
  {
    label: '邀请日期',
    prop: 'inviteDate'
    // align: 'right',
  }
]


export const tableColumns = [
  {
    label: '邀请人数',
    // customSlot: 'coin',
    'class-name': 'first',
    prop: 'userId',
    width: '120px'
  },
  {
    label: '直客佣金(USDT)',
    prop: 'inviteNum',
    width: '220px'
  },
  {
    // prop: 'price',
    label: '代理佣金(USDT)',
    prop: 'totalCommission',
    width: '220px'
  },
  {
    label: '现货交易量(USDT)',
    prop: 'transationCommission',
    width: '220px'
  },
  {
    label: '合约交易量',
    prop: 'agentCommission',
    width: '220px'
    // align: 'right',
  },
  {
    label: '日期',
    prop: 'inviteDate'
    // align: 'right',
  }
]


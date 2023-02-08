import i18n from '@/language'

export const tableColumns = [
  {
    label: i18n.t('invite.userId'),
    // customSlot: 'coin',
    'class-name': 'first',
    prop: 'userid',
    width: '160px'
  },
  {
    label: i18n.t('invite.inviteNum'),
    prop: 'people',
    width: '140px'
  },
  {
    // prop: 'price',
    label: i18n.t('invite.totalCommission') + '(USDT)',
    prop: 'total',
    width: '230px'
  },
  {
    label: i18n.t('invite.totalTransationCommission') + '(USDT)',
    prop: 'straight',
    width: '230px'
  },
  {
    label: i18n.t('invite.totalAgentCommission') + '(USDT)',
    prop: 'subfee',
    width: '230px'
    // align: 'right',
  },
  {
    label: i18n.t('common.date'),
    prop: 'createtime'
    // align: 'right',
  }
]


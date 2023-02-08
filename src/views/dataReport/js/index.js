import i18n from '@/language'
export const tableColumns = [
  {
    label: i18n.t('dataReport.inviteNum'),
    // customSlot: 'coin',
    'class-name': 'first',
    prop: 'people',
    width: '120px'
  },
  {
    label: i18n.t('dataReport.straightCommission') + '(USDT)',
    prop: 'straight',
    width: '220px'
  },
  {
    // prop: 'price',
    label: i18n.t('dataReport.agentCommission') + '(USDT)',
    prop: 'subfee',
    width: '220px'
  },
  {
    label: i18n.t('dataReport.spotTransationNum') + '(USDT)',
    prop: 'spotnum',
    width: '220px'
  },
  {
    label: i18n.t('dataReport.contractTransationNum') + '(USDT)',
    prop: 'futnum',
    width: '220px'
    // align: 'right',
  },
  {
    label: i18n.t('common.date'),
    prop: 'createtime'
    // align: 'right',
  }
]


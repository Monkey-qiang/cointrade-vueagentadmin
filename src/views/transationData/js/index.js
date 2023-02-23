import i18n from '@/language'
export const tableColumns = [
  {
    label: i18n.t('invite.userId'),
    // customSlot: 'coin',
    'class-name': 'first',
    prop: 'userid',
    width: '200px'
  },
  {
    label: i18n.t('transaction.transactionPair'),
    prop: 'ticker',
    width: '260px'
  },
  {
    label: i18n.t('transaction.volume'),
    prop: 'amount',
    width: '260px'
  },
  {
    label: i18n.t('transaction.transactionAmount'),
    prop: 'quantity',
    width: '260px'
  },
  {
    label: i18n.t('common.date'),
    prop: 'createtime'
    // align: 'right',
  }
]


import i18n from '@/language'
export const tableColumns = [
  {
    label: i18n.t('award.coin'),
    // customSlot: 'coin',
    'class-name': 'first',
    prop: 'coin',
    width: '120px'
  },
  {
    label: i18n.t('award.awardNum'),
    prop: 'quantity',
    width: '190px'
  },
  {
    label: i18n.t('award.awardType'),
    prop: 'category',
    width: '170px',
    formatter: (row) => {
      return row.category == 1 ? i18n.t('award.straight') : i18n.t('award.agent')
    }
  },
  {
    label: i18n.t('award.tradingArea'),
    prop: 'tradeid',
    width: '170px',
    formatter: (row) => {
      return row.category == 1 ? i18n.t('transaction.spotTransation') : i18n.t('transaction.contractTransaction')
    }
  },
  {
    label: i18n.t('award.awardSource'),
    prop: 'userid',
    width: '190px'
    // align: 'right',
  },
  {
    label: i18n.t('award.status'),
    prop: 'status',
    width: '170px',
    // align: 'right',
    formatter: (row) => {
      let statusText
      if (row.status == 1) {
        statusText = i18n.t('award.notRecorded')
      } else if (row.status == 3) {
        statusText = i18n.t('award.recorded')
      } else if (row.status == 4) {
        statusText = i18n.t('award.stopped')
      }
      return statusText
    }
  },
  {
    label: i18n.t('common.inviteDate'),
    prop: 'createtime'
    // align: 'right',
  }
]


import { useLoad, useRouter } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { useState } from 'react'

import { asyncFunctionErrorCapture } from '@/utils'
import { getHistoriesApi } from '@/services/requests'

import CommonScrollView from '@/components/commonScrollView'
import HistoryCard from '@/pages/minerHistory/item'
import TopBackBar from '@/components/topBackBar'

import './index.scss'

export default function MinerHistory() {
  const [histories, setHistories] = useState<IHistory[]>([])
  const { params } = useRouter()
  const { planet, miner, minerId = '' } = params

  useLoad(async () => {
    const { res } = await asyncFunctionErrorCapture(getHistoriesApi, minerId)
    res && setHistories(res)
  })
  
  return (
    <>
      <TopBackBar>
          <View className='top-back-bar-first-line '>{planet}</View>
          <View className='top-back-bar-second-line'>{miner}</View>
          <View className='top-back-bar-third-line'>History</View>
      </TopBackBar>

      <CommonScrollView className='miner-history'>
        {histories?.map(history => <HistoryCard data={history} key={history._id} />)}
      </CommonScrollView>
    </>
  )
}

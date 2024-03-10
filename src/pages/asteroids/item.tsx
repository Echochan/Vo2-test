import { useState } from 'react'
import { View, Text} from '@tarojs/components'

import { getMinerApi } from '@/services/requests'
import { asyncFunctionErrorCapture } from '@/utils'

export default function AsteroidCard({ data }) {
  const {
    name,
    position: {x, y},
    currentMiner,
    minerals,
  } = data

  const [currentMinerName, setCurrentMinerName] = useState('')
  const getMinerName = async () => {
    const { res } = await asyncFunctionErrorCapture(getMinerApi, currentMiner)
    res && setCurrentMinerName(res.name)
  }

  if(currentMiner) {
    getMinerName()
  }
  
  return (
    <View className='common-card flex-container asteroid-card'>
      <View className='asteroid-left'>
        <View className='asteroid-name'>{name}</View>
      </View>

      <View className='asteroid-middle'>
        <View>
          <View className='asteroid-miners-title'>Minerals</View>
          <View className={`'asteroid-miners' ${minerals === 0 && 'asteroid-miners-empty'}`}>{minerals}</View>
        </View>
        <View>
          <View className='asteroid-current-miner-title'>Curren Miner</View>
          <View className='asteroid-current-miner'>
            <Text>{currentMinerName ? currentMinerName : '-'}</Text>
          </View>
        </View>
      </View>

      <View className='asteroid-right'>
          <View className='asteroid-position-title'>Position</View>
          <View className='asteroid-position'>{Math.floor(x)}, {Math.floor(y)}</View>
      </View>
    </View>
  )
}



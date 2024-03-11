import { View, Text} from '@tarojs/components'
import moment from 'moment'

import { EHistoryStatus } from '@/utils/enums'

import './index.scss'

export default function Item({ data }) {
  const {
    capacity: {
      current,
      max
    },
    speed: {
      travel,
      mining
    },
    position: {
      x,
      y
    },
    year,
    planet,
    status,
    miner,
    createdAt,
  } = data
  
  return (
    <View className='flex-container history-card'>
      <View className='history-left'>
        <View className='history-planet'>{moment(createdAt).format('M/DD/YYYY, h:mm:ss A')}</View>
        <View className='history-name'>Year {year}</View>
        <View className='history-status'>
          <Text>{EHistoryStatus[status]}</Text>
        </View>
      </View>
      <View className='history-middle'>
        <View>
          <View className='history-carry-capacity-title'>Carry Capacity</View>
          <View className={`'history-carry-capacity' ${current >= max && 'history-carry-capacity-full'}`}>{current}/{max}</View>
        </View>
        <View>
          <View className='history-carry-capacity-title'>Mining Speed</View>
          <View className='history-carry-capacity'>{mining}</View>
        </View>
      </View>
      <View className='history-right'>
        <View>
          <View className='history-travel-speed-title'>Travel Speed</View>
          <View className='history-travel-speed'>{travel}</View>
        </View>
       
        <View>
          <View className='history-position-title'>Position</View>
          <View className='history-position'>{Math.floor(x)}, {Math.floor(y)}</View>
        </View>
      </View>
    </View>
  )
}



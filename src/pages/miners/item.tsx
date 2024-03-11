import Taro from '@tarojs/taro'
import { View, Text} from '@tarojs/components'
import { EMinerStatus } from '@/utils/enums'

export default function Item({ data, planets}) {
  const {
    _id,
    planet,
    name,
    x,
    y,
    carryCapacity,
    travelSpeed,
    status,
    minerals 
  } = data

  function handleClick() {
    Taro.navigateTo({
      url: `/pages/minerHistory/index?minerId=${_id}&miner=${name}&planet=${planets[planet]?.name}`
    })
  }

  return (
    <View className='common-card flex-container miner-card'>
      <View className='miner-left'>
        <View className='miner-planet'>{planet.name || planets[planet]?.name}</View>
        <View className='miner-name'>{name}</View>
        <View className='miner-status'>
          <Text>{EMinerStatus[status]}</Text>
        </View>
      </View>
      <View className='miner-middle'>
        <View>
          <View className='miner-carry-capacity-title'>Carry Capacity</View>
          <View className={`'miner-carry-capacity' ${minerals >= carryCapacity && 'miner-carry-capacity-full'}`}>{minerals}/{carryCapacity}</View>
        </View>
        <View>
          <View className='miner-position-title'>Position</View>
          <View className='miner-position'>{Math.floor(x)}, {Math.floor(y)}</View>
        </View>
      </View>
      <View className='miner-right'>
        <View className='miner-travel-speed-title'>Travel Speed</View>
        <View className='miner-travel-speed'>{travelSpeed}</View>
      </View>

      <View className='miner-arrow-right vo-icon-arrow-right' onClick={handleClick}></View>
    </View>


  )
}



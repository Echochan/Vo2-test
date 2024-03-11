import Taro from '@tarojs/taro'
import { View, Image} from '@tarojs/components'

import './index.scss'
import creatIcon from '@/static/img/create-a-miner.png'

export default function PlanetCard({ data } : {data: IPlanet}) {
  const {
    _id,
    name,
    minerals,
    miners
  } = data
  
const handleCreate = () => {
  Taro.navigateTo({
    url: `/pages/createMiner/index?planetId=${_id}&planetName=${name}&planetMinerals=${minerals}`
  })
}
  return (
    <View className={`common-card  planet-card ${minerals >= 1000 && 'create-miner-card'}`}>
      <View className='flex-container'>
        <View className='planet-left'>
          <View className='planet-name'>{name}</View>
        </View>
        <View className='planet-middle'>
          <View>
            <View className='planet-miners-title'>Miners</View>
            <View className='planet-miners'>{miners}</View>
          </View>
        </View>
        <View className='planet-right'>
          <View className='planet-minerals-title'>Minerals</View>
          <View className={`planet-minerals ${minerals >= 1000 && 'planet-minerals-green'}`}>{minerals}/1000</View>
        </View>
      </View>

      {
        minerals > 1000 && <View className='create-miner-container' onClick={handleCreate}>
          <Image src={creatIcon} className='create-miner-icon' mode='aspectFit'></Image>
          Create a miner
        </View>
      }
    </View>
     
  )
}



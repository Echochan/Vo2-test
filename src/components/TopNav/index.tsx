import { View, Text} from '@tarojs/components'
import './index.scss'

export default function TopYear({year = 250, overlay = true}) {
  return(
    <View className='top-nav-wrap top-nav-active'>
      <View className='overlay' ></View>
      <Text className='top-nav-text'>{year} YEARS</Text>
    </View>
  )
}

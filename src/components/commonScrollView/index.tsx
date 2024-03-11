import { ScrollView, View } from '@tarojs/components'

import CustomNavBar from '../CustomNavBar'
import TopNav from '@/components/TopNav'
import CustomTabBar from '@/components/CustomTabBar'

import './index.scss'

export default function CommonScrollView({children, className = ''}) {
  return (
    <>
      <CustomNavBar />
      
      <TopNav/>
      
      <ScrollView className={ `${className} common-scroll-view`}>
        <View className='common-scroll-content'>
          {children}
        </View>
      </ScrollView>

      <CustomTabBar />
    </>
  )
}

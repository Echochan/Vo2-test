import { ScrollView, View } from '@tarojs/components'

import CustomNavBar from '../customNavBar'
import TopNav from '@/components/topNav'
import CustomTabBar from '@/components/customTabBar'

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

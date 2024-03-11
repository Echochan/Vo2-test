import Taro, { pxTransform } from '@tarojs/taro'
import { useState } from 'react'
import { View } from '@tarojs/components'

import { getGlobaldata } from '@/global.data'

import './index.scss'

export default function TopBackBar({ children, className = ''}) {
  const handleClick = () => {
    Taro.navigateBack({
      fail() {
        Taro.switchTab({
          url: '/pages/miners/index'
        })
      }
    })
  }
  const [navHeight, setNavHeight] = useState(0)//= getGlobaldata('navBarHeight') || 0

  Taro.createSelectorQuery()
  .select('.top-nav-text').boundingClientRect()
  .exec((data) => {
    const {top, height} = data[0]
    setNavHeight(top + height + 20)
  })

  return (
    <View className={`'top-back-bar' ${className}`} style={{paddingTop: navHeight}}>
      <View className='common-card flex-container'>
        <View className='vo-icon-arrow-left' onClick={handleClick}></View>
        <View>
          { children }
        </View>
      </View>
    </View>
  )
}

import Taro, { useLoad, useRouter } from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.scss'

const tabBarConfig = [
  {
    pagePath: '/pages/miners/index',
    text: 'Miners',
    icon: 'vo-icon-miners-on',
    selectedIcon: 'vo-icon-miners-off'
  },
  // {
  //   pagePath: '/pages/asteroids/index',
  //   text: 'Asteroids',
  //   icon: 'vo-icon-asteroids-on',
  //   selectedIcon: 'vo-icon-asteroids-off'
  // },
  // {
  //   pagePath: '/pages/planets/index',
  //   text: 'Planets',
  //   icon: 'vo-icon-planets-on',
  //   selectedIcon: 'vo-icon-planets-off'
  // },
  // {
  //   pagePath: 'pages/livemap/index',
  //   text: 'Live Map',
  //   icon: 'vo-icon-livemap-on',
  //   selectedIcon: 'vo-icon-livemap-off'
  // },
]


export default function CustomTabBar() {
  const { path: currentPath } = useRouter()

  const handleClickTab = (tab) => {
    if(tab.pagePath === currentPath) {return}
    Taro.switchTab({
      url: tab.pagePath
    })
  }

  const tabBarPaths = tabBarConfig.map(tab => tab.pagePath)

  return (
    <>
      {
        tabBarPaths.includes(currentPath) &&
        <>
          <View className='flex-container tab-bar'>
            {
              tabBarConfig.map((tab) => {
                return (
                  <View className={`'tab-item' ${tab.pagePath === currentPath && 'tab-item-active'}`} onClick={() => handleClickTab(tab)}>
                    <View className={`'tab-bar-icon' ${tab.pagePath === currentPath ? tab.selectedIcon : tab.icon}`}></View>
                    <View>{tab.text}</View>
                  </View>
                )
              })
            }
          </View>
          <View className='tab-bar-height'></View>
        </>
      }
    </>
  )
}

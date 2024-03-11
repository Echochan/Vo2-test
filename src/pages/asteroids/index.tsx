
import { useLoad } from '@tarojs/taro'
import { useState } from 'react'

import { getAsteroidsApi } from '@/services/apis'
import { asyncFunctionErrorCapture } from '@/utils'
import { getGlobaldata } from '@/global.data'

import CommonScrollView from '@/components/CommonScrollView'
import AsteroidCard from '@/pages/asteroids/item'

export default function Index() {
  const [asteroids, setAsteroids] = useState<IAsteroid[]>([])
  
  const handleSocket = () => {
    getGlobaldata('socket').receiveMessage(data => {
      const {asteroids} = data
      setAsteroids(asteroids)
    })
  }

  useLoad(async () => {
    const { res } = await asyncFunctionErrorCapture(getAsteroidsApi)
    res && setAsteroids(res)

    handleSocket()
  })

  
  return (
    <CommonScrollView>
      { asteroids?.map(asteroid => <AsteroidCard data={asteroid}  key={asteroid._id} />) }
    </CommonScrollView>
  )
}

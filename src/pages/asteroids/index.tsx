import { useLoad } from '@tarojs/taro'
import { useState } from 'react'

import { getAsteroidsApi } from '@/services/requests'
import { asyncFunctionErrorCapture } from '@/utils'

import CommonScrollView from '@/components/commonScrollView'
import AsteroidCard from '@/pages/asteroids/item'

export default function Index() {
  const [asteroids, setAsteroids] = useState<IAsteroid[]>([])

  useLoad(async () => {
    const { res } = await asyncFunctionErrorCapture(getAsteroidsApi)
    res && setAsteroids(res)
  })

  return (
    <CommonScrollView>
      { asteroids?.map(asteroid => <AsteroidCard data={asteroid}  key={asteroid._id} />) }
    </CommonScrollView>
  )
}

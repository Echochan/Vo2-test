import { useDidShow, useLoad, useRouter } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { useState } from 'react'

import { getPlanetsApi } from '@/services/apis'
import { asyncFunctionErrorCapture } from '@/utils'
import { getGlobaldata, setGlobaldata } from '@/global.data'

import CommonScrollView from '@/components/CommonScrollView'
import PlanetCard from '@/pages/planets/item'

import './index.scss'

export default function Index() {
  const [planets, setPlanets] = useState<IPlanet[]>([])

  const [showSuccessButton, setShowSuccessButton] = useState(false)
  
  useDidShow(() => {
    setShowSuccessButton(getGlobaldata('createMinerSuccess'))
    setGlobaldata('createMinerSuccess', false)
    setTimeout(() => setShowSuccessButton(false), 2000)
  })

  useLoad(async () => {
    const { res: planets } = await asyncFunctionErrorCapture(getPlanetsApi)
    setPlanets(planets)

    handleSocket()
  })

  const handleSocket = () => {
    getGlobaldata('socket').receiveMessage(data => {
      const {planets} = data
      setPlanets(planets)
    })
  }

  return (
    <View>
      {
        showSuccessButton && <View className='create-success'>
          The miner was successfully created.
        </View>
      }
      <CommonScrollView>
        {planets?.map(planet => <PlanetCard data={planet} key={planet._id} />)}
      </CommonScrollView>
    </View>
  )
}

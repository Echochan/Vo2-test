import { useLoad } from '@tarojs/taro'
import { useState } from 'react'

import { getMinersApi, getPlanetsApi } from '@/services/requests'
import { asyncFunctionErrorCapture } from '@/utils'
import { getGlobaldata } from '@/global.data'

import MinerCard from '@/pages/miners/item'
import CommonScrollView from '@/components/commonScrollView'

export default function Index() {
  const [miners, setMiners] = useState<IMiner[]>()
  const [planets, setPlanets] = useState({})

  useLoad(async () => {
    const {res} = await asyncFunctionErrorCapture(getMinersApi)
    res && setMiners(res)

    // in order to get planet name, transfer planets data from array to objject
    const {res: planets} = await asyncFunctionErrorCapture(getPlanetsApi)
    if(planets) {
      const planetsData = {}
      planets.forEach(planet => {
        planetsData[planet._id] = {
          ...planet
        }
      })
      setPlanets(planetsData)
    }

    // handleSocket()

  })

  const handleSocket = () => {
    getGlobaldata('socket').receiveMessage(data => {
      const {miners} = data
      setMiners(miners)
      setPlanets('')
    })
  }

  return (
    <CommonScrollView>
      { miners?.map(miner => <MinerCard miner={miner} planets={planets} key={miner._id} />) }
    </CommonScrollView>
  )
}

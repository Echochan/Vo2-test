import Taro, { useLoad, useRouter } from '@tarojs/taro'
import { Input, View, Button, Text } from '@tarojs/components'
import { useState } from 'react'

import CommonScrollView from '@/components/CommonScrollView'
import TopBackBar from '@/components/TopBackBar'
import CountInput from '@/components/CountInput'

import { createMinerApi, getPlanetApi} from '@/services/apis'
import { asyncFunctionErrorCapture } from '@/utils'
import { setGlobaldata } from '@/global.data'

import './index.scss'

export default function CreateMiner() {
  const { params: {planetId, planetName, planetMinerals}} = useRouter()
  const [miner, setMiner] = useState({
    planet: planetId,
    target: planetId,
    name: '',
    carryCapacity: '1',
    travelSpeed: '1',
    miningSpeed: '1',
  })

  const [planet, setPlanet] = useState<IPlanet>()
  useLoad(async () => {
    const {res: planet} = await asyncFunctionErrorCapture(getPlanetApi, planetId)
    setPlanet(planet)
  })

  // 0  valid 
  // 1  empty
  // 2  unvalid value  
  const [checkNameFail, setCheckNameFail] = useState(0)
  // const [checkPlanetFail, setCheckPlanetFail] = useState(0)
  const [checkCarryCapacityFail, setCheckCarryCapacityFail] = useState(0)
  const [checkTravelSpeedFail, setCheckTravelSpeedFail] = useState(0)
  const [checkminingSpeedFail, setCheckminingSpeedFail] = useState(0)

  const checkInput = () => {
    let { name, planet, carryCapacity, travelSpeed, miningSpeed } = miner
    name = name.trim()
    carryCapacity = carryCapacity.trim()
    travelSpeed = travelSpeed.trim()
    miningSpeed = miningSpeed.trim()

    let failCount = 0

    if (name === '') {
      failCount++
      setCheckNameFail(1)
    } else {
      setCheckNameFail(0)
    }

    /* if (planet === '') {
      failCount++
      setCheckPlanetFail(1)
    } else {
      setCheckPlanetFail(0)
    } */

    if (carryCapacity === '') {
      failCount++
      setCheckCarryCapacityFail(1)
    } else if (isNaN(Number(carryCapacity)) || Number(carryCapacity) > 200 || Number(carryCapacity) < 1) {
      failCount++
      setCheckCarryCapacityFail(2)
    } else {
      setCheckCarryCapacityFail(0)
    }

    if (travelSpeed === '') {
      failCount++
      setCheckTravelSpeedFail(1)
    } else if (isNaN(Number(travelSpeed)) || Number(travelSpeed) > 200 || Number(travelSpeed) < 1) {
      failCount++
      setCheckTravelSpeedFail(2)
    } else {
      setCheckTravelSpeedFail(0)
    }

    if (miningSpeed === '') {
      failCount++
      setCheckminingSpeedFail(1)
    } else if (isNaN(Number(miningSpeed)) || Number(miningSpeed) > 200 || Number(miningSpeed) < 1) {
      failCount++
      setCheckminingSpeedFail(2)
    } else {
      setCheckminingSpeedFail(0)
    }
    return failCount === 0
  }

  const handleSubmit = async () => {
    
    if (checkInput()) {
      const data = {
        ...miner,
        angle: 0,
        status: 0,
        minerals: 0,
        targetType: 'Planet',
        x: planet?.position?.x,
        y: planet?.position?.y
      }
      const {res, err} = await asyncFunctionErrorCapture(createMinerApi, data)
      if(res) {
          setGlobaldata('createMinerSuccess', true)
          Taro.navigateBack()
      }
      if(err) {
        Taro.showToast({
          title: err._message || 'create miner fail',
          icon: 'none'
        })
      }
    }
  }

  const handleInput = ({ target }) => {
    miner[target.dataset.name] = target.value
  }

  const receiveInput = ({ count, name }) => {
    miner[name] = `${count}`
  }

  return (
    <>
      <TopBackBar className='create-miner-top-back-bar'>
        <View className={`'top-back-bar-first-line' ${Number(planetMinerals) < 1000 &&'top-back-bar-first-line__fail'}`}>Total: {planetMinerals}/1000</View>
        <View className='top-back-bar-second-line'>Create a miner</View>
        <View className='top-back-bar-third-line'>{planetName}</View>
      </TopBackBar>

      <CommonScrollView className='create-miner-page'>
        <View className='create-miner-form'>
          <View className='label flex-container'>
            <View>Name</View>
            {checkNameFail === 1 && <View className='label-warn-text'>name is required</View>}
            {checkNameFail === 2 && <View className='label-warn-text'>This name is already taken.</View>}
          </View>
          <Input className={ `'input' ${checkNameFail !== 0 && 'check-input-fail'}`} data-name='name' value={miner.name} onInput={handleInput}></Input>

          <View className='label flex-container'>
            <View>Planet</View>
          </View>
          <View className='planet-input'>
            <Input className='input ' disabled data-name='planet' value={planet?.name} onInput={handleInput}></Input>
            <Text className='vo-icon-arrow-down'></Text>
          </View>
          
          <View className='assign-point'>Assign Points</View>

          <View className='label flex-container'>
            <View>Carry Capacity</View>
            {checkCarryCapacityFail === 1 && <View className='label-warn-text'>carry capacity is required</View>}
            {checkCarryCapacityFail === 2 && <View className='label-warn-text'>from 1 to 200</View>}
          </View>
          <CountInput className={ `${checkCarryCapacityFail !== 0 && 'check-input-fail'}`}  name='carryCapacity' onInput={receiveInput} />

          <View className='label flex-container'>
            <View>Travel Speed</View>
            {checkTravelSpeedFail === 1 && <View className='label-warn-text'>travel speed is required</View>}
            {checkTravelSpeedFail === 2 && <View className='label-warn-text'>from 1 to 200</View>}
          </View>
          <CountInput className={ `${checkTravelSpeedFail !== 0 && 'check-input-fail'}`}  name='travelSpeed' onInput={receiveInput} />

          <View className='label flex-container'>
            <View>Mining Speed</View>
            {checkminingSpeedFail === 1 && <View className='label-warn-text'>Please input mining speed</View>}
            {checkminingSpeedFail === 2 && <View className='label-warn-text'>from 1 to 200</View>}
          </View>
          <CountInput className={ `${checkminingSpeedFail !== 0 && 'check-input-fail'}`}  name='miningSpeed' onInput={receiveInput} />

          <Button onClick={handleSubmit}>Save</Button>

        </View>
      </CommonScrollView>
    </>
  )
}
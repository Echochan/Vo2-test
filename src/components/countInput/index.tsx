
import { useState } from 'react'
import { View, Input} from '@tarojs/components'

import './index.scss'

export default function CountInput({name, onInput, className=''}) {
  const [count, setCount] = useState(1)

  const handleReduce = () => {
    if(count <= 1) return
    emitData(Number(count) - 1)
  }

  const handlePlus = () => {
    if(count >= 200) return
    emitData(Number(count) + 1)
  }

  const handleInputCount = (event) => {
    emitData(event.target.value)
  }
  const emitData = (count) => {
    setCount(count)
    onInput({count, name})
  }
  return(
    <View className={`'count-input flex-container' ${className}`}>
      <View className='count-input-reduce vo-icon-reduce' onClick={handleReduce}></View>
      <Input type='number' name={name} value={`${count}`} onInput={handleInputCount}/>
      <View className='count-input-plus' onClick={handlePlus}>+</View>
    </View>
  )
}
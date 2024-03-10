
import { useLaunch, useLoad } from '@tarojs/taro'
import { PropsWithChildren, useContext } from 'react'
import VoSocket, { socketUrl } from '@/services/websocket'

import { setGlobaldata } from './global.data'

import './app.scss'

function App({ children }: PropsWithChildren<any>) {
  useLaunch(() => {
    setGlobaldata('socket', new VoSocket(socketUrl))
  })
  return children
}

export default App

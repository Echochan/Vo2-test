
import { useLaunch, useLoad } from '@tarojs/taro'
import { PropsWithChildren, useContext } from 'react'

import VoSocket from '@/services/websocket'
import { SOCKET_URL } from './services/config'
import { setGlobaldata } from './global.data'

import './app.scss'

function App({ children }: PropsWithChildren<any>) {
  useLaunch(() => {
    //create socket connection
    setGlobaldata('socket', new VoSocket(SOCKET_URL))
  })
  return children
}

export default App

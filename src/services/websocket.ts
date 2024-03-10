import io from './weapp.socket.io.js'

// i download the back-end code and run it locally
// and this socket can connect successfully 
// but when i use the remote url, the connection is fail
export const socketUrl =  'ws://localhost:3001'// 'wss://asteroids.dev.mediasia.cn'//

export default class VoSocket {
  socketTask: any
  url: string

  constructor(url) {
    this.url = url
    this.createConnection()
  }

  createConnection() {
    this.socketTask = io(this.url)
    this.socketTask.on('disconnect', this.disconnect)
  }

  receiveMessage(fn) {
    this.socketTask.on('tick', msg => fn(msg)) 
  }

  closeConnection() {
    this.socketTask.disconnect()
  }
  disconnect () {
    this.socketTask = null
  }
}

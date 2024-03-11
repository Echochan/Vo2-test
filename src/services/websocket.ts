import io from './weapp.socket.io.js'

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

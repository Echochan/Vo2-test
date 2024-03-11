import Taro from '@tarojs/taro'

type TMethod = 'GET' | 'PUT' | 'POST' | 'DELETE'

const HEDAER = {
  'content-type': 'application/json',
}

const TIMEOUT = 20000

export default class VORequest {
  sendRequest(url, method: TMethod = 'GET', data = '', header = HEDAER, timeout = TIMEOUT) {
    const reqeustParams = {
      url,
      method: method,
      data,
      header,
      timeout,
    }

    return new Promise<any>((resolve, reject) => {
      Taro.request({
        ...reqeustParams,
        success: async (res) => {
          if(res.data.errors) {
            reject(res.data)
          }else {
            resolve(res.data)
          }
        },
        fail: (err) => {
          reject(err)
        }
      })
    })
  }
  get(url, data?) {
    return this.sendRequest(url, 'GET', data)
  }

  post(url, data?) {
    return this.sendRequest(url, 'POST', data)
  }

  put(url, data?) {
    return this.sendRequest(url, 'PUT', data)
  }

  delete(url, data?) {
    return this.sendRequest(url, 'DELETE', data)
  }
}
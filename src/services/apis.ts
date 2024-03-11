import { SERVER_URL } from './config'
import VORequest from './requests'

const APIURLS = {
  MINER: `${SERVER_URL}/miners`,
  PLANET: `${SERVER_URL}/planets`,
  ASTEROID: `${SERVER_URL}/asteroids`,
  HISTORY: `${SERVER_URL}/history`,
}

const requestInstance = new VORequest()

// Miner apis
export const getMinersApi = () => {
  return requestInstance.get(`${APIURLS.MINER}?time=${Date.now()}`)
 }
 
 // Planet apis
 export const getPlanetsApi = () => {
   return requestInstance.get(`${APIURLS.PLANET}?time=${Date.now()}`)
 }
 
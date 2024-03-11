import { SERVER_URL } from '../utils/config'
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

export const getMinerApi = (id) => {
  return requestInstance.get(`${APIURLS.MINER}/${id}?time=${Date.now()}`)
}

export const createMinerApi = (data) => {
  return requestInstance.post(APIURLS.MINER, data)
}

// Planet apis
export const getPlanetsApi = () => {
  return requestInstance.get(`${APIURLS.PLANET}?time=${Date.now()}`)
}

export const getPlanetApi = (id) => {
  return requestInstance.get(`${APIURLS.PLANET}/${id}?time=${Date.now()}`)
}

// Asteroid apis
export const getAsteroidsApi = () => {
  return requestInstance.get(`${APIURLS.ASTEROID}?time=${Date.now()}`)
}

// History apis
export const getHistoriesApi = (minerId) => {
  return requestInstance.get(APIURLS.HISTORY, { time: Date.now(), minerId })
}
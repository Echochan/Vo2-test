/* miner status */
export enum EMinerStatus {
  'Idle',
  'Traveling',
  'Mining',
  'Transfering'
}

/* asteroid status */
export enum EAsteroidStatus {
  'depleted',
  'has minerals'
}

/*
  MINER_SPAWN_ON_PLANET: 1,
  TRAVELING_FROM_PLANET: 2,
  MINING_ASTEROID: 3,
  TRAVELING_BACK_FROM_ASTEROID: 4,
  TRANSFERRING_MINERALS_TO_PLANET: 5 
*/
export enum EHistoryStatus {
  'Miner spawn on planet' = 1, 
  'Traveling to asteroid',
  'Mining asteroid',
  'Traveling back to planet',
  'Transfering to planet'
}
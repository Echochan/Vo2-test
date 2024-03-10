interface IMiner {
  _id?: string
  name: string
  planet: string
  x: number
  y: number
  angle: number
  carryCapacity: number
  travelSpeed: number
  miningSpeed: number
  status: number
  minerals: number
  target: string
  targetType: string
}

interface IAsteroid {
  _id?: string
  position: {
    x: number
    y: number
  }
  _id: string
  name: string
  minerals: number
  status: number
  currentMiner: string | null
}


interface IPlanet {
  _id?: string
  position: {
    x: number
    y: number
  }
  name: string
  minerals: number
  miners: number
}

interface IHistory {
  _id?: string
  capacity: {
    current: number
    max: number
  }
  speed: {
    travel: number
    mining: number
  }
  position: {
    x: number
    y: number
  }
  year: number
  planet: string
  status: number
  miner: string
  createdAt: string
  updatedAt: string
}
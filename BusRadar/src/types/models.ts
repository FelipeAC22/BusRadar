// interfaces para representar a localização, as paradas, os onibus e as rotas //

export interface Location {
    latitude: number
    longitude: number
}

export interface Stop {
    id: string 
    name: string
    address: string
    location: Location
}

/* por mais que os id's costumem ser numeros, 
achei melhor representa-los como strings 
para caso de mudança de representação */

export interface Bus {
    id: string
    line: string
    destination: string
    location: Location
    nextStopId: string
    status: 'Moving' | 'Stopped' | 'Traffic'
    heading: number // graus
}

export interface RouteSegment {
    from: Location
    to: Location
    color: string
    etaMinutes: number
    distanceKm: number
}


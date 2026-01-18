export interface Location {
    latitude: number;
    longitude: number;
}

export interface Stop {
    id: string;
    name: string;
    address: string;
    location: Location
}

export interface Bus {
    id: string;
    line: string;
    destination: string;
    location: Location;
    nextStopId: string;
    status: 'Movendo' | 'Parado' | 'Trafego';
    heading: number // 0-360 graus
}

export interface RouteSegment {
    from: Location;
    to: Location;
    color: string;
    etaMinutes: number;
    distanceKm: number
}

export interface Card {
    id: string;
    name: string;
    type: string;
    balance?: string;
    activeUntil?: string;
    color?: string
}

export interface User {
    id: string;
    name: string;
    email: string;
    rating: number
}

import type { PlayerColors } from './interfaces'

export const DEFAULT_PLAYERS_COUNT = 3
export const DEFAULT_POINTS_TO_WIN = 35
export const MAX_PLAYERS = 6
export const MIN_PLAYERS = 3
export const MAX_POINTS_TO_WIN = 90
export const MIN_POINTS_TO_WIN = 10

export const colors: PlayerColors[] = [
  { main: '#D16FFF', additional: '#B14BE1' },
  { main: '#91CEE2', additional: '#64ABC2' },
  { main: '#3A73E3', additional: '#3A73E3' },
  { main: '#D34444', additional: '#B21C25' },
  { main: '#56B79C', additional: '#3C997F' },
  { main: '#F19648', additional: '#D27A2E' }
]

export const avatars = ['lama', 'sloth', 'frog', 'zebra', 'elephant', 'cougar']

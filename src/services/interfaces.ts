export interface CreatePlayerRequest {
  game?: number | null
  avatar: string
  status?: 'NR' | 'RD'
  points?: number
}

export interface Player {
  id: number
  game?: number | null
  avatar: string
  status?: 'NR' | 'RD'
  points?: number
}

export interface PlayerInfo {
  avatar: string
  color: PlayerColors
  isReady: boolean
  score: number
}

export type PlayerColors = {
  main: string
  additional: string
}

export interface CreateGameRequest {
  creator: number
  deck: string
  members_num: number
  points_to_win: number
  status?: 'WT' | 'PL' | 'FN'
}

export interface Game {
  id: number
  creator: number
  deck: string
  members_num: number
  points_to_win: number
  status?: 'WT' | 'PL' | 'FN'
}

export interface Deck {
  id: number
  name: string
}

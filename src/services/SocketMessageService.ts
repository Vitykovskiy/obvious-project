import type { Player } from './interfaces'

export enum MessageTypes {
  GameReadyStatusMessage = 'get-ready-status-message',
  StartRoundMessage = 'start-round-message',
  AssociationMessage = 'associatiob-message',
  SelectLeaderCardMessage = 'select-leader-card-message',
  ResultRoundMessage = 'result-round-message'
}

export interface Member {
  id: number
  avatar: string
  status: 'RD' | 'NR'
  points: number
}

class SocketMessageService {
  private typeCheckers = [
    {
      type: MessageTypes.GameReadyStatusMessage,
      checker: this.isGameReadyStatusMessage
    },
    {
      type: MessageTypes.StartRoundMessage,
      checker: this.isStartRoundMessage
    },
    {
      type: MessageTypes.AssociationMessage,
      checker: this.isAssociationMessage
    },
    {
      type: MessageTypes.SelectLeaderCardMessage,
      checker: this.isSelectLeaderCardMessage
    },
    {
      type: MessageTypes.ResultRoundMessage,
      checker: this.isResultRoundMessage
    }
  ]

  isGameReadyStatusMessage(message: any): boolean {
    return 'isReadyToPlay' in message && 'members' in message
  }

  isStartRoundMessage(message: any): boolean {
    return (
      'game_status' in message &&
      'leader_id' in message &&
      'player_cards' in message &&
      'players' in message
    )
  }

  isAssociationMessage(message: any): boolean {
    return 'association_text' in message && 'association_card' in message
  }

  isSelectLeaderCardMessage(message: any): boolean {
    return 'your_card' in message && 'placeCards' in message
  }

  isResultRoundMessage(message: any): boolean {
    return (
      'who_chose_youc_cards' in message &&
      'points_for_round' in message &&
      'all_points' in message &&
      'guess_right' in message
    )
  }

  getMessageType(message: any): MessageTypes | null {
    for (const { type, checker } of this.typeCheckers) {
      if (checker(message)) {
        return type
      }
    }
    return null
  }

  convertMembersToPlayers(members: any): Player[] {
    const membersIds = Object.keys(members)
    return membersIds.map((id) => {
      return { id: id, ...members[id] } as Player
    })
  }
}

export const socketMessage = new SocketMessageService()

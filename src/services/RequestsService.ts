class RequestService {
  private url = 'https://game.ataman-club.ru/'
  private socketUrl = 'wss://game.ataman-club.ru/ws/game/'

  private socket: WebSocket | null = null

  public getSocket(): WebSocket {
    if (!this.socket) {
      throw Error('WebSocket is closed')
    }
    return this.socket
  }

  public connect(gameId: string, playerId: string): WebSocket {
    if (this.socket) {
      this.socket.close()
    }

    this.socket = new WebSocket(`${this.socketUrl}${gameId}/${playerId}/`)

    return this.socket
  }

  public disconnect(): void {
    if (this.socket) {
      this.socket.close()
      this.socket = null
    }
  }

  public emitMessage(message: any): void {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify(message))
    }
  }

  public async get(endpoint: string): Promise<void> {
    try {
      const response = await fetch(this.url + endpoint, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (!response.ok) throw new Error('GET response was not ok.')
      const data = await response.json()
      return data
    } catch (error) {
      console.error('Get request error:', error)
    }
  }

  public async post(endpoint: string, body: any): Promise<any> {
    try {
      const response = await fetch(this.url + endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })

      if (!response.ok) throw new Error('POST response was not ok.')
      const data = await response.json()
      return data
    } catch (error) {
      console.error('POST request error:', error)
      return null
    }
  }

  public async put(endpoint: string, body: any): Promise<void> {
    try {
      const response = await fetch(this.url + endpoint, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })

      if (!response.ok) throw new Error('PUT response was not ok.')
      const data = await response.json()
      return data
    } catch (error) {
      console.error('PUT request error:', error)
    }
  }
}

export const requestService = new RequestService()

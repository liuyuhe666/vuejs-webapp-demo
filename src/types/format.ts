import client from '@/api/client'
import { ApiFormat } from '@/constant'

export default class Format {
  id: number
  name: string

  constructor()
  constructor(id?: number, name?: string) {
    this.id = id ?? 0
    this.name = name ?? ''
  }

  public getFormats(success: (data: Format[]) => void): void {
    client.get<Format[]>(ApiFormat).then((res) => {
      if (success) success(res.data)
    })
  }
}

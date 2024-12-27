import client from '@/api/client'
import { ApiCategory } from '@/constant'

export default class Category {
  id: number
  name: string

  constructor()
  constructor(id?: number, name?: string) {
    this.id = id ?? 0
    this.name = name ?? ''
  }

  public getCategories(success: (data: Category[]) => void): void {
    client.get<Category[]>(ApiCategory).then((res) => {
      if (success) success(res.data)
    })
  }
}

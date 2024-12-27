import client from '@/api/client'
import { apiAuth } from '@/constant'

interface Authority {
  id: number
  name: string
}

export default class Account {
  id: number
  name: string
  authority_id: number
  authority: Authority

  constructor()
  constructor(id?: number, name?: string, authority_id?: number, authority?: Authority) {
    this.id = id ?? 0
    this.name = name ?? ''
    this.authority_id = authority_id ?? 0
    const auth: Authority = { id: 0, name: '' }
    this.authority = authority ?? auth
  }

  public getLoginStatus(success: (data: boolean) => void, failure: (err: any) => void): void {
    client
      .get<boolean>(apiAuth.LoginStatus)
      .then((res) => {
        if (success) success(res.data)
      })
      .catch((err) => {
        if (failure) failure(err)
      })
  }

  public getLoginAccount(success: (data: Account) => void): void {
    client.get<Account>(apiAuth.LoginAccount).then((res) => {
      if (success) success(res.data)
    })
  }

  public login(params: {}, success: (data: Account) => void, failure: (err: any) => void): void {
    client
      .post<Account>(apiAuth.Login, params)
      .then((res) => {
        if (success) success(res.data)
      })
      .catch((err) => {
        if (failure) failure(err)
      })
  }

  public logout(success: () => void): void {
    client.post<String>(apiAuth.Logout).then(success)
  }
}

import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { IAuth } from '~/models'
import { $axios } from '@/utils/nuxt-instance'

@Module({ name: 'auth', stateFactory: true, namespaced: true })
export default class Authentication extends VuexModule {
  private token = ''

  public get $token() {
    return this.token
  }

  @Mutation
  private SET_TOKEN(token: string) {
    this.token = token
  }

  @Action
  public async handleSubmitLogin({ email, password }: IAuth) {
    const token = await $axios.$post(`/login`, {
      email,
      password
    })
    this.context.commit('SET_TOKEN', token)
  }
}

/*
{
    "email": "caty@cataline.io",
    "password": "abc123"
}
*/

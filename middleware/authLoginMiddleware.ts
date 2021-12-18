import { Middleware } from '@nuxt/types'

const authLoginMiddleware: Middleware = ({ app, redirect }) => {
  const cookie = app.$cookies.get('ibook.token')
  if (cookie) {
    redirect({name: 'dashboard'})
  }
}

export default authLoginMiddleware

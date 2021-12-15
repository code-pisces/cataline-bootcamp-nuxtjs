import { Middleware } from '@nuxt/types'

const authDashboardMiddleware: Middleware = ({ app, redirect }) => {
  const cookie = app.$cookies.get('ibook.token')
  if (!cookie) {
    redirect({name: 'login'})
  }
}

export default authDashboardMiddleware

<template>
  <div class="form">
    <div>
      <p>Bem-vindo(a) ao Dashboard</p>
      <h2>Entre na sua conta</h2>
    </div>

    <form @submit.once.prevent="onSubmit">
      <div>
        <input type="email" placeholder="E-mail" v-model="user.email" />
        <input type="password" placeholder="Senha" v-model="user.password" />
      </div>

      <button type="submit">Entrar</button>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { auth } from '@/store'

export default Vue.extend({
  data() {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },

  methods: {
    async onSubmit() {
      await auth
        .handleSubmitLogin({
          email: this.user.email,
          password: this.user.password
        })
        .then(() =>
          this.$cookies.set('ibook.token', auth.$token, {
            maxAge: 60 * 60 * 24 * 7
          })
        )
      this.$router.push({ name: 'dashboard' })
    }
  }
})
</script>

<style lang="scss" scoped>
.form {
  display: grid;
  color: #fff;
  gap: 75px;

  > div {
    h2 {
      padding-top: 9px;
    }
  }

  form {
    display: grid;
    gap: 55px;

    > div {
      display: grid;
      gap: 14px;

      input {
        width: 100%;
        height: 47px;
        border: 1px solid #f7f7f7;
        color: #fff;
        border-radius: 24px;
        padding: 20px;
        background: transparent;
        transition: all 300ms ease;

        &:focus,
        &:hover {
          border: 2px solid #f7f7f7;
        }
      }
    }

    button {
      width: 100%;
      height: 47px;
      border-radius: 24px;
      background: #fff;
      transition: all 300ms ease;
      color: #292929;
      font-weight: bold;
      cursor: pointer;
      &:hover {
        filter: brightness(0.9);
      }
    }
  }
}
</style>

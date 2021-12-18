<template>
  <div class="dashboard-content">
    <div>
      <img src="@/assets/img/dashboard.svg" alt="Dashboard" />
      <PageTitle text="Você está no" strong="Dashboard" />
    </div>

    <button @click="logOut" class="logout-button">Logout</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  methods: {
    logOut() {
      this.$cookies.remove('ibook.token')
      this.$router.push({ name: 'login' })
    }
  }
})
</script>

<style lang="scss" scoped>
@mixin align {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.dashboard-content {
  @include align;
  gap: 60px;

  > div {
    @include align;
    gap: 40px;
  }

  .logout-button {
    padding: 5px 15px;
    background: #292929;
    color: #fff;
    cursor: pointer;
    transition: all 300ms ease;

    &:hover {
      filter: brightness(1.2);
    }
  }
}
</style>

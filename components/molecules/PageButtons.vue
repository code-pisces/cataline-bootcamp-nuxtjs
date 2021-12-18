<template>
  <div class="page-buttons">
    <button @click.prevent="prevPage" class="page-buttons__item">
      <img src="@/assets/img/arrow.svg" alt="Voltar" />
    </button>
    <button @click.prevent="nextPage" class="page-buttons__item">
      <img src="@/assets/img/arrow.svg" alt="Prosseguir" />
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    prevPage: {
      type: () => {},
      required: true
    },
    nextPage: {
      type: () => {},
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
.page-buttons {
  display: flex;
  width: 100%;
  justify-content: flex-end;
  gap: 4px;

  &__item {
    cursor: pointer;
    width: 44px;
    height: 33px;
    background: #292929;
    display: grid;
    align-items: center;
    justify-content: center;

    &:last-of-type {
      img {
        transform: rotate(180deg);
      }
    }
  }
}
</style>

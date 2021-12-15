<template>
  <div class="error-layout">
    <div>
      <img src="@/assets/img/404.svg" alt="Erro Not Found" />

      <p>A página que você está procurando não existe ou foi removida</p>

      <NuxtLink to="/">
        <button>Voltar para Home</button>
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.error-layout {
  position: absolute;
  width: 100%;
  height: 100vh;
  display: grid;
  align-items: center;
  justify-content: center;
  background: color(dark, darkest);

  button {
    padding: 5px 13px;
    cursor: pointer;
    font-size: 18px;
  }

  p {
    width: 50%;
    color: color(light);
    margin: auto;
    line-height: 2rem;
  }

  > div {
    display: grid;
    gap: 75px;
    justify-content: center;
    align-content: center;
    align-items: center;
    text-align: center;
  }
}
</style>

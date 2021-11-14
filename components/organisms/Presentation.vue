<template>
  <div class="presentation">
    <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus consectetur possimus reiciendis rerum unde ut repellat animi, sed error corporis mollitia et blanditiis voluptas, temporibus nobis neque odit minus similique?
    Inventore dignissimos cupiditate similique facilis veritatis, est animi expedita quisquam quibusdam porro optio quaerat at debitis iusto consequuntur, quos excepturi dolore sit illo reiciendis, quia ullam sed! Sapiente, nam aperiam?
    A hic nostrum sequi illo quo quidem, error minima adipisci dolorum. Atque ea ut perspiciatis maiores explicabo itaque cupiditate, eaque cum quas sed quo consequuntur fuga fugit veritatis ducimus! Sunt.
    Reiciendis quis, mollitia omnis explicabo nam atque praesentium, eos laudantium sed ipsum corrupti molestias similique asperiores, tempora vitae voluptatem odio. Reiciendis quis ipsum id recusandae modi odit reprehenderit cum iusto!
    </p>

    <img src="@/assets/img/presentation.svg" alt="Apresentação do iBook">
  </div>
</template>

<style lang="scss" scoped>
.presentation {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  align-items: center;
  @include screen('small', 'medium') {
    grid-template-columns: 1fr;
  }
  p {
    line-height: 26px;
  }
  img {
    max-width: 100%;
  }
}
</style>

<template>
    <Carousel v-bind="settings" :breakpoints="breakpoints">
        <Slide v-for="slide in 12" :key="slide">
            <div class="carousel__item" v-for="card in categoryCards">
                <img :src="card.img" alt="">
            </div>
        </Slide>

        <template #addons>
            <Navigation />
        </template>
    </Carousel>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import { categoryCards } from '../data/data';
export default {
    name: 'CardsCarousel',
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
        categoryCards
    },
    data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: 'center',
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 3.5,
        snapAlign: 'center',
      },
      // 1024 and up
      1024: {
        itemsToShow: 5,
        snapAlign: 'start',
      },
    },
  }),
}

</script>

<style lang="scss" scoped></style>
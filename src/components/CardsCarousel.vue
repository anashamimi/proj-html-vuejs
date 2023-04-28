<template>
    <Carousel :itemsToShow="3.95" :wrapAround="true" :transition="500">
        <Slide v-for="slide in 12" :key="slide">
            <div>
                <div class="carousel__item">
                    <img class="img-fluid" src="../../public/images/blue_jacket_and_white_stripe_tee.jpg" alt="">
                </div>
                
            </div>
        </Slide>

        <template #addons>
      <Navigation />
    </template>
    </Carousel>
</template>

<script>

import { Carousel, Pagination, Slide, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { categoryCards } from '../data/data';
export default {
    name: 'CardsCarousel',
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation
    },
    data() {
        return {
            categoryCards,
        }
    }
}

</script>

<style lang="scss" scoped>
.carousel__slide {
    padding: 5px;
}

.carousel__viewport {
    perspective: 2000px;
}

.carousel__track {
    transform-style: preserve-3d;
}

.carousel__slide--sliding {
    transition: 0.5s;
}

.carousel__slide {
    opacity: 0.9;
    transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active~.carousel__slide {
    transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
    opacity: 1;
    transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
    opacity: 1;
    transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
    opacity: 1;
    transform: rotateY(0) scale(1.1);
}
</style>
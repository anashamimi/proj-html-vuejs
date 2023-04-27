<template>
    <div>
        <div v-for="(image, index) in images" :key="index" class="position-relative">
            <img class=" img-fluid" :src="image.url" :alt="image.title">
            <div class="position-absolute top-50 start-50 translate-middle text-white text-center">
                <p class="ah-title fw-bolder">{{ image.title }}</p>
                <p class="text-uppercase fs-3 pb-5">{{ image.secondTitle }}</p>
                <div class="d-flex align-items-center justify-content-center gap-4">
                    <button class="ah-button text-uppercase">{{ image.button1 }}</button>
                    <button class="ah-button text-uppercase">{{ image.button2 }}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { images } from '../data/data';
export default {
    name: 'Carousel',
    data() {
        return {
            images,
            currentIndex: 0
        }
    },
    methods: {
    }
}

</script>

<style lang="scss" scoped>
.ah-title{
    font-size: 5rem;
}

.ah-button{
    background-color: rgba(255, 255, 255, 0.2);
    border: 2px solid var(--white);
    color: var(--white);
    padding: 0.5rem 2rem;
    border-radius: 25px;
    transition: background-color 0.5s;
    &:hover{
        background-color: transparent;
    }
}
</style>
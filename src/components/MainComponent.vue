<template>
    <Carousel />
    <SectionTitle :title="'Featured Products'" :subTitle="'Must have products from our top sellers'"/>
    <Category/>
    <div class="d-flex">
        <div class="position-relative w-33" v-for="(element, index) in seasonsCollection">
            <img class="img-fluid" :src="element.img" :alt="element.title">
            <div class="position-absolute top-50 start-50 translate-middle text-white text-center">
                <h2 class=" fw-bolder fs-1 m-0">{{ element.title }}</h2>
                <p class="text-uppercase fs-5 letter-spacing py-4">{{ element.subTitle }}</p>
                <button class="ah-button text-uppercase">view more</button>
            </div>
        </div>       
    </div>

    <SectionTitle :title="'Best Seller'" :subTitle="'Must have products from our top sellers'"/>
    <div class="container">
      <CardsComponent/>  
    </div>
    

</template>

<script>
import Carousel from './Carousel.vue';
import SectionTitle from './SectionTitle.vue';
import Category from './Category.vue';
import CardsComponent from './CardsComponent.vue';
export default {
    name: 'MainComponent',
    components: {
        Carousel,
        SectionTitle,
        Category,
        CardsComponent
    },
    data() {
        return{
            seasonsCollection: [
                {
                    img: '../../public/images/winter_collection_bg.jpg',
                    title: 'Winter Collection',
                    subTitle: 'STYLISH AND WARM'
                },
                {
                    img: '../../public/images/spring_collection_bg.jpg',
                    title: 'Spring Collection',
                    subTitle: 'BRIGHT AND COLORFUL'
                },
                {
                    img: '../../public/images/autumn_collection_bg.jpg',
                    title: 'Autumn Collection',
                    subTitle: 'RICH AND COMFORTABLE'
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.w-33{
    width: calc(100% / 3);

    div{
        width: 100%;
    }
}

h2{
    font-family: 'Montserrat', sans-serif;
}

.letter-spacing{
    letter-spacing: 5px;
}
</style>
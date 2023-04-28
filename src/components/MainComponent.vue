<template>
    <Carousel />
    <SectionTitle :title="'Featured Products'" :subTitle="'Must have products from our top sellers'" />
    <Category />

    <div class="d-flex">
        <div class="position-relative w-33" v-for="(element, index) in seasonsCollection">
            <img class="img-fluid" :src="element.img" :alt="element.title">
            <div class="img-hover w-100 h-100"></div>
            <div class="position-absolute top-50 start-50 translate-middle text-white text-center">
                <h2 class=" fw-bolder fs-1 m-0">{{ element.title }}</h2>
                <p class="text-uppercase fs-5 letter-spacing py-4">{{ element.subTitle }}</p>
                <button class="ah-button text-uppercase">view more</button>
            </div>
        </div>
    </div>

    <SectionTitle :title="'Best Seller'" :subTitle="'Must have products from our top sellers'" />
    <div class="container">
        <CardsCarousel />
    </div>

    <div class="bg-img">
        <div class="container">
            <div class="row ">
                <BigImage v-for="promo in promoImage" :image="promo.url" :title="promo.title"
                    :description="promo.description" />
            </div>
        </div>
    </div>

    <SectionTitle :title="'New Arrivals'" :subTitle="'Brand new products from top designers'" />
    <CardsCarousel />
    <Testimonials v-for="testimonial in testimonials" :profile="testimonial.img" :name="testimonial.name"
        :description="testimonial.description" />

    <SectionTitle :title="'From Our Blog'" :subTitle="'The latest Classic Shop news'" />
    <div class="container">
        <div class="row">
            <CardZoom v-for="post in posts" :image="post.image" :title="post.title" :description="post.description"
            :comments="post.comments" :date="post.date"/>
        </div>
    </div>
</template>

<script>
import Carousel from './Carousel.vue';
import SectionTitle from './SectionTitle.vue';
import Category from './Category.vue';
import CardsCarousel from './CardsCarousel.vue';
import BigImage from './BigImage.vue';
import Testimonials from './Testimonials.vue';
import CardZoom from './CardZoom.vue';
export default {
    name: 'MainComponent',
    components: {
        Carousel,
        SectionTitle,
        Category,
        CardsCarousel,
        BigImage,
        Testimonials,
        CardZoom
    },
    data() {
        return {
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
            ],

            promoImage: [
                {
                    url: '../../public/images/promo_box_1_bg.jpg',
                    title: '70% Off',
                    description: 'Vivamus tempor leo lacus, feugiatut magna aliquam erat.'
                },
                {
                    url: '../../public/images/promo_box_2_bg.jpg',
                    title: 'Free Shipping',
                    description: 'Vivamus tempor leo lacus, feugiatut magna aliquam erat.'
                }
            ],

            testimonials: [
                {
                    img: '../../public/images/man_testimonial.png',
                    description: 'Curabitur non tristique tortor. Vestibulum aliquet suscipit ipsum in volutpat. Donec vel lacinia sem, vitae semper nulla. In hac habitasse platea dictumst. Mauris consectetur est et nibh sadip hendrerit bibendum.',
                    name: 'Darío Pineda'
                }
            ],

            posts: [
                {
                    image: '../../public/images/post_img_12-700x441.jpg',
                    title: 'Aenean lobortis sapien enim viverra',
                    date: 'September 9th, 2015',
                    comments: 0,
                    description: 'Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla,'
                },
                {
                    image: '../../public/images/post_img_11-700x441.jpg',
                    title: 'Duis ac massa semper maximus',
                    date: 'September 9th, 2015',
                    comments: 0,
                    description: 'Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla,'
                },
                {
                    image: '../../public/images/post_img_10-700x441.jpg',
                    title: 'Nunc fermint nulla eu justo sem id',
                    date: 'September 9th, 2015',
                    comments: 0,
                    description: 'Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla,'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.w-33 {
    width: calc(100% / 3);

    div.position-absolute {
        width: 100%;
    }

    img {
        backface-visibility: hidden;

        &:hover .img-hover {
            transition: .5s ease;
            opacity: 0;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            text-align: center;
        }
    }
}

h2 {
    font-family: 'Montserrat', sans-serif;
}

.letter-spacing {
    letter-spacing: 5px;
}

.bg-img {
    margin: 5rem 0;
    background-image: url('../../public/images/bkgd_confetti-compressor.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 500px;
}
</style>
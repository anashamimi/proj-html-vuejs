<template>
    <Carousel />
    <SectionTitle :title="'Featured Products'" :subTitle="'Must have products from our top sellers'"/>
    <Category/>
</template>

<script>
import Carousel from './Carousel.vue';
import SectionTitle from './SectionTitle.vue';
import Category from './Category.vue';
export default {
    name: 'MainComponent',
    components: {
        Carousel,
        SectionTitle,
        Category
    }
}
</script>

<style lang="scss" scoped>

</style>
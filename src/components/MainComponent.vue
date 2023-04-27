<template>
    <Carousel />
    <SectionTitle :title="'Featured Products'" :subTitle="'Must have products from our top sellers'"/>
    
</template>

<script>
import Carousel from './Carousel.vue';
import SectionTitle from './SectionTitle.vue';
export default {
    name: 'MainComponent',
    components: {
        Carousel,
        SectionTitle
    }
}
</script>

<style lang="scss" scoped>

</style>
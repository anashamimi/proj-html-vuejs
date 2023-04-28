<template>
    <div class="col-6 position-relative">
        <img class="img-fluid py-5 px-2" :src="image" :alt="title">
        <div class="position-absolute top-50 translate-middle-y p-5 text-white ah-width">
            <p class="montserrat fs-1 fw-bolder">{{ title }}</p>
            <p class="py-3">{{ description }}</p>
            <button class="ah-button text-uppercase">view more</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'BigImage',
        props: ['image', 'title', 'description'],
    }
</script>

<style lang="scss" scoped>
.montserrat{
    font-family: 'Montserrat', sans-serif;
}

.ah-width{
    width: 60%;
}
</style>
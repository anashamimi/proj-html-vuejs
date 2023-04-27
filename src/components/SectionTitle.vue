<template>
    <div class="container py-5">
        <div class="d-flex align-items-center justify-content-between">
            <hr>
            <h2 class="text-center fw-bolder fs-1">{{ title }}</h2>
            <hr>
        </div>
        <p class="text-center">{{ subTitle }}</p>
    </div>
</template>

<script>
    export default {
        name: 'SectionTitle',
        props: ['title', 'subTitle'],
    }
</script>

<style lang="scss" scoped>
hr {
    color: var(--grey);
    width: calc(100% / 2 - 200px);
}

h2{
    font-family: 'Montserrat', sans-serif;
}
</style>
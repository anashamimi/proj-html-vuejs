<template>
    <div class="testimonial-bg d-flex flex-column align-items-center justify-content-center my-5 text-center text-white">
        <img :src="profile" :alt="name">
        <p class="fst-italic py-3">{{ description }}</p>
        <p class=" fs-5"><span class=" fw-bolder">{{ name }}</span>, Theme Fusion</p>
    </div>
</template>

<script>
export default {
    name: 'Testimonials',
    props: ['profile', 'description', 'name']
}
</script>

<style lang="scss" scoped>
.testimonial-bg{
    background-image: url('../../public/images/testimonials_home_1_bg.jpg');
    background-size: cover;
    height: 500px;
    padding: 0 300px;

    p{
        font-size: 17px;
    }

    p:first-of-type{
        letter-spacing: 2px;
    }
}
</style>
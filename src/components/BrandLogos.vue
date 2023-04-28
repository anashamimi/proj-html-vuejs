<template>
    <div class="bg-grey">
        <p class="text-uppercase text-center p-5 fs-5 fw-lighter text-grey">brand logos</p>
        <div class="d-flex align-content-center justify-content-center pb-5" >
            <img v-for="brand in brands" class=" px-5" :src="brand.image" :alt="brand.name">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'BrandLogo',
        data(){
            return{
                brands: [
                    {
                        image: '../../public/images/b_logotype_1.png',
                        name: 'b_logotype_1'
                    },

                    {
                        image: '../../public/images/b_logotype_2.png',
                        name: 'b_logotype_2'
                    },

                    {
                        image: '../../public/images/b_logotype_3.png',
                        name: 'b_logotype_3'
                    },

                    {
                        image: '../../public/images/b_logotype_4.png',
                        name: 'b_logotype_4'
                    },

                    {
                        image: '../../public/images/b_logotype_5.png',
                        name: 'b_logotype_5'
                    },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
.bg-grey{
    background-color: var(--bg-white);
}

.text-grey{
    color: var(--dark-grey);
}
</style>
<template>
    <BrandLogos/>
    <MailComponent/>
</template>

<script>
import BrandLogos from './BrandLogos.vue';
import MailComponent from './MailComponent.vue';
    export default {
        name: 'FooterComponent',
        components: {
            BrandLogos,
            MailComponent,
        }
    }
</script>

<style lang="scss" scoped>

</style>
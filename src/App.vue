<template>
  <HeaderComponent/>
  <MainComponent/>
  <div class="w-100">
    <div class="border m-5"></div>
  </div>
  
  <FooterComponent/>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
  export default {
    name: 'App',
    components: {
      HeaderComponent,
      MainComponent,
      FooterComponent
    }
  }
</script>

<style lang="scss" scoped>

</style>
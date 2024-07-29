<template>
<NavbarComponent></NavbarComponent>
<BodyComponent></BodyComponent>
<FooterComponent></FooterComponent>

</template>


<script>
import NavbarComponent from './NavbarComponent.vue';
import BodyComponent from './BodyComponent.vue';
import FooterComponent from './FooterComponent.vue';


export default {
  name: 'AccueilComponent',
  components: {
    NavbarComponent,
    BodyComponent,
    FooterComponent
  }
}
</script>

<style scoped>

</style>
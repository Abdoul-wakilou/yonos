<template>
<NavbarComponent class="navbar"></NavbarComponent>
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
@media (max-width: 768px) {
  .navbar {
    z-index: 1000;
  }
}
</style>
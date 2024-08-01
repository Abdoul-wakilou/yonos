<template>
    <NavbarComponent class="navbar"></NavbarComponent>
</template>

<script>
import NavbarComponent from './NavbarComponent.vue';
  export default {
    name: "CalendrierComponent",
    components: {
      NavbarComponent,
    },
  };
  </script>
  
  <style scoped>

  
  @media (max-width: 768px) {
    .navbar {
        z-index: 1000;
    }
  }
  </style>
  
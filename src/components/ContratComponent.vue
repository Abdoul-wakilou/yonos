<template>
    <NavbarComponent class="navbar"></NavbarComponent>
  </template>
  
  <script>
  export default {
    name: 'ContratComponent',
  };
  </script>
  
  <style scoped>
    @media (max-width: 768px) {
      .navbar {
          z-index: 1000;
      }
    }
  </style>
<template>
    <NavbarComponent></NavbarComponent>
    <div class="row mt-5">
      <div class="col-lg-4">
        <div class="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci asperiores temporibus totam facilis eius deserunt sequi, maiores quam sunt molestias earum odit provident fugiat tempora distinctio quaerat quos? Accusamus, veritatis.
        </div>
      </div>
      <div class="col-lg-4">
        <div class="image">
          <img src="../assets/img/profil.png" class="img-fluid" alt="coach yonos">
        </div>
      </div>
    </div>
  </template>
  
  <script>
import NavbarComponent from './NavbarComponent.vue';

  export default {
    name: 'ContexteComponent',
    componets: {
      NavbarComponent,
    }
  };
  </script>
  
<style scoped>
.text{
  text-align: center;
}
</style>
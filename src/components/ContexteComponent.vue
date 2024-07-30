<template>
    <div>
    <NavbarComponent />
    <div class="container section-assurance">
      <div class="row align-items-center">
        <div class="col-md-6 text-container order-md-1">
          <h2 class="title">« L'assurance, c'est compliqué »</h2>
          <div class="content">
            <p>Après 15 années d'expérience dans l'assurance, je continue d'entendre cette phrase et je dois avouer que je fais le même constat que vous.</p>
            <p>En effet, comment choisir son assurance parmi près de 700 assureurs et plus de 40.000 distributeurs ? Pourquoi, il y'a toujours un proche qui paye moins cher que nous ? Pourquoi lors du sinistre les conditions sont difficiles à comprendre ? Comment savoir si je ne possède pas des doublons de garanties? Pourquoi la technologie n'est pas adaptée à notre quotidien ?</p>
            <p>Afin de trouver la solution qui réponde à toutes ces questions Je me suis nourris des échanges avec mes proches, mes clients et mes pairs. J'ai également effectué différentes recherches et surtout durant mon parcours professionnel, je me suis attelé à exercer dans différents secteurs de l'assurance.</p>
            <p>Après ces analyses, j'ai donc décidé de créer Mr Yonos, le coach des assurés.</p>
            <p><strong>Mon ambition est de devenir la référence pour gérer toutes vos assurances au même endroit en ayant des astuces à porter de main.</strong></p>
            <p class="text-center"><strong>Le monde change et pourquoi pas l'assurance !</strong></p>
            <p class="signature">Pascal NOLLA</p>
          </div>
        </div>
        <div class="col-md-6 image-container order-md-2">
          <img src="../assets/img/profile.png" alt="Pascal Nolla">
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-12 text-center">
          <p>Pascal NOLLA - FOUNDER & CEO</p>
          <p>LinkedIn - Instagram - Twitter - TikTok</p>
        </div>
      </div>
    </div>
  </div>
  </template>
  
  <script>
import NavbarComponent from './NavbarComponent.vue';

  export default {
    name: 'ContexteComponent',
    components: {
      NavbarComponent,
    }
  };
  </script>
  
<style scoped>
.section-assurance {
  padding: 20px;
}
.section-assurance .image-container {
  text-align: center;
}
.section-assurance img {
  max-width: 100%;
  height: auto;
}
.section-assurance .text-container {
  text-align: left;
}
.section-assurance .title {
  font-style: italic;
  font-weight: bold;
}
.section-assurance .content p {
  font-style: italic;
}
.section-assurance .signature {
  text-align: center;
  font-size: 12px;
  font-weight: bold;
}
@media (max-width: 768px) {
  .section-assurance .text-container {
    order: 2;
  }
  .section-assurance .image-container {
    order: 1;
  }
}
</style>
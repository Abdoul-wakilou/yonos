<template>
    
      <NavbarComponent class="navbar"></NavbarComponent>
    
    <div class="container section-assurance">
      <div class="row align-items-center">
        <div class="col-md-9 col-sm-12  text-container order-md-1 order-2">
          <h2 class="title">« L'assurance, c'est compliqué »</h2>
          <div class="content">
            <p>Après 15 années d'expérience dans l'assurance, je continue d'entendre cette phrase et je dois avouer que je fais le même constat que vous.</p>
            <p>En effet, comment choisir son assurance parmi près de 700 assureurs et plus de 40.000 distributeurs ? Pourquoi, il y'a toujours un proche qui paye moins cher que nous ? Pourquoi lors du sinistre les conditions sont difficiles à comprendre ? Comment savoir si je ne possède pas des doublons de garanties? Pourquoi la technologie n'est pas adaptée à notre quotidien ?</p>
            <p>Afin de trouver la solution qui réponde à toutes ces questions Je me suis nourris des échanges avec mes proches, mes clients et mes pairs. J'ai également effectué différentes recherches et surtout durant mon parcours professionnel, je me suis attelé à exercer dans différents secteurs de l'assurance.</p>
            <p>Après ces analyses, j'ai donc décidé de créer <strong>Mr Yonos, le coach des assurés.</strong></p>
            <p><strong>Mon ambition est de devenir la référence pour gérer toutes vos assurances au même endroit en ayant des astuces à porter de main.</strong></p>
            <p class="text-center"><strong>Le monde change et pourquoi pas l'assurance !</strong></p>
            <p class="signature">Pascal NOLLA</p>
          </div>
        </div>
        <div class="col-md-3 col-sm-12 image-container order-md-2 order-1">
          <div class="image-wrapper">
            <img src="@/assets/img/profil-yonos.png" class="img-fluid" alt="Pascal Nolla">
            <div class="overlay">
              <p>Pascal NOLLA - FOUNDER & CEO <br>
              LinkedIn - Instagram - Twitter - TikTok</p>
            </div>
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
  padding: 5px;
  margin-top: 50px;
}
.section-assurance .image-container {
  text-align: center;
  position: relative;
}
.section-assurance .image-wrapper {
  position: relative;
  width: 226px;
  height: 302px;
}
.section-assurance img {
  max-width: 100%;
  height: 100%;
  display: block;
  text-align: center;
  position: relative;
  margin-left: 50px;
}
.section-assurance .overlay {
  position: absolute;
  background-color: #993399;
  color: white;
  text-align: center;
  width: 300px;
}
.section-assurance .overlay p {
  font-size: 14px;
  font-weight: bold;
  margin: 5px;
}
.section-assurance .text-container {
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 302px; /* Same height as image */
  text-align: center;

}
.section-assurance .title {
  font-style: italic;
  font-weight: bold;
}
.section-assurance .content p {
  font-style: italic;
  font-size: 14px;
}
.section-assurance .content .text-center {
  font-size: 18px;
}
.section-assurance .signature {
  text-align: right;
  font: normal normal normal 30px/35px SignPainter;
  margin-top: auto;
}
@media (max-width: 768px) {
  .navbar {
  z-index: 1000;
  }
  .section-assurance .text-container {
    order: 2;
    padding-top: 70px;
    margin: 2px;
    text-align: center;
  }
  .section-assurance .image-container {
    order: 1;
    text-align: center;
  }
  .section-assurance img {
  text-align: center;
  position: relative;
  margin-left: 70px;
}
.section-assurance .overlay {
  text-align: center;
  width: 300px;
  margin-left: 36px;
}
.section-assurance .title {
  font-size: 25px;
}
}
</style>
<template>
    <NavbarComponent class="navbar"></NavbarComponent>
    <div class="temoignage-section">
      <h2 class="section-title">Nos utilisateurs parlent de nous !</h2>
      <div class="temoignages">
        <div class="temoignage">
          <img src="../assets/img/temoignage1.png" class="img-fluid" alt="Témoignage 1">
          <p>« Estimation de votre besoin en assurance en de 2 minutes. Evolution de votre score selon votre situation personnelle ou professionnelle »</p>
          <p>Paul, utilisateur du programme confort</p>
        </div>
        <div class="temoignage">
          <img src="../assets/img/temoignage2.png" class="img-fluid" alt="Témoignage 2">
          <p>« Estimation de votre besoin en assurance en de 2 minutes. Evolution de votre score selon votre situation personnelle ou professionnelle »</p>
          <p>Paul, utilisateur du programme confort</p>
        </div>
        <div class="temoignage">
          <img src="../assets/img/temoignage3.png" class="img-fluid" alt="Témoignage 3">
          <p>« Estimation de votre besoin en assurance en de 2 minutes. Evolution de votre score selon votre situation personnelle ou professionnelle »</p>
          <p>Paul, utilisateur du programme confort</p>
        </div>
      </div>
      <button class="join-button">Rejoignez-nous</button>
    </div>
  </template>
  
  <script>
  import NavbarComponent from './NavbarComponent.vue';
  export default {
    name: 'TemoignageComponent',
    components: {
      NavbarComponent,
    }
  };
  </script>
  
  <style scoped>
  .temoignage-section {
    text-align: center;
    padding: 20px;
  }
  .section-title {
    color: #993399;
    text-align: center;
    margin-top: 40px;
    margin-bottom: 20px;
    font-weight: bold;
  }
  .temoignages {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  
  .temoignage {
    width: 30%;
    margin: 10px;
    font-size: 16px;
  }

  .join-button {
    background-color: #ffcc66;
    color: #993399;
    padding: 10px 20px;
    border-radius: 50px;
    cursor: pointer;
    border: 1px solid #ffcc66;
    width: 250px;
    height: 50px;
    font-weight: 100;
  }
  
  @media (max-width: 768px) {
    .temoignages {
      flex-direction: column;
      align-items: center;
    }
  
    .temoignage {
      width: 80%;
    }
  
    .navbar {
      z-index: 1000;
    }
  }
  </style>
  
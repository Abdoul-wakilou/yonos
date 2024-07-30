<template>
    <NavbarComponent class="navbar"></NavbarComponent>
<div class="container">
        <h2 class="section-title">Atteingez vos objectifs avec assurance</h2>
        <div class="row">
            <div class="col-lg-3">
                <div class="card card-custom">
                    <div class="card-body">
                        <div class="icon"><img src="../assets/img/loop.png" class="img-fluid img" alt=""></div>
                        <h5 class="card-title">Obtenir un diagnostic de votre situation</h5>
                        <p class="card-text">Vous trouvez en 2 minutes, toutes les assurances adaptées à votre profil grâce à notre assurance score.</p>
                        <router-link to="/assurrance" class="btn btn-custom">Trouver mes assurances</router-link>
                    </div>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="card card-custom">
                    <div class="card-body">
                        <div class="icon"><img src="../assets/img/tribunal.png" class="img-fluid img" alt=""></div>
                        <h5 class="card-title">Maîtriser mon budget en assurance</h5>
                        <p class="card-text">Vous choisissez un contrat selon votre budget, grâce à nos conseils pour vos devis et également lors de vos renouvellements.</p>
                        <router-link to="/devis" class="btn btn-custom">Effectuer un devis</router-link>
                    </div>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="card card-custom">
                    <div class="card-body">
                        <div class="icon"><img src="../assets/img/cloud.png" class="img-fluid img" alt=""></div>
                        <h5 class="card-title">Piloter mes contrats au même endroit</h5>
                        <p class="card-text">Vous réalisez vos démarches même en changeant d'assureur, grâce à la centralisation de vos contrats sur notre plateforme.</p>
                        <router-link to="/contrat" class="btn btn-custom">Confier mes contrats</router-link>
                    </div>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="card card-custom">
                    <div class="card-body">
                        <div class="icon"><img src="../assets/img/lampe.png" class="img-fluid img" alt=""></div>
                        <h5 class="card-title">Prendre les bonnes décisions</h5>
                        <p class="card-text">Vous obtenez des conseils pratiques pour apprendre à mieux gérer vos assurances, grâce à nos contenus pédagogiques.</p>
                        <router-link to="/comprendre-assurance" class="btn btn-custom">Comprendre l'assurance</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
import NavbarComponent from './NavbarComponent.vue';

  export default {
    name: 'ObjectifComponent',
    components: {
        NavbarComponent,
    }
  };
  </script>
  
  <style scoped>
  .section-title {
    color: #993399;
    text-align: center;
    margin-top: 40px;
    margin-bottom: 20px;
    font-weight: bold;
}
.card-custom {
    text-align: center;
    border: none;
}
.card-custom .card-body {
    padding: 20px;
}
.card-custom .card-body .card-text {
    font-size: 14px;
}
.btn-custom {
    background-color: #ffcc66;
    color: #993399;
    font-weight: bold;
    border: none;
    border-radius: 25px;
    padding: 10px 20px;
    width: 100%;
    font-size: 14px;
    margin-top: 30px;
    height: 100%;
}
.btn-custom:hover {
    background-color: #ffcc66;
    color: #fff;
}
.icon {
    font-size: 48px;
    color: #000;
    margin-bottom: 20px;
    width: auto;
    height: auto;
}
.icon .img {
    width: 330px;
    height: 110px;
}
@media (max-width: 768px) {
    .icon .img {
        width: auto;
        height: auto;
    }
    .btn-custom {
        width: 60%;
    }
    .navbar {
        z-index: 1000;
    }
}
.card-title {
    color: #993399;
    font-weight: bold;
}

</style>
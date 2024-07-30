<template>
    <NavbarComponent/>
<div class="container">
        <h2 class="section-title">Atteingez vos objectifs avec assurance</h2>
        <div class="row">
            <div class="col-lg-3">
                <div class="card card-custom">
                    <div class="card-body">
                        <div class="icon">&#128270;</div>
                        <h5 class="card-title">Obtenir un diagnostic de votre situation</h5>
                        <p class="card-text">Vous trouvez en 2 minutes, toutes les assurances adaptées à votre profil grâce à notre assurance score.</p>
                        <a href="#" class="btn btn-custom">Trouver mes assurances</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="card card-custom">
                    <div class="card-body">
                        <div class="icon">&#9878;</div>
                        <h5 class="card-title">Maîtriser mon budget en assurance</h5>
                        <p class="card-text">Vous choisissez un contrat selon votre budget, grâce à nos conseils pour vos devis et également lors de vos renouvellements.</p>
                        <a href="#" class="btn btn-custom">Effectuer un devis</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="card card-custom">
                    <div class="card-body">
                        <div class="icon">&#128257;</div>
                        <h5 class="card-title">Piloter mes contrats au même endroit</h5>
                        <p class="card-text">Vous réalisez vos démarches même en changeant d'assureur, grâce à la centralisation de vos contrats sur notre plateforme.</p>
                        <a href="#" class="btn btn-custom">Confier mes contrats</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="card card-custom">
                    <div class="card-body">
                        <div class="icon">&#128161;</div>
                        <h5 class="card-title">Prendre les bonnes décisions</h5>
                        <p class="card-text">Vous obtenez des conseils pratiques pour apprendre à mieux gérer vos assurances, grâce à nos contenus pédagogiques.</p>
                        <a href="#" class="btn btn-custom">Comprendre l'assurance</a>
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
    color: #a0418e;
    text-align: center;
    margin-top: 50px;
    margin-bottom: 50px;
}
.card-custom {
    text-align: center;
    border: none;
}
.card-custom .card-body {
    padding: 20px;
}
.btn-custom {
    background-color: #ffcc66;
    color: #a0418e;
    font-weight: bold;
    border: none;
    border-radius: 25px;
    padding: 10px 20px;
    width: 100%;
}
.btn-custom:hover {
    background-color: #ffb833;
    color: #fff;
}
.icon {
    font-size: 48px;
    color: #000;
    margin-bottom: 20px;
}
.card-title {
    color: #a0418e;
    font-weight: bold;
}
</style>
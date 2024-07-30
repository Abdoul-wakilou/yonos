<template>
  <NavbarComponent class="navbar"></NavbarComponent>
  <section class="formations">
    <div class="container">
      <h2 class="section-title">Augmentez vos connaissances en assurance</h2>
      <div class="row">
        <div class="col-md-3 col-sm-6" v-for="(formation, index) in formations" :key="index">
          <div class="card">
            <h5 class="card-title">{{ formation.title }}</h5>
            <img
              :src="formation.image"
              class="card-img-top"
              :alt="formation.title"
            />
            <div class="card-body">
              <a href="#" class="btn btn-warning">{{ formation.price }}€</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import NavbarComponent from "./NavbarComponent.vue";

export default {
  name: "FormationComponent",
  components: {
    NavbarComponent,
  },
  data() {
    return {
      formations: [
        { title: "Comprendre les concepts de base de l'assurance", image: require('../assets/img/formation.png'), price: 50 },
        { title: "Gérer et ajuster ses polices d'assurance", image: require('../assets/img/formation.png'), price: 50 },
        { title: "Reconnaître les fraudes et les abus", image: require('../assets/img/formation.png'), price: 50 },
        { title: "Identifier les différents types d'assurances", image: require('../assets/img/formation.png'), price: 50 },
        { title: "Savoir comment faire une réclamation", image: require('../assets/img/formation.png'), price: 50 },
        { title: "Utiliser les outils numériques d'assurance", image: require('../assets/img/formation.png'), price: 50 },
        { title: "Choisir la bonne police d'assurance", image: require('../assets/img/formation.png'), price: 50 },
        { title: "Identifier les différents types d'assurances", image: require('../assets/img/formation.png'), price: 50 }
      ]
    }
  }
};
</script>

<style scoped>
.formations {
  padding: 15px 0;
}
.section-title {
  text-align: center;
  color: #993399;
  padding: 10px 0;
  border-radius: 5px;
  margin-bottom: 30px;
  font-weight: bold;
}
.card {
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  margin-bottom: 30px;
}
.card-title {
  background-color: #993399;
  color: white;
  padding: 10px;
  text-align: center;
  margin: 0;
  font-size: 14px;
}
.card-img-top {
  width: 100%;
  height: auto;
}
.card-body {
  position: relative;
  text-align: center;
  padding: 10px 0;
}
.btn-warning {
  background-color: #ffcc66;
  border: none;
  border-radius: 20px;
  padding: 5px 20px;
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100px;
  font-weight: bold;
}
.card:hover {
  transform: translateY(-5px);
}
@media (max-width: 768px) {
  .navbar {
    z-index: 1000;
  }
  .section-title {
    font-size: 24px;
  }
}
</style>

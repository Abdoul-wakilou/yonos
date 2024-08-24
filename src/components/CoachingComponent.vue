<template>
  <NavbarComponent :cartCount="cartItemCount"></NavbarComponent>
  <section class="formations">
    <div class="container">
      <h2 class="section-title">Augmentez vos connaissances en assurance</h2>
      <div class="cards-container">
        <div class="card" v-for="(product, index) in products" :key="index" @mouseenter="hoverCard(index)"
          @mouseleave="leaveCard(index)">
          <p class="card-text">{{ product.name }}</p>
          <button class="add-button" v-show="hoveredCard === index || product.isAdded" @click="toggleProduct(index)">
            <i :class="product.isAdded ? 'fas fa-minus' : 'fas fa-plus'"></i>
          </button>
          <button class="card-button" :class="{ 'added': product.isAdded }" @click="toggleProduct(index)">
            {{ product.isAdded ? 'Déjà ajouté' : product.price + ' € pour 1 Heure' }}
          </button>
        </div>
      </div>
      <div v-if="isAnyProductAdded" class="continue-button-container">
        <button class="continue-button" @click="redirectToPanier">Continuer</button>
      </div>
    </div>
  </section>
</template>

<script>
import NavbarComponent from "./NavbarComponent.vue";

export default {
  name: "CoachingComponent",
  components: {
    NavbarComponent,
  },
  data() {
    return {
      hoveredCard: null,
      products: [
        { name: "Comprendre les concepts de base l’assurance", price: 50, isAdded: false },
        { name: "Gérer et ajuster ses polices d’assurance", price: 50, isAdded: false },
        { name: "Reconnaitre les fraudes et les abus", price: 50, isAdded: false },
        { name: "Savoir comment faire une réclamation", price: 50, isAdded: false },
        { name: "Utiliser les outils numériques d’assurance", price: 50, isAdded: false },
        { name: "Choisir la bonne police d’assurance", price: 50, isAdded: false },
      ],
      cartItemCount: 0,  // Ajout du compteur d'articles
    };
  },
  computed: {
    isAnyProductAdded() {
      return this.products.some(product => product.isAdded);
    }
  },
  watch: {
    isAnyProductAdded(newVal) {
      this.updateCartStatus(newVal); // Appel de la méthode pour mettre à jour le statut du panier
    }
  },
  methods: {
    hoverCard(index) {
      this.hoveredCard = index;
    },
    leaveCard() {
      this.hoveredCard = null;
    },
    toggleProduct(index) {
      this.products[index].isAdded = !this.products[index].isAdded;
      this.updateCartStatus();
    },
    updateCartStatus() {
      this.cartItemCount = this.products.filter(product => product.isAdded).length;
    },
    redirectToPanier() {
      this.$router.push('/panier');
    },
  }
};
</script>


<style scoped>
  .formations {
    padding: 15px 0;
  }

  .section-title {
    color: #993399;
    font-size: 30px;
    margin-block-end: 20px;
    font-weight: bold;
    text-align: center;
    padding: 20px;
    margin-block-start: 40px;
  }

  .cards-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }

  .card {
    flex: 1 1 calc(33.333% - 20px);
    position: relative;
    background-color: #e7e7e7;
    border-radius: 8px;
    padding: 20px;
    margin: auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    border: 2px solid #121212;
  }

  .add-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: #993399;
    color: white;
    border: none;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .add-button i {
    font-size: 18px;
  }

  .card-text {
    margin-bottom: 30px;
    font-weight: bold;
    font-size: 18px;
    padding: 10px;
  }

  .card-button {
    background-color: #ffcc66;
    color: #993399;
    padding: 10px 20px;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-weight: bold;
  }

  .card-button.added {
    background-color: #993399;
    color: white;
  }

  .continue-button-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }

  .continue-button {
    background-color: #ffcc66;
    color: #993399;
    padding: 15px 35px;
    border: none;
    border-radius: 25px;
    font-size: 14px;
    cursor: pointer;
    font-weight: bold;
  }


  @media (max-width: 768px) {
    .navbar {
      z-index: 1000;
    }

    .section-title {
      font-size: 24px;
    }

    .card {
      flex: 1 1 100%;
    }
  }
</style>
<template>
  <div>
    <NavbarComponent class="navbar"></NavbarComponent>
    <section class="assurance-section">
      <h2 class="section-title">Offrez-vous la solution adaptée à votre situation</h2>
      <div class="type-selection">
        <button :class="{'active': activeType === 'particulier'}" @click="setType('particulier')">Particulier</button>
        <button :class="{'active': activeType === 'professionnel'}" @click="setType('professionnel')">Professionnel</button>
        <button :class="{'active': activeType === 'entreprise'}" @click="setType('entreprise')">Entreprise/Association</button>
      </div>
      <div class="offers">
        <div class="offer-card" v-for="offer in offers[activeType]" :key="offer.title">
          <div class="offer-header">
            <h3>{{ offer.title }}</h3>
            <p class="price">{{ offer.price }}</p>
          </div>
          <p class="description">{{ offer.description }}</p>
          <div class="button-container">
            <button class="offer-button">{{ offer.buttonText }}</button>
          </div>
          <ul class="features">
            <li v-for="feature in offer.features" :key="feature.text">
              <span :class="{'included': feature.included, 'excluded': !feature.included}">
                <i v-if="feature.included" class="fas fa-check"></i>
                <i v-else class="fas fa-times"></i>
                {{ feature.text }}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import NavbarComponent from "./NavbarComponent.vue";

export default {
  name: 'AssuranceComponent',
  components: {
    NavbarComponent,
  },
  data() {
    return {
      activeType: 'particulier',
      offers: {
        particulier: [
          {
            title: 'Devis',
            price: '0 € / mois',
            description: 'Pour les assurés souhaitant les informations nécessaires pour souscrire en toute confiance.',
            buttonText: 'Offert',
            features: [
              { text: 'Diagnostic de votre situation', included: true },
              { text: 'Newsletter avec des astuces', included: true },
              { text: 'Devis (1 offert/an)', included: true },
              { text: 'Souscription', included: false },
              { text: 'Gestion de contrat', included: false },
              { text: 'Stockage de tous vos contrats', included: false },
              { text: 'Bilan annuel', included: false },
            ],
          },
          {
            title: 'Souscription',
            price: '3,99 € / mois',
            description: 'Pour les assurés souhaitant conserver le pilotage de leurs assurances.',
            buttonText: '30 jours offerts',
            features: [
              { text: 'Diagnostic de votre situation', included: true },
              { text: 'Newsletter avec des astuces', included: true },
              { text: 'Devis (2 offerts/an)', included: true },
              { text: 'Souscription (2 contrats/an)', included: true },
              { text: 'Gestion de contrat', included: true },
              { text: 'Stockage de tous vos contrats', included: false },
              { text: 'Bilan annuel', included: false },
            ],
          },
          {
            title: 'Gestion',
            price: '6,99 € / mois',
            description: 'Pour les assurés souhaitant confier toute la gestion de leurs assurances.',
            buttonText: '2 mois offerts',
            features: [
              { text: 'Diagnostic de votre situation', included: true },
              { text: 'Newsletter avec des astuces', included: true },
              { text: 'Devis', included: true },
              { text: 'Souscription', included: true },
              { text: 'Gestion de contrat', included: true },
              { text: 'Stockage de tous vos contrats', included: true },
              { text: 'Bilan annuel', included: true },
            ],
          },
        ],
        professionnel: [
          {
            title: 'Devis',
            price: '0 € / mois',
            description: 'Pour les assurés souhaitant les informations nécessaires pour souscrire en toute confiance.',
            buttonText: 'Offert',
            features: [
              { text: 'Diagnostic de votre situation', included: true },
              { text: 'Newsletter avec des astuces', included: true },
              { text: 'Devis (1 offert/an)', included: true },
              { text: 'Souscription', included: false },
              { text: 'Gestion de contrat', included: false },
              { text: 'Stockage de tous vos contrats', included: false },
              { text: 'Bilan annuel', included: false },
            ],
          },
          {
            title: 'Souscription',
            price: '6,99 € / mois',
            description: 'Pour les assurés souhaitant conserver le pilotage de leurs assurances.',
            buttonText: '30 jours offerts',
            features: [
              { text: 'Diagnostic de votre situation', included: true },
              { text: 'Newsletter avec des astuces', included: true },
              { text: 'Devis (2 offerts/an)', included: true },
              { text: 'Souscription (2 contrats/an)', included: true },
              { text: 'Gestion de contrat', included: true },
              { text: 'Stockage de tous vos contrats', included: false },
              { text: 'Bilan annuel', included: false },
            ],
          },
          {
            title: 'Gestion',
            price: '9,99 € / mois',
            description: 'Pour les assurés souhaitant confier toute la gestion de leurs assurances.',
            buttonText: '2 mois offerts',
            features: [
              { text: 'Diagnostic de votre situation', included: true },
              { text: 'Newsletter avec des astuces', included: true },
              { text: 'Devis', included: true },
              { text: 'Souscription', included: true },
              { text: 'Gestion de contrat', included: true },
              { text: 'Stockage de tous vos contrats', included: true },
              { text: 'Bilan annuel', included: true },
            ],
          },
        ],
        entreprise: [
          {
            title: 'Devis',
            price: '0 € / mois',
            description: 'Pour les assurés souhaitant les informations nécessaires pour souscrire en toute confiance.',
            buttonText: 'Offert',
            features: [
              { text: 'Diagnostic de votre situation', included: true },
              { text: 'Newsletter avec des astuces', included: true },
              { text: 'Devis (1 offert/an)', included: true },
              { text: 'Souscription', included: false },
              { text: 'Gestion de contrat', included: false },
              { text: 'Stockage de tous vos contrats', included: false },
              { text: 'Bilan annuel', included: false },
            ],
          },
          {
            title: 'Souscription',
            price: '9,99 € / mois',
            description: 'Pour les assurés souhaitant conserver le pilotage de leurs assurances.',
            buttonText: '30 jours offerts',
            features: [
              { text: 'Diagnostic de votre situation', included: true },
              { text: 'Newsletter avec des astuces', included: true },
              { text: 'Devis (2 offerts/an)', included: true },
              { text: 'Souscription (2 contrats/an)', included: true },
              { text: 'Gestion de contrat', included: true },
              { text: 'Stockage de tous vos contrats', included: false },
              { text: 'Bilan annuel', included: false },
            ],
          },
          {
            title: 'Gestion',
            price: '12,99 € / mois',
            description: 'Pour les assurés souhaitant confier toute la gestion de leurs assurances.',
            buttonText: '2 mois offerts',
            features: [
              { text: 'Diagnostic de votre situation', included: true },
              { text: 'Newsletter avec des astuces', included: true },
              { text: 'Devis', included: true },
              { text: 'Souscription', included: true },
              { text: 'Gestion de contrat', included: true },
              { text: 'Stockage de tous vos contrats', included: true },
              { text: 'Bilan annuel', included: true },
            ],
          },
        ],
      },
    };
  },
  methods: {
    setType(type) {
      this.activeType = type;
    },
  },
};
</script>

<style scoped>
.assurance-section {
  text-align: center;
  padding: 20px;
}

.section-title {
  color: #993399;
  font-size: 30px;
  margin-bottom: 20px;
  font-weight: bold;
  text-align: center;
}

.type-selection {
  display: flex;
  justify-content: center;
  background-color: black;
  border-radius: 50px;
  padding: 3px;
  margin-bottom: 20px;
  width: fit-content;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

.type-selection button {
  background-color: black;
  color: white;
  border: white;
  padding: 5px 10px;
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  border-radius: 50px;
  font-size: 14px;
}

.type-selection button.active {
  background-color: white;
  color: black;
}

.offers {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.offer-card {
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;
  width: 25%;
  margin: 5px;
  text-align: left;
  border: 1px solid #999;
}

.offer-card h3 {
  font-size: 18px;
  color: #000;
  font-weight: bold;
}

.offer-header {
  display: flex;
  justify-content: space-between;
  color: black;
  font-weight: bold;
}


.price {
  font-size: 16px;
  color: #000;
  font-weight: bold;
}

.description {
  font-size: 14px;
  color: rgb(102, 102, 94);
  margin: 10px 0;
}
.button-container {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.offer-button {
  background-color: #ffcc66;
  border: none;
  padding: 5px 10px;
  border-radius: 20px;
  color: #993399;
  cursor: pointer;
  text-align: center;
  font-size: 15px;
  width: 100%;
  font-weight: bold;
}

.features {
  list-style-type: none;
  padding: 0;
}

.features li {
  font-size: 14px;
  display: flex;
  align-items: center;
}

.features .included {
  color: black;
}

.features .excluded {
  color: #6c757d; /* couleur secondaire bootstrap */
}

@media (max-width: 768px) {
  .offers {
    flex-direction: column;
    align-items: center;
  }

  .offer-card {
    width: 80%;
  }

  .offer-header {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .navbar {
    z-index: 1000;
  }
}
</style>

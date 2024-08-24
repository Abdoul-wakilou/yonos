<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #993399; block-size: 100px;">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">
          <img src="../assets/img/logo-blanc.png" alt="Logo" style="block-size: 80px;">
        </router-link>
        <div class="collapse navbar-collapse justify-content-center">
          <span class="navbar-text text-white">
            Paiement Sécurisé
          </span>
        </div>
      </div>
    </nav>
    <div class="paiement-container">
      <div class="col-md-6 paiement">
        <h2 class="block-title">Paiement</h2>
        <div class="form-paiement">
          <form>
            <div class="form-group">
              <label for="prenom">Nom du titulaire de la carte</label>
              <div class="input-group">
                <input type="text" id="prenom" placeholder="Prénom" />
                <input type="text" id="nom" placeholder="Nom" />
              </div>
            </div>
            <div class="form-group">
              <label for="type">Type de carte de crédit</label>
              <div class="form-check type-carte">
                <input class="carte" style="display: inline-block;" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                <label class="form-check-label" style="display: inline-block;" for="flexRadioDefault2">
                  Carte de crédit
                </label>
              </div>
            </div>
            <div class="form-group">
              <label for="numero">Numéro de carte</label>
              <input type="text" class="" id="numero" placeholder="Numéro de carte" />
            </div>
            <div class="form-group">
              <div class="row info p-3">
                <div col-md-6 col-sm-6>
                  <label for="expiration">Date d’expiration</label>
                  <input type="text" id="expiration" placeholder="MM / AA" />
                </div>
                <div col-md-6 col-sm-6 ml-3>
                  <label for="cvc">Code de sécurité</label>
                  <input type="text" id="cvc" placeholder="CVC" />
                </div>
              </div>
            </div>
            <!-- <div class="form-group">
              <input type="checkbox" id="enregistrer" />
              <label for="enregistrer">Enregistrer votre carte</label>
            </div> -->
            <div class="form-check m-2">
              <input class="form-check-input enregistrer" type="checkbox" value="" id="enregistrer">
              <label class="form-check-label" for="enregistrer">
                Enregistrer votre carte
              </label>
            </div>
            <button type="submit" class="btn-valider" @click="redirectToInscription">VALIDER VOTRE ACHAT</button>
          </form>
        </div>
      </div>
      <div class="col-md-6 commande">
        <h2 class="block-title">Votre commande</h2>
        <div class="commande-details">
          <div class="commande-sous-total">
            <span>Produits</span>
            <span>Sous-total</span>
          </div>
          <hr />
          <div class="commande-item">
            <span>Offre gestion - 2 mois offerts</span>
            <span class="sous-total">3,99 € par mois</span>
          </div>
          <a href="/assurrance" class="ajouter-produit">+ Ajouter un produit</a>
          <hr />
          <div class="commande-sous-total">
            <span>Sous-total</span>
            <span>3,99 € par mois</span>
          </div>
          <hr />
          <div class="commande-total">
            <span>Total</span>
            <span>3,99 € par mois</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaiementComponent',
  methods: {
    redirectToInscription() {
      this.$router.push('/inscription');
    },
  },
};
</script>

<style scoped>
/* Version ordinateur */
.navbar-text {
  font-size: 2rem;
  font-weight: bold;
}

/* .paiement-container {
  display: flex;
  justify-content: center;
  margin: 10px;
  gap: 0px;
} */
.paiement-container {
  display: flex;
  justify-content: center;
  align-items: stretch; /* Assure que les deux blocs ont la même hauteur */
  margin: 5px;
  gap: 0px; /* Réduit l'écart entre les blocs */
}

.paiement {
  padding: 10px;
  flex-basis: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  padding-left: 50px;
  height: 100%; 
}
 
.commande {
  padding: 10px;
  flex-basis: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  padding-left: 50px;
  height: 100%; 
}
 
.form-paiement {
  border: 1px solid #000;
  padding: 20px;
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  height: fit-content;
  
}
/* .paiement, 
.commande {
  padding: 10px;
  flex-basis: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  padding-left: 50px;
  height: 100%; 
}
 */
.commande-details {
  border: 1px solid #000;
  padding: 20px;
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  height: fit-content;
  
}

.block-title {
  margin-bottom: 10px;
  padding: 10px;
  text-align: center;
  text-align: left;
  font-weight: bold;
}

.form-group {
  margin-bottom: 15px;
}

.form-group .type-carte {
  border: 2px solid #993399;
  flex-grow: 1;
  padding: 10px;
  border-radius: 5px;
}

.form-group .type-carte .carte {
  
}

.form-group .type-carte input {

}
/* .form-group .info {
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
} */
.input-group {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.row {
  display: flex;
  justify-content: space-between;
  gap: 10px; /* Ajoute de l'espace entre les inputs */
}

#expiration {
  margin-right: 10px; /* Ajoute un espace à droite de l'input expiration */
}

input[type="text"],
input[type="radio"] {
  flex-grow: 1;
  padding: 10px;
  border: 2px solid #993399;
  border-radius: 5px;
}

input[type="radio"] {
  width: auto;
  margin-right: 5px; /* Réduit l'espace entre le bouton radio et son label */
}

.form-group input[type="checkbox"], 
.form-group label[for="enregistrer"] {
  display: inline-block;
  vertical-align: middle;
}

input[type="checkbox"] {
  margin-right: 5px; /* Réduit l'espace entre le checkbox et le label */
}
input#numero {
  width: 100%;
  padding: 10px;
  border: 2px solid #993399;
  border-radius: 5px;
  box-sizing: border-box;
}

label {
  display: block;
  margin-bottom: 5px;
}

.btn-valider {
  background-color: #ffcc66;
  color: #993399;
  padding: 15px;
  width: 100%;
  border: none;
  border-radius: 25px;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  text-align: center;
}

.commande-details {
  display: flex;
  flex-direction: column;
}

.commande-item,
.commande-sous-total,
.commande-total {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.ajouter-produit {
  color: #993399;
  text-decoration: none;
}

hr {
  border: 0.5px solid #993399;
  width: 100%;
}

/* Version mobile */
@media (max-width: 768px) {
  .paiement-container {
    flex-direction: column;
    gap: 15px;
    padding: 0 15px;
  }

  .paiement,
  .commande {
    margin-bottom: 15px;
    flex-basis: 100%;
    padding: 15px;
  }

  .input-group {
    flex-direction: column;
  }

  .block-title {
    margin-bottom: 15px;
  }

  .btn-valider {
    font-size: 1rem;
  }
}
</style>

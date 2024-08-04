<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #993399; height: 100px;">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">
          <img src="../assets/img/logo-blanc.png" alt="Logo" style="height: 80px;">
        </router-link>
        <div class="collapse navbar-collapse justify-content-center">
          <span class="navbar-text text-white">
            Assurrance Score
          </span>
        </div>
      </div>
    </nav>
    
    <div class="container">
      <div class="progress-container">
        <div class="progress-bar" :style="{ width: progress + '%' }"></div>
      </div>
      
      <form @submit.prevent="nextStep">
        <div v-if="step === 1" class="step-container">
          <h2>Quel est votre profil ?</h2>
          <div class="options-container">
            <button type="button" @click="selectProfile('particulier')" class="option-button">Je suis un particulier</button>
            <button type="button" @click="selectProfile('professionnel')" class="option-button">Je suis un(e) professionnel(le)</button>
            <button type="button" @click="selectProfile('entreprise')" class="option-button">Je suis une entreprise</button>
            <button type="button" @click="selectProfile('association')" class="option-button">Je suis une association</button>
          </div>
        </div>

        <div v-if="step === 2" class="step-container">
          <h2>Quelle est votre situation professionnelle ?</h2>
          <div class="options-container">
            <button type="button" @click="selectProfile('salarie')" class="option-button">Je suis salarié(e)</button>
            <button type="button" @click="selectProfile('travailleur-non-salarie')" class="option-button">Je suis travailleur(se) non salarié(e) (TNS)</button>
            <button type="button" @click="selectProfile('etudiant')" class="option-button">Je suis étudiant(e)</button>
            <button type="button" @click="selectProfile('retraite')" class="option-button">Je suis retraité(e)</button>
            <button type="button" @click="selectProfile('etudiant-salarie')" class="option-button">Je suis étudiant(e) salarié(e)</button>
            <button type="button" @click="selectProfile('sans-emploi')" class="option-button">Je suis sans emploi</button>
          </div>
        </div>
        
        <div v-if="step === 3" class="step-container">
          <h2>Quel est votre genre ?</h2>
          <div class="options-container">
            <button type="button" @click="selectProfile('homme')" class="option-button">Je suis un homme</button>
            <button type="button" @click="selectProfile('femme')" class="option-button">Je suis une femme</button>
          </div>
        </div>
        
        <div v-if="step === 4" class="step-container">
          <h2>Quel âge avez-vous ?</h2>
          <input type="number" v-model="age" placeholder="0 ans" class="age-input" min="0" style="border: 1px solid #ccc; border-radius: 25px; padding: 10px; margin: 30px; width: 50%; box-sizing: border-box;" />
          <div style="margin-top: 10px;">
            <button type="button" @click="nextStep" class="next-button" style="background-color: green; color: white; padding: 10px; border: none; border-radius: 0px; width: 20%; cursor: pointer;">Suivant</button>
          </div>
        </div>
        
        <div v-if="step === 5" class="step-container">
          <h2>Quelle est votre situation maritale ?</h2>
          <div class="options-container">
            <button type="button" @click="selectProfile('marie')" class="option-button">Marié(e)</button>
            <button type="button" @click="selectProfile('celibataire')" class="option-button">Célibataire</button>
            <button type="button" @click="selectProfile('divorce')" class="option-button">Divorcé(e)</button>
            <button type="button" @click="selectProfile('veuf')" class="option-button">Veufe(ve)</button>
          </div>
        </div>

        <div v-if="step === 6" class="step-container">
          <h2>Combien avez-vous d'enfant ?</h2>
          <input type="number" v-model="enfant" placeholder="0 enfant"  min="0" step="1" class="age-input" style="border: 1px solid #ccc; border-radius: 25px; padding: 10px; margin: 30px; width: 50%; box-sizing: border-box;" />
          <div style="margin-top: 10px;">
            <button type="button" @click="nextStep" class="next-button" style="background-color: green; color: white; padding: 10px; border: none; border-radius: 0px; width: 20%; cursor: pointer;">Suivant</button>
          </div>
        </div>

        <div v-if="step === 7" class="step-container">
          <h2>Combien d'enfant sont scolarisés ?</h2>
          <input type="number" v-model="enfantscolarise" placeholder="0 enfant scolarisé"  min="0" step="1" class="age-input" style="border: 1px solid #ccc; border-radius: 25px; padding: 10px; margin: 30px; width: 50%; box-sizing: border-box;" />
          <div style="margin-top: 10px;">
            <button type="button" @click="nextStep" class="next-button" style="background-color: green; color: white; padding: 10px; border: none; border-radius: 0px; width: 20%; cursor: pointer;">Suivant</button>
          </div>
        </div>

        <div v-if="step === 8" class="step-container">
          <h2>Avez-vous en charge financièrement vos parents ?</h2>
          <div class="options-container">
            <button type="button" @click="selectProfile('oui')" class="option-button">Oui</button>
            <button type="button" @click="selectProfile('non')" class="option-button">Non</button>
          </div>
        </div>

        <div v-if="step === 9" class="step-container">
          <h2>Quel est votre statut dans votre résidence principale ?</h2>
          <div class="options-container">
            <button type="button" @click="selectProfile('proprietaire')" class="option-button">Propriétaire</button>
            <button type="button" @click="selectProfile('locataire')" class="option-button">Locataire</button>
            <button type="button" @click="selectProfile('heberge')" class="option-button">Hébergé(e)</button>
          </div>
        </div>

        <div v-if="step === 10" class="step-container">
          <h2>Où est située votre résidence principale ?</h2>
          <input type="text" v-model="villeresidence" placeholder="Ville" class="age-input" style="border: 1px solid #ccc; border-radius: 25px; padding: 10px; margin: 30px; width: 50%; box-sizing: border-box;" />
          <div style="margin-top: 10px;">
            <button type="button" @click="nextStep" class="next-button" style="background-color: green; color: white; padding: 10px; border: none; border-radius: 0px; width: 20%; cursor: pointer;">Suivant</button>
          </div>
        </div>

        <div v-if="step === 11" class="step-container">
          <h2>Qui habite également dans la résidence principale ?</h2>
          <div class="options-container">
            <button type="button" @click="selectProfile('conjoint')" class="option-button">Conjoint(e)</button>
            <button type="button" @click="selectProfile('enfant')" class="option-button">Enfant</button>
            <button type="button" @click="selectProfile('parent')" class="option-button">Parent</button>
            <button type="button" @click="selectProfile('animaux')" class="option-button">Animaux domestiques</button>
          </div>
        </div>

        <div v-if="step === 12" class="step-container">
          <h2>Avez-vous du patrimoine bien immobilier et/ou objet de valeur ?</h2>
          <div class="options-container">
            <button type="button" @click="selectProfile('oui-bien-immobilier')" class="option-button">Oui je possède un ou plusieurs biens immobiliers</button>
            <button type="button" @click="selectProfile('oui-objet-valeur')" class="option-button">Oui, j'ai des objets de valeurs (bijoux, tableaux, gravure, pièces d'orferverie..)</button>
            <button type="button" @click="selectProfile('les-deux')" class="option-button">Les deux</button>
          </div>
        </div>

        <div v-if="step === 13" class="step-container">
          <h2>Souhaitez-vous réalisez des travaux dans vos biens immobiliers ?</h2>
          <div class="options-container">
            <button type="button" @click="selectProfile('oui')" class="option-button">Oui</button>
            <button type="button" @click="selectProfile('non')" class="option-button">Non</button>
          </div>
        </div>

        <div v-if="step === 14" class="step-container">
          <h2>Comment vous déplacez-vous au quotidien ?</h2>
          <div class="options-container">
            <button type="button" @click="selectProfile('voiture')" class="option-button">Voiture</button>
            <button type="button" @click="selectProfile('moto')" class="option-button">Moto</button>
          </div>
        </div>

        <div v-if="step === 15" class="step-container">
          <h2>Quel est votre autre moyen de transport ?</h2>
          <div class="options-container">
            <button type="button" @click="selectProfile('nouveau-vehicule')" class="option-button">Nouveau véhicule électrique individuel</button>
            <button type="button" @click="selectProfile('velo-electrique')" class="option-button">Vélo électrique</button>
          </div>
        </div>

        <div v-if="step === 16" class="step-container">
          <h2>Lequel(s) de ces sport(s) pratiquez-vous ?</h2>
          <div class="options-container">
            <div>
              <label class="mr-3 label">Rugby</label>
              <input type="checkbox" class="checkbox" v-model="selectedSports" value="Rugby" />
            </div>
              
            <div>
              <label class="mr-3 label">Sport de combat</label>
                <input type="checkbox" class="checkbox" v-model="selectedSports" value="Sport de combat" />
            </div>
            
            <div>
              <label class="mr-3 label">Sport mécanique</label>
              <input type="checkbox" class="checkbox" v-model="selectedSports" value="Sport mécanique" />
            </div>
            
            <div>
              <label class="mr-3 label">Sport nautique hors natation</label>
              <input type="checkbox" class="checkbox" v-model="selectedSports" value="Sport nautique hors natation" />
            </div>
            
            <div>
              <label class="mr-3 label">La chasse</label>
              <input type="checkbox" class="checkbox" v-model="selectedSports" value="La chasse" />
            </div>

            <div>
              <label class="mr-3 label">VTT de descente</label>
              <input type="checkbox" class="checkbox" v-model="selectedSports" value="VTT de descente" />
            </div>
            
            <div>
              <label class="mr-3 label">Sport aériens</label>
              <input type="checkbox" class="checkbox" v-model="selectedSports" value="Sport aériens" />
            </div>

            <div>
              <label class="mr-3 label">Course à pieds de plus de 42km</label>
              <input type="checkbox" class="checkbox" v-model="selectedSports" value="Course à pieds de plus de 42km" />
            </div>

            <div>
              <label class="mr-3 label">Sport de montagne</label>
              <input type="checkbox" class="checkbox" v-model="selectedSports" value="Sport de montagne" />
            </div>

          </div>
          <div style="margin-top: 30px;">
            <button type="button" @click="nextStep" class="next-button" style="background-color: green; color: white; padding: 10px; border: none; border-radius: 0px; width: 20%; cursor: pointer;">Suivant</button>
          </div>
        </div>


        <div v-if="step === 17" class="step-container">
          <h2>Où partez-vous régulièrement en vacances ?</h2>
          <div class="options-container">
            <button type="button" @click="selectProfile('etranger')" class="option-button">A l'étranger</button>
            <button type="button" @click="selectProfile('en-france')" class="option-button">En France</button>
          </div>
        </div>

        <div v-if="step === 18" class="step-container">
          <h2>Quel(s) objets connectés possédez vous ?</h2>
          <div class="options-container">
            <button type="button" @click="selectProfile('smarthphone-multimedia')" class="option-button">Smartphone & Multimédia</button>
            <button type="button" @click="selectProfile('electromenager')" class="option-button">Electroménager</button>
            <button type="button" @click="selectProfile('image-son')" class="option-button">Image & Son</button>
          </div>
        </div>

        <div v-if="step === 19" class="step-container">
          <h2>Où souhaitez vous passer votre retraite ?</h2>
          <div class="options-container">
            <button type="button" @click="selectProfile('pays-origine')" class="option-button">A l'étranger dans mon pays d'origine</button>
            <button type="button" @click="selectProfile('en-france')" class="option-button">En France</button>
          </div>
        </div>

        <div v-if="step === 20" class="step-container">
          <h2>Si vous avez un sinistre, que préférez-vous ?</h2>
          <div class="options-container">
            <button type="button" @click="selectProfile('remboursement-total')" class="option-button">Une remboursement total : je n'ai rien à ma charge</button>
            <button type="button" @click="selectProfile('remboursement-partiel')" class="option-button">Un remboursement partiel : Je prend en charge une partie du sinistre</button>
          </div>
        </div>

        <div v-if="step === 21" class="step-container">
          <h2>Quelle(s) assurance(s) possédez vous ?</h2>
        
          <div class="options-container">
            <div>
              <label class="mr-3 label">Responsabilité civile</label>
              <input type="checkbox" class="checkbox" v-model="ResponsabiliteCivile" value="ResponsabiliteCivile" />
            </div>
              
            <div>
              <label class="mr-3 label">Santé</label>
                <input type="checkbox" class="checkbox" v-model="Prevoyance" value="Prévoyance" />
            </div>
            
            <div>
              <label class="mr-3 label">Prévoyance</label>
              <input type="checkbox" class="checkbox" v-model="selectedSports" value="Sport mécanique" />
            </div>
            
            <div>
              <label class="mr-3 label">Prévoyance Accident</label>
              <input type="checkbox" class="checkbox" v-model="PrevoyanceAccident" value="PrevoyanceAccident" />
            </div>
            
            <div>
              <label class="mr-3 label">Décès</label>
              <input type="checkbox" class="checkbox" v-model="Deces" value="Deces" />
            </div>

            <div>
              <label class="mr-3 label">Obsèque</label>
              <input type="checkbox" class="checkbox" v-model="Obseque" value="Obseque" />
            </div>
            
            <div>
              <label class="mr-3 label">Rapatriement</label>
              <input type="checkbox" class="checkbox" v-model="Rapatriement" value="Rapatriement" />
            </div>

            <div>
              <label class="mr-3 label">Retraite</label>
              <input type="checkbox" class="checkbox" v-model="Retraite" value="Retraite" />
            </div>

            <div>
              <label class="mr-3 label">Scolaire</label>
              <input type="checkbox" class="checkbox" v-model="Scolaire" value="Scolaire" />
            </div>

            <div>
              <label class="mr-3 label">Assurance vie</label>
              <input type="checkbox" class="checkbox" v-model="AssuranceVie" value="AssuranceVie" />
            </div>

            <div>
              <label class="mr-3 label">GAV</label>
              <input type="checkbox" class="checkbox" v-model="GAV" value="GAV" />
            </div>

            <div>
              <label class="mr-3 label">Dépendance</label>
              <input type="checkbox" class="checkbox" v-model="Dependance" value="Dependance" />
            </div>

          </div>

          <div style="margin-top: 30px;">
            <button type="button" @click="nextStep" class="next-button" style="background-color: green; color: white; padding: 10px; border: none; border-radius: 0px; width: 20%; cursor: pointer;">Suivant</button>
          </div>

        </div>

        <div v-if="step === 22" class="step-container">
          <h2>Quelle(s) assurance(s) possédez vous ?</h2>
          <div class="options-container">
            <div>
              <label class="mr-3 label">Habitation</label>
              <input type="checkbox" class="checkbox" v-model="Habitation" value="Habitation" />
            </div>
            <div>
              <label class="mr-3 label">PNO</label>
              <input type="checkbox" class="checkbox" v-model="PNO" value="PNO" />
            </div>
            <div>
              <label class="mr-3 label">Moto</label>
              <input type="checkbox" class="checkbox" v-model="Moto" value="Moto" />
            </div>
            <div>
              <label class="mr-3 label">Automobile</label>
              <input type="checkbox" class="checkbox" v-model="Automobile" value="Automobile" />
            </div>
            <div>
              <label class="mr-3 label">Vélo électrique</label>
              <input type="checkbox" class="checkbox" v-model="Veloelectrique" value="Veloelectrique" />
            </div>
            <div>
              <label class="mr-3 label">NVEI</label>
              <input type="checkbox" class="checkbox" v-model="NVEI" value="NVEI" />
            </div>
            <div>
              <label class="mr-3 label">Objets de valeur</label>
              <input type="checkbox" class="checkbox" v-model="Objetsdevaleur" value="Objetsdevaleur" />
            </div>
            <div>
              <label class="mr-3 label">Objets Connectés</label>
              <input type="checkbox" class="checkbox" v-model="ObjetsConnectes" value="ObjetsConnectes" />
            </div>
          </div>
          <div style="margin-top: 30px;">
            <button type="button" @click="nextStep" class="next-button" style="background-color: green; color: white; padding: 10px; border: none; border-radius: 0px; width: 20%; cursor: pointer;">Suivant</button>
          </div>
        </div>

        <div v-if="step === 23" class="step-container">
          <h2>Quelle(s) assurance(s) possédez vous ?</h2>
          <div class="options-container">
            <div>
              <label class="mr-3 label">Carte bancaire Standard</label>
              <input type="checkbox" class="checkbox" v-model="CartebancaireStandard" value="CartebancaireStandard" />
            </div>
            <div>
              <label class="mr-3 label">Carte bancaire premium</label>
              <input type="checkbox" class="checkbox" v-model="Cartebancairepremium" value="Cartebancairepremium" />
            </div>
            <div>
              <label class="mr-3 label">Protection juridique</label>
              <input type="checkbox" class="checkbox" v-model="Protectionjuridique" value="Protectionjuridique" />
            </div>
            <div>
              <label class="mr-3 label">Animaux domestiques</label>
              <input type="checkbox" class="checkbox" v-model="Animauxdomestiques" value="Animauxdomestiques" />
            </div>
            <div>
              <label class="mr-3 label">Dommage ouvrage</label>
              <input type="checkbox" class="checkbox" v-model="Dommageouvrage" value="Dommageouvrage" />
            </div>
          </div>

          <div style="margin-top: 30px;">
            <button type="button" @click="nextStep" class="next-button" style="background-color: green; color: white; padding: 10px; border: none; border-radius: 0px; width: 20%; cursor: pointer;">Suivant</button>
          </div>
        </div>

        <div v-if="step === 24" class="step-container">
          <h2>Inscrivez-vous et recevez votre diagnostic</h2>
          <div class="row">
            <div class="col-lg-6 col-sm-12">
              <div class="form-group">
                <input type="text" class="form-control form-control-custom" required id="nom" nom="nom" placeholder="Nom">
              </div>
              <div class="mt-3 form-group">
                <input type="text" class="form-control form-control-custom" required id="prenom" name="prenom" placeholder="Prenom">
              </div>
            </div>
            <div class="col-lg-6 col-sm-12">
              <div class="form-group">
                <input type="email" class="form-control form-control-custom" required id="email" placeholder="Adresse e-mail">
              </div>
              <div class="mt-3 form-group">
                <input type="password" class="form-control form-control-custom" required id="password" placeholder="Mot de passe">
              </div>
            </div>
          </div>

          <div style="margin-top: 30px;">
            <button type="submit" @click="redirectToResultat" class="next-button" style="background-color: green; color: white; padding: 10px; border: none; border-radius: 0px; width: 20%; cursor: pointer;">S'inscrire</button>
          </div>

        </div>
        
      </form>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'InscriptionComponent',
  data() {
    return {
      step: 1,
      formData: {
        profile: '',
        q1: '',
        q2: '',
        q3: '',
        q4: '',
        q5: '',
        q6: '',
        q7: '',
        q8: '',
        q9: '',
        q10: '',
        q11: '',
        q12: '',
        q13: '',
        q14: '',
        q15: '',
        q16: '',
        q17: '',
        q18: '',
        q19: '',
        q20: '',
        q21: '',
        q22: '',
        q23: ''
      }
    };
  },
  computed: {
    progress() {
      return (this.step - 1) * (100 / 24);
    }
  },
  methods: {
    selectProfile(profile, question) {
      this.formData[question] = profile;
      this.nextStep();
    },
    nextStep() {
      if (this.step < 24) {
        this.step++;
      } else {
        this.submitForm();
      }
    },
    prevStep() {
      if (this.step > 1) {
        this.step--;
      }
    },
    redirectToResultat() {
      this.$router.push('/resultat');
    },
  }
};
</script>

<style scoped>
@media (max-width: 768px) {
  .options-container {
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }

  .option-button {
    flex: 1 1 100%;
    max-width: 100%;
  }

  .options-container div {
    width: 100%;
    margin-bottom: 10px;
  }

}
.navbar-text {
  font-size: 1.5rem;
  font-weight: bold;
}
.progress-container {
  background-color: #c1c1c1;
  height: 10px;
  margin: 20px 0;
  position: relative;
}
.progress-bar {
  background-color: #ffcc66;
  height: 100%;
  transition: width 0.3s ease;
}
.step-container {
  text-align: center;
  margin-top: 20px;
}



.options-container div {
  align-items: center;
  padding: 10px;
  border: 2px solid #c1c1c1;
  border-radius: 20px;
  background-color: #fff;
  width: calc(33.33% - 20px);
  box-sizing: border-box;
  text-align: center;
}

.options-container label {
  font-size: 18px;
  text-align: center;
}

.checkbox {
  display: flex;
  margin: 0;
  text-align: right;
  width: 20px;
  height: 20px;
}

.checkbox:checked + label {
  background-color: green;
  border-color: green;
  color: #fff;
}

.step-container h2 {
  color: #993399;
  font-weight: bold;
}
.options-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  flex-wrap: wrap;
}
.option-button {
  background-color: transparent;
  border: 2px solid #c1c1c1;
  color: #c1c1c1;
  border-radius: 25px;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: bold;
  flex: 1 1 calc(50% - 40px); 
  max-width: calc(50% - 40px); 
  padding: 15px 20px;
  font-size: 16px;
  margin-bottom: 20px;
}
.option-button:hover {
  background-color: #ffcc66;
  color: #fff;
  border: 2px solid #ffcc66;
}
.questions-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

</style>
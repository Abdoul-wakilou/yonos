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
          <h2>Quel âge avez vous ?</h2>
          <div class="options-container">
            <button type="button" @click="selectProfile('particulier')" class="option-button">Je suis un particulier</button>
            <button type="button" @click="selectProfile('professionnel')" class="option-button">Je suis un professionnel</button>
            <button type="button" @click="selectProfile('entreprise')" class="option-button">Je suis une entreprise</button>
            <button type="button" @click="selectProfile('association')" class="option-button">Je suis une association</button>
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
          <div class="options-container">
            <button type="button" @click="selectProfile('particulier')" class="option-button">Je suis un particulier</button>
            <button type="button" @click="selectProfile('professionnel')" class="option-button">Je suis un professionnel</button>
            <button type="button" @click="selectProfile('entreprise')" class="option-button">Je suis une entreprise</button>
            <button type="button" @click="selectProfile('association')" class="option-button">Je suis une association</button>
          </div>
        </div>

        <div v-if="step === 7" class="step-container">
          <h2>Combien d'enfant sont scolarisés ?</h2>
          <div class="options-container">
            <button type="button" @click="selectProfile('particulier')" class="option-button">Je suis un particulier</button>
            <button type="button" @click="selectProfile('professionnel')" class="option-button">Je suis un professionnel</button>
            <button type="button" @click="selectProfile('entreprise')" class="option-button">Je suis une entreprise</button>
            <button type="button" @click="selectProfile('association')" class="option-button">Je suis une association</button>
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
          <div class="options-container">
            <button type="button" @click="selectProfile('particulier')" class="option-button">Je suis un particulier</button>
            <button type="button" @click="selectProfile('professionnel')" class="option-button">Je suis un professionnel</button>
            <button type="button" @click="selectProfile('entreprise')" class="option-button">Je suis une entreprise</button>
            <button type="button" @click="selectProfile('association')" class="option-button">Je suis une association</button>
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
          <h2>Lequel(s) de ces sport(s) pratiquez vous ?</h2>
          <div class="options-container">
            <button type="button" @click="selectProfile('rugby')" class="option-button">Rugby</button>
            <button type="button" @click="selectProfile('sport-combat')" class="option-button">Sport de combat</button>
            <button type="button" @click="selectProfile('sport-mecanique')" class="option-button">Sport mécanique</button>
            <button type="button" @click="selectProfile('sport-nautique-hors-natation')" class="option-button">Sport nautique hors natation</button>
            <button type="button" @click="selectProfile('la-chasse')" class="option-button">La chasse</button>
            <button type="button" @click="selectProfile('vtt-de-descente')" class="option-button">VTT de descente</button>
            <button type="button" @click="selectProfile('sport-aériens')" class="option-button">Sport aériens</button>
            <button type="button" @click="selectProfile('Course-pieds')" class="option-button">Course à pieds de plus de 42km</button>
            <button type="button" @click="selectProfile('sport-de-montagne')" class="option-button">Sport de montagne</button>
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
            <button type="button" @click="selectProfile('responsabilite-civile')" class="option-button">Responsabilité civile</button>
            <button type="button" @click="selectProfile('sante')" class="option-button">Santé</button>
            <button type="button" @click="selectProfile('Prévoyance')" class="option-button">Prévoyance</button>
            <button type="button" @click="selectProfile('Prévoyance Accident')" class="option-button">Prévoyance Accident</button>
            <button type="button" @click="selectProfile('Décès')" class="option-button">Décès</button>
            <button type="button" @click="selectProfile('Obsèque')" class="option-button">Obsèque</button>
            <button type="button" @click="selectProfile('Rapatriement')" class="option-button">Rapatriement</button>
            <button type="button" @click="selectProfile('Retraite')" class="option-button">Retraite</button>
            <button type="button" @click="selectProfile('Scolaire')" class="option-button">Scolaire</button>
            <button type="button" @click="selectProfile('Assurance')" class="option-button">Assurance vie</button>
            <button type="button" @click="selectProfile('GAV')" class="option-button">GAV</button>
            <button type="button" @click="selectProfile('Dépendance')" class="option-button">Dépendance</button>
          </div>
        </div>

        <div v-if="step === 22" class="step-container">
          <h2>Quelle(s) assurance(s) possédez vous ?</h2>
          <div class="options-container">
            <button type="button" @click="selectProfile('Habitation')" class="option-button">Habitation</button>
            <button type="button" @click="selectProfile('PNO')" class="option-button">PNO</button>
            <button type="button" @click="selectProfile('Automobile')" class="option-button">Automobile</button>
            <button type="button" @click="selectProfile('Moto')" class="option-button">Moto</button>
            <button type="button" @click="selectProfile('Velo-electrique')" class="option-button">Vélo électrique</button>
            <button type="button" @click="selectProfile('NVEI')" class="option-button">NVEI</button>
            <button type="button" @click="selectProfile('Objets-de-valeur')" class="option-button">Objets de valeur</button>
            <button type="button" @click="selectProfile('Objets-Connectes')" class="option-button">Objets Connectés</button>
          </div>
        </div>

        <div v-if="step === 23" class="step-container">
          <h2>Quelle(s) assurance(s) possédez vous ?</h2>
          <div class="options-container">
            <button type="button" @click="selectProfile('Carte bancaire Standard')" class="option-button">Carte bancaire Standard</button>
            <button type="button" @click="selectProfile('Carte bancaire premium')" class="option-button">Carte bancaire premium</button>
            <button type="button" @click="selectProfile('Protection juridique')" class="option-button">Protection juridique</button>
            <button type="button" @click="selectProfile('Animaux domestiques')" class="option-button">Animaux domestiques</button>
            <button type="button" @click="selectProfile('Dommage ouvrage')" class="option-button">Dommage ouvrage</button>
          </div>
        </div>

        <div v-if="step === 23" class="step-container">
          <h2>Inscrivez-vous et recevez votre diagnostic</h2>
          <div class="options-container">
            <button type="button" @click="selectProfile('Carte bancaire Standard')" class="option-button">Carte bancaire Standard</button>
            <button type="button" @click="selectProfile('Carte bancaire premium')" class="option-button">Carte bancaire premium</button>
            <button type="button" @click="selectProfile('Protection juridique')" class="option-button">Protection juridique</button>
            <button type="button" @click="selectProfile('Animaux domestiques')" class="option-button">Animaux domestiques</button>
            <button type="button" @click="selectProfile('Dommage ouvrage')" class="option-button">Dommage ouvrage</button>
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
        q16: ''
      }
    };
  },
  computed: {
    progress() {
      return (this.step - 1) * 25;
    }
  },
  methods: {
    selectProfile(profile) {
      this.formData.profile = profile;
      this.nextStep();
    },
    nextStep() {
      if (this.step < 5) {
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
    submitForm() {
      // Soumettre le formulaire avec les données
      console.log(this.formData);
      // Ajouter le code pour soumettre les données au backend Laravel
    }
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

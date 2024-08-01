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
      
      <form @submit.prevent="submitForm">
        <div v-if="step === 1" class="step-container">
          <h2>Étape 1: Informations de base</h2>
          <p>Quel est votre profil ?</p>
          <div class="options-container">
            <button @click="selectProfile('particulier')" class="option-button">Je suis particulier</button>
            <button @click="selectProfile('professionnel')" class="option-button">Je suis professionnel</button>
            <button @click="selectProfile('entreprise')" class="option-button">Je suis entreprise</button>
            <button @click="selectProfile('association')" class="option-button">Je suis association</button>
          </div>
        </div>

        <div v-if="step === 2" class="step-container">
          <h2>Étape 2: Informations supplémentaires</h2>
          <div class="questions-container">
            <div class="form-group">
              <label>Question 1</label>
              <input v-model="formData.q1" type="text" class="form-control" placeholder="Réponse 1">
            </div>
            <div class="form-group">
              <label>Question 2</label>
              <input v-model="formData.q2" type="text" class="form-control" placeholder="Réponse 2">
            </div>
            <div class="form-group">
              <label>Question 3</label>
              <input v-model="formData.q3" type="text" class="form-control" placeholder="Réponse 3">
            </div>
            <div class="form-group">
              <label>Question 4</label>
              <input v-model="formData.q4" type="text" class="form-control" placeholder="Réponse 4">
            </div>
          </div>
        </div>
        
        <div v-if="step === 3" class="step-container">
          <h2>Étape 3: Détails de contact</h2>
          <div class="questions-container">
            <div class="form-group">
              <label>Question 1</label>
              <input v-model="formData.q5" type="text" class="form-control" placeholder="Réponse 1">
            </div>
            <div class="form-group">
              <label>Question 2</label>
              <input v-model="formData.q6" type="text" class="form-control" placeholder="Réponse 2">
            </div>
            <div class="form-group">
              <label>Question 3</label>
              <input v-model="formData.q7" type="text" class="form-control" placeholder="Réponse 3">
            </div>
            <div class="form-group">
              <label>Question 4</label>
              <input v-model="formData.q8" type="text" class="form-control" placeholder="Réponse 4">
            </div>
          </div>
        </div>
        
        <div v-if="step === 4" class="step-container">
          <h2>Étape 4: Préférences</h2>
          <div class="questions-container">
            <div class="form-group">
              <label>Question 1</label>
              <input v-model="formData.q9" type="text" class="form-control" placeholder="Réponse 1">
            </div>
            <div class="form-group">
              <label>Question 2</label>
              <input v-model="formData.q10" type="text" class="form-control" placeholder="Réponse 2">
            </div>
            <div class="form-group">
              <label>Question 3</label>
              <input v-model="formData.q11" type="text" class="form-control" placeholder="Réponse 3">
            </div>
            <div class="form-group">
              <label>Question 4</label>
              <input v-model="formData.q12" type="text" class="form-control" placeholder="Réponse 4">
            </div>
          </div>
        </div>
        
        <div v-if="step === 5" class="step-container">
          <h2>Étape 5: Confirmation</h2>
          <div class="questions-container">
            <div class="form-group">
              <label>Question 1</label>
              <input v-model="formData.q13" type="text" class="form-control" placeholder="Réponse 1">
            </div>
            <div class="form-group">
              <label>Question 2</label>
              <input v-model="formData.q14" type="text" class="form-control" placeholder="Réponse 2">
            </div>
            <div class="form-group">
              <label>Question 3</label>
              <input v-model="formData.q15" type="text" class="form-control" placeholder="Réponse 3">
            </div>
            <div class="form-group">
              <label>Question 4</label>
              <input v-model="formData.q16" type="text" class="form-control" placeholder="Réponse 4">
            </div>
          </div>
        </div>
        
        <div class="buttons-container">
          <button v-if="step > 1" @click="prevStep" class="btn btn-custom">Précédent</button>
          <button type="submit" class="btn btn-custom">
            {{ step < 5 ? 'Suivant' : 'Soumettre' }}
          </button>
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
.options-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}
.option-button {
  background-color: transparent;
  border: 2px solid #993399;
  color: #993399;
  border-radius: 25px;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: bold;
}
.option-button:hover {
  background-color: #993399;
  color: #fff;
}
.questions-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
.form-group {
  flex: 0 0 45%;
  text-align: left;
}
.form-control {
  border-radius: 25px;
  margin-bottom: 10px;
  text-align: center;
}
.buttons-container {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.btn-custom {
  background-color: transparent;
  color: #993399;
  font-weight: bold;
  border: 2px solid #993399;
  border-radius: 25px;
  padding: 10px 20px;
  cursor: pointer;
}
.btn-custom:hover {
  background-color: #993399;
  color: #fff;
}
</style>

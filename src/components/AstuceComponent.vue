<template>
  <div class="astuce-component">
    <NavbarComponent class="navbar"></NavbarComponent>
    <div class="container text-center my-4">
      <h2 class="font-weight-bold">Profitez de nos conseils pratiques pour votre quotidien</h2>
      <div class="row my-4">
        <div class="col-md-4 mb-3">
          <img src="../assets/img/question.png" alt="Conseil 1" class="img-fluid">
        </div>
        <div class="col-md-4 mb-3">
          <img src="../assets/img/incapacite.png" alt="Conseil 2" class="img-fluid">
        </div>
        <div class="col-md-4 mb-3">
          <img src="../assets/img/clauses.png" alt="Conseil 3" class="img-fluid">
        </div>
      </div>
      <div class="newsletter-section mx-auto p-4">
        <h4>Inscrivez-vous à notre newsletter !</h4>
        <form>
          <div class="form-group">
            <label for="email" class="sr-only">Email</label>
            <input type="email" class="form-control" id="email" placeholder="E-mail">
          </div>
          <button type="submit" class="btn btn-primary">S'inscrire</button>
          <div class="form-check mt-3">
            <input type="checkbox" class="form-check-input" id="terms">
            <label class="form-check-label" for="terms">J'accepte les termes et conditions</label>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarComponent from './NavbarComponent.vue';

export default {
  name: 'AstuceComponent',
  components: {
    NavbarComponent,
  },
};
</script>

<style scoped>
.astuce-component {
  background-color: #f9f9f9;
  padding-bottom: 50px;
}

h2 {
  color: #993399; /* Couleur violet */
}

.newsletter-section {
  background-color: #ffcc66; /* Couleur jaune */
  border-radius: 8px;
  max-width: 500px; /* Limite la largeur de la section */
}

.newsletter-section h4 {
  color: #fff;
}

.form-control {
  border: none;
}

.form-check-label {
  color: #fff;
}

.btn-primary {
  background-color: #993399;
  border: none;
}

.btn-primary:hover {
  background-color: #7a2665;
}

.newsletter-section form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.newsletter-section .form-group,
.newsletter-section .btn-primary {
  width: 100%;
}

.newsletter-section .form-group {
  display: flex;
  justify-content: space-between;
}

.newsletter-section .btn-primary {
  margin-top: 10px;
}

.newsletter-section .form-check {
  width: 100%;
  text-align: left;
}
</style>

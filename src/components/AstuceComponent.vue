<template>
  <div class="astuce-component">
    <NavbarComponent class="navbar"></NavbarComponent>
    <div class="container text-center my-4">
      <h2 class="font-weight-bold">Profitez de nos conseils pratiques pour votre quotidien</h2>
      <div class="row my-4">
        <div class="col-md-4 mb-3">
          <img src="@/assets/img/question.png" alt="Conseil 1" class="img-fluid">
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
          <div class="input-group mb-2">
            <input type="email" class="form-control" id="email" placeholder="E-mail">
            <div class="input-group-append">
              <button type="submit" class="btn btn-primary">S'inscrire</button>
            </div>
          </div>
          <div class="form-check mt-2">
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
  background-color: #fff;
  padding-bottom: 50px;
}

h2 {
  color: #993399;
}

.newsletter-section {
  background-color: #ffcc66;
  border-radius: 8px;
  max-width: 500px;
}

.newsletter-section h4 {
  color: #fff;
  font-size: 18px;
  font-weight: bold;
}

.form-control {
  border: none;
}

.form-check-label {
  color: #fff;
  font-size: 14px;
}

.btn-primary {
  background-color: #993399;
  border: none;
  font-size: 14px;
}

.btn-primary:hover {
  background-color: #7a2665;
}

.newsletter-section form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.newsletter-section .input-group {
  width: 100%;
}

.newsletter-section .form-check {
  width: 100%;
  text-align: left;
}
@media (max-width: 768px) {
    .navbar {
        z-index: 1000;
    }
}
</style>

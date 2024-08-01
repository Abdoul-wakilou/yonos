<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <!-- Logo de l'entreprise -->
        <div class="col-md-3">
          <img src="../assets/img/footer-img.png" alt="Logo de l'entreprise" class="logo" />
        </div>

        <!-- Liens vers les pages -->
        <div class="col-md-6">
          <div class="links">
            <a href="#">Qui sommes-nous</a>
            <a href="#">Objectifs</a>
            <a href="#">Nos assurances</a>
            <!-- Ajoutez d'autres liens ici -->
          </div>
        </div>

        <!-- Réseaux sociaux -->
        <div class="col-md-3">
          <div class="social">
            <p>Suivez nous sur nos réseaux sociaux</p>
            <a href="#" class="facebook"><i class="fab fa-facebook" style="color: #4267B2;"></i></a>
            <a href="#" class="twitter"><i class="fab fa-twitter" style="color: #1DA1F2;"></i></a>
            <a href="#" class="instagram"><i class="fab fa-instagram" style="background: linear-gradient(45deg, #FEDA77, #DF4996);"></i></a>
            <a href="#" class="linkedin"><i class="fab fa-linkedin" style="color: #2867B2;"></i></a>
            <a href="#" class="tiktok"><i class="fab fa-tiktok" style="color: #000000;"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterComponent',
};
</script>

<style scoped>
/* Personnalisez le style de votre pied de page ici */
.footer {
  background-color: #f8f9fa;
  padding: 20px 0;
}

.logo {
  max-width: 100px;
}

.links a {
  color: #333;
  margin-right: 20px;
}

.social p {
  font-size: 14px;
  margin-bottom: 10px;
}

.social a {
  font-size: 20px;
  margin-right: 10px;
}
</style>

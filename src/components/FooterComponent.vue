<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <!-- Logo de l'entreprise -->
        <div class="col-md-3 col-sm-12 info">
          <img src="../assets/img/footer-img.png" alt="Logo de l'entreprise" class="img-fluid logo" />
          <P>Mr.Yonos est une société par actions simpliées, Immatriculée au registre de l'ORIAS en tant que Courtier en assurance sous le numéro……..</P>
        </div>

        <div class="col-md-3 col-sm-12">
          <div class="links">
            <ul>
              <li><router-link to="/contexte" class="nav-link">Contexte</router-link></li>
              <li><router-link to="/objectif" class="nav-link">Objectifs</router-link></li>
              <li><router-link to="/assurance" class="nav-link">Assurances</router-link></li>
              <li><router-link to="/formation" class="nav-link">Formations</router-link></li>
              <li><router-link to="/astuces" class="nav-link">Astuces</router-link></li>
            </ul>
          </div>
        </div>

        <div class="col-md-3 col-sm-12">
          <div class="links">
            <ul>
              <li><router-link to="/contexte" class="nav-link">Mention légales</router-link></li>
              <li><router-link to="/assurance" class="nav-link">Contact</router-link></li>
              <li><router-link to="/formation" class="nav-link">Conditions générale d'utilisation</router-link></li>
              <li><router-link to="/astuces" class="nav-link">Protection des données personnelles</router-link></li>
            </ul>
          </div>
        </div>

        <!-- Réseaux sociaux -->
        <div class="col-md-3 col-sm-12">
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

.footer {
  background-color: #ffcc66;
  padding: 20px 0;
}

.logo {
  max-width: 100px;
}

.info p {
  font-size: 18px;
  margin-top: 10px;
}

.links a {
  color: #000000;
  margin-right: 20px;
}

.links p {
  font-size: 18px;
}

.social p {
  font-size: 18px;
  margin-bottom: 10px;
}

.social a {
  font-size: 30px;
  margin-right: 10px;
}

.links ul {
  list-style-type: none;
  padding-left: 0;
}

.links li {
  margin-bottom: 20px; /* Réduire l'espace entre les éléments */
}

.links .nav-link {
  text-decoration: none;
  color: #000;
  display: inline; /* Limite la zone cliquable au texte */
}

.links .nav-link:hover {
  color: #ffffff;
}
</style>

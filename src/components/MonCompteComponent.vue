<template>
    <div>
      <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #993399; height: 100px;">
        <div class="container-fluid">
          <router-link class="navbar-brand" to="/">
            <img src="../assets/img/logo-blanc.png" alt="Logo" style="height: 80px;">
          </router-link>
          <div class="collapse navbar-collapse justify-content-center">
            <span class="navbar-text text-white">
              Bienvenue sur le site de Mr.Yonos
            </span>
          </div>
        </div>
      </nav>
  
      <div class="container container-custom">
        <div class="card card-custom">
          <div class="card-header text-center">
            PAS ENCORE INSCRIT(E)?
          </div>
          <div class="card-body text-center">
            <a href="/inscription" class="btn btn-custom">CREEZ VOTRE COMPTE</a>
          </div>
        </div>
        <div class="card card-custom">
          <div class="card-header text-center">
            DEJA INSCRIT(E)?
          </div>
          <div class="card-body text-center">
            <form>
              <div class="form-group">
                <input type="email" class="form-control form-control-custom" id="email" placeholder="Adresse e-mail">
              </div>
              <div class="form-group">
                <input type="password" class="form-control form-control-custom" id="password" placeholder="Mot de passe">
              </div>
              <div class="form-group text-center mot-passe">
                <a href="/">Mot de passe oublié ?</a>
              </div>
              <button type="submit" class="btn btn-custom">CONNEXION</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MonCompteComponent',
  };
  </script>
  
  <style scoped>
  .navbar-text {
    font-size: 1.5rem;
    font-weight: bold;
  }
  .card-header {
    background-color: #c1c1c1;
  }
  .card-body {
    background-color: #ffffff;
    border: 1px solid #c1c1c1;
  }
  .btn-custom {
    background-color: #ffcc66;
    color: #993399;
    font-weight: bold;
    border: none;
    border-radius: 25px;
    padding: 10px 20px;
    display: inline-block;
    text-align: center;
    width: 100%;
  }
  .btn-custom:hover {
    background-color: #ffb833;
    color: #fff;
  }
  .form-control {
    border-radius: 25px;
    margin-bottom: 10px;
  }
  .form-control-custom {
    text-align: center;
  }
  .mot-passe {
    text-align: center;
    margin-bottom: 20px;
  }
  .container-custom {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    flex-wrap: wrap;
  }
  .card-custom {
    flex: 0 0 35%;
    margin-bottom: 50px;
    margin-right: 100px; /* Reduce the space between the two cards */
  }
  .card-custom:last-child {
    margin-right: 0; /* Remove the right margin for the last card */
  }
  @media (max-width: 768px) {
    .card-custom {
      flex: 0 0 100%;
      margin-right: 0;
    }
  }
  </style>
  
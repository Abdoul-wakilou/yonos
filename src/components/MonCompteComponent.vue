<template>
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #b2598c; height: 100px;">
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
                <p>Créez votre compte pour accéder à nos services.</p>
                <a href="/inscription" class="btn btn-custom">CREEZ VOTRE COMPTE</a>
            </div>
        </div>
        <div class="card card-custom">
            <div class="card-header text-center">
                DEJA INSCRIT(E)?
            </div>
            <div class="card-body">
                <form>
                    <div class="form-group">
                        <label for="email">Adresse e-mail</label>
                        <input type="email" class="form-control" id="email" placeholder="Adresse e-mail">
                    </div>
                    <div class="form-group">
                        <label for="password">Mot de passe</label>
                        <input type="password" class="form-control" id="password" placeholder="Mot de passe">
                    </div>
                    <div class="form-group text-right">
                        <a href="/forgot-password">Mot de passe oublié ?</a>
                    </div>
                    <button type="submit" class="btn btn-custom">CONNEXION</button>
                </form>
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
            border: 1px solid #000;
        }
        .btn-custom {
            background-color: #ffcc66;
            color: #b2598c;
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
        }
        .container-custom {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 50px;
        }
        .card-custom {
            flex: 0 0 48%;
        }
        .navbar-custom {
            background-color: #b2598c;
            height: 100px;
        }
        .navbar-brand img {
            height: 60px;
        }
</style>
  
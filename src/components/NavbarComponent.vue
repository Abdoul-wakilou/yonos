<template>
  <nav class="navbar navbar-expand-lg navbar-custom">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand"><img src="../assets/img/logo.png" alt="Logo" class="img-fluid" style="max-height: 50px;"></router-link>
    
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <router-link to="/contexte" class="nav-link">Contexte</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/objectif" class="nav-link">Objectifs</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/assurrance" class="nav-link">Assurances</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/formation" class="nav-link">Formations</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/astuce" class="nav-link">Astuces</router-link>
          </li>
        </ul>
        <router-link to="/mon-compte">
          <button class="btn btn-custom">Mon Compte</button>
        </router-link>
      </div>
    </div>
  </nav>
</template>


<script>
export default {
  name: 'NavbarComponent',
};
</script>

<style scoped>
.navbar-custom {
  background-color: #ffcc66;
  height: 100px;
}

.navbar-brand {
  display: flex;
  align-items: center;
}

.navbar-nav {
  flex: 1;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.navbar-nav .nav-item .nav-link {
  color: black;
  margin: 0 10px;
  transition: color 0.3s;
}

.navbar-nav .nav-item .nav-link:hover {
  color: white;
}

.btn-custom {
  background-color: #993399;
  color: white;
  border-radius: 20px;
  padding: 5px 15px;
}

.navbar-toggler {
  border: none;
}

.navbar-toggler-icon {
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  vertical-align: middle;
  content: "";
  background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path stroke="rgba(0,0,0,0.5)" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M4 7h22M4 15h22M4 23h22"/></svg>') center/1.5em auto no-repeat;
}

.navbar-collapse {
  background-color: #ffcc66;
  text-align: center;
  padding-bottom: 30px;
}

@media (max-width: 768px) {
  .navbar-collapse {
    text-align: center;
  }

  .navbar-nav {
    flex-direction: column;
  }
}
</style>

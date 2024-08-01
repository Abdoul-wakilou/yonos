<template>
  <div class="main-section">
    <h1>
      Simplifiez la gestion de vos assurances en les confiant au coach des
      assurés, Mr Yonos.
    </h1>
    <router-link to="/objectif" class=""><button class="btn-custom-section btn">Commencer</button></router-link>
  </div>
</template>

<script>
export default {
  name: "BodyComponent",
};
</script>

<style scoped>
    /* CSS pour le corps de la page */
    .main-section {
      position: relative;
      background: #f2e5f2;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: calc(100vh - 100px);
    }
    .main-section h1 {
      text-align: center;
      width: 650px;
      letter-spacing: 0px;
      color: #993399;
      margin: 0 auto;
      font-weight: bold;
    }
    .main-section .btn-custom-section {
      background: #ffcc66 ;
      border: 1px solid #ffcc66;
      border-radius: 50px;
      color: black;
      display: flex;
      width: 250px;
      height: 50px;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      margin-top: 50px;
    }
</style>

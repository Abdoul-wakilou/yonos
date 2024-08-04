<template>
    <div>
      <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #993399; height: 100px;">
        <div class="container-fluid">
          <router-link class="navbar-brand" to="/">
            <img src="../assets/img/logo-blanc.png" alt="Logo" style="height: 80px;">
          </router-link>
          <div class="collapse navbar-collapse justify-content-center">
            <span class="navbar-text text-white">
              Assurance Score
            </span>
          </div>
        </div>
      </nav>
      <div class="result-page">
        <h2>Votre assurance score est de <span :style="{ color: getScoreColor(score) }">{{ score }}</span></h2>
        <p style="font-size: 18px; margin-bottom: 30px;">D'après vos réponses, il semble que votre niveau de couverture d'assurance soit limité. Nous vous encourageons à renforcer votre protection assurantielle.</p>
        <div class="gauge-container">
          <svg viewBox="0 0 200 100" width="30%">
            <path d="M10 90 A80 80 0 0 1 110 10" fill="none" stroke="#ff0000" stroke-width="20" stroke-dasharray="45 135" />
            <path d="M110 10 A80 80 0 0 1 190 90" fill="none" stroke="#ed7d31" stroke-width="20" stroke-dasharray="45 90" />
            <path d="M190 90 A80 80 0 0 1 10 90" fill="none" stroke="#92d050" stroke-width="20" stroke-dasharray="45 45" />
            <path d="M10 90 A80 80 0 0 1 110 10" fill="none" stroke="#00b050" stroke-width="20" stroke-dasharray="45 0" />
            <circle :cx="pointerPosition.x" :cy="pointerPosition.y" r="5" fill="purple" />
            <line :x1="pointerCenter.x" :y1="pointerCenter.y" :x2="pointerPosition.x" :y2="pointerPosition.y" stroke="purple" stroke-width="2" />
          </svg>
          <div class="labels">
            <span class="label excellent">Excellent</span>
            <span class="label good">Bien</span>
            <span class="label intermediate">Intermédiaire</span>
            <span class="label weak">Faible</span>
          </div>
        </div>
        <div class="yellow-band"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ResultComponent',
    data() {
      return {
        score: 266 // Définir un score constant
      };
    },
    computed: {
      pointerPosition() {
        const angle = (this.score / 500) * 180;
        const radians = angle * (Math.PI / 180);
        const radius = 80;
        const x = 100 + radius * Math.cos(radians);
        const y = 90 - radius * Math.sin(radians);
        return { x, y };
      },
      pointerCenter() {
        return { x: 100, y: 90 };
      }
    },
    methods: {
      getScoreColor(score) {
        if (score >= 375) return 'green';
        if (score >= 250) return 'lightgreen';
        if (score >= 125) return 'orange';
        return 'red';
      }
    }
  };
  </script>
  
  <style scoped>
  .navbar-text {
    font-size: 1.5rem;
    font-weight: bold;
  }
  .result-page {
    text-align: center;
    margin-top: 50px;
  }
  
  .result-page h2 {
    font-size: 24px;
    margin-bottom: 10px;
    color: #993399;
    font-weight: bold;
  }
  
  .result-page p {
    font-size: 18px;
    color: #000;
    margin-bottom: 30px;
  }
  
  .gauge-container {
    position: relative;
    height: 200px;
    margin: 20px auto;
  }
  
  .labels {
    position: absolute;
    top: 70px; /* Ajustez cette valeur selon vos besoins */
    left: 50%;
    transform: translateX(-50%);
  }
  
  .label {
    position: absolute;
    color: white;
    font-weight: bold;
  }
  
  .excellent {
    left: 10%;
    top: -25px;
  }
  
  .good {
    left: 40%;
    top: -25px;
  }
  
  .intermediate {
    left: 70%;
    top: -25px;
  }
  
  .weak {
    left: 90%;
    top: -25px;
  }
  
  .yellow-band {
    width: 100%;
    height: 50px;
    background-color: #ffcc66;
    margin-top: 50px;
  }
  </style>
  



  ////////////////////////////////////////////////////////////////



  <template>
    <div>
      <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #993399; block-size: 100px;">
        <div class="container-fluid">
          <router-link class="navbar-brand" to="/">
            <img src="../assets/img/logo-blanc.png" alt="Logo" style="block-size: 80px;">
          </router-link>
          <div class="collapse navbar-collapse justify-content-center">
            <span class="navbar-text text-white">
              Assurance Score
            </span>
          </div>
        </div>
      </nav>
      <div class="result-page">
        <h2 class="p-3">Votre assurance score est de <span>{{ score }}</span></h2>
        <p style="font-size: 18px; margin-block-end: 30px;">
          D’après vos réponses, il semble que votre niveau de couverture d’assurance soit limité. <br>
          Nous vous encourageons à renforcer votre protection assurantielle.
        </p>
  
        <div id="chartdiv">
          <!-- Point central et flèche vers la section faible -->
  <!--         
          <div class="pointer-line"></div>
          <div class="pointer-center"></div> -->
        </div>
        <div class="yellow-band">
          <router-link to="/mon-compte">
            <button class="account-button">Accéder à votre compte</button>
          </router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
    import * as am5 from "@amcharts/amcharts5";
    import * as am5percent from "@amcharts/amcharts5/percent";
    import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
  
    export default {
      name: 'ResultatComponent',
      data() {
        return {
          score: 266 // Définir un score constant
        };
      },
      mounted() {
        am5.ready(() => {
          var root = am5.Root.new("chartdiv");
  
          root.setThemes([
            am5themes_Animated.new(root)
          ]);
  
          var chart = root.container.children.push(am5percent.PieChart.new(root, {
            startAngle: 180,
            endAngle: 360,
            layout: root.horizontalLayout,
            innerRadius: am5.percent(50)
          }));
  
          var series = chart.series.push(am5percent.PieSeries.new(root, {
            startAngle: 180,
            endAngle: 360,
            valueField: "value",
            categoryField: "category",
            alignLabels: false
          }));
  
          series.states.create("hidden", {
            startAngle: 180,
            endAngle: 180
          });
  
          series.slices.template.setAll({
            cornerRadius: 5,
            labelText: "{category}",
            labelFill: am5.color(0xFFFFFF) // Texte blanc
          });
  
          series.ticks.template.setAll({
            forceHidden: true
          });
  
          series.data.setAll([
            { value: 25, category: "Excellent" },
            { value: 25, category: "Bon" },
            { value: 25, category: "Moyen" },
            { value: 25, category: "Faible" }
          ]);
  
          // Définir les couleurs des sections
          series.slices.template.adapters.add("fill", (fill, target) => {
            const index = target.dataItem.index;
            const colors = ["#00b050", "#92d050", "#ed7d31", "#ff0000"];
            return am5.color(colors[index]);
          });
  
          series.appear(1000, 100);
        });
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
      margin-block-start: 50px;
      position: relative;
    }
  
    .result-page h2 {
      font-size: 24px;
      margin-block-end: 10px;
      color: #000;
      font-weight: bold;
    }
  
    .result-page p {
      font-size: 18px;
      color: #c1c1c1;
      margin-block-end: 30px;
    }
  
    #chartdiv {
      width: 80%;
      height: 300px;
      margin: 0 auto;
      position: relative;
    }
  
    /* .pointer-center {
      position: absolute;
      width: 2px;
      height: 150px;
      background-color: black;
      left: 50%;
      transform: translateX(-50%);
      top: calc(50% - 50px);
      transform-origin: top;
      transform: rotate(45deg);
    }
  
    .pointer-line {
      position: absolute;
      width: 30px;
      height: 30px;
      background-color: black;
      border-radius: 50%;
      left: 50%;
      transform: translateX(-50%);
      top: calc(50% - 50px);
    } */
  
    .yellow-band {
      width: 100%;
      height: 60px;
      background-color: #ffcc66;
      position: absolute;
      bottom: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
    .account-button {
      background-color: white;
      color: #993399;
      border: none;
      border-radius: 30px;
      padding: 10px 20px;
      font-size: 18px;
      cursor: pointer;
    }
  
    @media (max-width: 768px) {
      .yellow-band {
      width: 100%;
      height: 100px;
      background-color: #ffcc66;
      position: absolute;
      bottom: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
    }
    #chartdiv {
      width: 100%;
      height: 300px;
      margin: 0 auto;
      position: relative;
    }
    }
  </style>
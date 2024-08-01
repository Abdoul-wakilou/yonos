<template>
    <div>
      <NavbarComponent class="navbar"></NavbarComponent>
      <div class="calendar-container">
        <div class="sidebar">
          <div class="menu-item" @click="setSection('date')">
            <span class="menu-icon">📅</span>
            Date et Heure
            <span :class="{'active': currentSection === 'date'}" class="status-dot"></span>
          </div>
          <div class="menu-item" @click="setSection('info')">
            <span class="menu-icon">👤</span>
            Vos informations
            <span :class="{'active': currentSection === 'info'}" class="status-dot"></span>
          </div>
          <div class="menu-item" @click="setSection('payment')">
            <span class="menu-icon">💳</span>
            Paiements
            <span :class="{'active': currentSection === 'payment'}" class="status-dot"></span>
          </div>
        </div>
        <div class="content">
          <div v-if="currentSection === 'date'">
            <div class="date-header">
              <select v-model="currentMonth">
                <option v-for="(month, index) in months" :key="index" :value="index">{{ month }}</option>
              </select>
              <select v-model="currentYear">
                <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
              </select>
            </div>
            <table class="calendar">
              <thead>
                <tr>
                  <th colspan="7">{{ months[currentMonth] }} {{ currentYear }}</th>
                </tr>
                <tr>
                  <th>LUN</th>
                  <th>MAR</th>
                  <th>MER</th>
                  <th>JEU</th>
                  <th>VEN</th>
                  <th>SAM</th>
                  <th>DIM</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(week, weekIndex) in calendarData" :key="weekIndex">
                  <td v-for="(day, dayIndex) in week" :key="dayIndex" @click="selectDate(day)" :class="{'selected': selectedDate === day}">
                    {{ day }}
                  </td>
                </tr>
              </tbody>
            </table>
            <button class="continue-button" @click="currentSection = 'info'">Continuer</button>
          </div>
          <InfoSection v-if="currentSection === 'info'" @continue="currentSection = 'payment'" />
          <PaymentSection v-if="currentSection === 'payment'" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import NavbarComponent from "./NavbarComponent.vue";
  
  const InfoSection = {
    name: "InfoSection",
    template: `
      <div>
        <p>Remplissez vos informations personnelles :</p>
        <form @submit.prevent="$emit('continue')">
          <div>
            <label>Pays</label>
            <select>
              <option value="fr">France</option>
              <option value="us">USA</option>
              <option value="de">Allemagne</option>
              <!-- autres options -->
            </select>
          </div>
          <div>
            <label>Nom</label>
            <input type="text" required />
          </div>
          <div>
            <label>Prénom</label>
            <input type="text" required />
          </div>
          <!-- autres champs de formulaire -->
          <button type="submit">Continuer</button>
        </form>
      </div>
    `
  };
  
  const PaymentSection = {
    name: "PaymentSection",
    template: `
      <div>
        <p>Renseignez vos informations de paiement :</p>
        <form>
          <div>
            <label>Numéro de carte</label>
            <input type="text" required />
          </div>
          <div>
            <label>Date d'expiration</label>
            <input type="text" required />
          </div>
          <div>
            <label>CVV</label>
            <input type="text" required />
          </div>
          <button type="submit">Payer</button>
        </form>
      </div>
    `
  };
  
  export default {
    name: "CalendrierComponent",
    components: {
      NavbarComponent,
      InfoSection,
      PaymentSection,
    },
    data() {
      return {
        currentSection: 'date',
        selectedDate: null,
        currentMonth: new Date().getMonth(),
        currentYear: new Date().getFullYear(),
        months: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
        years: Array.from({ length: 21 }, (_, i) => new Date().getFullYear() - 10 + i),
        calendarData: this.generateCalendarData(new Date().getFullYear(), new Date().getMonth())
      };
    },
    watch: {
      currentMonth(newMonth) {
        this.calendarData = this.generateCalendarData(this.currentYear, newMonth);
      },
      currentYear(newYear) {
        this.calendarData = this.generateCalendarData(newYear, this.currentMonth);
      }
    },
    methods: {
      setSection(section) {
        this.currentSection = section;
      },
      selectDate(day) {
        if (day) {
          this.selectedDate = day;
        }
      },
      generateCalendarData(year, month) {
        //const firstDay = new Date(year, month, 1).getDay();
        const lastDate = new Date(year, month + 1, 0).getDate();
        const calendar = [];
        let week = [];
        for (let i = 1; i <= lastDate; i++) {
          if (week.length < 7) {
            week.push(i);
          } else {
            calendar.push(week);
            week = [i];
          }
        }
        if (week.length > 0) calendar.push(week);
        return calendar;
      }
    }
  };
  </script>
  
  <style scoped>
  .calendar-container {
    display: flex;
    margin-top: 50px;
    padding: 20px;
  }
  .sidebar {
    background-color: #2c3e50; /* couleur bleue foncée */
    width: 200px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .menu-item {
    color: white;
    cursor: pointer;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
  }
  .menu-icon {
    margin-right: 10px;
  }
  .status-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: gray;
    margin-left: 10px;
  }
  .status-dot.active {
    background-color: green; /* bouton actif vert */
  }
  .content {
    flex: 1;
    padding: 20px;
  }
  .calendar {
    width: 100%;
    border-collapse: collapse;
    text-align: center;
  }
  .calendar th, .calendar td {
    border: 1px solid #ddd;
    padding: 10px;
    cursor: pointer;
  }
  .calendar th {
    background-color: #f4f4f4;
  }
  .calendar td.selected {
    background-color: #2c3e50;
    color: white;
  }
  .continue-button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #2c3e50;
    color: white;
    border: none;
    cursor: pointer;
  }
  .date-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .date-header select {
    padding: 5px;
  }
  
  @media (max-width: 768px) {
    .calendar-container {
      flex-direction: column;
    }
    .sidebar {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      padding: 10px 0;
    }
    .content {
      padding: 10px;
    }
  }
  </style>
  
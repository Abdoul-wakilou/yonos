<template>
    <div>
        <NavbarComponent class="navbar"></NavbarComponent>
        <div class="row calendar-container">
            <div class="col-md-2 d-none d-md-block sidebar">
                <div class="menu-item" @click="setSection('date')">
                    <span class="menu-icon">📅</span>
                    Date et Heure
                    <span :class="{'active': currentSection === 'date'}" class="status-dot"></span>
                </div>
                <div class="menu-item" @click="setSection('info')">
                    <span class="menu-icon"><i class="fa fa-circle-user"></i></span>
                    Vos informations
                    <span :class="{'active': currentSection === 'info'}" class="status-dot"></span>
                </div>
                <div class="menu-item" @click="setSection('payment')">
                    <span class="menu-icon">💳</span>
                    Paiements
                    <span :class="{'active': currentSection === 'payment'}" class="status-dot"></span>
                </div>
                <div class="contact">
                    <hr>
                    <p>Contact</p>
                    <hr>
                </div>
            </div>
            <div class="col-md-7 col-sm-12 content">
                <div v-if="currentSection === 'date'" class="date-section">
                    <div class="calendar-column">
                        <div class="date-header">
                            <div class="date-text">
                                <p>Date et Heure</p>
                            </div>
                            <div class="date-ligne">
                                <span class="mois">{{ months[currentMonth] }}</span>
                                <span class="btn annee">{{ currentYear }}</span>
                                <span class="chevron">
                                    <button @click="prevMonth"><i class="fa fa-chevron-left"></i></button>
                                    <button @click="nextMonth"><i class="fa fa-chevron-right"></i></button>
                                </span>
                            </div>
                        </div>
                        <div class="lieu">
                            <p class="fuseau-horaire"><span class="btn fuseau-horairee">Europe/Paris</span></p>
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
                                    <td v-for="(day, dayIndex) in week" :key="dayIndex" @click="selectDate(day)"
                                        :class="{'selected': selectedDate === day}">
                                        {{ day }}
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <div class="jour">
                            <p class="journe-horaire"><span class="btn fuseau-horairee">{{ selectedDate ? selectedDate +
                                    '/' + (currentMonth + 1) + '/' + currentYear : 'Sélectionnez une date' }}</span></p>
                        </div>
                        <!-- Boutons pour les plages horaires -->
                        <div class="time-slots">
                            <button v-for="(timeSlot, index) in timeSlots" :key="index"
                                :class="{'selected-time-slot': selectedTimeSlot === timeSlot}"
                                @click="selectTimeSlot(timeSlot)">
                                {{ timeSlot }}
                            </button>
                        </div>

                    </div>
                </div>
                <InfoSection v-if="currentSection === 'info'" @continue="currentSection = 'payment'" />
                <PaymentSection v-if="currentSection === 'payment'" />
            </div>
            <div class="col-md-3 col-sm-12 cart-column">
                <h2>Panier d’achat :</h2>
                <p>Coaching : Comprendre les concepts de base de l’assurance</p>
                <a href="/assurrance" class="add-product">+ Ajouter un produit</a>
                <div class="bouton">
                    <button class="continue-button" @click="redirectToInfo">Continuer</button>
                </div>
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
            ollll
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
                selectedTimeSlot: null,
                currentMonth: new Date().getMonth(),
                currentYear: new Date().getFullYear(),
                months: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
                years: Array.from({ length: 21 }, (_, i) => new Date().getFullYear() - 10 + i),
                calendarData: this.generateCalendarData(new Date().getFullYear(), new Date().getMonth()),
                timeSlots: ['17h à 18h', '18h à 19h', '12h à 13h']
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
            selectTimeSlot(slot) {
                this.selectedTimeSlot = slot;
            },
            generateCalendarData(year, month) {
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
            },
            prevMonth() {
                if (this.currentMonth === 0) {
                    this.currentMonth = 11;
                    this.currentYear--;
                } else {
                    this.currentMonth--;
                }
            },
            nextMonth() {
                if (this.currentMonth === 11) {
                    this.currentMonth = 0;
                    this.currentYear++;
                } else {
                    this.currentMonth++;
                }
            },
            redirectToInfo() {
                this.$router.push('/authentification');
            },
        }
    };
</script>

<style scoped>
    .calendar-container {
        display: flex;
        margin-block-start: 30px;
        padding: 20px;
        width: 90%;
        height: 80%;
    }

    .sidebar {
        background-color: #993399;
        /* couleur bleue foncée */
        margin-left: 50px;
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        text-align: center;
    }

    .menu-item {
        color: white;
        cursor: pointer;
        margin-block-end: 30px;
        display: flex;
        justify-content: center;
        width: 100%;
        align-items: center;
        background-color: #7b287b;
        padding: 30px;
        text-align: center;
    }

    .menu-icon {
        margin-inline-end: 10px;
    }

    .status-dot {
        inline-size: 10px;
        block-size: 10px;
        border-radius: 50%;
        background-color: #993399;
        margin-inline-start: 10px;
        padding: 2px;
    }

    .status-dot.active {
        background-color: green;
        /* bouton actif vert */
    }

    .contact {
        margin-top: 150px;

    }

    .contact p {
        color: #fff;

    }

    .content {
        display: flex;
        padding: 5px;
        width: 100%;
        border: 2px solid #993399;
        margin-right: 20px;
    }

    .date-section {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .date-text {
        font-weight: bold;
        font-size: 20px;
    }

    .date-ligne {
        font-weight: bold;
        font-size: 18px;
        display: flex;
        justify-content: space-between;
    }

    .date-ligne .annee {
        border: 1px solid #000;
        border-radius: 10px;
        background-color: #fff;
        font-weight: bold;
    }

    .chevron button {
        margin-right: 10px;
    }

    .date-ligne span {
        display: flex;
        padding-right: 30px;
        padding-left: 30px;
    }


    .lieu {
        text-align: center;
    }

    .fuseau-horairee {
        font-weight: bold;
        border-radius: 5px;
        background-color: #d4d4d4;
        margin-top: 10px;
    }

    .jour {
        text-align: center;
        padding: 10px;
    }

    .journe-horairee {
        font-weight: bold;
        border-radius: 5px;
        background-color: #d4d4d4;
    }

    .calendar-column {
        flex: 2;
    }

    .cart-column {
        flex: 1;
        padding: 20px;
        border: 1px solid #fff;
        background-color: #fff;
        text-align: center;
    }

    .cart-column h2 {
        position: relative;
        display: inline-block;
        color: #000;
        margin-top: 20px;
        margin-bottom: 10px;
        font-weight: bold;
        font-size: 20px;
    }

    .cart-column h2::after {
        content: '';
        position: absolute;
        left: 10%;
        bottom: -5px;
        width: 80%;
        height: 2px;
        background-color: #993399;
    }


    .bouton {
        margin-top: 45vh;
    }


    .add-product {
        display: inline-block;
        margin-block-start: 10px;
        color: #993399;
        text-decoration: underline;
        cursor: pointer;
    }

    .continue-button {
        margin-block-start: 20px;
        padding: 10px 20px;
        background-color: #ffcc66;
        border: none;
        cursor: pointer;
        border-radius: 25px;
        font-weight: bold;
        color: #993399;
    }

    .calendar {
        inline-size: 100%;
        margin-block-start: 20px;
        border-collapse: collapse;
    }

    .calendar th,
    .calendar td {
        padding: 10px;
        text-align: center;
        border: 1px solid #ddd;
        cursor: pointer;
    }

    .calendar td.selected {
        background-color: #993399;
        color: white;
    }

    .time-slots {
        display: flex;
        gap: 5px;
        /* Ajoute de l'espace entre les boutons */
        justify-content: center;
    }

    .time-slots button {
        padding: 5px 8px;
        /* Ajuste le padding pour une taille plus compacte */
        background-color: #fff;
        border: 1px solid #000;
        cursor: pointer;
        border-radius: 10px;
        font-size: 0.8em;
        /* Réduit légèrement la taille du texte */
        min-width: 80px;
        /* Définit une largeur minimale */
        text-align: center;
        margin-left: 20px;
        margin-right: 20px;
    }

    .time-slots button.selected-time-slot {
        background-color: #993399;
        /* Couleur de fond lorsque sélectionné */
        color: white;
        border: none;
    }

    .time-slots button:last-child {
        margin-inline-end: 0;
        /* Supprime la marge du dernier bouton */
    }


    @media (max-width: 768px) {
        .calendar-container {

            width: auto;
            /* Exemple d'ajustement */
            height: auto;
            /* Exemple d'ajustement */
        }

        .bouton {
            margin-top: 30px;
        }

        .navbar {
            z-index: 1000;
        }

        .content {
            margin-right: 0px;
        }
    }
</style>
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
                <!-- <div class="contact">
                    <hr>
                    <p>Contact</p>
                    <hr>
                </div> -->
            </div>
            <div class="row col-md-7 col-sm-12 content">
                <div class="col-12 iforma">
                    <span class="chevron"><button @click="redirectToPanier"><i
                                class="fa fa-chevron-left"></i></button></span>
                    <span class="informations">
                        <h2> Vos informations</h2>
                    </span>
                </div>
                <div class="col-12 form-container">
                    <form ref="userForm" @submit.prevent="submitForm">
                        <div class="form-group">
                            <div class="input-group">
                                <label for="prenom">*Prénom</label>
                                <input type="text" id="prenom" placeholder="Pascal" v-model="prenom" required />
                            </div>
                            <div class="input-group">
                                <label for="nom">*Nom</label>
                                <input type="text" id="nom" placeholder="Nolla" v-model="nom" required />
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="input-group">
                                <label for="email">*Email</label>
                                <input type="email" id="email" placeholder="pascalnolla@gmail.com" v-model="email"
                                    required />
                            </div>
                            <div class="input-group">
                                <label for="telephone">*Téléphone</label>
                                <input type="tel" id="telephone" placeholder="0615769076" v-model="telephone"
                                    required />
                            </div>
                        </div>

                        <div class="row form-group full-width">
                            <label class="col-12 label-textarea" for="problematique">*Quelle problématique
                                rencontrez-vous? N’hésitez pas à détailler un maximum</label>
                            <textarea class="col-12 textarea" id="problematique" v-model="problematique"
                                rows="4"></textarea>
                        </div>
                    </form>
                </div>
            </div>
            <div class="col-md-3 col-sm-12 cart-column">
                <h2>Panier d’achat :</h2>
                <p>Coaching : Comprendre les concepts de base de l’assurance</p>
                <a href="/assurrance" class="add-product">+ Ajouter un produit</a>
                <div class="bouton">
                    <button class="continue-button" @click="redirectToPaiement">Continuer</button>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    import NavbarComponent from "./NavbarComponent.vue";

    export default {
        name: "InformationComponent",
        components: {
            NavbarComponent,
        },
        data() {
            return {
                prenom: '',
                nom: '',
                email: '',
                telephone: '',
                problematique: ''
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
            redirectToPanier() {
                this.$router.push('/panier');
            },
            submitForm() {
                // Traitez les données du formulaire
                console.log("Formulaire soumis :", this.formData);

                // Rediriger vers la page d'authentification
                this.$router.push('/authentification');
            },
            triggerSubmit() {
                // Déclencher manuellement la soumission du formulaire
                this.$refs.userForm.submit();
            },
            redirectToPaiement() {
                this.$router.push('/paiement');
            },
        }
    };
</script>

<style scoped>
    .calendar-container {
        display: flex;
        margin-block-start: 30px;
        padding: 10px;
        width: 90%;
        height: fit-content;
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

    .chevron button {
        margin-right: 10px;
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

    .form-container {
        max-width: 600px;
        margin: auto;
        padding: 30px;
        background-color: #fff;
        justify-content: center;
        width: 100%;
    }

    .iforma {
        display: flex;
    }

    .iforma span {
        margin: 30px;
    }

    .iforma .chevron {
        background-color: #fff;
    }

    h2 {
        text-align: center;
        /*         margin-bottom: 20px; */
    }

    .form-group {
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
    }

    .input-group {
        display: flex;
        flex-direction: column;
        width: 48%;
    }

    label {
        margin-bottom: 5px;
        font-weight: bold;
    }

    label::after {
        content: "*";
        color: red;
        margin-left: 5px;
    }

    input,
    textarea {
        padding: 10px;
        border: 1px solid #c0c0c0;
        border-radius: 4px;
        font-size: 16px;
    }

    textarea {
        width: 100%;
    }

    .full-width {
        width: 100%;
    }

    @media screen and (max-width: 600px) {
        .form-group {
            flex-direction: column;
        }

        .input-group {
            width: 100%;
            margin-bottom: 10px;
        }
    }


    @media (max-width: 768px) {
        .calendar-container {
            width: auto;
            height: auto;

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
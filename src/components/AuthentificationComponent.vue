<template>
    <div>
        <NavbarComponent class="navbar"></NavbarComponent>
        <div class="row calendar-container">
            <div class="col-md-2 d-none d-md-block sidebar">
                <div class="menu-item">
                    <span class="menu-icon">📅</span>
                    Date et Heure
                    <span class="status-dot"></span>
                </div>
                <div class="menu-item">
                    <span class="menu-icon"><i class="fa fa-circle-user"></i></span>
                    Vos informations
                    <span class="status-dot"></span>
                </div>
                <div class="menu-item">
                    <span class="menu-icon">💳</span>
                    Paiements
                    <span class="status-dot"></span>
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
                    <div class="account-section">
                        <div class="row card-container">
                            <!-- "Pas Encore Inscrit(e)?" Block -->
                            <div class="col-md-6 col-sm-12 card-custom">
                                <div class="card-header text-center">
                                    PAS ENCORE INSCRIT(E)?
                                </div>
                                <div class="card-body text-center">
                                    <button class="btn btn-custom" @click="redirectToInscription">CREEZ VOTRE
                                        COMPTE</button>
                                </div>
                            </div>
                            <!-- "Déjà Inscrit(e)?" Block -->
                            <div class="col-md-6 col-sm-12 card-custom">
                                <div class="card-header text-center">
                                    DEJA INSCRIT(E)?
                                </div>
                                <div class="card-body text-center">
                                    <form method="post" action="">
                                        <div class="form-group">
                                            <input type="email" class="form-control form-control-custom" required
                                                placeholder="Adresse e-mail">
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control form-control-custom" required
                                                placeholder="Mot de passe">
                                        </div>
                                        <div class="form-group mot-passe">
                                            <a href="/">Mot de passe oublié ?</a>
                                        </div>
                                        <button type="submit" class="btn btn-custom">CONNEXION</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-12 cart-column">
                <h2>Panier d’achat :</h2>
                <p>Coaching : Comprendre les concepts de base de l’assurance</p>
                <a href="/coaching" class="add-product">+ Ajouter un produit</a>
                <!-- <div class="bouton">
                    <button class="continue-button" @click="triggerSubmit">Continuer</button>
                </div> -->
            </div>
        </div>
    </div>
</template>


<script>
    import NavbarComponent from "./NavbarComponent.vue";
    /*  import MonCompteComponent from "./MonCompteComponent.vue"; */


    export default {
        name: "AuthentificationComponent",
        components: {
            NavbarComponent,
            /*  MonCompteComponent, */
        },

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

    .account-section {
        display: flex;

        justify-content: center;
        align-items: center;

    }

    .card-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 50px;
        
    }

    .card-custom {
        flex: 1;
        background-color: #fff;
        border-radius: 15px;
        padding: 10px;

    }

    .card-header {
        background-color: #000;
        color: #fff;
        font-weight: bold;
        padding: 10px;
        margin-bottom: 30px;
    }

    .card-body {
        padding: 10px;
        border-radius: 15px;
        border: solid #c1c1c1;
    }

    .form-group {
        margin-block-end: 20px;
    }

    .form-control-custom {
        border-radius: 15px;
        padding: 10px;
        inline-size: 100%;
        text-align: center;
        margin-block-end: 10px;
    }

    .mot-passe {
        text-align: start;
        color: #706f6f;
        margin-block-end: 20px;
    }

    .mot-passe a {
        text-align: start;
        color: #706f6f;
        margin-block-end: 20px;
    }

    .btn-custom {
        background-color: #ffcc66;
        color: #993399;
        font-weight: bold;
        border: none;
        border-radius: 25px;
        padding: 10px 20px;
        inline-size: 100%;
        font-size: 15px;
    }

    .btn-custom:hover {
        background-color: #000;
        color: #fff;
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

    @media screen and (max-width: 600px) {}


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

        .card-container {
            flex-direction: column-reverse;
            inline-size: 100%;
            padding: 0 20px;
            /* Add padding to avoid using full screen width */
        }

        .card-custom {
            margin: 15px 0;
            inline-size: 100%;
            padding: 3px;
        }

    }
</style>
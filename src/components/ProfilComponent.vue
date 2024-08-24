<template>
    <div class="page">
        <div class="section">
            <div class="row">
                <div :class="['col-md-3 col-sm-12 sidebar', sidebarOpen ? 'open' : '']">
                    <div class="container-fluid">
                        <!-- Mobile Menu Toggle Button -->
                        <button class="menu-toggle d-md-none" @click="toggleSidebar">
                            ☰
                        </button>
                        <router-link to="/" class="navbar-brand">
                            <img src="../assets/img/logoofficiel.png" alt="Logo" class="img-fluid"
                                style="max-block-size: 100px;">
                        </router-link>
                    </div>
                    <div class="menu" v-show="sidebarOpen || !isMobile">
                        <ul class="navbar-nav mx-auto">
                            <li class="nav-item" style="border-bottom: 5px solid #993399; padding-bottom: 1px;">
                                <router-link to="/contexte" class="nav-link"
                                    :class="{ 'active-nav': isActive('/contexte') }">
                                    Contexte
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/objectif" class="nav-link"
                                    :class="{ 'active-nav': isActive('/objectif') }">
                                    Objectifs
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/assurrance" class="nav-link"
                                    :class="{ 'active-nav': isActive('/assurrance') }">
                                    Assurances
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/astuce" class="nav-link"
                                    :class="{ 'active-nav': isActive('/astuce') }">
                                    Astuces
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/coaching" class="nav-link"
                                    :class="{ 'active-nav': isActive('/coaching') }">
                                    Coachings
                                </router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="bouton mt-5" v-show="sidebarOpen || !isMobile">
                        <button class="btn bouton-sidebar">Déclarer une nouvelle situation</button>
                    </div>
                    <!-- <div class="user mt-5 mb-5" v-show="sidebarOpen || !isMobile">
                        <span class="user-name">{{ name }}</span>
                    </div> -->
                    <div class="user mt-5 mb-5" v-show="sidebarOpen || !isMobile">
                        <span class="user-name">
                            {{ name }}
                            <span class="status-indicatorr"></span>
                        </span>
                    </div>
                </div>
                <div class="col-md-9 col-sm-12 container">
                    <div class="navbar d-flex mb-5 justify-content-between">
                        <div class="score">Mon assurance score : 236</div>
                        <div class="menu">
                            <div class="icon d-flex align-items-center">
                                <span class="cart-icon mr-4">
                                    <img src="../assets/img/panier.png" class="img-fluid panier" alt="">
                                </span>
                                <button class="bouton-navbar">Déclarer une nouvelle situation</button>
                            </div>
                        </div>
                    </div>
                    <div class="section-main mt-5">
                        <div class="row d-flex row-main justify-content-center">
                            <div class="col-md-4 col-sm-12 devis">
                                <div class="titre-devis">
                                    <span>Mes Devis</span>
                                </div>
                                <div class="devis-liste">
                                    <ul>
                                        <li>- Retraite </li>
                                        <li>- Assurance vie</li>
                                        <li>- Smartphone</li>
                                        <li>- Assurance chien et chat</li>
                                        <li>- …</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-12 image-container">
                                <!-- <img src="../assets/img/diagramme2.png" class="img-fluid" alt="Image illustrative"> -->
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="901" height="301" viewBox="0 0 701 501">
                                    <image id="diagramme" data-name="Capture d’écran 2024-07-17 à 23.56.34" width="701" height="301" xlink:href="data:image/png;base64,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"/>
                                  </svg>
                            </div>
                            <div class="col-md-4 col-sm-12 contrats">
                                <div class="titre-contrat">
                                    <span>Mes Contrats</span>
                                </div>
                                <div class="contrat-liste">
                                    <ul>
                                        <li>- Santé </li>
                                        <li>- Résidence principale </li>
                                        <li>- Automobile </li>
                                        <li>- Assurance chien et chat</li>
                                        <li>- …</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-11 description text-center">
                            <p>D’après vos réponses, il semble que votre niveau de couverture d’assurance soit limité.
                                <br>Nous
                                vous encourageons à renforcer votre protection assurantielle.
                            </p>
                            <p class="chat float-right" style="margin-top:50px;"><span><i class="fa fa-comment-dots fa-4x"></i></span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<script>
    export default {
        name: 'ProfilComponent',
        data() {
            return {
                name: 'PN',
                sidebarOpen: false,
            };
        },
        computed: {
            isMobile() {
                return window.innerWidth < 768;
            }
        },
        methods: {
            toggleSidebar() {
                this.sidebarOpen = !this.sidebarOpen;
            },
            isActive(route) {
                return this.$route.path === route;
            },
        },
        watch: {
            isMobile(newVal) {
                if (!newVal) {
                    this.sidebarOpen = true;
                }
            }
        },
        mounted() {
            this.sidebarOpen = !this.isMobile;
        },
    }
</script>


<style scoped>
    .menu-toggle {
        background: none;
        border: none;
        font-size: 2rem;
        position: absolute;
        top: 1rem;
        left: 1rem;
        color: #993399;
        z-index: 11;
    }

    .menu {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .menu ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    .menu li {
        margin: 10px 0;
    }

    .menu a {
        color: black;
        font-weight: bold;
        text-decoration: none;
        padding: 10px;
        display: block;
    }

    .menu a.active-nav {
        border-bottom: 4px solid #993399;
    }

    .sidebar {
        justify-content: center;
        text-align: center;
        background-color: #ffcc66;
        border-inline-end: 4px solid #993399;
        transition: transform 0.3s ease;
        transform: translateX(-100%);
        position: relative;
        top: 0;
        bottom: 0;
        width: 80%;
        z-index: 10;
        height: 100%;
    }

    .sidebar.open {
        transform: translateX(0);
    }

    .bouton-sidebar {
        background-color: black;
        color: white;
        border-radius: 30px;
        padding: 20px;
        inline-size: 90%;
        border: none;
        margin-bottom: 50px;
        outline: none;
    }

    .nav-link {
        color: black;
        /* Couleur par défaut */
        text-decoration: none;
        /* Pas de soulignement par défaut */
    }

    .nav-link.active-nav {
        color: #993399;
        /* Couleur du texte actif */
        border-bottom: 2px solid #993399;
        /* Soulignement du lien actif */
    }


    .user-name {
        background-color: #993399;
        color: white;
        border-radius: 50%;
        padding: 40px;
        font-size: 20px;
        font-weight: bold;
    position: relative;
    }

    .status-indicatorr {
    width: 15px;
    height: 15px;
    background-color: #05a081;
    border-radius: 50%;
    position: absolute;
    top: 10px;
    right: 10px;
    border: 2px solid white;
}

    .active-nav {
        border-block-end: 4px solid #993399;
    }

    .row-main {
        padding: 20px;
        margin-top: 10vh;
    }

    .navbar {
        display: flex;
    }

    .score {
        font-weight: bold;
        color: black;
        font-size: 20px;
    }

    .bouton-navbar {
        background-color: #993399;
        color: white;
        font-weight: bold;
        padding: 20px;
        border-radius: 30px;
        border: none;
    }

    .titre-devis {
        font-weight: bold;
        color: #993399;
        font-size: 20px;
    }

    .devis-liste ul {
        list-style-type: none;
        padding-left: 0;
    }

    .devis-liste li {
        color: black;
        font-weight: bold;
    }

    .titre-contrat {
        font-weight: bold;
        color: black;
        font-size: 20px;
    }

    .contrat-liste ul {
        list-style-type: none;
        padding-left: 0;
    }

    .contrat-liste li {
        color: black;
        font-weight: bold;
    }

    .panier {
        inline-size: 50px;
        block-size: 50px;
    }

    .image-container {
        display: flex;
        padding-right: 100px;

    }

    .image-container img {}

    .chat {
        cursor: pointer;
        width: 40px;
        height: 40px;
        color: #993399;
    }

    .description {
        font-size: 18px;
        color: #c1c1c1;
        margin-block-end: 30px;
        text-align: center;
    }

    @media (max-width: 768px) {
        .image-container img {
            max-block-size: 150px;
        }

        .sidebar {
            transform: translateX(-100%);
            position: fixed;
            top: 0;
            bottom: 0;
            width: 80%;
        }
    }
</style>
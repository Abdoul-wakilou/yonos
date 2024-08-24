<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #993399; block-size: 100px;">
            <div class="container-fluid">
                <router-link class="navbar-brand" to="/">
                    <img src="../assets/img/logo-blanc.png" alt="Logo" style="block-size: 80px;">
                </router-link>
                <div class="collapse navbar-collapse justify-content-center">
                    <span class="navbar-text text-white">
                        Bienvenue sur le site de Mr.Yonos
                    </span>
                </div>
            </div>
        </nav>
        <div class="result-page">
            <h2>Inscrivez-vous et recevez votre diagnostic</h2>
            <div class="row mt-5">
                <div class="col-lg-6 col-sm-12">
                    <div class="form-group">
                        <label for="nom">Nom :</label>
                        <input type="text" class="form-control form-control-custom" id="nom" name="nom" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email :</label>
                        <input type="email" class="form-control form-control-custom" id="email" name="email" required>
                    </div>
                </div>
                <div class="col-lg-6 col-sm-12">
                    
                    <div class="mt-3 form-group">
                        <label for="prenom">Prénom :</label>
                        <input type="text" class="form-control form-control-custom" id="prenom" name="prenom" required>
                    </div>
                    <div class="mt-3 form-group">
                        <label for="password">Mot de passe :</label>
                        <input type="password" class="form-control form-control-custom" id="password" name="password" required>
                    </div>
                </div>
            </div>

            <div class="mt-4">
                <button type="submit" @click="redirectToResultat" class="next-button">SUIVANT</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'InscriptionNextComponent',
        methods: {
            redirectToResultat() {
                this.$router.push('/paiement');
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
        padding: 0 20px;
    }

    .result-page h2 {
        font-size: 24px;
        margin-bottom: 10px;
        color: #993399;
        font-weight: bold;
        position: relative;
        display: inline-block;
    }

    .result-page h2::after {
        content: '';
        display: block;
        height: 4px;
        background-color: #ffcc66;
        width: 80%;
        margin: 5px auto 0;
        border-radius: 2px;
        position: absolute;
        bottom: -5px;
        left: 50%;
        transform: translateX(-50%);
    }


    .form-group {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 50px;
    }

    .form-group label {
        margin-bottom: 5px;
        font-weight: bold;
        color: #c1c1c1;
    }

    .form-control-custom {
        border: none;
        border-bottom: 1px dotted #c1c1c1;
        border-radius: 0;
        padding: 5px;
        text-align: center;
        width: 100%;
        margin-bottom: 10px;
    }

    .next-button {
        background-color: #ffcc66;
        color: #993399;
        font-weight: bold;
        border: none;
        border-radius: 25px;
        padding: 15px 25px;
        font-size: 14px;

    }

    @media (min-width: 768px) {
        .result-page .form-group {
            flex-direction: row;
            justify-content: center;
        }

        .result-page .form-group label {
            width: 150px;
            text-align: right;
            margin-right: 10px;
        }

        .result-page .form-control-custom {
            width: auto;
            display: inline-block;
            text-align: left;
        }
    }
</style>

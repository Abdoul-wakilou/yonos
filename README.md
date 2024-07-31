# Installation et Exécution du Projet Vue.js

## Prérequis

Assurez-vous d'avoir installé les éléments suivants sur votre machine :

- [Node.js](https://nodejs.org) (version 12.0.0 ou supérieure)
- npm (Node Package Manager)

## Installation de Node.js et npm

### Windows

1. Allez sur le site officiel de Node.js : [https://nodejs.org](https://nodejs.org).
2. Téléchargez le programme d'installation pour Windows.
3. Exécutez le programme d'installation et suivez les instructions. Assurez-vous que l'option "Add to PATH" est cochée.
4. Pour vérifier l'installation, ouvrez une nouvelle fenêtre de terminal (ou Command Prompt) et exécutez :
    ```sh
    node -v
    npm -v
    ```
   Cela devrait afficher les versions de Node.js et npm installées.

### macOS

1. Allez sur le site officiel de Node.js : [https://nodejs.org](https://nodejs.org).
2. Téléchargez le programme d'installation pour macOS.
3. Exécutez le programme d'installation et suivez les instructions.
4. Pour vérifier l'installation, ouvrez une nouvelle fenêtre de terminal et exécutez :
    ```sh
    node -v
    npm -v
    ```

### Linux

1. Ouvrez une fenêtre de terminal.
2. Exécutez les commandes suivantes pour installer Node.js et npm via le gestionnaire de paquets :
    ```sh
    sudo apt update
    sudo apt install nodejs npm
    ```
3. Pour vérifier l'installation, exécutez :
    ```sh
    node -v
    npm -v
    ```

## Cloner le dépôt GitHub

Ouvrez une fenêtre de terminal (ou Command Prompt sous Windows) et exécutez la commande suivante pour cloner le dépôt :

```sh
git clone https://github.com/Abdoul-wakilou/yonos.git
```

# Naviguer dans le dossier du projet

```sh
cd yonos
```

# Installer les dépendances

```sh
npm install
```

# Lancer le projet en mode développement

```sh
npm run serve
```

#!/bin/bash

# Vérifier si Node.js est installé
if ! command -v node &> /dev/null
then
    echo "Node.js n'est pas installé. Veuillez installer Node.js avant de continuer."
    exit
fi

# Vérifier si les dépendances sont installées
if [ ! -d "node_modules" ]; then
    echo "Installation des dépendances..."
    npm install
fi

# Demander à l'utilisateur de saisir le chemin du répertoire des images
read -p "Veuillez entrer le chemin du répertoire des images : " PHOTO_FOLDER

# Exporter le chemin comme variable d'environnement
export PHOTO_FOLDER

# Démarrer le serveur
echo "Démarrage du serveur..."
npm start

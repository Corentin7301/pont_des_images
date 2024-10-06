@echo off

:: Vérifier si Node.js est installé
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo Node.js n'est pas installé. Veuillez installer Node.js avant de continuer.
    exit /b
)

:: Vérifier si les dépendances sont installées
if not exist "node_modules" (
    echo Installation des dépendances...
    npm install
)

:: Demander à l'utilisateur de saisir le chemin du répertoire des images
set /p PHOTO_FOLDER="Veuillez entrer le chemin du répertoire des images : "

:: Exporter le chemin comme variable d'environnement
set PHOTO_FOLDER=%PHOTO_FOLDER%

:: Démarrer le serveur
echo Démarrage du serveur...
npm start

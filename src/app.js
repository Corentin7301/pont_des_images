const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');
const { getLocalIpAddress } = require('./utils/ipUtils');
const { getPhotoFiles } = require('./utils/fileUtils');
const QRCode = require('qrcode');
const archiver = require('archiver');
require('dotenv').config();


const app = express();
const PHOTO_FOLDER = process.env.PHOTO_FOLDER || path.join(__dirname, 'default_directory');

// Configuration de Handlebars
app.engine('handlebars', engine({
    partialsDir: path.join(__dirname, 'views', 'partials'),
    helpers: {
        json: (context) => JSON.stringify(context)
    }
}));
app.set('view engine', 'handlebars');

// Définit le répertoire des vues à 'src/views'
app.set('views', path.join(__dirname, 'views'));

// Servir les fichiers statiques
app.use('/photos', express.static(PHOTO_FOLDER));
app.use(express.static(path.join(__dirname, '../public'))); // Note le chemin vers 'public'


// Route principale qui liste les fichiers et les envoie au template
app.get('/', (req, res) => {
    getPhotoFiles(PHOTO_FOLDER, (err, files) => {
        if (err) {
            res.status(500).send('Erreur lors de la lecture du répertoire');
            return;
        }
        const serverUrl = `http://${getLocalIpAddress()}:${PORT}`;
        const options = {
            color: {
                dark: '#FFF',
                light: '#0000'
            }
        };
        QRCode.toDataURL(serverUrl, options, (err, qrCodeUrl) => {
            if (err) {
                res.status(500).send('Erreur lors de la génération du QR code');
                return;
            }
            res.render('galleryPage', { files, serverUrl, qrCodeUrl });
        });
    });
});

app.get('/download-zip', (req, res) => {
    const archive = archiver('zip', {
        zlib: { level: 9 } // Compression maximale
    });

    res.attachment('photos.zip');

    archive.on('error', (err) => {
        throw err;
    });

    // Ajouter tous les fichiers du dossier au ZIP
    archive.directory(PHOTO_FOLDER, false);

    // Envoyer le ZIP au client
    archive.pipe(res);
    archive.finalize();
});

// Démarre le serveur
const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
    const localIp = getLocalIpAddress();
    console.log(`Serveur en écoute sur http://localhost:${PORT}`);
    console.log(`Ou essayez d'accéder via IP : http://${localIp}:${PORT}`);
});

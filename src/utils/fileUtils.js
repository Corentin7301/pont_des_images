const fs = require('fs');
const path = require('path');

// Fonction pour obtenir les fichiers photo avec leur taille
function getPhotoFiles(folderPath, callback) {
    fs.readdir(folderPath, (err, files) => {
        if (err) {
            return callback(err);
        }

        const photoFiles = files.map(file => {
            const filePath = path.join(folderPath, file);
            const stats = fs.statSync(filePath); // Récupérer les informations sur le fichier
            return {
                name: file,
                size: formatFileSize(stats.size)
            };
        });

        callback(null, photoFiles);
    });
}

function formatFileSize(size) {
    const units = ['o', 'Ko', 'Mo', 'Go', 'To'];
    let index = 0;
    let formattedSize = size;

    while (formattedSize >= 1024 && index < units.length - 1) {
        formattedSize /= 1024;
        index++;
    }

    return `${formattedSize.toFixed(2)} ${units[index]}`; // Format avec 2 décimales
}

module.exports = { getPhotoFiles, formatFileSize };
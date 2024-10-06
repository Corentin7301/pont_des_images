const os = require('os');

// Fonction pour récupérer l'adresse IP locale
function getLocalIpAddress() {
    const interfaces = os.networkInterfaces();
    for (const name of Object.keys(interfaces)) {
        for (const iface of interfaces[name]) {
            // Ignore les interfaces internes (localhost) et IPv6
            if (iface.family === 'IPv4' && !iface.internal) {
                return iface.address;
            }
        }
    }
    return '127.0.0.1'; // Par défaut, retourne localhost si aucune IP n'est trouvée
}

module.exports = {
    getLocalIpAddress
};

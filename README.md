# Pont des Images
## English
[Version française](#français)

## Introduction

**Pont des Images** is a simple application that allows you to create a gateway for transferring and viewing your images on a local server. With this tool, you can easily access your photos from any device on the same network.

## Installation

### Prerequisites

To use this application, you must have **Node.js** installed on your machine. Follow the instructions below to install Node.js based on your operating system:

- **Windows**:
  1. Download the installer from the official [Node.js](https://nodejs.org/) website.
  2. Run the downloaded `.msi` file and follow the installation instructions.

- **macOS**:
  1. You can install Node.js via [Homebrew](https://brew.sh/) using the command:

     ```bash
     brew install node
     ```

  2. Alternatively, download the installer from the official [Node.js](https://nodejs.org/) website.

- **Linux**:
  - Use your package manager. For Ubuntu, for example:

    ```bash
    sudo apt update
    sudo apt install nodejs npm
    ```

### Retrieving the Project

To retrieve the project, you can use one of the following methods:

1. **Via Git**:
   Open a terminal and run the following command:

   ```bash
   git clone https://github.com/Corentin7301/pont_des_images.git
   ```

2. **Downloading the Sources**:
   Go to the GitHub page of the project and click on the "Code" button, then select **"Download ZIP"**. Extract the downloaded file afterward.

### Installing Dependencies

Navigate to the project folder in the terminal and run the following command to install dependencies:

```bash
npm install
```

### Configuration

Run the following script to start the server:

- **macOS/Linux**:

#### Permissions (Linux/macOS)

If you are using **macOS** or **Linux**, you may need to make the `start_server.sh` script executable ONE TIME. To do this, open a terminal and run the following command:

```bash
chmod +x start_server.sh
```

After you can run:
  ```bash
  ./start_server.sh
  ```

If you can't or don't want, run `bash start_server.sh` in the **Pont des Images** directory.

- **Windows**:
  Double-click on `start_server.bat`.

During execution, you will be prompted to enter the path to the image directory (without '' or "" like: */Volumes/User/Photo/My-photos/My-holidays*).

### Port Configuration

You can also change the port on which the server listens by modifying the `.env` file. By default, the server listens on port `8080`.

### Running the Server

The server will be launched, and you can access it from a web browser at the following address:

```
http://localhost:8080
```

You will be able to view and download your images.

## Conclusion

**Pont des Images** is a handy tool for facilitating image sharing and viewing. Feel free to explore and make your own enhancements!

---

# Pont des Images
## Français

[Version anglaise](#English)

## Introduction

**Pont des Images** est une application simple qui permet de créer une passerelle pour transférer et visualiser vos images sur un serveur local. Grâce à cet outil, vous pouvez facilement accéder à vos photos depuis n'importe quel appareil sur le même réseau.

## Installation

### Prérequis

Pour utiliser cette application, vous devez avoir **Node.js** installé sur votre machine. Suivez les instructions ci-dessous pour installer Node.js selon votre système d'exploitation :

- **Windows**:
  1. Téléchargez l'installateur depuis le site officiel [Node.js](https://nodejs.org/).
  2. Exécutez le fichier `.msi` téléchargé et suivez les instructions d'installation.

- **macOS**:
  1. Vous pouvez installer Node.js via [Homebrew](https://brew.sh/) en utilisant la commande :

     ```bash
     brew install node
     ```

  2. Alternativement, téléchargez l'installateur depuis le site officiel [Node.js](https://nodejs.org/).

- **Linux**:
  - Utilisez votre gestionnaire de paquets. Pour Ubuntu, par exemple :

    ```bash
    sudo apt update
    sudo apt install nodejs npm
    ```

### Récupération du projet

Pour récupérer le projet, vous pouvez utiliser l'une des méthodes suivantes :

1. **Via Git** :
   Ouvrez un terminal et exécutez la commande suivante :

   ```bash
   git clone https://github.com/Corentin7301/pont_des_images.git
   ```

2. **Téléchargement des sources** :
   Rendez-vous sur la page GitHub du projet et cliquez sur le bouton "Code", puis sélectionnez **"Download ZIP"**. Décompressez ensuite le fichier téléchargé.

### Installation des dépendances

Accédez au dossier du projet dans le terminal et exécutez la commande suivante pour installer les dépendances :

```bash
npm install
```

### Configuration

Exécutez le script suivant pour démarrer le serveur :

- **macOS/Linux** :

#### Permissions (Linux/macOS)

Si vous utilisez **macOS** ou **Linux**, vous devrez rendre le script `start_server.sh` exécutable UNE FOIS. Pour ce faire, ouvrez un terminal et exécutez la commande suivante :

```bash
chmod +x start_server.sh
```

Ensuite, vous pouvez exécuter :

```bash
./start_server.sh
```

Si vous ne pouvez pas ou ne souhaitez pas, exécutez `bash start_server.sh` dans le répertoire **Pont des Images**.

- **Windows** :
  Double-cliquez sur `start_server.bat`.

Lors de l'exécution, vous serez invité à entrer le chemin du répertoire des images (sans '' ou "" comme : */Volumes/User/Photo/My-photos/My-holidays*).

### Configuration du port

Vous pouvez également changer le port sur lequel le serveur écoute en modifiant le fichier `.env`. Par défaut, le serveur écoute sur le port `8080`.

### Exécution du serveur

Le serveur sera lancé, et vous pourrez y accéder depuis un navigateur web à l'adresse suivante :

```
http://localhost:8080
```

Vous pourrez ainsi visualiser et télécharger vos images.

## Conclusion

**Pont des Images** est un outil pratique pour faciliter le partage et la visualisation d'images. N'hésitez pas à explorer et à apporter vos propres améliorations !

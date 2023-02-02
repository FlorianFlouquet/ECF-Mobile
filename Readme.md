# Localib Mobile

## Infos génerals
Ceci est une simple application mobile pour l'entreprise Localib

## Pré-requis

- IDE 
- Ionic (React)

## Installation

En premier lieu, clonez le projet mobile et le projet back-end
```bash
git clone https://github.com/FlorianFlouquet/ECF-Mobile.git
git clone https://github.com/FlorianFlouquet/ECF_Back.git
cd ECF-Mobile
```

Ensuite installez les packages
```bash
npm i
```

Lancez le back (référez-vous à la [doc](https://github.com/FlorianFlouquet/ECF_Back)) et tapez la commande suivant pour lancer l'appli mobile sur le navigateur
```bash
npm run start
```

## Build

Instruction à suivre pour lancer le projet en mode production. ( /!\ le back ne sera pas relié à l'application)

1. Ouvrez le projet dans Android Studio

2. Dans le terminal tapez les commandes suivantes: 
```bash
ionic build
npm install @capacitor/core --save
ionic capacitor add android
npx cap open android
```
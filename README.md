
# CryptoFun

Bienvenue sur le site CryptoFun, réalisé par Quentin GIBON et Lucas LEVY.

-----------------
## Dependencies

Server: 
- Dotenv: permet d'acceder au fichier .env
- Express: permet de gérer la partie de routing
- Isomorphic fetch: permet d'assurer la consistence de la fonction fetch pour n'importe quel navigateur
- Jsonwebtoken: permet de gérer les connexions des utilisateurs à l'aide de tokens
- Token utils: permet d'effectuer des opérations sur les tokens
- bcrypt : permet d'utiliser des fonctions de hashage pour le password
- cors : utile pour desactiver les restrictions cors sur les fetch api
- mongodb et mongoose : connection à la bdd mongoDB sur mongoAtlas
- node-sass et sass-loader : permet de compiler Sass en CSS

-----------------
## Lancement

Pour lancer la partie serveur, se placer le dossier `server` et taper la commande `npm run dev`.  

Pour lancer la partie client, se placer le dossier `client` et taper la commande `npm start`.  
Puis cliquer sur l'adresse du site en local qui est donnée.

-----------------

## Principe

Ce site a pour objectif de faire découvrir le monde des cryptommonaies et de la blockchain à l'utilisateur. Il intègre également un petit 'jeux de trading' pour impliquer l'utilisateur dans cet univers et lui permettre de tester ses capacités de trader.  

### Page d'accueil

Simple accueil du site.  

### Page Comprendre

Cette page contient des cours et informations utiles à la compréhension des cryptos, divi
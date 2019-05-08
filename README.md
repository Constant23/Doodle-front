# [APPLICATION DE TYPE DOODLE "DOODLE CST"](https://github.com/Constant23/Doodle-front)

### Etudiant : Constant LANGNITO

## Context du projet 

ce projet est un projet d'école pour mettre en application les differentes technologies vu en cours. 

c'est un projet Angular 7 qui est se connecte avec une API Rest developpée avec Java (JPA) [ici](https://github.com/Constant23/tpjpa2019sir)

### Quelques regles metier de l'application :

-   Un utilisateur peut créer un ou plusieurs sondages
-   Un sondage est créé par un utilisateur
-   Une sondage des propositions
-   Un proposition peut être de type date, de type lieu ou de type date et lieu(ce qui explique l'héritage)
-   Un utilisateur peut voter pour un proposition
-   avant la réunion les participants sont invités par un lien unique pour renseigner leur préférence et allergie

### Ci dessous le diagramme de classe 

[![SB Admin 2 Preview](https://github.com/Constant23/Doodle-front/blob/master/src/assets/capture/DC.PNG)](https://github.com/Constant23/Doodle-front/blob/master/src/assets/capture/DC.PNG)

## Installation 

-  cloner le projet 
-  exécuter la commande :  npm install --save-dev @angular-devkit/build-angular
- ng serve

## Pour populer base de données 

vider la base doodle créée par l'API et exécuter ce script [doodle.sql](https://github.com/Constant23/Doodle-front/blob/master/dooble.sql)

## Capture d'ecran du rendu 
-   Page d'inscription 

[![](https://github.com/Constant23/Doodle-front/blob/master/src/assets/capture/1.PNG)](https://github.com/Constant23/Doodle-front/blob/master/src/assets/capture/1.PNG)

-   Page de connexion 

Pour des raisons de simplicité l'utilisateur se connecte juste avec son email

[![](https://github.com/Constant23/Doodle-front/blob/master/src/assets/capture/2.PNG)](https://github.com/Constant23/Doodle-front/blob/master/src/assets/capture/2.PNG)

-   Page d'accueil
Dans cette application l'utilisateur peut :

-- Crer un dooble 

-- Participer à un doodle 

-- Voir la liste de ces doodles 


[![](https://github.com/Constant23/Doodle-front/blob/master/src/assets/capture/3.PNG)](https://github.com/Constant23/Doodle-front/blob/master/src/assets/capture/3.PNG)

-   Page de création d'un sondage  

Pour créer un sondage l'utilisateur choisit le type de sondage (date, lieu ou date et lieu), il renseigne le titre, le résumé, il ajoute la liste des propositions de sondage. 

[![](https://github.com/Constant23/Doodle-front/blob/master/src/assets/capture/4.PNG)](https://github.com/Constant23/Doodle-front/blob/master/src/assets/capture/4.PNG)

-   Page liste de mes sondages 

sur la liste de ces sondages proposés il peut voir le detail d'un sondage pour valider une proposition

[![](https://github.com/Constant23/Doodle-front/blob/master/src/assets/capture/5.PNG)](https://github.com/Constant23/Doodle-front/blob/master/src/assets/capture/5.PNG)

-   Page détail d'une reunion  

Sur la liste il a la possibilité de valider une proposition compte tenu du nombre de votants.  

[![](https://github.com/Constant23/Doodle-front/blob/master/src/assets/capture/7.PNG)](https://github.com/Constant23/Doodle-front/blob/master/src/assets/capture/7.PNG)

-   Page liste des sondages disponibles 

sur la liste de ces sondages disponibles il peut choisir un sondage pour faire un vote pour une proposition . 

[![](https://github.com/Constant23/Doodle-front/blob/master/src/assets/capture/6.PNG)](https://github.com/Constant23/Doodle-front/blob/master/src/assets/capture/6.PNG)

-   Page de sondage 


ici il choisit une ou plusieurs proposition dans la liste des propositions du sondage.  

[![](https://github.com/Constant23/Doodle-front/blob/master/src/assets/capture/8.PNG)](https://github.com/Constant23/Doodle-front/blob/master/src/assets/capture/8.PNG)




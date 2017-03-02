// Importation du module de gestion des événements
var events = require('events');


// Création d'un objet émetteur d'événement
var emetteurEvenement = new events.EventEmitter();

// Créer le gestionnaire d'événement  « connectHandler »
var connectHandler = function connected() {
   console.log('Connexion réussie.');
  
   // lancer l'événement 'donnees_recu'
   emetteurEvenement.emit('donnees_recues');
}

// Lier l'événement de connexion au gestionnaire d'événement «connectHandler»
emetteurEvenement.on('connexion', connectHandler);
 
// Lier l'événement 'data_received' à la function anonyme 
emetteurEvenement.on('donnees_recues', function(){
   console.log('Données bien reçues.');
});

// Lancer l'événement 'connexion'  
emetteurEvenement.emit('connexion');

console.log("Fin du programme.");
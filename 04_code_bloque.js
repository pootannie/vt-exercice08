var fs = require("fs"); //importation du modele de gestion de fichier

var data = fs.readFileSync('04_fichier.txt');

console.log(data.toString());
console.log("Program Ended");
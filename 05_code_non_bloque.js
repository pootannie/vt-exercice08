var fs = require("fs");

fs.readFile('04_fichier.txt', function (err, data) {
   if (err) return console.error(err);
   console.log(data.toString());
});

console.log("Program Ended");
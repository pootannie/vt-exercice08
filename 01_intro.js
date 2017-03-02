var aTableau = [
	"QC - Québec",
	"ON - Ontario",
	"Al - Alberta"
];

aTableau.forEach(function(elm, i){
	console.log(i + ' - ' + elm)
})

console.log("----------------------")

aTableau.push("NB - Nouveau-Brunswick")

aTableau.forEach(function(elm, i){
	console.log(i + ' - ' + elm)
})

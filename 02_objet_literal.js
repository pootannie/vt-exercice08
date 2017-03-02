var oProvince = {
	"QC" : "Québec",
	"ON" : "Ontario",
	"Al" : "Alberta"
}

oProvince['NB'] = "Nouveau-Brunswik";
oProvince.MA = "Manitoba";

function affiche_objet(monObjet){
	for (propriete in monObjet){
		console.log(propriete + ' - ' + monObjet[propriete])
	}
}

affiche_objet(oProvince);
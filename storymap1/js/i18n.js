
function getURLParameter(key) {
    var result = new RegExp(key + "=([^&]*)", "i").exec(window.location.search); 
    return result && result[1] || ""; 
}

function toggleLang(lang) {
    var lang = lang || 'de';
    document.location = document.location.pathname + "?lang="+ lang;
}


<!-- Warning: always concatenate long text lines -->
var i18n = {
    'de': {
        "title": "Morteratschgletscher: Ein Eisriese schwindet",
	"Zusammenfassung" : "Der lange Morteratschgletscher hat sich seit Beginn der Messungen im Jahre 1878 ununterbrochen " +
		         "zurückgezogen. Im Durchschnitt beträgt der Rückgang 16 Meter/ Jahr. In wärmeren Phasen (1935 bis 1965) wurde ein Rückgang"+
			" bis zu 48 Meter pro Jahr gemessen. Seit den 1990-er Jahren ist eine Verstärkung des Schwundes zu verzeichnen."+
		        " (Karte: Siegfriedkarte 1875/1876 und Landeskarte 2009",

        "Weitere Infos": "Weitere Infos",

	"Weitere Gletscher": "Weitere Gletscher (Zeitreihe)",
	"Meteoschweiz":  "Meteoschweiz",
	"Bundesamt für Umwelt": "Bundesamt für Umwelt",
	"Bundesamt für Landestopografie swisstopo": "Bundesamt für Landestopografie swisstopo",
	"Bundesamt für Statistik" :"Bundesamt für Statistik",
	"Arealstatistik": "Arealstatistik",
	"Arealstatistik: Gletscher": "Arealstatistik: Gletscher",
        "Karte": "Karte:",
	"Nomenklaturen" :"Nomenklaturen:",
        "Gletscher der Schweiz": "Gletscher der Schweiz",
	"Realized with geoadmin": "Umgesetzt mit GeoAdmin 2.5"

    },
    'fr': {
        "title": "Glacier de Morteratsch: Un géant de glace disparait",
	"Zusammenfassung" : "La longueur du glacier de Morteratsch hat sich seit Beginn der Messungen im Jahre 1878 ununterbrochen " +
		         "zurückgezogen. Im Durchschnitt beträgt der Rückgang 16 Meter/ Jahr. In wärmeren Phasen (1935 bis 1965) wurde ein Rückgang"+
			" bis zu 48 Meter pro Jahr gemessen. Seit den 1990-er Jahren ist eine Verstärkung des Schwundes zu verzeichnen."+
		        " (Karte: Siegfriedkarte 1875/1876 und Landeskarte 2009",

        "Weitere Infos": "Informations détaillées",

	"Weitere Gletscher": "Autres glaciers (séries temporelles)",
	"Meteoschweiz":  "Meteosuisse",
	"Bundesamt für Umwelt": "Office Fédéral de l'Environnement",
	"Bundesamt für Landestopografie swisstopo": "Office fédéral de topographie swisstopo",
	"Bundesamt für Statistik" :"Office Fédéral de la statistique",
	"Arealstatistik": "Statistiques de superficie",
	"Arealstatistik: Gletscher": "Statistiques de superficie: Glacier",
        "Karte": "Carte:",
	"Nomenklaturen" :"Nomenclature",
        "Gletscher der Schweiz": "Glacier de la Suisse",
	"Realized with geoadmin": "Réalisé avec GeoAdmin 2.5"
    },
    'it': { 
	"title": "Morteratschgletscher: Ein Eisriese schwindet",
	"Zusammenfassung" : "Der lange Morteratschgletscher hat sich seit Beginn der Messungen im Jahre 1878 ununterbrochen " +
		         "zurückgezogen. Im Durchschnitt beträgt der Rückgang 16 Meter/ Jahr. In wärmeren Phasen (1935 bis 1965) wurde ein Rückgang"+
			" bis zu 48 Meter pro Jahr gemessen. Seit den 1990-er Jahren ist eine Verstärkung des Schwundes zu verzeichnen."+
		        " (Karte: Siegfriedkarte 1875/1876 und Landeskarte 2009",

        "Weitere Infos": "Weitere Infos",

	"Weitere Gletscher": "Weitere Gletscher (Zeitreihe)",
	"Meteoschweiz":  "Meteoschweiz",
	"Bundesamt für Umwelt": "Bundesamt für Umwelt",
	"Bundesamt für Landestopografie swisstopo": "Bundesamt für Landestopografie swisstopo",
	"Bundesamt für Statistik" :"Bundesamt für Statistik",
	"Arealstatistik": "Arealstatistik",
	"Arealstatistik: Gletscher": "Arealstatistik: Gletscher",
        "Karte": "Karte:",
	"Nomenklaturen" :"Nomenklaturen:",
        "Gletscher der Schweiz": "Gletscher der Schweiz",
	"Realized with geoadmin": "Umgesetzt mit GeoAdmin 2.5"
    },
    'en': {
	"title": "Morteratsch glacier: An eis giant has vanished",
	"Zusammenfassung" : "Der lange Morteratschgletscher hat sich seit Beginn der Messungen im Jahre 1878 ununterbrochen " +
		         "zurückgezogen. Im Durchschnitt beträgt der Rückgang 16 Meter/ Jahr. In wärmeren Phasen (1935 bis 1965) wurde ein Rückgang"+
			" bis zu 48 Meter pro Jahr gemessen. Seit den 1990-er Jahren ist eine Verstärkung des Schwundes zu verzeichnen."+
		        " (Karte: Siegfriedkarte 1875/1876 und Landeskarte 2009",

        "Weitere Infos": "Weitere Infos",

	"Weitere Gletscher": "Weitere Gletscher (Zeitreihe)",
	"Meteoschweiz":  "Meteoschweiz",
	"Bundesamt für Umwelt": "Bundesamt für Umwelt",
	"Bundesamt für Landestopografie swisstopo": "Bundesamt für Landestopografie swisstopo",
	"Bundesamt für Statistik" :"Bundesamt für Statistik",
	"Arealstatistik": "Arealstatistik",
	"Arealstatistik: Gletscher": "Arealstatistik: Gletscher",
        "Karte": "Karte:",
	"Nomenklaturen" :"Nomenklaturen:",
        "Gletscher der Schweiz": "Gletscher der Schweiz",
	"Realized with geoadmin": "Umgesetzt mit GeoAdmin 2.5"
    }
};

var lang = getURLParameter('lang') || 'de';


$('#lang').ready(function () {
    $("#lang li").each(function() {
        var li = $(this)[0]; 
        if (li.id == lang) $(this).addClass('selected');
    });
});

$('#infobox').ready(function () {
    document.title = i18n[lang].title;
    var info = $('#infobox');
    var tpl = info.html();
    var html = Mustache.to_html(tpl, i18n[lang]);
    info.html(html);
    info.show(2000);
});


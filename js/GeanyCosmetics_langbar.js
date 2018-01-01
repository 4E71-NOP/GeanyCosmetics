//------------------------------------------------------------------
//
//	Geany Cosmetics LangBar Managment
//
//	Author : Faust MARIA DE AREVALO <faust@club-internet.fr>
//	GitHub :
//	Under MIT Licence
//
//------------------------------------------------------------------



//--------------------------------------------------------------------------------
//Language selection
// According to ISO 639-1 EN=english / FR=french

var documentLang = "en";

var tabListeDivLang = {
	"set_lang_EN":{ "button":"set_lang_EN", "target":"en" },
	"set_lang_FR":{ "button":"set_lang_FR", "target":"fr" }
};

var langContentTab = {
"en":{ 
	"GC_card_A":{ file:"lang_en_card_A.html", target:"GC_card_A" },
	"GC_card_B":{ file:"lang_en_card_B.html", target:"GC_card_B" },
	},
"fr":{ 
	"GC_card_A":{ file:"lang_fr_card_A.html", target:"GC_card_A" },
	"GC_card_B":{ file:"lang_fr_card_B.html", target:"GC_card_B" },
	}
}

function documentLangSelection ( lang ) {
	var i, l = langContentTab[lang];
	for ( i in l ){
		GetFileContent ( l[i].file, l[i].target );
	}
}

//--------------------------------------------------------------------------------
// EOF


//------------------------------------------------------------------
//
//	Geany Cosmetics Tab Managment
//
//	Author : Faust MARIA DE AREVALO <faust@club-internet.fr>
//	GitHub :
//	Under MIT Licence
//
//------------------------------------------------------------------



var listTabsEditor = {
		"TabEditorC":		{ div:"LikeInEditorC"	,	tab:"TabEditorC"	},
		"TabEditorCPP":		{ div:"LikeInEditorCPP"	,	tab:"TabEditorCPP"	},
		"TabEditorHTML":	{ div:"LikeInEditorHTML",	tab:"TabEditorHTML"	},
		"TabEditorPHP":		{ div:"LikeInEditorPHP"	,	tab:"TabEditorPHP"	},
		"TabEditorPY":		{ div:"LikeInEditorPY"	,	tab:"TabEditorPY"	},
		"TabEditorSH":		{ div:"LikeInEditorSH"	,	tab:"TabEditorSH"	},
};

function TabRecievedClick (id) {
	var cssDisplay = "inline-block";
	for ( var elm in listTabsEditor ){
		Gebi(listTabsEditor[elm].div).style.visibility = (id == elm) ? "visible" : "hidden";
		Gebi(listTabsEditor[elm].div).style.display = (id == elm) ? cssDisplay : "none";
		Gebi(listTabsEditor[elm].tab).className = (id == elm) ? "tab_active" : "tab";
		Gebi("geany_margin_line_number").style.display = cssDisplay;
		Gebi("geany_margin_folding").style.display = cssDisplay;
	}
	tabJSJournal[tabJSJournalSw]("Tab:"+id);
}

//--------------------------------------------------------------------------------
// EOF


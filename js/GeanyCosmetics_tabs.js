//------------------------------------------------------------------
//
//	Geany Cosmetics Tab Managment
//
//	Author : Faust MARIA DE AREVALO <faust@club-internet.fr>
//	GitHub :
//	Under MIT Licence
//
//------------------------------------------------------------------


// FUTURE: feed the table automatically by listing what is in the tabbar div

var listTabsEditor = {
		"TabEditorC":		{ div:"LikeInEditorC"	},
		"TabEditorCPP":		{ div:"LikeInEditorCPP"	},
		"TabEditorHTML":	{ div:"LikeInEditorHTML"},
		"TabEditorPHP":		{ div:"LikeInEditorPHP"	},
		"TabEditorPY":		{ div:"LikeInEditorPY"	},
		"TabEditorSH":		{ div:"LikeInEditorSH"	},
};

function TabRecievedClick (id) {
	for ( var elm in listTabsEditor ){
		Gebi(listTabsEditor[elm].div).style.visibility = (id == elm) ? "visible" : "hidden";
	}
	tabJSJournal[tabJSJournalSw]("Tab:"+id);
}

//--------------------------------------------------------------------------------
// EOF


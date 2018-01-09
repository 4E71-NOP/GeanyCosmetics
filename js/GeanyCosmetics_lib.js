//------------------------------------------------------------------
//
//	Geany Cosmetics lib
//
//	Author : Faust MARIA DE AREVALO <faust@club-internet.fr>
//	GitHub :
//	Under MIT Licence
//
//------------------------------------------------------------------
var StylesheetClassesList = {
	geany_allEditorBg:{ id:'geany_allEditorBg', original:'allEditorBg', ENGtxt:'All', FRtxt:'Tous', title:0, on:1, display:0, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_default:{ id:'geany_default', original:'default', ENGtxt:'Default', FRtxt:'Défaut', title:0, on:1, display:1, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_Title01:{ id:'geany_Title01', original:'Title01', ENGtxt:'Dynamic highlight', FRtxt:'Colorisation dynamique', title:1, on:0, display:0, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_caret:{ id:'geany_caret', original:'caret', ENGtxt:'Cursor', FRtxt:'Curseur', title:0, on:1, display:1, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_current_line:{ id:'geany_current_line', original:'current_line', ENGtxt:'Current line', FRtxt:'Ligne courante', title:0, on:1, display:1, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_brace_bad:{ id:'geany_brace_bad', original:'brace_bad', ENGtxt:'Orphan brace', FRtxt:'Parenthèse orpheline', title:0, on:1, display:1, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_brace_good:{ id:'geany_brace_good', original:'brace_good', ENGtxt:'Pair of brace', FRtxt:'Paire parenthèses', title:0, on:1, display:1, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_selection:{ id:'geany_selection', original:'selection', ENGtxt:'Selection', FRtxt:'Selection', title:0, on:1, display:1, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_Title02:{ id:'geany_Title02', original:'Title02', ENGtxt:'Syntax Highlighting', FRtxt:'Colorisation syntaxique', title:1, on:0, display:0, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_attribute:{ id:'geany_attribute', original:'attribute', ENGtxt:'Attribute', FRtxt:'Attribut', title:0, on:1, display:1, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_character:{ id:'geany_character', original:'character', ENGtxt:'Character string', FRtxt:'Character string', title:0, on:1, display:1, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_class:{ id:'geany_class', original:'class', ENGtxt:'Class', FRtxt:'Classe', title:0, on:1, display:1, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_comment:{ id:'geany_comment', original:'comment', ENGtxt:'Comment', FRtxt:'Commentaire', title:0, on:1, display:1, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_comment_line:{ id:'geany_comment_line', original:'comment_line', ENGtxt:'Line comment', FRtxt:'Commentaire de ligne', title:0, on:1, display:1, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_identifier:{ id:'geany_identifier', original:'identifier', ENGtxt:'Identifier A', FRtxt:'Identifiant A', title:0, on:1, display:1, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_identifier_1:{ id:'geany_identifier_1', original:'identifier_1', ENGtxt:'Identifier B', FRtxt:'Identifiant B', title:0, on:1, display:1, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_keyword_1:{ id:'geany_keyword_1', original:'keyword_1', ENGtxt:'Keyword A', FRtxt:'Mot clé A', title:0, on:1, display:1, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_keyword_2:{ id:'geany_keyword_2', original:'keyword_2', ENGtxt:'Keyword B', FRtxt:'Mot clé B', title:0, on:1, display:1, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_number_1:{ id:'geany_number_1', original:'number_1', ENGtxt:'Number A', FRtxt:'Nombre A', title:0, on:1, display:1, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_number_2:{ id:'geany_number_2', original:'number_2', ENGtxt:'Number B', FRtxt:'Nombre B', title:0, on:1, display:1, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_operator:{ id:'geany_operator', original:'operator', ENGtxt:'Operator', FRtxt:'Opérateur', title:0, on:1, display:1, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_other:{ id:'geany_other', original:'other', ENGtxt:'Other', FRtxt:'Autre', title:0, on:1, display:1, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_preprocessor:{ id:'geany_preprocessor', original:'preprocessor', ENGtxt:'Preprocessor', FRtxt:'Preprocesseur', title:0, on:1, display:1, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_string_1:{ id:'geany_string_1', original:'string_1', ENGtxt:'String A', FRtxt:'Chaine A', title:0, on:1, display:1, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_string_2:{ id:'geany_string_2', original:'string_2', ENGtxt:'String B', FRtxt:'Chaine B', title:0, on:1, display:1, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_tag:{ id:'geany_tag', original:'tag', ENGtxt:'Tag', FRtxt:'Tag', title:0, on:1, display:1, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_value:{ id:'geany_value', original:'value', ENGtxt:'Value', FRtxt:'Valeur', title:0, on:1, display:1, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_Title03:{ id:'geany_Title03', original:'Title03', ENGtxt:'Editor Style', FRtxt:'Style de l’éditeur', title:1, on:0, display:0, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_fold_symbol_highlight:{ id:'geany_fold_symbol_highlight', original:'fold_symbol_highlight', ENGtxt:'fold_symbol_highlight', FRtxt:'fold_symbol_highlight', title:0, on:1, display:1, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_margin_folding:{ id:'geany_margin_folding', original:'margin_folding', ENGtxt:'margin_folding', FRtxt:'margin_folding', title:0, on:1, display:1, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_margin_line_number:{ id:'geany_margin_line_number', original:'margin_line_number', ENGtxt:'margin_line_number', FRtxt:'margin_line_number', title:0, on:1, display:1, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_backtick:{ id:'geany_backtick', original:'backtick', ENGtxt:'backtick', FRtxt:'backtick', title:0, on:0, display:0, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_call_tips:{ id:'geany_call_tips', original:'call_tips', ENGtxt:'call_tips', FRtxt:'call_tips', title:0, on:0, display:0, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_comment_doc:{ id:'geany_comment_doc', original:'comment_doc', ENGtxt:'comment_doc', FRtxt:'comment_doc', title:0, on:0, display:0, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_comment_doc_keyword:{ id:'geany_comment_doc_keyword', original:'comment_doc_keyword', ENGtxt:'comment_doc_keyword', FRtxt:'comment_doc_keyword', title:0, on:0, display:0, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_comment_doc_keyword_error:{ id:'geany_comment_doc_keyword_error', original:'comment_doc_keyword_error', ENGtxt:'comment_doc_keyword_error', FRtxt:'comment_doc_keyword_error', title:0, on:0, display:0, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_comment_line_doc:{ id:'geany_comment_line_doc', original:'comment_line_doc', ENGtxt:'comment_line_doc', FRtxt:'comment_line_doc', title:0, on:0, display:0, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_decorator:{ id:'geany_decorator', original:'decorator', ENGtxt:'decorator', FRtxt:'decorator', title:0, on:0, display:0, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_function:{ id:'geany_function', original:'function', ENGtxt:'function', FRtxt:'function', title:0, on:0, display:0, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_here_doc:{ id:'geany_here_doc', original:'here_doc', ENGtxt:'here_doc', FRtxt:'here_doc', title:0, on:0, display:0, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_identifier_2:{ id:'geany_identifier_2', original:'identifier_2', ENGtxt:'identifier_2', FRtxt:'identifier_2', title:0, on:0, display:0, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_identifier_3:{ id:'geany_identifier_3', original:'identifier_3', ENGtxt:'identifier_3', FRtxt:'identifier_3', title:0, on:0, display:0, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_identifier_4:{ id:'geany_identifier_4', original:'identifier_4', ENGtxt:'identifier_4', FRtxt:'identifier_4', title:0, on:0, display:0, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_indent_guide:{ id:'geany_indent_guide', original:'indent_guide', ENGtxt:'indent_guide', FRtxt:'indent_guide', title:0, on:0, display:0, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_keyword:{ id:'geany_keyword', original:'keyword', ENGtxt:'keyword', FRtxt:'keyword', title:0, on:0, display:0, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_keyword_3:{ id:'geany_keyword_3', original:'keyword_3', ENGtxt:'keyword_3', FRtxt:'keyword_3', title:0, on:0, display:0, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_keyword_4:{ id:'geany_keyword_4', original:'keyword_4', ENGtxt:'keyword_4', FRtxt:'keyword_4', title:0, on:0, display:0, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_label:{ id:'geany_label', original:'label', ENGtxt:'label', FRtxt:'label', title:0, on:0, display:0, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_marker_line:{ id:'geany_marker_line', original:'marker_line', ENGtxt:'marker_line', FRtxt:'marker_line', title:0, on:0, display:0, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_marker_mark:{ id:'geany_marker_mark', original:'marker_mark', ENGtxt:'marker_mark', FRtxt:'marker_mark', title:0, on:0, display:0, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_marker_search:{ id:'geany_marker_search', original:'marker_search', ENGtxt:'marker_search', FRtxt:'marker_search', title:0, on:0, display:0, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_number:{ id:'geany_number', original:'number', ENGtxt:'number', FRtxt:'number', title:0, on:0, display:0, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_parameter:{ id:'geany_parameter', original:'parameter', ENGtxt:'parameter', FRtxt:'parameter', title:0, on:0, display:0, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_regex:{ id:'geany_regex', original:'regex', ENGtxt:'regex', FRtxt:'regex', title:0, on:0, display:0, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_string:{ id:'geany_string', original:'string', ENGtxt:'string', FRtxt:'string', title:0, on:0, display:0, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_string_eol:{ id:'geany_string_eol', original:'string_eol', ENGtxt:'string_eol', FRtxt:'string_eol', title:0, on:0, display:0, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_type:{ id:'geany_type', original:'type', ENGtxt:'type', FRtxt:'type', title:0, on:0, display:0, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_white_space:{ id:'geany_white_space', original:'white_space', ENGtxt:'white_space', FRtxt:'white_space', title:0, on:0, display:0, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
} ;


var cssFileIdx = -1;
var scl = StylesheetClassesList;

//------------------------------------------------------------------
//
//
//	The great INIT
//
//
function GeanyCosmeticsInitialization() {
	var elm, v, tab;
	//--------------------------------------------------------------------------------
	// Find the CSS file by name
	for ( elm in document.styleSheets ) {
		v = document.styleSheets[elm].href;
		if ( v != null ) {
			if ( v.search("Geany_theme.css") != -1 ) { cssFileIdx = elm;}
		}
	}
	tabJSJournal[tabJSJournalSw]("Geany_theme.css file index:"+cssFileIdx);

	//--------------------------------------------------------------------------------
	//	Setting up a table to be able to re-reference the CSS classes with NAMES in the CSS object. 
	//	Only numeric offset are available at DOM initialization it seems. 
	var allRules = document.styleSheets[cssFileIdx].cssRules;
	for ( elm in allRules ) {
		classTable[allRules[elm].selectorText] = elm; 
	}
	for ( elm in classTable ) {
		allRules[elm] = allRules[classTable[elm]];
	}
	tabJSJournal[tabJSJournalSw](classTable);
	tabJSJournal[tabJSJournalSw](allRules);
	allRules= 0;


	//--------------------------------------------------------------------------------
	// Time for some indexing.
	for ( elm in scl ) {
		scl[elm].ObjClass = (scl[elm].title == 0) ? document.styleSheets[cssFileIdx].cssRules["."+elm].style : 0;
	}

	//--------------------------------------------------------------------------------
	//	Creating the table to control CSS classes
	var configuratorTable = Gebi("configuratorTable");
	var contentTable = "<tr> <td>Variable</td> <td>FG</td> <td>BG</td> <td><strong>B</strong></td> <td><i>i</i></td> <tr>";
	contentTable += "<tr> <td>All</td> <td></td> <td><div id='div.geany_allEditorBg_bg' style='width:16px; height:16px; border:1px solid #000000;' class='geany_allEditorBg' onclick=\"OpenColorSelector ('geany_allEditorBg','bg');\"></td>";
	contentTable += "<td><input id='checkbox.allEditorBg_bold' type='checkbox' onclick=\"SetProperty ('geany_allEditorBg','isBold', this );\"></td>";
	contentTable += "<td><input id='checkbox.allEditorBg_italic' type='checkbox' onclick=\"SetProperty ('geany_allEditorBg','isItalic', this );\"></td>";
	contentTable += "<tr>";

	for ( elm in scl ){
		if ( scl[elm].title == 1 ){
			contentTable += "<tr class='tabletitle'>" + "<td colspan='5'>"+scl[elm].ENGtxt+"</td></tr>";
		}
		else {
			if ( scl[elm].display == 1 ){
				contentTable += "<tr>" +
				"<td>"+scl[elm].ENGtxt+"</td>" +
				"<td><div								id='div."+scl[elm].id+"_fg' style='width:16px; height:16px; border:1px solid #000000; background-color:"+scl[elm].ObjClass.color+"'	onclick=\"OpenColorSelector ('"+scl[elm].id+"','fg' );\"></div></td>" +
				"<td><div		class='"+scl[elm].id+"'	id='div."+scl[elm].id+"_bg' style='width:16px; height:16px; border:1px solid #000000;'												onclick=\"OpenColorSelector ('"+scl[elm].id+"','bg' );\"></div></td>" +
				"<td><input								id='checkbox."+scl[elm].id+"_bold' type='checkbox' 															onclick=\"SetProperty ('"+scl[elm].id+"','isBold', this );\" "+((scl[elm].ObjClass.fontWeight == "bold" ) ? 'checked':'' )+"></td>" +
				"<td><input								id='checkbox."+scl[elm].id+"_italic' type='checkbox' 														onclick=\"SetProperty ('"+scl[elm].id+"','isItalic', this );\" "+((scl[elm].ObjClass.fontStyle == "italic" ) ? 'checked':'' )+"></td>"+
				"</tr>";
			}
		}
	}
	configuratorTable.innerHTML = contentTable;

	//--------------------------------------------------------------------------------
	// Now that all is set in the document it's time for creating shortcuts.
	for ( elm in scl ) {
		if (scl[elm].on == 1) {
			scl[elm].ObjDivFg = Gebi("div."+elm+"_fg");
			scl[elm].ObjDivBg = Gebi("div."+elm+"_bg");
			scl[elm].ObjChkBold = Gebi("checkbox."+elm+"_bold");
			scl[elm].ObjChkItalic = Gebi("checkbox."+elm+"_italic");
		}
	}
	scl.geany_allEditorBg.on = 0;						//This entry is special. 
	tabJSJournal[tabJSJournalSw](scl);
}

//--------------------------------------------------------------------------------
//
//
// Functions
//
//

function SetProperty ( TargetClass , rule , obj ){
	tabJSJournal[tabJSJournalSw]("SetProperty - TargetClass:"+TargetClass+"; rule:"+rule+"obj:"+obj.id);
	var ruleCible, elm;
	if ( TargetClass == "geany_allEditorBg") {
		for ( elm in scl ) {
			if ( scl[elm].on == 1 ){
				switch ( rule ) {
				case 'isBold': 
					scl[elm].ObjClass.fontWeight = ( obj.checked != true ) ? 'normal':'bold';
					scl[elm].ObjChkBold.checked = obj.checked;
				break;
				case 'isItalic': 
					scl[elm].ObjClass.fontStyle = ( obj.checked != true ) ? 'normal':'italic';
					scl[elm].ObjChkItalic.checked = obj.checked;
				break;
				}
			}
		}
	}
	else {
		switch ( rule ) {
		case 'isBold': scl[TargetClass].ObjClass.fontWeight = ( obj.checked != true ) ? 'normal':'bold';		break;
		case 'isItalic': scl[TargetClass].ObjClass.fontStyle = ( obj.checked != true ) ? 'normal':'italic';		break;
		}
	}
}

//--------------------------------------------------------------------------------
//
//
//	Edit the file
//
//

function editTheme(){
	var elm, cf, cb, vb, vi, link;
	var str = "#\n#\n# This theme was created with Geany Cosmetics Online.\n# https://github.com/4E71-NOP/GeanyCosmetics\n#\n#\n# Get Geany : https://www.geany.org/\n#\n#\n# type:gcofile_v0.1\n\n\n"+
	"[theme_info]\nname=" + Gebi("ThemeName").value+"\n"+
	"description="+Gebi("ThemeDesc").value+"\n"+
	"version="+Gebi("ThemeVer").value+"\n"+
	"author="+Gebi("AuthorName").value+"\n"+
	"url="+Gebi("AuthorURL").value+"\n\n\n"+
	"[named_styles]\n";

	for ( elm in scl ) {
		if ( scl[elm].title == 0 ) {
			vb = ( scl[elm].ObjClass.fontWeight == "bold") ? "true" : "false";
			vi = ( scl[elm].ObjClass.fontStyle == "italic") ? "true" : "false";
			cf = rgb2hex(scl[elm].ObjClass.color).replace("#", "0x");
			cb = rgb2hex(scl[elm].ObjClass.backgroundColor).replace("#", "0x");
			str += scl[elm].original +"="+cf+";"+cb+";"+vb+";"+vi+"\n";
		}
		else {
			str += "\n\n";
		}

	}
	str += "\n\n\n";
	tabJSJournal[tabJSJournalSw](str);

	link = document.createElement("a");
	link.style.display = "none";
	link.href = "data:text/plain;charset=utf-8,"+encodeURIComponent(str);
	link.download = "theme.txt";
	document.body.appendChild(link);
	link.click();
}

//--------------------------------------------------------------------------------
//
//
// View text like in the editor section
//
//
var HTMLCompatTab = {
	c:{
		1:{ m:"<",			r:"&lt;" },
		2:{ m:">",			r:"&gt;" },
	},
	php:{
		1:{ m:"<\?php",		r:"&lt;?php" },
		2:{ m:"?>",			r:"?&gt;" },
		3:{ m:"Software",	r:"Geany" },
	},
};

var regexpClassTab = {
	c:{
		0:{ convert:0,	reg:0,								colorN:0,	cl:"geany_default",},
		1:{ convert:1,	reg:/[^\a-zA-Z=\{\}\<\>\[\]\(\)\#\;]?\s?(\d+)\s?[^\a-zA-Z=\{\}\<\>\[\]\(\)\#\;]?/g,
															colorN:1,	cl:"geany_number_1"},
		2:{ convert:1,	reg:/[^%\=\*\;\s\<\>\[\]\(\)\{\}\,\;\/\\]?(\w?\d?\w?)*[^%\=\*\;\s\<\>\[\]\(\)\{\}\,\;\/\\]?/g,
															colorN:2,	cl:"geany_identifier_1",},
		3:{ convert:1,	reg:/\s?(auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)[^\w*]\s?/g,
															colorN:3,	cl:"geany_keyword_1"	},
		4:{ convert:1,	reg:/#\w*/g,						colorN:4,	cl:"geany_preprocessor",},
		s:{ convert:1,	reg:/'(.|\n)*?'/g, 					colorN:'s',	cl:"geany_character"	},
		t:{ convert:1,	reg:/"(.|\n)*?"/g, 					colorN:'t',	cl:"geany_string_1"		},
		u:{ convert:1,	reg:/(\-+|\++|\/|\*|;|,|\=+|\!\=|\(|\)|\[|\]|\{|\})/g,
											 				colorN:'u',	cl:"geany_operator"		},
		v:{ convert:1,	reg:/(£\/?\w*\.\w*§?)/g,			colorN:'v',	cl:"geany_string_1"		},
		x:{ convert:1,	reg:/\/\*(.|\n)*\*\//g,				colorN:'x',	cl:"geany_comment"		},
		y:{ convert:1,	reg:/\/\/(.*|-*)\s/g,				colorN:'y',	cl:"geany_comment_line"	},
		z:{ convert:1,	reg:/ù/g,							colorN:'z',	cl:"geany_comment_line"	},


	},
	cpp:{
		0:{ convert:0,	reg:0,								colorN:0,	cl:"geany_default",},
		1:{ convert:1,	reg:/[^%\=\*\;\s\<\>\[\]\(\)\{\}\,\;\/\\]?(\w?\d?\w?)*[^%\=\*\;\s\<\>\[\]\(\)\{\}\,\;\/\\]?/g,
															colorN:1,	cl:"geany_identifier_1",},
		9:{ convert:1,	reg:/(alignas|alignof|and|and_eq|asm|auto|bitand|bitor|bool|break|case|catch|char|char16_t|char32_t|class|compl|const|constexpr|const_cast|continue|decltype|default|delete|\sdo\s?[^\w]|double|dynamic_cast|else|enum|explicit|export|extern|false|float|for|friend|goto|if|inline|[^\w]int[^\w]|long|mutable|namespace|new|noexcept|not|not_eq|nullptr|operator|\sor\s?[^\w]|or_eq|private|protected|public|register|reinterpret_cast|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|true|try|typedef|typeid|typename|union|unsigned|using|virtual|void|volatile|wchar_t|while|xor|xor_eq|override|final|\sif\s?|elif|else|endif|defined|ifdef|ifndef|define|undef|include|line|error|pragma)/g,
															colorN:9,	cl:"geany_keyword_1"	},
		m:{ convert:1,	reg:/(\-+|\++|\/|\*|;|,|\=+|\!\=|\(|\)|\[|\]|\{|\}|\&|\%)/g,
											 				colorN:'m',	cl:"geany_operator"		},
		q:{ convert:1,	reg:/(£\/?\w*\.\w*§?)/g,			colorN:'q',	cl:"geany_string_1"		},
		r:{ convert:1,	reg:/(#\w*)\s/g, 					colorN:'r',	cl:"geany_character"	},
		s:{ convert:1,	reg:/'(.|\n)*?'/g, 					colorN:'s',	cl:"geany_character"	},
		t:{ convert:1,	reg:/"(.|\n)*?"/g, 					colorN:'t',	cl:"geany_string_1"		},
		y:{ convert:1,	reg:/\/\*(.|\n)*\*\//g,				colorN:'y',	cl:"geany_comment"		},
		z:{ convert:1,	reg:/\/\/(.*|-*)\s/g,				colorN:'z',	cl:"geany_comment_line"	},
	},
	html:{
		0:{ convert:0,	reg:0,								colorN:0,	cl:"geany_default"		},
		1:{ convert:1,	reg:/(£\/?\w*§?)/g,					colorN:1,	cl:"geany_tag"			},
		9:{ convert:1,	reg:/(accept=|accept-charset=|accesskey=|action=|align=|alt=|async=|autocomplete=|autofocus=|autoplay=|bgcolor=|border=|buffered=|challenge=|charset=|checked=|cite=|class=|code=|codebase=|color=|cols=|colspan=|content=|contenteditable=|contextmenu=|controls=|coords=|crossorigin=|data=|datetime=|default=|defer=|dir=|dirname=|disabled=|download=|draggable=|dropzone=|enctype=|for=|form=|formaction=|headers=|height=|hidden=|high=|href=|hreflang=|http-equiv=|icon=|id=|integrity=|ismap=|itemprop=|keytype=|kind=|label=|lang=|language=|list=|loop=|low=|manifest=|max=|maxlength=|minlength=|media=|method=|min=|multiple=|muted=|name=|novalidate=|open=|optimum=|pattern=|ping=|placeholder=|poster=|preload=|radiogroup=|readonly=|rel=|required=|reversed=|rows=|rowspan=|sandbox=|scope=|scoped=|seamless=|selected=|shape=|size=|sizes=|slot=|span=|spellcheck=|src=|srcdoc=|srclang=|srcset=|start=|step=|style=|summary=|tabindex=|target=|title=|type=|usemap=|value=|width=|wrap)/g,	
															colorN:9,	cl:"geany_attribute"	},
		a:{ convert:1,	reg:/§/g,							colorN:'a',	cl:"geany_tag"			},
		n:{ convert:1,	reg:/[^\a-zA-Z=\{\}\<\>\[\]\(\)\#\;]\s?(\d+)\s?[^\a-zA-Z=\{\}\<\>\[\]\(\)\#\;]?/g,
															colorN:'n',	cl:"geany_number_1"		},
		o:{ convert:1,	reg:/'(\=|\+)/g, 					colorN:'o',	cl:"geany_operator"		},
		w:{ convert:1,	reg:/'(.|\n)*?'/g, 					colorN:'w',	cl:"geany_string_1"		},
		x:{ convert:1,	reg:/"(.|\n)*?"/g, 					colorN:'x',	cl:"geany_string_2"		},
		z:{ convert:1,	reg:/(<!--.*-->)/g,					colorN:'z',	cl:"geany_comment_line"	},
	},
	php:{
		0:{ convert:0,	reg:0,										colorN:0,	cl:"geany_default"			},
		1:{ convert:1,	reg:/[^\a-zA-Z=\{\}\<\>\[\]\(\)\#\;]?\s?(\d+)\s?[^\a-zA-Z=\{\}\<\>\[\]\(\)\#\;]?/g,
																	colorN:1,	cl:"geany_number_1"		},
		2:{ convert:1,	reg:/'[a-zA-Z0-9_]*[^"][a-zA-Z0-9_]*'/g,	colorN:2,	cl:"geany_string_1"			},
		3:{ convert:1,	reg:/"(.|\n)*?"/g, 							colorN:3,	cl:"geany_string_2"			},
		4:{ convert:1,	reg:/\$[a-zA-Z0-9_]*/g, 					colorN:4,	cl:"geany_preprocessor"		},
		5:{ convert:1,	reg:/(default|echo|function|foreach|for|break|case|switch|!isset)/g,	
																	colorN:5,	cl:"geany_keyword_1"		},
		u:{ convert:1,	reg:/(\-+|\++|\/|\*|;|,|\=+|\!\=|\(|\)|\[|\]|\{|\})/g,
													 				colorN:'u',	cl:"geany_operator"			},
		y:{ convert:1,	reg:/\/\*(.|\n)*\*\//g,						colorN:'y',	cl:"geany_comment"			},
		z:{ convert:1,	reg:/\/\/(.*|-*)\s/g,						colorN:'z',	cl:"geany_comment_line"		},
	},
	py:{
		0:{ convert:0,	reg:0,										colorN:0,	cl:"geany_default"			},
		1:{ convert:1,	reg:/[^%\=\*\;\s\<\>\[\]\(\)\{\}\,\;\/\\]?(\w?\d?\w?)*[^%\=\*\;\s\<\>\[\]\(\)\{\}\,\;\/\\]?/g,
																	colorN:1,	cl:"geany_identifier_1"		},
		2:{ convert:1,	reg:/(\-+|\++|\/|\*|;|,|\=+|\!\=|\(|\)|\[|\]|\{|\})/g,
																	colorN:2,	cl:"geany_operator"},
		3:{ convert:1,	reg:/(\sand\s?|\sas\s?|\sassert\s?|\sbreak\s?|\sclass\s?|\scontinue\s?|\sdef\s?|\sdel\s?|\selif\s?|\selse\s?|\sexcept\s?|\sexec\s?|\sFalse\s?|\sfinally\s?|\sfor\s?|\sfrom\s?|\sglobal\s?|\sif\s?|\simport\s?|\sin\s?|\sis\s?|\slambda\s?|\sNone\s?|\snonlocal\s?|\snot\s?|\snot\s?|\sor\s?|\spass\s?|\spass\s?|\sprint\s?|\sraise\s?|\sreturn\s?|\sTrue\s?|\stry\s?|\swhile\s?|\swhile\s?|\swith\s?|\swith\s?|\syield\s?)/g,	
																	colorN:3,	cl:"geany_keyword_1"		},
		4:{ convert:1,	reg:/(\sfloat\s?|\sint\s?|\sstr\s?|(\s|\.)format\s?|\sraw_input\s?|\ssum\s?)/g,	
																	colorN:4,	cl:"geany_keyword_2"		},
		5:{ convert:1,	reg:/[^\a-zA-Z=\{\}\<\>\[\]\(\)\#\;]\s?(\d+\.?\d*)\s?[^\a-zA-Z=\{\}\<\>\[\]\(\)\#\;]?/g,
																	colorN:5,	cl:"geany_number_1"			},
		6:{ convert:1,	reg:/'.*[^"].*'/g,							colorN:6,	cl:"geany_character"		},
		7:{ convert:1,	reg:/"(.|\n)*?"/g, 							colorN:7,	cl:"geany_string_1"			},
		z:{ convert:1,	reg:/#.*/g,									colorN:'z',	cl:"geany_comment_line"		},
	},
	sh:{
		0:{ convert:0,	reg:0,										colorN:0,	cl:"geany_default"			},
		1:{ convert:1,	reg:/[^%\=\*\;\s\<\>\[\]\(\)\{\}\,\;\/\\]?(\w?\d?\w?)*[^%\=\*\;\s\<\>\[\]\(\)\{\}\,\;\/\\]?/g,
																	colorN:1,	cl:"geany_identifier"		},
		2:{ convert:1,	reg:/'[a-zA-Z0-9_]*[^"][a-zA-Z0-9_]*'/g,	colorN:2,	cl:"geany_character"		},
		3:{ convert:1,	reg:/(\-+|\++|\/|\*|;|,|\=+|\!\=|\(|\)|\[|\]|\{|\})/g,
											 						colorN:3,	cl:"geany_operator"			},
		4:{ convert:1,	reg:/"(.|\n)*?"/g, 							colorN:4,	cl:"geany_string_1"			},
		5:{ convert:1,	reg:/\$[a-zA-Z0-9_]*/g, 					colorN:5,	cl:"geany_identifier_1"		},
		z:{ convert:1,	reg:/#.*/g,									colorN:'z',	cl:"geany_comment_line"		},
	},
};


String.prototype.replaceAt=function(idx, str) {
    return this.substr(0, idx) + str + this.substr(idx + str.length);
}

function formatSampleText ( content, type, target ){
	var ptrStrSrc, elm, elm2, idx, c, tabMatch, strRegexp1, LastN, logStr;
	//var str1 = content;
	var str1 = content.replace(/>/g, "§");
	str1 = str1.replace(/</g, "£");
	str2 = '0'.repeat(str1.length);

	var ptrregexpClassTab = regexpClassTab[type];
	for ( elm in ptrregexpClassTab ) {
		if ( ptrregexpClassTab[elm].convert == 1 ) {
			strRegexp1 = 0; //reinit as number.
			strRegexp1 = new RegExp(ptrregexpClassTab[elm].reg);
			tabMatch = str1.match(strRegexp1);
			if ( tabMatch ) { 
				idx = 0;
				for ( elm2 in tabMatch ) {
					c = String(ptrregexpClassTab[elm].colorN);
					ptrStrSrc = str1.indexOf( String(tabMatch[elm2]) , idx );
					if ( ptrStrSrc >= 0 && tabMatch[elm2].length > 0) {
						idx = (ptrStrSrc + tabMatch[elm2].length);
						// tabJSJournal[tabJSJournalSw]("SEARCH - type:"+type+" pour "+ptrregexpClassTab[elm].cl+"; Idx:"+ptrStrSrc+"; length:"+tabMatch[elm2].length+"; Motif:'"+tabMatch[elm2]+"'");
						str2 = str2.replaceAt( ptrStrSrc, c.repeat(tabMatch[elm2].length) );
					}
				}
			}
		}
	}

	// tabJSJournal[tabJSJournalSw]("Final:|"+str2+"|");
	elm2 = c = str2[0];
	ptrStrSrc = ptrStrExt = 0;
	strRendu = "<span class=\""+ptrregexpClassTab[c].cl+"\">";
	for ( elm = 0 ; elm < str1.length ; elm++ ) {
		if ( elm2 != str2[elm] ) { 
			LastN = elm2;
			elm2 = c = str2[elm];
			logStr = str1.substr(ptrStrSrc,(elm-ptrStrSrc));
			strRendu += logStr+"</span><span class=\""+ptrregexpClassTab[c].cl+"\">";
			logStr = logStr.replace("\n", "");
			// tabJSJournal[tabJSJournalSw]("DECORATE - type:"+type+"; c:"+c+"; cl:"+ptrregexpClassTab[LastN].cl+"; Idx:"+ptrStrSrc+"; str="+logStr);
			ptrStrSrc = elm;
		}
	}
	strRendu += str1.substr(ptrStrSrc,(ptrStrExt-ptrStrSrc)) + "</span>"; 
	// tabJSJournal[tabJSJournalSw](strRendu);
	strRendu = strRendu.replace (/§/g, "&gt;");
	strRendu = strRendu.replace (/£/g, "&lt;");
	strRendu += "\n\n<span class='geany_caret'>&#9608</span><span class='geany_current_line'>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\n";
	Gebi(target).innerHTML = strRendu;
}



// \ is a trick for storing \n
var sampleContent = {
	c:`\
#include <stdio.h>
int main()
{
/*
Multi "line comment "
*/
	// printf() displays the string inside quotation
	printf("Hello, World!");
	return 0;
}

int funcstuff()
{
	char charArr[4];
	int i;
	
	for (i = 0; i < 4; ++i)
	{
		printf("Address of charArr[%d] = %u", i, &charArr[i]);
	}
µ
	return 0;
}

void swap (int * n1, int * n2)
{
	// pointer n1 and n2 points to the address of num1 and num2 respectively
	int temp;
	temp = *n1;
	*n1 = *n2;
	*n2 = temp;
}
`,
cpp:`\
//Simple Calculator

#include <stdio.h>

void main()
{
	double number1 = 0.0;
	double number2 = 0.0;
	char operation = 0;

	printf("Enter the calculation");
	scanf("%lf %c %lf", &number1, &operation, &number2);

	switch(operation)
	{
		case '+':
		printf("= %lf", number1+ number2);
		break;

		case '-':
		printf("= %lf", number1 - number2);
		break;

		case '*':
		printf("= %lf", number1 * number2);
		break;

		case '/':
		if(number2 == 0)
		printf("Division by Zero #ERROR!");
		else
		printf("= %lf", number1 / number2);
		break;

		case '%':
		if((long)number2 == 0)
		printf("Devision by Zero #ERROR!");
		else
		printf("= %ld", (long)number1 % (long)number2);
		break;

		default:
		printf("Illegal operation!");
	}
}


`,

html:`\
<!DOCTYPE html>
<html>
	<head>
		<style>
			body {background-color: f0f0f0;}
			h1   {color: #002040;}
			p	{color: #304050;}
			</style>
</head>
<body>
	
	<!-- This is a comment -->
	<h1 style="text-align:center;">Centered Heading</h1>
	<p style="text-align:center;">Centered paragraph.</p>
	<p style='text-align:center;'>Centered paragraph.</p>
	<img src="img/image.jpg" width=100 height=100 > 
	
	
	<!--[if IE 5]>This is IE 5<br><![endif]-->
	<!--[if IE 6]>This is IE 6<br><![endif]-->
	<!--[if IE 7]>This is IE 7<br><![endif]-->
	<!--[if IE 8]>This is IE 8<br><![endif]-->
	<!--[if IE 9]>This is IE 9<br><![endif]-->
	
	<p>This is a paragraph.</p>
	<p>This is a paragraph.</p>
	
	<p><a href="html_images.asp">HTML Images</a> is a link to a page on this website.</p>
	
	<p><a href="https://www.w3.org/">W3C</a> is a link to a website on the World Wide Web.</p>
	
</body>
</html>
`,

php:`\
<?php
// ----------------------------
//	
//	Geany Cosmetics Online 2017
//	

/*
Multiline comment
Multiline comment
*/

$Sample_var1 = 1;
$Sample_var2[1] = 'Sample';
$Sample_var2[2] = "Sample";
$Sample_var3 = "Sample_table";
$Sample_var4['those_ids'] = 1000;

switch ( $Sample_var1 ) {
	case 1:
		$dbquery = query_dal($Sample_var2['2'],"
		SELECT * 
		FROM ".$Sample_var3." 
		WHERE some_id = '".$Sample_var4['those_ids']."'
		;");
		if ( num_row_sql($dbquery) > 0 ) {
			while ($dbp = fetch_array_sql($dbquery)) { 
				foreach ( $dbp as $A => $B ) { $some_table[$A] = $B; } 
			}
		}
	break;
	default:
		echo ("Doing nothing!");
	break;
}

a_func ("Some text", 2 , 'some other text');

$Sample_var1++;
$Sample_var1--;
$Sample_var1 += 1;
$Sample_var1 -= 1;

$Sample_var1 = $Sample_var1 / $Sample_var4['those_ids'] + $Sample_var4['those_ids'] * $Sample_var4['those_ids'] - $Sample_var4['those_ids'];

?>
`,

py:`\
#!/usr/bin/env python
# This program adds two numbers

num1 = 1.5
num2 = 6.3

# Add two numbers	
sum = float(num1) + float(num2)

# Display the sum
print('The sum of {0} and {1} is {2}'.format(num1, num2, sum))


#get the username from a prompt
username = raw_input("Login: >> ")

#list of allowed users
user1 = "Jack"
user2 = "Jill"

#control that the user belongs to the list of allowed users
if username == user1:
    print "Access granted"
elif username == user2:
    print "Welcome to the system"
else:
    print "Access denied"


#!/usr/bin/env python
kmh = int(raw_input("Enter km/h: "))
mph =  0.6214 * kmh
print "Speed:", kmh, "KM/H = ", mph, "MPH"


`,

sh:`\
#!/bin/sh
DATE_JOUR="date "+%Y%m%d-%Hh%M"
FICHIER_CIBLE_COMPLET="Sources-"$DATE_JOUR"-Sauvegarde.tar.gz"
VARSTR = 'some string'

clear
cd _Sources
echo "----------------------------------------------------------------------"
echo "Création de l'archive : "$FICHIER_CIBLE_COMPLET
tar -czf ../_Sauvegardes/$FICHIER_CIBLE_COMPLET *

cd ..
chmod 775 _Sauvegardes/$FICHIER_CIBLE_COMPLET

echo "----------------------------------------------------------------------"
echo "Archives créées : "
echo $FICHIER_CIBLE_COMPLET
echo "----------------------------------------------------------------------"
pwd
ls -al --color _Sauvegardes/
`,
};

//--------------------------------------------------------------------------------
// EOF

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
	geany_allEditorBg:{ id:'geany_allEditorBg', text:'allEditorBg', on:1, display:0, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_attribute:{ id:'geany_attribute', text:'attribute', on:1, display:1, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_backtick:{ id:'geany_backtick', text:'backtick', on:0, display:0, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_brace_bad:{ id:'geany_brace_bad', text:'brace_bad', on:0, display:0, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_brace_good:{ id:'geany_brace_good', text:'brace_good', on:0, display:0, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_call_tips:{ id:'geany_call_tips', text:'call_tips', on:0, display:0, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_caret:{ id:'geany_caret', text:'caret', on:1, display:1, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_character:{ id:'geany_character', text:'character', on:1, display:1, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_class:{ id:'geany_class', text:'class', on:1, display:1, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_comment:{ id:'geany_comment', text:'comment', on:1, display:1, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_comment_doc:{ id:'geany_comment_doc', text:'comment_doc', on:0, display:0, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_comment_doc_keyword:{ id:'geany_comment_doc_keyword', text:'comment_doc_keyword', on:0, display:0, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_comment_doc_keyword_error:{ id:'geany_comment_doc_keyword_error', text:'comment_doc_keyword_error', on:0, display:0, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_comment_line:{ id:'geany_comment_line', text:'comment_line', on:1, display:1, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_comment_line_doc:{ id:'geany_comment_line_doc', text:'comment_line_doc', on:0, display:0, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_current_line:{ id:'geany_current_line', text:'current_line', on:1, display:1, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_decorator:{ id:'geany_decorator', text:'decorator', on:0, display:0, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_default:{ id:'geany_default', text:'default', on:1, display:1, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_fold_symbol_highlight:{ id:'geany_fold_symbol_highlight', text:'fold_symbol_highlight', on:1, display:1, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_function:{ id:'geany_function', text:'function', on:0, display:0, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_here_doc:{ id:'geany_here_doc', text:'here_doc', on:0, display:0, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_identifier:{ id:'geany_identifier', text:'identifier', on:1, display:1, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_identifier_1:{ id:'geany_identifier_1', text:'identifier_1', on:1, display:1, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_identifier_2:{ id:'geany_identifier_2', text:'identifier_2', on:0, display:0, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_identifier_3:{ id:'geany_identifier_3', text:'identifier_3', on:0, display:0, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_identifier_4:{ id:'geany_identifier_4', text:'identifier_4', on:0, display:0, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_indent_guide:{ id:'geany_indent_guide', text:'indent_guide', on:0, display:0, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_keyword:{ id:'geany_keyword', text:'keyword', on:0, display:0, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_keyword_1:{ id:'geany_keyword_1', text:'keyword_1', on:1, display:1, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_keyword_2:{ id:'geany_keyword_2', text:'keyword_2', on:1, display:1, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_keyword_3:{ id:'geany_keyword_3', text:'keyword_3', on:0, display:0, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_keyword_4:{ id:'geany_keyword_4', text:'keyword_4', on:0, display:0, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_label:{ id:'geany_label', text:'label', on:0, display:0, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_margin_folding:{ id:'geany_margin_folding', text:'margin_folding', on:1, display:1, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_margin_line_number:{ id:'geany_margin_line_number', text:'margin_line_number', on:1, display:1, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_marker_line:{ id:'geany_marker_line', text:'marker_line', on:0, display:0, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_marker_mark:{ id:'geany_marker_mark', text:'marker_mark', on:0, display:0, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_marker_search:{ id:'geany_marker_search', text:'marker_search', on:0, display:0, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_number:{ id:'geany_number', text:'number', on:0, display:0, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_number_1:{ id:'geany_number_1', text:'number_1', on:1, display:1, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_number_2:{ id:'geany_number_2', text:'number_2', on:1, display:1, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_operator:{ id:'geany_operator', text:'operator', on:1, display:1, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_other:{ id:'geany_other', text:'other', on:1, display:1, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_parameter:{ id:'geany_parameter', text:'parameter', on:0, display:0, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_preprocessor:{ id:'geany_preprocessor', text:'preprocessor', on:1, display:1, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_regex:{ id:'geany_regex', text:'regex', on:0, display:0, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_selection:{ id:'geany_selection', text:'selection', on:0, display:0, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_string:{ id:'geany_string', text:'string', on:0, display:0, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_string_1:{ id:'geany_string_1', text:'string_1', on:1, display:1, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_string_2:{ id:'geany_string_2', text:'string_2', on:1, display:1, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_string_eol:{ id:'geany_string_eol', text:'string_eol', on:0, display:0, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_tag:{ id:'geany_tag', text:'tag', on:1, display:1, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_type:{ id:'geany_type', text:'type', on:0, display:0, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_value:{ id:'geany_value', text:'value', on:1, display:1, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
	geany_white_space:{ id:'geany_white_space', text:'white_space', on:0, display:0, ObjClass:0, ObjDivFg:0, ObjDivBg:0, ObjChkBold:0, ObjChkItalic:0 },
};

var cssFileIdx = -1;
var scl = StylesheetClassesList;

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
//		tabJSJournal[tabJSJournalSw]("elm:"+elm+"; nom:" +allRules[elm].selectorText);
	}
	for ( elm in classTable ) {
		allRules[elm] = allRules[classTable[elm]];
//		tabJSJournal[tabJSJournalSw](elm +" / "+  classTable[elm]);
	}
	tabJSJournal[tabJSJournalSw](classTable);
	tabJSJournal[tabJSJournalSw](allRules);
	allRules= 0;


//--------------------------------------------------------------------------------
// Time for some indexing.
	for ( elm in scl ) {
		scl[elm].ObjClass = document.styleSheets[cssFileIdx].cssRules["."+elm].style;
	}

//--------------------------------------------------------------------------------
//	Creating the table to control CSS classes
	var configuratorTable = Gebi("configuratorTable");
	var contentTable = "<tr> <td>Variable</td> <td>FG</td> <td>BG</td> <td><strong>B</strong></td> <td><i>i</i></td> <tr>";
	contentTable += "<tr> <td>All</td> <td></td> <td><div id='div.geany_allEditorBg_bg' style='width:16px; height:16px;' class='geany_allEditorBg' onclick=\"OpenColorSelector ('geany_allEditorBg','bg');\"></td>";
	contentTable += "<td><input id='checkbox.allEditorBg_bold' type='checkbox' onclick=\"SetProperty ('geany_allEditorBg','isBold', this );\"></td>";
	contentTable += "<td><input id='checkbox.allEditorBg_italic' type='checkbox' onclick=\"SetProperty ('geany_allEditorBg','isItalic', this );\"></td>";
	contentTable += "<tr>";

	for ( elm in scl ){
		if ( scl[elm].display == 1 ){
			contentTable += "<tr>" +
			"<td>"+scl[elm].text+"</td>" +
			"<td><div								id='div."+scl[elm].id+"_fg' style='width:16px; height:16px; background-color:"+scl[elm].ObjClass.color+"'	onclick=\"OpenColorSelector ('"+scl[elm].id+"','fg' );\"></div></td>" +
			"<td><div		class='"+scl[elm].id+"'	id='div."+scl[elm].id+"_bg' style='width:16px; height:16px;'												onclick=\"OpenColorSelector ('"+scl[elm].id+"','bg' );\"></div></td>" +
			"<td><input								id='checkbox."+scl[elm].id+"_bold' type='checkbox' 															onclick=\"SetProperty ('"+scl[elm].id+"','isBold', this );\" "+((scl[elm].ObjClass.fontWeight == "bold" ) ? 'checked':'' )+"></td>" +
			"<td><input								id='checkbox."+scl[elm].id+"_italic' type='checkbox' 														onclick=\"SetProperty ('"+scl[elm].id+"','isItalic', this );\" "+((scl[elm].ObjClass.fontStyle == "italic" ) ? 'checked':'' )+"></td>"+
			"</tr>";
		}
	}
	configuratorTable.innerHTML = contentTable;

//--------------------------------------------------------------------------------
// Now that all is set in the document it's time for some more indexing.
	for ( elm in scl ) {
		if (scl[elm].on == 1) {
//			scl[elm].ObjClass = document.styleSheets[cssFileIdx].cssRules["."+elm].style;
			scl[elm].ObjDivFg = Gebi("div."+elm+"_fg");
			scl[elm].ObjDivBg = Gebi("div."+elm+"_bg");
			scl[elm].ObjChkBold = Gebi("checkbox."+elm+"_bold");
			scl[elm].ObjChkItalic = Gebi("checkbox."+elm+"_italic");
		}
	}
	scl.geany_allEditorBg.on = 0;			//This one is special. 
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
	var str = "#\n#\n#\n# This theme was created with Geany Cosmetics Online.\n#\n#\n#\n"+
	"[theme_info]\nname=" + Gebi("ThemeName").value+"\n"+
	"description="+Gebi("ThemeDesc").value+"\n"+
	"version="+Gebi("ThemeVer").value+"\n"+
	"author="+Gebi("AuthorName").value+"\n"+
	"url="+Gebi("AuthorURL").value+"\n\n\n"+
	"[named_styles]\n";

	for ( elm in scl ) {
		vb = ( scl[elm].ObjClass.fontWeight == "bold") ? "true" : "false";
		vi = ( scl[elm].ObjClass.fontStyle == "italic") ? "true" : "false";
		cf = rgb2hex(scl[elm].ObjClass.color).replace("#", "0x");
		cb = rgb2hex(scl[elm].ObjClass.backgroundColor).replace("#", "0x");
		str += scl[elm].text +"="+cf+";"+cb+";"+vb+";"+vi+"\n";
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

//var selectedClass = "";

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

//	1:{ convert:0,	reg:`\\/\\\*\(.|\\n)\*\\\*\\/`,													f:"g",	cl:"geany_comment",			prepared:`\\/\\*(.|\\n)*\\*\\/`,					original:`\/\*(.|\n)*\*\/`},
//	2:{ convert:0,	reg:`\\\/\\\/\(.\*|-\*\)\\s`,													f:"g",	cl:"geany_comment_line",	prepared:`\\/\\/(.*|-*)\\s`,						original:`\/\/(.*|-*)\s`},
//	3:{ convert:0,	reg:`\\#\[a-zA-Z0-9_\]\*`, 														f:"g",	cl:"geany_preprocessor",	prepared:`\\#$[a-zA-Z0-9_]*`,						original:`\#[a-zA-Z0-9_]*` },
//	4:{ convert:1,	reg:`\[\^\\w\\n\\\*,;&\]\*\(char\|for\|int\|void\)\[\^\\w\\n\\\*,;\]\*\\s\+`,	f:"g",	cl:"geany_keyword_1",		prepared:`[^\\w\\n\\*,;&]*(char|for|int|void)[^\\w\\n\\*,;]*\\s+`,	original:`[^\w\n\*,;&]*(char|for|int|void)[^\w\n\*,;]*\s+` },

//	1:{ convert:0,	reg:`'\[a-zA-Z0-9_\]\*\[\^"\]\[a-zA-Z0-9_\]\*'`,								f:"g",	cl:"geany_string_1",		prepared:`'[a-zA-Z0-9_]*[^"][a-zA-Z0-9_]*'`,		original:`'[a-zA-Z0-9_]*[^"][a-zA-Z0-9_]*'`},
//	2:{ convert:0,	reg:`\"\(.|\\n\)\*\?\"`, 														f:"g",	cl:"geany_string_2",		prepared:`"(.|\\n)*?"`,								original:`"(.|\n)*?"` },
//	3:{ convert:0,	reg:`\\/\\\*\(.|\\n)\*\\\*\\/`,													f:"g",	cl:"geany_comment",			prepared:`\\/\\*(.|\\n)*\\*\\/`,					original:`\/\*(.|\n)*\*\/`},
//	4:{ convert:0,	reg:`\\\/\\\/\(.\*|-\*\)\\s`,													f:"g",	cl:"geany_comment_line",	prepared:`\\/\\/(.*|-*)\\s`,						original:`\/\/(.*|-*)\s`},
//	5:{ convert:0,	reg:`\\$\[a-zA-Z0-9_\]\*`, 														f:"g",	cl:"geany_preprocessor",	prepared:`\\$[a-zA-Z0-9_]*`,						original:`\$[a-zA-Z0-9_]*` },
//	6:{ convert:0,	reg:`\(default|echo|function|foreach|for|break|case|switch|\!isset\)\*`,		f:"g",	cl:"geany_keyword_1",		prepared:`(default|echo|function|foreach|for|break|case|switch|!isset\\)*`,	original:`(default|echo|function|foreach|for|break|case|switch|!isset\)*` },

//[^(\/\/|\/\*|\*\|\"|\'|\;|\w|{|})]\s{0,}[\-\/+\-\(\)]? operators

// https://github.com/kristian/RegexHighlightView/blob/master/Regex%20Highlight%20View/Syntax%20Definitions/c.plist
// \/\/[^"\n\r]*(?:"[^"\n\r]*"[^"\n\r]*)*[\r\n]
// (?!\/\/)(?!(\w|\/\*|\*\/|\s))(\{|\(|\[|\<|\+|\-|\/|\*|\,|\;|\=|\>|\]|\)|\})*(?!\w)

var regexpClassTab = {
	c:{
		1:{ convert:0,	f:"g",	reg:/'[a-zA-Z0-9_]*[^"][a-zA-Z0-9_]*'/g,				cl:"geany_string_1",		prepared:`'[a-zA-Z0-9_]*[^"][a-zA-Z0-9_]*'`,		original:`'[a-zA-Z0-9_]*[^"][a-zA-Z0-9_]*'`},
		2:{ convert:0,	f:"g",	reg:/"(.|\n)*?"/g, 										cl:"geany_string_2",		prepared:`"(.|\\n)*?"`,								original:`"(.|\n)*?"` },
		3:{ convert:0,	f:"g",	reg:/\/\*(.|\n)*\*\//g,									cl:"geany_comment",			prepared:`\\/\\*(.|\\n)*\\*\\/`,					original:`\/\*(.|\n)*\*\/`},
		4:{ convert:0,	f:"g",	reg:/\/\/(.*|-*)\s/g,									cl:"geany_comment_line",	prepared:`\\/\\/(.*|-*)\\s`,						original:`\/\/(.*|-*)\s`},
		5:{ convert:0,	f:"g",	reg:/\#[a-zA-Z0-9_]*/g, 								cl:"geany_preprocessor",	prepared:`\\#$[a-zA-Z0-9_]*`,					original:`\#[a-zA-Z0-9_]*` },
		6:{ convert:0,	f:"g",	reg:/[^\w\n\*,;&]*(char|for|int|void)[^\w\n\*,;]*\s+/g,	cl:"geany_keyword_1",		prepared:`[^\\w\\n\\*,;&]*(char|for|int|void)[^\\w\\n\\*,;]*\\s+`,	original:`[^\w\n\*,;&]*(char|for|int|void)[^\w\n\*,;]*\s+` },
	},
	cpp:{},
	html:{},
	php:{
		1:{ convert:0,	reg:/'[a-zA-Z0-9_]*[^"][a-zA-Z0-9_]*'/g,								f:"g",	cl:"geany_string_1",		prepared:`'[a-zA-Z0-9_]*[^"][a-zA-Z0-9_]*'`,		original:`'[a-zA-Z0-9_]*[^"][a-zA-Z0-9_]*'`},
		2:{ convert:0,	reg:/"(.|\n)*?"/g, 														f:"g",	cl:"geany_string_2",		prepared:`"(.|\\n)*?"`,								original:`"(.|\n)*?"` },
		3:{ convert:0,	reg:/\/\*(.|\n)*\*\//g,													f:"g",	cl:"geany_comment",			prepared:`\\/\\*(.|\\n)*\\*\\/`,					original:`\/\*(.|\n)*\*\/`},
		4:{ convert:0,	reg:/\/\/(.*|-*)\s/g,													f:"g",	cl:"geany_comment_line",	prepared:`\\/\\/(.*|-*)\\s`,						original:`\/\/(.*|-*)\s`},
		5:{ convert:0,	reg:/\$[a-zA-Z0-9_]*/g, 												f:"g",	cl:"geany_preprocessor",	prepared:`\\$[a-zA-Z0-9_]*`,						original:`\$[a-zA-Z0-9_]*` },
		6:{ convert:0,	reg:/(default|echo|function|foreach|for|break|case|switch|!isset)/g,	f:"g",	cl:"geany_keyword_1",		prepared:`(default|echo|function|foreach|for|break|case|switch|!isset\\)*`,	original:`(default|echo|function|foreach|for|break|case|switch|!isset)*` },
	},
	py:{},
	sh:{},
};
/*
	7:{ convert:0,	reg:"\(\\s\{1,\}\|;\|=\|\\>\|\\<\)\\d\{1,\}; original:(\s{1,}|;|=|\>|\<)\d{1,}",		f:"g",	cl:"geany_operator",		prepared:`(\\s{1,}|;|=|\\>|\\<)\\d{1,}`,		original:`(\s{1,}|;|=|\>|\<)\d{1,}` },
*/

function MakeUnique(value, index, self) { return self.indexOf(value) === index; }
function escapeRegExp(str) { return str.replace(/[\\\[\]^$?*+().\/|{}]/g, '\\$&'); }
/*
Always a headache with JavaScript.RegExp. Always make sure you have some fukitol 1000mg near you.
replace(/[\\\[\]^$?*+().\/"'|]/g, '\\$&'); }
*/

function formatSampleText ( content , type, target ){
	var i=1, elm, elm2, tabMatch, tabMatch2, strRegexp1, strRegexp2, str2="100101" , str1 = content;

	var ptrHTMLCompatTab = HTMLCompatTab[type];
	for ( elm in ptrHTMLCompatTab ){
		str1 = str1.replace( ptrHTMLCompatTab[elm].m , ptrHTMLCompatTab[elm].r );
	}

	var ptrregexpClassTab = regexpClassTab[type];
	for ( elm in ptrregexpClassTab ){
		if ( ptrregexpClassTab[elm].convert == 1 ) { 					//Converting when forging RegExp. Because even String.raw won't help as it doesn't accepts variable... We're still forced to double backslashes
			ptrregexpClassTab[elm].reg = escapeRegExp(ptrregexpClassTab[elm].prepared);
			ptrregexpClassTab[elm].convert = 0;
			tabJSJournal[tabJSJournalSw]("reg:"+ptrregexpClassTab[elm].reg+"; original:"+ptrregexpClassTab[elm].prepared );
		}
//		strRegexp1 = new RegExp(ptrregexpClassTab[elm].reg , ptrregexpClassTab[elm].f );
//		tabMatch = str1.match(strRegexp1); 
		tabMatch = str1.match(ptrregexpClassTab[elm].reg) ;
		if ( tabMatch != null ) {
			tabMatch = tabMatch.filter(MakeUnique);
			tabJSJournal[tabJSJournalSw]("reg:"+ ptrregexpClassTab[elm].reg);
			tabJSJournal[tabJSJournalSw](tabMatch);
			for ( elm2 in tabMatch ) { 
				if ( tabMatch[elm2].length >0) {
					//str1 = str1.replace (tabMatch[elm2], "<span class='"+regexpClassTab[elm].cl+"'>" +tabMatch[elm2]+"</span>");
					strRegexp2 = new RegExp(escapeRegExp(tabMatch[elm2]),'g');
					str1 = str1.replace (strRegexp2, "<span id='s"+type+i+"'class='"+ptrregexpClassTab[elm].cl+"'>" +tabMatch[elm2]+"</span>");
					i++;
				}
			}
		}
	}
	str1 = str1.replace( /(\r\n|\n|\r)/g , "<br>");

	tabJSJournal[tabJSJournalSw](str1);
	Gebi(target).innerHTML = str1;

	for ( elm=1 ; elm<i ; elm++ ) {
		//Gebi("s"+type+elm).onclick = function () { OpenColorSelector('.'+this.className, 'fg'); };
	}
}



// \trick for storing \n
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
	
	return 0;
}

void swap (int * n1, int * n2)
{
	// pointer n1 and n2 points to the 
	//address of num1 and num2 respectively
	int temp;
	temp = *n1;
	*n1 = *n2;
	*n2 = temp;
}
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
		while ($dbp = fetch_array_sql($dbquery)) { 
			foreach ( $dbp as $A => $B ) { $some_table[$A] = $B; } 
		}
	break;
	default:
		echo ("Doing nothing!")
	break;
}

a_func ("Some text", 2 , 'some other text');

?>
.`
}

//--------------------------------------------------------------------------------
// EOF

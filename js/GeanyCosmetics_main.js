//------------------------------------------------------------------
//
//	Geany Cosmetics Main
//
//	Author : Faust MARIA DE AREVALO <faust@club-internet.fr>
//	GitHub :
//	Under MIT Licence
//
//------------------------------------------------------------------

// FIXME: [x] fix the color picker behavior. depending on platform and browser focus becomes a problem. See next version evolution.
// TODO: [x] Rearrange interface

// FUTURE: Try to see if a colorpicker like spectrum is ok to work with (Especially if we can give it specific targets like class properties)
// FUTURE: Load a theme previously generated (means tagging the file to recognize offspings) 
// FUTURE: Find a better way to store datas (class tree, divs etc.) and make the code faster.

//--------------------------------------------------------------------------------
//
//
// Critical functions / variables
//
//

tabJSJournalSw = 1;

function Gebi (obj) { return document.getElementById (obj); }

var tabJSJournal = {
	0:function(){},
	1:function(data){ console.log(data); },
	2:function(data){ ( typeof data == "object" ) ? console.table(data) : console.log(data); }
}

//File function
//https://stackoverflow.com/questions/14446447/how-to-read-a-local-text-file
//Checks for file read/write capabilities
//fileCapabilities = (!window.File && !window.FileReader && !window.FileList && !window.Blob) ? 0 : 1;
// https://xhr.spec.whatwg.org/

function GetFileContent( file , Target ) {
	var targetFile = new XMLHttpRequest();
	targetFile.open("GET", file, false);
	targetFile.onreadystatechange = function (){
		if(targetFile.readyState === 4) {
			if(targetFile.status === 200 || targetFile.status == 0) {
				if ( Target != 0 ) { Gebi(Target).innerHTML = targetFile.responseText;}		// it throw an error but doesn't stop the program. So... until we get better.
				else { return targetFile.responseText; }
			}
		}
	}
	targetFile.send(null);
}

function rgb2hex(rgb){
 rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
 return (rgb && rgb.length === 4) ? "#" +
  ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
}

//--------------------------------------------------------------------------------
//
//
//	Window Onload
//
//
//--------------------------------------------------------------------------------
window.onload = function (){
	var elm, v, tab;

	GeanyCosmeticsInitialization();

//--------------------------------------------------------------------------------
//	Nesting functions in the HTML input type=color
	var colorSelector = Gebi('ColorSelector');
	colorSelector.onchange = function (){ ColorSelectorValidation(this.value) };
//	document.body.onfocus = function (){ ColorSelectorCancelation() };


//	Setting up what invite-text-div to render visible. 
	for (elm in tabListeDivLang) {
		tab = tabListeDivLang[elm];
		Gebi(tab.button).onclick = function(){ documentLangSelection (tabListeDivLang[this.id].target); };
		tabJSJournal[tabJSJournalSw]("Init:"+tab.button+";Target="+tab.target);
	}

	documentLangSelection (documentLang);
	Gebi("GC_card_A").style.visibility = "visible";
	Gebi("GC_card_A").style.display = "block";
	Gebi("GC_card_B").style.visibility = "visible";
	Gebi("GC_card_B").style.display = "block";

	formatSampleText( sampleContent.c , "c", "LikeInEditorC" );
	// formatSampleText( sampleContent.php , "php", "LikeInEditorPHP" );

//	Main DIV visible 
	Gebi("page").style.visibility = 'visible';
	Gebi("page").style.display = 'block';

};

//--------------------------------------------------------------------------------
// EOF


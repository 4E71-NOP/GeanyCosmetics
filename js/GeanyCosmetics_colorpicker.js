//------------------------------------------------------------------
//
//	Geany Cosmetics System colorpicker Managment
//
//	Author : Faust MARIA DE AREVALO <faust@club-internet.fr>
//	GitHub :
//	Under MIT Licence
//
//------------------------------------------------------------------


//--------------------------------------------------------------------------------
//
//
//	Handling system color pickup
//
//

var selectorManagment = { TargetClass:"", rule:"" };
var classTable = {};


function OpenColorSelector ( TargetClass , rule ){
	tabJSJournal[tabJSJournalSw](TargetClass);
	var color;
	switch ( rule ) {
	case 'fg': color = scl[TargetClass].ObjClass.color;				break;
	case 'bg': color = scl[TargetClass].ObjClass.backgroundColor;	break;
	}
	tabJSJournal[tabJSJournalSw]("Class:"+TargetClass +"; Value:"+color);

	selectorManagment.TargetClass = TargetClass;
	selectorManagment.rule = rule;

	var colorSelector = Gebi('ColorSelector');
	colorSelector.value = rgb2hex(color);
	colorSelector.click();
	tabJSJournal[tabJSJournalSw](colorSelector);
}

function ColorSelectorValidation ( color ){
	if (selectorManagment.TargetClass == "geany_allEditorBg") {
		for ( var elm in scl ) {
			( scl[elm].on == 1 ) ? scl[elm].ObjClass.backgroundColor = color: 0;
		}
		scl["geany_allEditorBg"].ObjClass.backgroundColor = color;
	}
	else {
		var obj1 = scl[selectorManagment.TargetClass];
		switch ( selectorManagment.rule ) {
		case 'fg': 
			obj1.ObjClass.color = color;
			obj1.ObjDivFg.style.backgroundColor = color;
		break;
		case 'bg': 
			obj1.ObjClass.backgroundColor = color;		
			obj1.ObjDivBg.style.backgroundColor = color;
		break;
		}
	}
	tabJSJournal[tabJSJournalSw]("Target Class:"+selectorManagment.TargetClass+"; color:"+color);
	( obj1 ) ? tabJSJournal[tabJSJournalSw](obj1):0;
}

//--------------------------------------------------------------------------------
// EOF


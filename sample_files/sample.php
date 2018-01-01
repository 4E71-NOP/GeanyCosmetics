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

//  #   BDT  USD  GBP	  CAD	  EUR	  AUD
//BDT   1,  .79,  1.43, .89,  1.43
//USD   1,  .79,  1.43, .89,  1.43
//GBP	  1,  .79,  1.43, .89,  1.43
//CAD	  1,  .79,  1.43, .89,  1.43
//EUR	  1,  .79,  1.43, .89,  1.43
//AUD   1,  .79,  1.43, .89,  1.43

var currency =[
  [1, .01,  0.009, 0.015,  0.010, 0.016],//BDT
  [84.53, 1, .79,  1.43, .89,  1.43],//USD
  [107.256, 1.27, 1,  1.70, 1.13,  1.82],//GBP
  [62.981,  .74, .59,  1, 66,  1.06],//CAD
  [94.923,  1.12, .88,  1.50, 1,  1.61],//EUR
  [58.9301, .69, .55,  .93, .62, 1],//AUD
]


$( "#inBDT" ).keyup(function() {
    var value = $( this ).val();
    var row = 0;
    $( "#inBDT" ).val( value * currency[row][0] );
    $( "#inUSD" ).val( value * currency[row][1] );
    $( "#inGBP" ).val( value * currency[row][2] );
    $( "#inCAD" ).val( value * currency[row][3] );
    $( "#inEUR" ).val( value * currency[row][4] );
    $( "#inAUD" ).val( value * currency[row][5] );
}).keyup();

$( "#inUSD" ).keyup(function() {
    var value = $( this ).val();
    var row = 1;
    $( "#inBDT" ).val( value * currency[row][0] );
    $( "#inUSD" ).val( value * currency[row][1] );
    $( "#inGBP" ).val( value * currency[row][2] );
    $( "#inCAD" ).val( value * currency[row][3] );
    $( "#inEUR" ).val( value * currency[row][4] );
    $( "#inAUD" ).val( value * currency[row][5] );
}).keyup();


$( "#inGBP" ).keyup(function() {
    var value = $( this ).val();
    var row = 2;
    $( "#inBDT" ).val( value * currency[row][0] );
    $( "#inUSD" ).val( value * currency[row][1] );
    $( "#inGBP" ).val( value * currency[row][2] );
    $( "#inCAD" ).val( value * currency[row][3] );
    $( "#inEUR" ).val( value * currency[row][4] );
    $( "#inAUD" ).val( value * currency[row][5] );
}).keyup();

$( "#inCAD" ).keyup(function() {
    var value = $( this ).val();
    var row = 3;
    $( "#inBDT" ).val( value * currency[row][0] );
    $( "#inUSD" ).val( value * currency[row][1] );
    $( "#inGBP" ).val( value * currency[row][2] );
    $( "#inCAD" ).val( value * currency[row][3] );
    $( "#inEUR" ).val( value * currency[row][4] );
    $( "#inAUD" ).val( value * currency[row][5] );
}).keyup();

$( "#inEUR" ).keyup(function() {
    var value = $( this ).val();
    var row = 4;
    $( "#inBDT" ).val( value * currency[row][0] );
    $( "#inUSD" ).val( value * currency[row][1] );
    $( "#inGBP" ).val( value * currency[row][2] );
    $( "#inCAD" ).val( value * currency[row][3] );
    $( "#inEUR" ).val( value * currency[row][4] );
    $( "#inAUD" ).val( value * currency[row][5] );
}).keyup();

$( "#inAUD" ).keyup(function() {
    var value = $( this ).val();
    var row = 5;
    $( "#inBDT" ).val( value * currency[row][0] );
    $( "#inUSD" ).val( value * currency[row][1] );
    $( "#inGBP" ).val( value * currency[row][2] );
    $( "#inCAD" ).val( value * currency[row][3] );
    $( "#inEUR" ).val( value * currency[row][4] );
    $( "#inAUD" ).val( value * currency[row][5] );
}).keyup();

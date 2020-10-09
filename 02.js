/*

Skriv en funktion som tar en sträng som parameter, gör om alla tecken som inte är a-z (stora eller små) till HTML-entiteter och returnerar resultatet.

Läs mer om HTML-entiteter här: https://dev.w3.org/html5/html-author/charref

Din funktion måste byta ut alla "osäkra" tecken mot "säkra". De tecken ni behöver byta ut är:
<
>
å
ä
ö
'

Alla tecken som inte är a-z eller någon av ovanstående (t ex kommatecken, punkter, bindestreck osv) ska tas bort.

*/

function safe_string(inputString) {
  let charArray = [["<", "&lt;"], [">", "&gt;"], ["å", "&aring;"], ["ä", "&auml;"], ["ö", "&ouml;"], ["'", "&apos;"]];
  
  return inputString.split('').map((element) => {
    for(let char of charArray) {
      element = element === char[0] ? char[1] : element;
    }
    return element;
  }).join('');
}

console.log( safe_string( "<h1>Sjörövare, O'hoj</h1>" ) ); // Expected output: &lt;h1&gt;Sj&ouml;r&ouml;vare O&apos;hoj&lt;/h1&gt;


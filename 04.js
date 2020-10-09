/*

Gör en funktion: get_average_sum. Funktionen ska ta emot en array som parameter och räkna ut genomsnittet och 
summan av talen du skickade in och returnera de två svaren till den som anropar metoden. 
Du ska returnera svaren som ett objekt med egenskaperna average och sum. 
Du ska inte skriva någon klass utan bara returnera ett "fristående" objekt.

Du måste använda en reduce-funktion.

Anropa get_average_sum och skicka med en array med 2 till 10 heltal. 
Kontrollera antalet tal och returnera false om antalet tal är fel eller om ett värde inte är ett heltal.

Skriv kod som anropar get_average_sum, sparar resultatet i en variabel och skriver ut båda värdena.

OBS! get_average_sum-funktionen i sig får inte innehålla utskrifter, utskriften ska ske utanför funktionen.

Exempel på värden och deras svar:

1, 2, 3 ger average=2 och sum=6
4, 5, 6, 7 ger average=5,5 och sum=22
-1, 2, 18 ger average=6,333 och sum=19

*/

function get_average_sum(inputArray) {
  //checks if the array is the right size
  if (inputArray.length < 2 || inputArray.length > 10) {
     return false;
  }
  //checks if the elements in the array are integers
  for (let element of inputArray) {
    if(element % 1 !== 0 || typeof element != 'number') {
      return false;
    }
  }
  //creates an object
  let output = {};
  //the object gets an attribute called sum and its value is the sum of the elements in the array
  output.sum = inputArray.reduce((acc, curr) => acc += curr);
  //the object gets an attribute called average and its value is the sum devided by the length of the array
  output.average = output.sum / inputArray.length;
  return output;
}

myArray = [-1,2,18];
myReturnedObject = get_average_sum(myArray);
console.log(myReturnedObject);

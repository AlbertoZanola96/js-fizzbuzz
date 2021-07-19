//Scrivi un programma che stampi i numeri da 1 a 100


/*
-Per i multipli di 3 stampi “Fizz”;
-Per i multipli di 5 stampi Buzz;
-Per i  multipli sia di 3 e 5 stampi FizzBuzz;
*/

var numeroInterazioni = 100;

for (var i = 0; i < numeroInterazioni; i++) {
    var numero = i + 1;

    if (numero % 3 == 0 && numero % 5 == 0) {
        numero = "FizzBuzz";
    }
    else if ((numero % 3) == 0) {
        numero = "Fizz";
    }
    else if ((numero % 5) == 0) {
        numero = "Buzz";
    }
    
    console.log(numero);
}








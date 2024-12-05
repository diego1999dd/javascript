const leia = require("readline-sync");

//Criei a variavel numero
let numero;
//usuario digita o numero
numero = leia.questionInt("Digite um numero:");
//Se o numero for divisivel por 2 ele e nao sobrar nada é par, e se o numero for menor que 0 é negativo, como por exemplo o 2 deu par e positivo
if (numero % 2 == 0 && numero < 0) {
  console.log(`O ${numero} e par e negativo`); //se sobrar algo na divisao ele da impar, e se o numero for maior que 0 positivo, se for menor, negativo
} else if (numero % 2 == 0 && numero > 0) {
  console.log(`O ${numero} e par e positivo`);
} else if (numero % 2 != 0 && numero < 0) {
  console.log(`O ${numero} e impar e negativo`);
} else if (numero % 2 != 0 && numero > 0) {
  console.log(`O ${numero} e impar e positivo`);
}

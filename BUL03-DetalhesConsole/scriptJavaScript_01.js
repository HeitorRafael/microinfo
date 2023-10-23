// ---- O código é executado de cima para baixo
console.log("Primeira Linha");
console.log("Segunda Linha");

// ---- A linguagem é "Case Sensitive"
// O código a seguir gera um erro
// console.LOG("Terceira Linha");

// ---- Teste com variável
var $x = 1;
console.log($x);

// ---- Teste com erro
//console.log($X);

// ---- Tipagem Fraca
var $x2 = 2; // Variável do tipo numérica
console.log($x2);
console.log(typeof $x2);

$x2 = "A" // Mudamos o tipo da variável para "String"
console.log($x2);
console.log(typeof $x2);

// Ponto e vírgula opcional
$x2 = "B"
console.log($x2)
console.log(typeof $x2)

// = Comentários de linha - JavaScript
/* = Comentários de bloco - JavaScript */
// <!-- --> = Comentários de bloco e linha - HTML
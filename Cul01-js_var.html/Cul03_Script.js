// Declaração de variáveis
console.log("/*Declaração de variáveis*/")

// Utilizando palavra-chave "var"
var a = 1;
console.log(a);

// Mudando o tipo da variável
console.log("mudando o tipo de variável");
a = "Agda"
console.log(a);

/* Existe a possibilidade de criar variável Global em JS sem o uso das palavras-chave
de de declaração de variáveis (var...)
mãs não é recomendado.
*/
nome = "Maria"

/*Formas de criar variável*/
console.log("/*Formas de criar variável*/")
var $x = 2;
var x = 3;
var _x = 4;
console.log($x);
console.log(x);
console.log(_x);

/*Com a palavra-chave "let não é possivel redeclarar a variável"*/
// Usando LET
//console.log("Redeclarando variável")
//let nome2 = "Mari"
//let nome2 = "Agda"

/* teste de escopo de declaração de var*/

console.log("/* teste de escopo de declaração de var*/")
var k=10;
{
    //chaves significa novo escopo ou seja o redefinimos o valor de y
    var k=2;
}
console.log(k);

//LET 
console.log("/* teste de escopo de declaração de LET*/")
var h=10;
{
    //chaves significa novo escopo ou seja o redefinimos o valor de k (perceber que não muda mais)
    var h=2;
}
console.log(h);

//const
console.log("/* teste de escopo de declaração de const*/")
const i=10;
{
    //chaves significa novo escopo ou seja o redefinimos o valor de i porem sem efeito
    const i=2;
}
console.log(i);
















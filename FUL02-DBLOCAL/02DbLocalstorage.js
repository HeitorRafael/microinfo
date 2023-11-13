//iniciando localstogare 

//inserir
localStorage.setItem("firstName", "Maria Juana");

//recuperar
let urName = localStorage.getItem("firstName")

console.log(urName)

//recuperar chave não existente
let ultName = localStorage.getItem("sobreNome")
console.log(ultName);
//voltando um valor 'null' que deve ser testado
if (!ultName) {
    alert("Sobrenome não encontrado");
}

//para remover item
localStorage.removeItem("firstName")

//verificar o tipo de dado armazenado

localStorage.setItem("a", "1")
localStorage.setItem("b", 2)

console.log(typeof localStorage.getItem("a"));
console.log(typeof localStorage.getItem("b"));
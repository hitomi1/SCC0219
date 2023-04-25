var lista = document.getElementsByTagName("ul")[0];
var itens = document.getElementsByTagName("li")[0];
itens = lista.children;

var novoItem = document.createElement("li");
novoItem.textContent = "Suco de Laranja";

lista.insertBefore(novoItem, itens[2]);
console.log(lista);

var lista2 = document.getElementsByTagName("ul")[1];
var itens2 = lista2.children;
var novoItem2 = document.createElement("li");
novoItem2.textContent = "Manteiga";

lista2.replaceChild(novoItem2, itens2[2]);

console.log(lista2);
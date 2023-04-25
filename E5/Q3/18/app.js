var lista = document.getElementsByTagName("ul")[0];
var itens = document.getElementsByTagName("li")[0];
itens = lista.children;

var novoItem = document.createElement("li");
novoItem.textContent = "Suco de Laranja";

lista.insertBefore(novoItem, itens[2]);
console.log(lista);



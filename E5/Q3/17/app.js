var titulo = document.querySelector("h1");
var texto = document.createTextNode("um texto qualquer");

titulo.appendChild(texto);

titulo.textContent = "um novo texto";

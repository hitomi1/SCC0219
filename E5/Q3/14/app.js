console.log(document.body.childNodes);

const lista = document.body.childNodes;
alert(lista[5].innerHTML);
alert(lista[5].nodeName);
alert(lista[5].nodeType);
alert(lista[5].nodeValue);
alert(lista[5].childNodes[3].childNodes[0].nodeValue);

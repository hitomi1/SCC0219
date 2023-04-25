var imagem = document.createElement("img");
imagem.src = "http://www.ee.cityu.edu.hk/~lmpo/lenna/len_top.jpg";

var paragrafo = document.createElement("p");
paragrafo.innerHTML = "Olá Pessoal";

document.getElementById("conteudo").appendChild(paragrafo);
document.getElementById("conteudo").appendChild(imagem);

document.getElementById("conteudo").removeChild(paragrafo);

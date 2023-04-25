let title = document.getElementsByTagName("h1")[0];
let paragraph = document.getElementsByTagName("p")[0];

let link = document.createElement("a");
link.href = window.location.href;
link.innerText = "Home";
link.setAttribute("style", "font-weight: bold; text-decoration: none;");
let body = document.querySelector("body");
body.appendChild(link);


let words = paragraph.innerText.split(" ");
let count = document.createElement("a");
count.innerText = words.length.toString();
document.body.insertBefore(count, title);

document.head.innerHTML +=
  "<style>.pink{color: pink} .purple{color: purple} .blue{color: blue}</style>";

for (let i = 0; i < words.length; i++) {
  let word = words[i];
  let length = word.replace(/\s+/g, "").length;
  if (length >= 8) words[i] = "<span class='pink'>" + word + "</span>";
  else if (length === 6) words[i] = "<span class='purple'>" + word + "</span>";
  else if (length === 4 || length === 5) {
    words[i] = "<span class='blue'>" + word + "</span>";
  }
}

const strings = words.join(" ").split(". ");
paragraph.innerHTML = strings.join(".<br>");

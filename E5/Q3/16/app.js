document.getElementById("btn-set").addEventListener("click", () => {
  document.getElementById("title").setAttribute("class", "green");
});

document.getElementById("btn-remove").addEventListener("click", () => {
  document.getElementById("title").removeAttribute("class");
});

document.getElementById("btn-get").addEventListener("click", () => {
  const value = document.getElementById("title").getAttribute("class");
  document.getElementById("class").innerHTML = value;
});

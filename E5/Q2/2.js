
document.getElementById("name").innerHTML = "Ayrton Senna",
document.getElementById("nickname").innerHTML = "Silvastone, Magic Senna, The King of Rain",
document.getElementById("favorites").innerHTML = "Xuxa",
document.getElementById("hometown").innerHTML = "São Paulo - SP"
   
const body = document.querySelector('body');
// Set the font style
body.style.fontFamily = 'Arial';

const img = document.createElement('img');
// Set the src attribute to the URL of the image
img.src = 'https://www.iheartbrazil.com/wp-content/uploads/2022/01/e-ayrton-senna-formula-one-driver-720x405.jpg.webp';
// Add the img element to the document body
document.body.appendChild(img);
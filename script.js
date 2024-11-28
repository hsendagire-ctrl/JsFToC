// Fahrenheit to Celsius
var userinput = document.getElementById("fval");
let output = document.getElementById("output");
let button = document.getElementById("cbutton");
let imgplacement = document.getElementById("imgcontainer");
let weblink = document.getElementById("link");

// Event Listeners
button.addEventListener("click", convert);

// Functions
function convert() {
  var fnumber = Number(document.getElementById("fval").value);
  var result = ((fnumber - 32) * 5) / 9;
  console.log(result);
  output.innerHTML = result;
  Math.round(result);
  userinput.value = " ";
  button.style.backgroundColor = "#26d978";
  imgplacement.innerHTML += "<img width = '110px' src= 'img/thermometer.webp'>";
  weblink.href = "https://www.google.com/";
}

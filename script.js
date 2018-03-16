var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function updateColorDisplay() {
    css.innerHTML = "The current gradient colors are " + color1.value + " and " + color2.value;
}

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    updateColorDisplay();
}

function generateColor() {
    return "#"+Math.floor(Math.random()*16777215).toString(16);
}

function randomizeColors() {
    color1.value = generateColor();
    color2.value = generateColor();
    setGradient();
}

updateColorDisplay();

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
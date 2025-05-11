const ele = document.getElementById("ele1")
// Función predeterminada:
function pintar() {
    ele.style.backgroundColor = 'yellow'
}
ele.addEventListener("click", pintar);

// Función 2.2
function pintar(element) {
    element.style.backgroundColor = 'yellow'
}
ele.addEventListener("click", function (event) {
    pintar(event.target)
});

// Funcion 2.3
function pintar(element, color = "green") {
    element.style.backgroundColor = color
}

ele.addEventListener("click", function (event) {
    pintar(event.target, 'yellow')
});


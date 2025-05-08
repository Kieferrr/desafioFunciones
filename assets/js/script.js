// Función predeterminada:
function pintar() {
    ele.style.backgroundColor = 'yellow'
}
const ele = document.getElementById("ele1")
ele.addEventListener("click", pintar);

// Función 2.2
function pintar(elemento) {
    elemento.style.backgroundColor = 'yellow'
}
ele.addEventListener("click", function (event) {
    pintar(event.target)
});

// Funcion 2.3
function pintar(elemento, color = "green") {
    elemento.style.backgroundColor = color
}

ele.addEventListener("click", function (event) {
    pintar(event.target, 'yellow')
});


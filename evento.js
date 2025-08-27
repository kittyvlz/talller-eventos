document.querySelector(".contenedor").addEventListener("click", function() {
    alert("¡Hola Soy el div!");
});

document.querySelector("button").addEventListener("click", function(event) {
    event.stopPropagation();
});

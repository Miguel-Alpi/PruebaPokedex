const btnBuscar = document.getElementById("btnBuscar");
const input = document.getElementById("pokemonInput");
const resultado = document.getElementById("resultado");

btnBuscar.addEventListener("click", buscar);

input.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        buscar();
    }
});

function buscar() {

    const valor = input.value.trim().toLowerCase();

    if (!valor) {
        resultado.innerHTML = "<p class='error'>Ingrese un Pokémon</p>";
        return;
    }

    resultado.innerHTML = "<p>Cargando...</p>";

    obtenerPokemon(valor)
        .then(data => mostrarPokemon(data))
        .catch(() => {
            resultado.innerHTML =
                "<p class='error'>Pokémon no encontrado. Intente nuevamente.</p>";
        });
}

function mostrarPokemon(data) {

    const nombre = data.name.toUpperCase();
    const imagen = data.sprites.front_default;
    const tipos = data.types.map(t => t.type.name).join(", ");

    resultado.innerHTML = `
        <h2>${nombre}</h2>
        <img src="${imagen}">
        <p><strong>Tipo:</strong> ${tipos}</p>
        <p><strong>Peso:</strong> ${data.weight}</p>
        <p><strong>Altura:</strong> ${data.height}</p>
    `;
}
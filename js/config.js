const API_CONFIG = {
    BASE_URL: "https://pokeapi.co/api/v2",
    ENDPOINTS: {
        POKEMON: "/pokemon/"
    }
};

function obtenerPokemon(nombreOId) {

    const url = API_CONFIG.BASE_URL + 
                API_CONFIG.ENDPOINTS.POKEMON + 
                nombreOId;

    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("No encontrado");
            }
            return response.json();
        });
}
async function conexionList(){
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1025');
    const data = await res.json();
    return data.results;
}

async function general(){
    const infoPokes = await conexionList();
    mostrarLista(infoPokes);
}
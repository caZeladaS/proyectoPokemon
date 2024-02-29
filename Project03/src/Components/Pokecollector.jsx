// Importa la matriz de objetos de pokemones desde la ruta especificada
import pokemones from "../assets/img/pokemones";

// Definición de un componente funcional llamado 'Item'
const Item = () => {
    // Desestructura la matriz de pokemones para obtener los primeros cinco pokemones
    const [pokemon1, pokemon2, pokemon3, pokemon4, pokemon5] = pokemones;

    // Imprime en la consola información sobre los primeros cinco pokemones
    console.log("Pokémon 1:", pokemon1);
    console.log("Pokémon 2:", pokemon2);
    console.log("Pokémon 3:", pokemon3);
    console.log("Pokémon 4:", pokemon4);
    console.log("Pokémon 5:", pokemon5);

    return (
        // Contenedor principal del componente
        <div>
            {/* Muestra el nombre e imagen del primer Pokémon */}
            <h1>{pokemon1.name}</h1>
            <img src={pokemon1.img} width={"250"} height={"auto"} />

            {/* Muestra el nombre e imagen del segundo Pokémon */}
            <h1>{pokemon2.name}</h1>
            <img src={pokemon2.img} width={"250"} height={"auto"} />

            {/* Muestra el nombre e imagen del tercer Pokémon */}
            <h1>{pokemon3.name}</h1>
            <img src={pokemon3.img} width={"250"} height={"auto"} />

            {/* Muestra el nombre e imagen del cuarto Pokémon */}
            <h1>{pokemon4.name}</h1>
            <img src={pokemon4.img} width={"250"} height={"auto"} />

            {/* Muestra el nombre e imagen del quinto Pokémon */}
            <h1>{pokemon5.name}</h1>
            <img src={pokemon5.img} width={"250"} height={"auto"} />
        </div>
    );
}

// Exporta el componente 'Item' para que pueda ser utilizado en otros archivos
export default Item;

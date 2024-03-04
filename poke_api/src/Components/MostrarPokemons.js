

function MostrarPokemons({pokemons}){
    return <div className="productos-container">
    {pokemons.map(pokemon => (
        <div key={pokemon} className="producto">
           
            <button className="agregar-carrito">Agregar al carrito</button>
        </div>
    ))}
</div>
}

export default MostrarPokemons;

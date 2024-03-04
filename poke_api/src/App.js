import "./App.css";
import {
  Container,
  Row,
  Col,
  InputGroup,
  Form,
  Button,
  Image,
} from "react-bootstrap/";
import { useEffect, useState } from "react";
import Finder from "./Components/Finder.js";
import PokemonCard from "./Components/PokemonCard.js";
import MostrarPokemons from "./Components/MostrarPokemons.js";
import Titulo from "./Components/Titulo.js";

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  const [nombre, setNombre] = useState("Nombre");
  const [name, setName] = useState("Nombre");
  const [pokemon, setPokemon] = useState("");

  const URL = "https://pokeapi.co/api/v2/pokemon?limit=150&offset=0";

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        setPokemonList(data.results);
        const s = pokemonList.length;
        console.log(s);
      });
  }, []);

  return (
    <div className="App">
      <Container>
        <Titulo />
        <Finder texto={"Buscar Pokemon"} foundPokemon={setPokemon} />
        {pokemon && (
          <PokemonCard
            name={"pokemon > "+pokemon.name}
            image={pokemon.sprites.front_default}
          />
        )}
      </Container>
    </div>
  );
}

export default App;

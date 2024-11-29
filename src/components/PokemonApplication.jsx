import { useEffect, useState } from "react"
import Pokemon from "./Pokemon";

function PokemonApplication() {
    let [pokemons, setPokemons] = useState([])
    let [selectedPokemon, setSelectedPokemon] = useState('')
    let [pokemonDetails, setPokemonDetails] = useState(null)


    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
                let json = await response.json();

                const sortedPokemons = json.results.sort((a, b) => a.name.localeCompare(b.name));

                setPokemons(sortedPokemons)

            }catch (error) {
                console.error('Error with pokemons....', error);
            }
        }
        fetchData();

    }, []);

    const handleFetchDetails = async () => {
        if (!selectedPokemon) {
            alert("Please select a Pokemon first!")
            return;
        }
        try {
            let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`)
            let json = await response.json();
            setPokemonDetails(json);
        }catch (error) {
            console.error('Error with pokemon details......', error)
        }
    }
        

    return (    
        <>
        <label htmlFor="pokemonList"></label>
        <select name="pokemonList" id="pokemonList" onChange={(e) => setSelectedPokemon(e.target.value)}>
            <option value="">Select a Pokemon</option>
            {pokemons.map((pokemon) => (
                <option key={pokemon.name} value={pokemon.name}> {pokemon.name}</option>
            ))}
        </select>

        <button onClick={handleFetchDetails}>Select Pokemon</button>
        {pokemonDetails && <Pokemon details = {pokemonDetails}/>}

        </>
    )
}

export default PokemonApplication
import { useState } from 'react'
import PokemonApplication from './PokemonApplication';

function Home() {

    let [start, setStart] = useState(false);

    return(
        <>
        {!start && <button onClick={() =>setStart(!start)}>Start Pokemon App</button> }
    

        {start && <PokemonApplication/>}
        </>
    )
}

export default Home
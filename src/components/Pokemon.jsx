function Pokemon (props) {
    return(
        <>
        <div className="pokemon-card">
        <h3><strong>{props.details.name}</strong></h3>
        <img src={props.details.sprites.front_default} alt={props.details.name}/>
        <p><strong>Type: </strong>{props.details.types.map(info => info.type.name).join(', ')}</p>
        <p><strong>Weight: </strong>{props.details.height} </p>
        <p><strong>Height: </strong>{props.details.weight}</p>

        </div>
      
        </>
    )
}

export default Pokemon
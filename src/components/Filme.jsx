

function Filme(props) {
    
    const filme = props.filme
    
    
    // ele dava erro ao tirar o código da key como props
    // mesmo sem ter nada (é undefined)
    // e não consegui resolver, entao fica assim
    const key = filme.imdbID
    
    
    return (
        <div key={key}>
            <img src={filme.Poster}/>
            <h2>{filme.Title}</h2>
            <label>{filme.Year}</label>
        </div>
    )
}

export default Filme
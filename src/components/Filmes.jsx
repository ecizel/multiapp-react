import axios from "axios"
import styled from "styled-components"
import { useState } from "react"

import Filme from "./Filme"

// necessita de chave, aqui:
const chaveApi = '9f41b26a'

const Container = styled.div `
    
`

const Title = styled.h1 `
    
`

const FilmesContainer = styled.div `
    
`

function Filmes() {

    const [ query, setQuery ] = useState('')

    // filmes pra colocar como se fosse os cartazes
    const [ movies, setMovies ] = useState([])

    const procurarFilmes = async () => {
        setQuery(prevQuery => prevQuery.trim())
        
        if (query.trim() !== ''){
            try {
                const response = await axios.get(`https://www.omdbapi.com/`, {
                    params: {
                        s: query.trim(),
                        apikey: chaveApi
                    }
                })
                setMovies(response.data.Search)
                console.log(response.data);
                
                
            } catch (error) {
                console.log("Ocorreu um erro: "+ error);
            }
        }
    }

    return (
        <Container>
            <Title>Pesquisar filmes</Title>
            <label>Nome do filme: </label>
            <input type="text" value={query} onChange={(event) => setQuery(event.target.value)}/>
            <button onClick={procurarFilmes}>Pesquisar</button>

            <FilmesContainer>
                { movies && movies.map((value, key) => {
                            return (
                            <Filme filme={value} key={key}/>
                        )
                    })
                }
            </FilmesContainer>
        </Container>
    )
}

export default Filmes
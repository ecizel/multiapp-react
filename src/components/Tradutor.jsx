import axios from "axios"
import { useState } from "react"
import styled from "styled-components"

// utilizando styled components
// 3 primeiras linhas: combo centralização
const Container = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    border: 1px #5560f6 solid;
    border-radius: 10px;
    padding: 10px;
    max-width: 350px;
    font-family: Arial, Helvetica, sans-serif;
`

const Title = styled.h1`
    margin: 0%;
`

function Tradutor() {

    const [ texto, setTexto ] = useState('')
    const [ saida, setSaida ] = useState('')

    const [ idiomaOrigem, setIOrigem ] = useState('pt')
    const [ idiomaSaida, setISaida] = useState('en')

    const traduzir = async () => {
        setTexto(prevTexto => prevTexto.trim())

        if (texto.trim() !== '') {

            try {
                setSaida('')
                const response = await axios.get("https://api.mymemory.translated.net/get", 
                    { 
                        params:
                        {
                            q: texto.trim(),
                            langpair: `${idiomaOrigem}|${idiomaSaida}`
                        }
                    } 
                )

                console.log(response);
                setSaida(response.data.responseData.translatedText)
                
            } catch (error) {
                console.log(error);
                setSaida("Erro ao traduzir")
            }
        }
    }

    return(
        <Container>
            <Title>Tradutor de idioma</Title>
            <div>
                <label>Idioma de origem:</label>
                <select value={idiomaOrigem} name="origem" defaultValue="pt" onChange={(event) => setIOrigem(event.target.value)}>
                    <option value="pt">pt</option>
                    <option value="en">en</option>
                    <option value="it">it</option>
                    <option value="es">es</option>
                </select>
            </div>

            <div>
                <label>Idioma de saída:</label>
                <select value={idiomaSaida} name="saida" defaultValue="en" onChange={(event) => setISaida(event.target.value)}>
                    <option value="pt">pt</option>
                    <option value="en">en</option>
                    <option value="it">it</option>
                    <option value="es">es</option>
                </select>
            </div>

            <input type="text" value={texto} onChange={(event) => setTexto(event.target.value)}/>
            <button onClick={traduzir}>Traduzir</button>

            {
                saida && 
                (
                    <p>{saida}</p>
                )
            }
        </Container>
    )
}

export default Tradutor
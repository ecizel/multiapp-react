import { useState } from 'react'
import styled from 'styled-components'
import axios from "axios"

// precisa de token (key)
const chaveApi = 'ed9ce3b365c81c'

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

const ContainerLocal = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Title = styled.h2`
    margin: 0;
`

const Label = styled.label`
    
`

const Input = styled.input`
    border: 1px #5560f6 solid;
    border-radius: 7px;
    max-width: 90%;
    // tirar a cor quando clica
    outline: none;

    &:focus {
        border-color: blue; 
    }
`

const Button = styled.button`
    color: white;
    background: #5560f6;
    border: none;
    border-radius: 7px;
    outline: none;
    padding: 4px;

    &:active {
        background: #3744f8;
    }
`

function EncontrarIp() {

    const [ ip, setIp ] = useState('')
    const [ localizacao, setLocalizacao ] = useState('')

    const procurarLocal = async () => {
        if (ip !== '') {
            try {
                const response = await axios.get(`http://ipinfo.io/${ip}`)
                console.log(response.data);
                setLocalizacao(response.data)
            } catch (error) {
                console.log("Houve um erro: "+ error);
                setLocalizacao({erro: [error]})
            }
        }
    }

    return (
        <Container>
            <Title>Encontrar a localização do Ip</Title>
            <Label>Digite o Ip: </Label>
            <Input value={ip} onChange={(e)=>setIp(e.target.value)}/>
            <Button onClick={procurarLocal}>Procurar</Button>
            { localizacao && 
            (
                <ContainerLocal>
                    <Label>{localizacao.city}</Label>
                    <Label>{localizacao.region}</Label>
                    <Label>{localizacao.country}</Label>                    
                    <Label>{localizacao.bogon && "Ip não encontrado"}</Label>                 
                    <Label>{localizacao.erro && "Ip inválido"}</Label>                 
                </ContainerLocal>
            ) 
            }
        </Container>
    )
}

export default EncontrarIp
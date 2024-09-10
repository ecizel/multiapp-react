import { QRCodeCanvas } from 'qrcode.react'
import { useState } from "react"
import styled from "styled-components"

const Container = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    border: 1px #5560f6 solid;
    border-radius: 10px;
    padding: 10px;
    height: 200px;
    max-width: 350px;
    font-family: Arial, Helvetica, sans-serif;
`

const Title = styled.h2`
    margin: 0;
`

const Input = styled.input`
    border: 1px #5560f6 solid;
    border-radius: 7px;
    max-width: 90%;
    // tirar a cor quando clica
    outline: none;

    &:focus {
        border-color: blue 
    }
`

const Button = styled.button`
    
`

function QrCoder() {

    const [ texto, setTexto ] = useState('')

    return(
        <Container>
            <Title>Gerador de QRCode</Title>
            <Input value={texto} onChange={(e) => setTexto(e.target.value)}/>

            {/* Durante a aula era só QRCode,
            Mas agora tem SVG e Canvas */}
            { texto && <QRCodeCanvas value={texto} size={128} /> } 
        </Container>
    )    
}

export default QrCoder
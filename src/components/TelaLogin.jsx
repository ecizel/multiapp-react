import { useState } from 'react'
import styled from "styled-components"

const Form = styled.form`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    border: 1px #5560f6 solid;
    border-radius: 10px;
    padding: 10px;
    max-width: 250px;
    font-family: Arial, Helvetica, sans-serif; 
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
const Erro = styled.label`
    color: red;
    font-size: small;
`

function TelaLogin() {

    const [ erro, setErro ] = useState('')
    const [ nome, setNome ] = useState('')
    const [ senha, setSenha] = useState('') 

    const submitado = (event) => {
        event.preventDefault()
        setErro('')
        if (nome === 'admin')
        
        if (senha === '123') {
            entrar()
            return 0
        }
        
        setErro('Usuário/Senha inválidos')
    }

    const entrar = () => {
        localStorage.setItem("login", 1)
    }

    return(
        <Form onSubmit={submitado}>
            <Title>Login</Title>
            <Label>Nome</Label>
            <Input value={nome} onChange={(e) => setNome(e.target.value)} />
            <Label>Senha</Label>
            <Input value={senha} type='password' onChange={(e) => setSenha(e.target.value)}/>
            <Button type='submit'>Entrar</Button>
            { erro && <Erro>{erro}</Erro>}
        </Form>
    )
}

export default TelaLogin
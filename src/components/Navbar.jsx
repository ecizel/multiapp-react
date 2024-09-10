import { Link } from "react-router-dom"
import styled from "styled-components"

const Navegacao = styled.nav`
    margin: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px 40px;

    font-family: Arial, Helvetica, sans-serif;
    background-color: #5560f6;
    color: white;
    margin-bottom: 50px;
`
const Title = styled.h3`
    
`
const Lista = styled.ul`
    margin: 0;
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
    gap: 30px;

    list-style-type: none;
`
const Item = styled.li`
    
`
const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  font-size: 13px;
`;


function Navbar() {
    const deslogar = () => {
        localStorage.setItem("login", 0)
    }
    
    return (
        <Navegacao>
            <Title>Multiapp</Title>
            <Lista>
                <Item><StyledLink to="/tradutor">Tradutor</StyledLink></Item>
                <Item><StyledLink to="/qrcode">Gerar QRCode</StyledLink></Item>
                <Item><StyledLink to="/filmes">Pesquisar Filmes</StyledLink></Item>
                <Item><StyledLink to="/encontrarip">Encontrar IP</StyledLink></Item>
                <Item><StyledLink to="/">Login</StyledLink></Item>
                <Item><StyledLink to="/" onClick={deslogar}>Deslogar</StyledLink></Item>
            </Lista>
        </Navegacao>
    )
}

export default Navbar
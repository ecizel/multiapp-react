import Navbar from "./components/Navbar"
import Tradutor from "./components/Tradutor"
import Filmes from "./components/Filmes"
import QrCoder from "./components/QrCoder"
import EncontrarIp from "./components/EncontrarIp"
import TelaLogin from "./components/TelaLogin"
import ProtectedRoute from "./components/ProtectedRoute"

import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// preparo pra tarefa 5
// não consegui mudar o nome do projeto, então fica assim.

function App() {

  const [ logado, setLogado ] = useState(false)

  const checarLogin = () => {
    const login = localStorage.getItem("login")
    if (login) {
      if (login === 1)
        setLogado(true)
    } else {
      localStorage.setItem("login", 0)
    }
  }

  checarLogin()

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/tradutor" 
            element={
            <ProtectedRoute logado={logado}>
              <Tradutor/>
            </ProtectedRoute>}
          />

          <Route path="/qrcode" 
            element={
            <ProtectedRoute logado={logado}>
              <QrCoder/>
            </ProtectedRoute>}
          />
          
          
          <Route path="/filmes" element={<Filmes/>}/>
          <Route path="/encontrarip" element={<EncontrarIp/>}/>
          <Route path="/" element={<TelaLogin/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App

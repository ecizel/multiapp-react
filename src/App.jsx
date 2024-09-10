import Navbar from "./components/Navbar"
import Tradutor from "./components/Tradutor"
import Filmes from "./components/Filmes"
import QrCoder from "./components/QrCoder"
import EncontrarIp from "./components/EncontrarIp"
import TelaLogin from "./components/TelaLogin"
import ProtectedRoute from "./components/ProtectedRoute"

import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// preparo pra tarefa 5
// não consegui mudar o nome do projeto, então fica assim.

function App() {

  const [ logado, setLogado ] = useState(false)

  const checarLogin = () => {
    const login = localStorage.getItem("login")

    setLogado(prevLogado => {
      
      if (login) {
        if (login === '1')
          return true
      }
      else
        localStorage.setItem("login", 0)
      return false
    })
  }

  useEffect(() => {
    checarLogin()
  }, [])

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/tradutor" 
            element={
            <ProtectedRoute logado={logado} login={checarLogin}>
              <Tradutor/>
            </ProtectedRoute>}
          />

          <Route path="/qrcode" 
            element={
            <ProtectedRoute logado={logado} login={checarLogin}>
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

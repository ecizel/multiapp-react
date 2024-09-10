import { Navigate } from 'react-router-dom'
import { useEffect } from 'react'

function ProtectedRoute({logado, login, children}) {

    useEffect(() => {
        login();
      }, [login]);
    
    if (logado) {
        return children
    }

    return <Navigate to="/" />
}

export default ProtectedRoute
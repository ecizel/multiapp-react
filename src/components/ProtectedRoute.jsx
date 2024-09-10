import { Navigate } from 'react-router-dom'

function ProtectedRoute({logado, children}) {
    
    if (logado) {
        return children
    }

    return <Navigate to="/" />
}

export default ProtectedRoute
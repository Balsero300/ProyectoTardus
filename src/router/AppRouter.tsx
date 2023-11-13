import { Routes, Route } from 'react-router-dom'
import Inicio from '../Pages/Pagina'

function Router() {
    return(
        <Routes>
            <Route path='/login' element={<h1>Login de pagina</h1>} />
            <Route path='/inicio' element={<Inicio/>} />
        </Routes>
    )
}

export default Router
import { Routes, Route } from 'react-router-dom'
import Inicio from '../Pages/Pagina'

function Router() {
    return(
        <Routes>
            
            <Route path='/inicio' element={<Inicio/>} />
        </Routes>
    )
}

export default Router
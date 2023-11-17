import { Routes, Route } from 'react-router-dom'
import Inicio from '../Pages/Pagina'
import Secion from '../Pages/Inicio_S'

function Router() {
    return(
        <Routes>
            <Route path='/secion' element={<Secion/>} />
            <Route path='/inicio' element={<Inicio/>} />
        </Routes>
    )
}

export default Router
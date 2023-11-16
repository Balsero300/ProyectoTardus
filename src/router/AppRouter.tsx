import { Routes, Route } from 'react-router-dom'
import Inicio from '../Pages/Pagina'
import Registro from '../Pages/Registro'

function Router() {
    return(
        <Routes>
            <Route path='/registro' element={<Registro/>} />
            <Route path='/inicio' element={<Inicio/>} />
        </Routes>
    )
}

export default Router
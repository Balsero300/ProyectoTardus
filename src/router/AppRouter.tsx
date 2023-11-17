import { Routes, Route } from 'react-router-dom'
import Inicio from '../Pages/Pagina'
import Secion from '../Pages/Inicio_S'
import Registro from '../Pages/Registro'

function Router() {
    return(
        <Routes>
            <Route path='/secion' element={<Secion/>} />
            <Route path='/inicio' element={<Inicio/>} />
            <Route path='/registro' element={<Registro/>}/>
        </Routes>
    )
}

export default Router
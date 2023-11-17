import '../Componentes/Inicio_S.css'

function Registro() {
    return (
        <div className="container">
            <h1>Registro</h1>
            <form className="Form">
                <label>
                    <input className='Inp' type="text" placeholder='Nombre de Usuario' />
                </label>
                <br />
                <label>
                    <input className='Inp' type="text" placeholder='Correo Electronico' />
                </label>
                <br />
                <label>
                    <input className='Inp' type="password" placeholder='Contraseña' />
                </label>
                <br />
                <label>
                    <input className='Inp' type="password" placeholder='Confirmar Contraseña' />
                </label>
                <p>O</p>
                <label>
                    <input className='Inp' type="password" placeholder='Contraseña' />
                </label>
                <br />
                <label>
                    <input className='Inp' type="password" placeholder='Confirmar Contraseña' />
                </label>
                <br />
                <input type="checkbox" id='terminos' />
                <label for="terminos" >Acepto los terminos de Condiciones y servicios</label>
            </form>
            <p>¿Ya tienes una cuenta? <a href="#">Inicia Secion</a></p>
            <div className="buttons-container">
                <button className="Cancelar" type="button">
                    Cancelar
                </button>
                <button className="Inicio" type='button'>
                    Registrarse
                </button>
            </div>
        </div>
    )
}

export default Registro
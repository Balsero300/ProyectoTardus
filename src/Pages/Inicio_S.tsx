import '../Componentes/Inicio_S.css';

function Secion() {
   return (
     <div className='container'>
       <h2>Inicie sesión</h2>
       <form className="Form">
         <label>
           <input className="Inp" type="text" placeholder='Usuario'/>
         </label>
         <br />
         <label>
           <input className="Inp" type="password" placeholder='Contraseña'/>
         </label>
         <br />
         <p>¿Has olvidado la contraseña? Vuelve a recordarla</p>
         <div className="buttons-container">
           <button className="Cancelar" type="button">
             Cancelar
           </button>
           <button className="Inicio" type='button'>
             Inicio
           </button>
         </div>
       </form>
     </div>
   );
}

export default Secion;
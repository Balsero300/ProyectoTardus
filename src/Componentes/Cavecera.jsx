import { Menu } from 'style-components';
import './Cavecera.css'
import { useState } from 'react';

function Cavecera (){
    const [menu , setMenu ] = useState(false)

    function toggleMenu (){
        setMenu( !menu )
    }

    return (
        <header className='header'>
            <button onClick={ toggleMenu } className="encabezado-boton">
                <svg class="encabezado-svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
            </button>
            <nav className={ `emcabezado-nav ${ menu ? 'isActive' : '' }` }>
                <ul className="encabezado-ul">
                    <li className="encavezado-li"><a href="" className="encavezado-a">Item 1</a></li>
                    <li className="encavezado-li"><a href="" className="encavezado-a">Item 2</a></li>
                    <li className="encavezado-li"><a href="" className="encavezado-a">Item 3</a></li>
                    <li className="encavezado-li"><a href="" className="encavezado-a">Item 4</a></li>
                    <li className="encavezado-li"><a href="" className="encavezado-a">Item 5</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Cavecera
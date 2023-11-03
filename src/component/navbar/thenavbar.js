import React from 'react'
import "./navbar.css";
import { BsFillPersonFill } from 'react-icons/bs';

function NavBar() {
  return (
    <div>

      <div className='Container-Nav'>

        <div className='The-NavBar-Button'>
          <button id='btn-inscription'>
            Inscription
          </button>

          <button id='btn-connexion'>
            <BsFillPersonFill size='1rem' 
            /> Connexion
          </button>
        </div>

      </div>
    </div>
  )
}

export default NavBar; 

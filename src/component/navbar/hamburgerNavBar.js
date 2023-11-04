import React, { useState } from 'react';
import './hamburgerNavBar.css';
// import { BsFillPersonFill } from 'react-icons/bs'; 
import { AiFillAndroid } from 'react-icons/ai';
import {AiFillApple} from 'react-icons/ai';

import "./navbar.css";

function HamburgerNavBar() {

    // pour changer les classes burger
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked"); 
    const [menu_class, setMenuClass] = useState("menu hidden");
    const [isMenuClicked, setMenuClicked] = useState(false);

    // toogle burger menu change
    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setMenuClicked(!isMenuClicked)
    }

  return (
    <div style={{width: '100%', height: '100vh'}}>
        <nav>
            <div className='burger-menu-navbar' onClick={updateMenu}>
                <div className={burger_class}></div>
                <div className={burger_class}></div> 
                <div className={burger_class}></div>
            </div>
        </nav>

        
        <div className={menu_class} id='container-menu-sidebar'>
            <div>
                <button className='second-button-sidebar'>
                    Connexion
                </button>
            </div>

            <div>
                <button className='first-button-sidebar'>
                    Inscription
                </button>
            </div>

            <div className='paragraph-sidebar-top'>
                <div className='link-paragraph-sidebar'>
                    <p>Créez un compte professionnel</p>
                </div>
                <div className='link-paragraph-sidebar'>
                    <p>Ajouter votre restaurant</p>
                </div> 
                <div className='link-paragraph-sidebar'>
                    <p>Devenez coursier-partenaire</p>
                </div>
            </div>

            <div>
                
            </div>

            <div className='button-sidebar-down'>
                <button className='fourth-button-seidebar'>
                    <AiFillAndroid /> Android
                </button>

                <button className='third-button-sidebar'>
                   <AiFillApple /> Iphone
                </button> 
            </div>
        </div>
    </div>
  )
}

export default HamburgerNavBar; 

/**
 *                 <div className='The-NavBar-Button'>
                    <button id='btn-inscription'>
                        Inscription
                    </button>

                    <button id='btn-connexion'>
                        <BsFillPersonFill size='1rem' /> Connexion
                    </button>
                </div>
 */

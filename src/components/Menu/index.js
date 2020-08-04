import React from 'react';
import Logo from '../../assets/img/Logo.png';
import Button from '../Button'
import './Menu.css';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Zecaflix Logo" />
            </a>
            <Button className="ButtonLink" href="/">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png'
import { LogoImage, Menuwrapper } from './style.js';
import Button from '../Button'

function Menu() {
    return (
        <Menuwrapper className="Menu">
            <Link to="/">
                <LogoImage src={Logo} alt="Salesbreath Logo" />
            </Link>

            <Button as={Link} className="Button" to="/cadastro/video">
                Novo video                
            </Button>

        </Menuwrapper>
    );
}

export default Menu;
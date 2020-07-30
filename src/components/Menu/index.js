import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png'
import { LogoImage, Menuwrapper, ButtonLink } from './style.js';

function Menu() {
    return (
        <Menuwrapper className="Menu">
            <Link to="/">
                <LogoImage src={Logo} alt="Salesbreath Logo" />
            </Link>

            <ButtonLink as={Link} className="ButtonLink" to="/cadastro/video">
                Novo video                
            </ButtonLink>

        </Menuwrapper>
    );
}

export default Menu;
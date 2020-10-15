import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import logo from '../../assets/images/logo.gif';

import Styles from './styles';

const Header: React.FC = () => (
    <Styles.Container>
        <Styles.ContainerLogo>
            <Link to="/">
                <img src={logo} alt="logo crypto coins" title="Crypto Coins" />
            </Link>
            <span>Crypto Coins</span>
        </Styles.ContainerLogo>
        <Styles.NavBar>
            <NavLink
              className="link-active"
              activeClassName="activate"
              exact
                to="/"
            >
                Home
            </NavLink>

            <NavLink
                className="link-active"
                activeClassName="activate"
                to="/bitcoins"
            >
                Bitcoins
            </NavLink>

            <NavLink
                className="link-active"
                activeClassName="activate"
                to="/news"
            >
                News
            </NavLink>

            <NavLink
                className="link-active"
                activeClassName="activate"
                to="/direct-treasure"
            >
                Direct Treasure
            </NavLink>

            <NavLink
                className="link-active"
                activeClassName="activate"
                to="/about"
            >
                Sobre
            </NavLink>

            <NavLink
                className="link-active"
                activeClassName="activate"
                to="/contact"
            >
                Contact
            </NavLink>
        </Styles.NavBar>
    </Styles.Container>
);

export default Header;

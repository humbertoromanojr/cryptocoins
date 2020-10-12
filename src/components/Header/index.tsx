import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import logo from '../../assets/images/logo.png';

import Styles from './styles';

const Header: React.FC = (props) => (
    <Styles.Container>
    <Styles.ContainerLogo>
            <Link to="/">
        <img src={logo} alt="logo crypto coins" title="Crypto Coins" />
      </Link>
        </Styles.ContainerLogo>
        <ul className="nav-menu">
        <li>
                <NavLink
            className="link-active"
            activeClassName="activate"
            exact
            to="/"
          >
                    Home
          </NavLink>
            </li>
        <li>
                <NavLink
            className="link-active"
                    activeClassName="activate"
            to="/bitcoins"
          >
                    Bitcoins
          </NavLink>
            </li>
        <li>
              <NavLink
                  className="link-active"
                    activeClassName="activate"
                  to="/direct-treasure"
                >
                    PREV COINS
                </NavLink>
            </li>
        <li>
                <NavLink
            className="link-active"
            activeClassName="activate"
            to="/about"
          >
                    Sobre
          </NavLink>
            </li>
      </ul>
  </Styles.Container>
);

export default Header;

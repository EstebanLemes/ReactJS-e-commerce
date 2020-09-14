import React from 'react';
import CartIcon from '../Cart/CartIcon/CartIcon';
import LogoIcon from './LogoIcon';
import Login from '../Login/Login';
import { NavLink } from 'react-router-dom';
require('./styles.css');

const Navbar = () => {
    return(
        <div>
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-personalized">
                <NavLink className="navbar-brand" to="/">
                    <LogoIcon />
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item dropdown">
                            <NavLink className="nav-link dropdown-toggle" to="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Categorias
                            </NavLink>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <NavLink className="dropdown-item" to="/category/1">Software a medida</NavLink>
                                <NavLink className="dropdown-item" to="/category/2">Sistemas Operativos</NavLink>
                                <NavLink className="dropdown-item" to="/category/3">PC Armadas</NavLink>
                                <NavLink className="dropdown-item" to="/category/4">Componentes de PC</NavLink>
                            </div>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/technical_support">Soporte Técnico</NavLink>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <div className="input-group">
                            <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                            <div className="input-group-append">
                                <button className="btn btn-outline-success" type="submit"><i className="fas fa-search"/></button>
                            </div>
                        </div>
                        <Login/>
                    </form>
                    <CartIcon/>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
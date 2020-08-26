import React from 'react';
import CartIcon from './CartIcon';
import LogoIcon from './LogoIcon';
import Login from './Login';

const Navbar = () => {
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#home">
                    <LogoIcon />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="">Inicio<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Categorias
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="">Componentes</a>
                                <a className="dropdown-item" href="">CPU Escritorio</a>
                                <a className="dropdown-item" href="">CPU Gamer</a>
                                <a className="dropdown-item" href="">Impresoras</a>
                                <a className="dropdown-item" href="">Notebooks</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">Soporte</a>
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
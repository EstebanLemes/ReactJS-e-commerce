import React from 'react';
import CartIcon from './CartIcon';
import LogoIcon from './LogoIcon';

const Navbar = (props) => {
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
                            <a className="dropdown-item" href="">CPU Escritorio</a>
                            <a className="dropdown-item" href="">CPU Gamer</a>
                            <a className="dropdown-item" href="">Notebooks</a>
                            <a className="dropdown-item" href="">Componentes</a>
                            <a className="dropdown-item" href="">Impresoras</a>
                        </div>
                    </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><i className="fas fa-search"/></button>
                    </form>
                    <CartIcon cart={props.cart}/>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
import React from 'react';

function Login(){
    return(
        <ul className="navbar-nav mr-auto p-2">
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Login
                </a>
                <form className="dropdown-menu dropdown-menu-right p-4">
                    <div className="form-group">
                        <label htmlFor="exampleDropdownFormEmail2">Usuario</label>
                        <input type="email" className="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleDropdownFormPassword2">Contraseña</label>
                        <input type="password" className="form-control" id="exampleDropdownFormPassword2" placeholder="Contraseña"/>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="dropdownCheck2"/>
                        <label className="form-check-label" htmlFor="dropdownCheck2">
                        Recuerdame
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary">Sign in</button>
                </form>
            </li>
        </ul>
    );
}

export default Login;
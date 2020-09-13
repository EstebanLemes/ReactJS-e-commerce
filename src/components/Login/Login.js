import React from 'react';

function Login(){
    return(
        <ul className="navbar-nav mr-auto p-2">
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Iniciar Sesión
                </a>
                <form className="dropdown-menu dropdown-menu-right loginXl text-center border border-dark p-4" action="#!">

                    <p className="h4 mb-4">Iniciar Sesión</p>

                    <input type="email" id="defaultLoginFormEmail" className="form-control mb-4" placeholder="E-mail"/>

                    <input type="password" id="defaultLoginFormPassword" className="form-control mb-4" placeholder="Contraseña"/>

                    <div className="d-flex justify-content-around">
                        <div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="defaultLoginFormRemember"/>
                                <label className="custom-control-label" htmlFor="defaultLoginFormRemember">Recuerdame</label>
                            </div>
                        </div>
                        <div>
                            <a href="">Olvido su contraseña?</a>
                        </div>
                    </div>

                    <button className="btn btn-info btn-block my-4" type="submit">Loguearse</button>

                    <p>No es miembro?
                        <a href="">Registrarse</a>
                    </p>

                    <p>o loguearse con:</p>

                    <a href="#" className="mx-2" role="button"><i className="fab fa-facebook-f light-blue-text"></i></a>
                    <a href="#" className="mx-2" role="button"><i className="fab fa-twitter light-blue-text"></i></a>
                    <a href="#" className="mx-2" role="button"><i className="fab fa-linkedin-in light-blue-text"></i></a>
                    <a href="#" className="mx-2" role="button"><i className="fab fa-github light-blue-text"></i></a>

                </form>
            </li>
        </ul>
    );
}

export default Login;
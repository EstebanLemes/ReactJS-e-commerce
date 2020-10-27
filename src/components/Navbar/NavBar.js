import React, {useState, useEffect} from 'react';
import CartIcon from '../Cart/CartIcon/CartIcon';
import LogoIcon from './LogoIcon';
import Login from '../Login/Login';
import { NavLink } from 'react-router-dom';
import './styles.css';

const Navbar = () => {

    const [category, setCategory] = useState([]);
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState('Guest');
    
    useEffect(() => {
        setLoading(true);
        fetch(`${process.env.REACT_APP_API_URL}/categories`)
        .then(response =>{
            return response.json();
        })
        .then(res => {
            setCategory(res);
            setLoading(false);
        })
    }, [])

    let cate = ''
    
    loading ? cate = <div className="mt-10">Loading...</div> : cate = category.map(cat => <NavLink className="dropdown-item" key={cat._id} to={`/category/${cat._id}`}>{cat.name}</NavLink>)

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
                                {cate}
                            </div>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/technical_support">Soporte Técnico</NavLink>
                        </li>
                    </ul>
                    <form className="form-inline text-right my-lg-0">
                        <div className="input-group">
                            <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                            <div className="input-group-append">
                                <button className="btn btn-outline-success" type="submit"><i className="fas fa-search"/></button>
                            </div>
                        </div>
                    </form>
                    {user === "Guest" ? <Login setUser={setUser}/> : "Logged at " + user}
                    <CartIcon/>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
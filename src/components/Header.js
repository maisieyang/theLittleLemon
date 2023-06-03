
import './styles/Header.css';
import Logo from "./assets/logo.jpg";
import { NavLink } from 'react-router-dom';


function Header(){
    return (
        <header className="header-wrapper">
            <div className="image-wrapper">
                <NavLink to="/">{<img className="logo-img" src={Logo} alt="Little Lemon logo" />}</NavLink>
            </div>
            <nav className="nav-wrapper">
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
import { NavLink } from "react-router-dom";
import './NavBar.css';
import logo from '/Users/jiaju/Desktop/diaita/diaita-website/src/assets/diaita-logo.png';

function NavBar() {
	return (
		<nav className="NavBar">
			<a href="https://diaita.github.io/"><img src={logo} alt="Diaita Logo" className='logo'/></a>
			<ul className="nav-links">
				<li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>home</NavLink></li>
				<li><NavLink to="/about"className={({ isActive }) => isActive ? "active" : ""}>about</NavLink></li>
				<li><a href="https://arie.cc/">blog</a></li>
				<li><NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>contact</NavLink></li>
			</ul>
		</nav>
    );
}

export default NavBar;
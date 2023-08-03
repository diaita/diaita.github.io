import './Footer.css';
import { NavLink } from "react-router-dom";
import logo from '/Users/jiaju/Desktop/diaita/diaita-website/src/assets/diaita-logo.png';

function Footer() {
	return (
		<div className="Footer">
            <a href="https://diaita.github.io" className="logo-link"><img src={logo} alt="Diaita Logo" className='footer-logo'/></a>
            <div className="footer-box">
                <h3 className="footer-header">Contact</h3>
                <NavLink to="/contact" className="footer-text">
                    Email Us
                </NavLink>

                <h3 className="footer-header">Other Information</h3>
                <NavLink to="/about"className="footer-text">About Us</NavLink>   
                <a className="footer-text" href="https://arie.cc/">
                    Blog
                </a>            
            </div>

            <div className="footer-box">
                <h3 className="footer-header">Follow Us</h3>
                <div className="footer-text">
                    Instagram
                </div>
                <div className="footer-text">
                    Facebook
                </div>     
                <div className="footer-text">
                    LinkedIn
                </div> 
                <div className="footer-text">
                    Youtube
                </div> 
                <div className="footer-text">
                    Twitter
                </div> 
            </div>
		</div>
    );
}

export default Footer;
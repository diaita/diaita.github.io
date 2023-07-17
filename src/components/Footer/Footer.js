import './Footer.css';
import { NavLink } from "react-router-dom";
import logo from '/Users/jiaju/Desktop/diaita/diaita-website/src/assets/diaita-logo.png';

function Footer() {
	return (
		<div className="Footer">
            <img src={logo} alt="Diaita Logo" className='footer-logo'/>
            <div className="footer-box">
                <h3 className="footer-header">Contact</h3>
                <a className="footer-text" href="mailto:info@diaita.live">
                    Email Us
                </a>
                <a className="footer-text" href="tel:000-000-000">
                    (000) 000-0000 
                </a>

                <h3 className="footer-header">Other Information</h3>
                <NavLink to="/about"className="footer-text">About Us</NavLink>   
                <a className="footer-text" href="https://arie.cc/">
                    Blog
                </a>            
            </div>

            <div className="footer-box">
                <h3 className="footer-header">Share</h3>
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
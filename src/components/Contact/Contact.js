import "./Contact.css";
import Footer from "../Footer/Footer.js";

function Contact() {
	return (
		<div className="Contact">
			<div className="contact-header">
				<h2 className="contact-header-text">Contact</h2>
			</div>
			<div className="contact-section">
				<div className="left-contact">
					<h2 className="why-header">Got a question?</h2>
					<div className="why-text">
						We’re here to answer any questions you may have. Fill out the following form  to get in touch. We look forward to hearing from you!
					</div>
				</div>
				<div className="right-contact">
					<div className="name-section">
						<div className="name">
							<p className="why-text">First Name*</p>
							<input type='text' name='user_name' className="contact-input" />
						</div>
						<div className="name">
							<p className="why-text">Last Name*</p>
							<input type='text' name='user_name' className="contact-input" />
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Contact;
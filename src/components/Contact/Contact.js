import "./Contact.css";
import Footer from "../Footer/Footer.js";
import SentForm from "./SentForm.js";
import Default from "./Default.js"
import { useState } from "react";

function Contact() {
	const [done, setDone] = useState(false);

	function doneFunction() {
		setDone(true);
	}
	
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
					{(!done && <Default doneFunction={doneFunction}/>) || (done && <SentForm/>)}
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Contact;
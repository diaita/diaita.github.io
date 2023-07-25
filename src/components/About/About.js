import "./About.css";
import Footer from "../Footer/Footer.js";

function About() {
	return (
		<div className="About">
            <div className="mission-section">
				<h2 className="mission-header">Our Mission</h2>
				<h3 className="mission-subheader">Food is connected to everything.</h3>
				<p className="mission-text">We care sustainable health and food policy, and provide a way that culture of positive environmental impact.</p>
			</div>
			<Footer/>
		</div>
    );
}

export default About;
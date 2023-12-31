import './Home.css';
import Footer from '../Footer/Footer.js';
import { NavLink } from "react-router-dom";
// import CountUp from 'react-countup';
// import VisibilitySensor from 'react-visibility-sensor';
// import phone from '/Users/jiaju/Desktop/diaita/diaita-website/src/assets/iphone-icon.png';
import demo from '/Users/jiaju/Desktop/diaita/diaita-website/src/assets/demo.gif';
import quote from '/Users/jiaju/Desktop/diaita/diaita-website/src/assets/quote.png';
import saving from '/Users/jiaju/Desktop/diaita/diaita-website/src/assets/time-saving.png';
import guidance from '/Users/jiaju/Desktop/diaita/diaita-website/src/assets/guidance.png';
import tools from '/Users/jiaju/Desktop/diaita/diaita-website/src/assets/tools.png';


function Home() {

	return (
		<div className="Home">
			<div className="page-1">
				<div className="main-page">
					<h2 className="header-2">Good Mood, Good Food.</h2>
					<h3 className="header-3">Personalized plans to help you achieve a healthy, balanced lifestyle.</h3>
					<NavLink to="/download" className="download-btn">Download Diaita</NavLink>
				</div>
			</div>
			{/* <div className="page-2">
				<div className="stat-header">Steady User Growth Worldwide</div>
				<div className="stat-block">
					<div className="stats">
					<div className="stat-numbers">
						<CountUp end={50} redraw={true}>
							{({ countUpRef, start }) => (
								<VisibilitySensor onChange={start} delayedCall>
									<span ref={countUpRef} />
								</VisibilitySensor>
							)}
						</CountUp>+
					</div>
						<div className="stat-description">App Users</div>
					</div>

					<div className="stats">
						<div className="stat-numbers">
							<CountUp end={5} redraw={true}>
								{({ countUpRef, start }) => (
									<VisibilitySensor onChange={start} delayedCall>
										<span ref={countUpRef} />
									</VisibilitySensor>
								)}
							</CountUp>
						</div>
						<div className="stat-description">Countries</div>
					</div>

					<div className="stats">
						<div className="stat-numbers">
							<CountUp end={20} redraw={true}>
								{({ countUpRef, start }) => (
									<VisibilitySensor onChange={start} delayedCall>
										<span ref={countUpRef} />
									</VisibilitySensor>
								)}
							</CountUp>
						</div>
						<div className="stat-description">Partners</div>
					</div>
				</div>
			</div> */}
			<div className="page-3">
				<div className="demo-text-block">
					<h2 className="demo-header">Diet Recommendations</h2>
					<p className="demo-text">Individualized diet plans based on expert dietitian input, nutrition guidelines, and personal preferences.</p>
					<NavLink to="/about" className="learn-more-btn">Learn More</NavLink>
				</div>
				{/* <video controls autostart autoPlay src={demo} className="phone-icon"/> */}
				<img src={demo} className="phone-icon" alt="demo"></img>
			</div>

			{/* <div className="page-4">
				<div className="quote">
					<div className="quote-div-start">
						<img src={quote} alt="quotation mark" className="quote-start" />
					</div>
					<blockquote className="quote-section">Testimonial Diaita provides personalized diet and physical activity plans.</blockquote>
					<div className="quote-div-end">
						<img src={quote} alt="quotation mark" className="quote-end" />
					</div>
					<div className="speaker">- Person, Occupation</div>
				</div>

				<div className="quote">
					<div className="quote-div-start">
						<img src={quote} alt="quotation mark" className="quote-start" />
					</div>
					<blockquote className="quote-section">Testimonial Diaita provides personalized diet and physical activity plans.</blockquote>
					<div className="quote-div-end">
						<img src={quote} alt="quotation mark" className="quote-end" />
					</div>
					<div className="speaker">- Person, Occupation</div>
				</div>
			</div> */}

			<div className="page-5">
				<h2 className="why-headline">Why Diaita?</h2>
				<div className="reason-box">
					<div className="reason">
						<img src={saving} alt="decription icon" className="sample-pic" />
						<h3 className="reason-header">Time-Saving Convenience</h3>
						<p className="reason-description">Access expert advice and information from dietitians without extensive research, saving you time and effort.</p>
					</div>
					<div className="reason">
						<img src={guidance} alt="decription icon" className="sample-pic" />
						<h3 className="reason-header">Affordable Expert Guidance</h3>
						<p className="reason-description">Receive personalized guidance and support from certified dietitians at an affordable cost.</p>
					</div>
					<div className="reason">
						<img src={tools} alt="decription icon" className="sample-pic" />
						<h3 className="reason-header">User-Friendly Tools & Guides</h3>
						<p className="reason-description">Simplified and easy-to-understand tools and guides enable users to make necessary lifestyle changes with ease.</p>
					</div>
				</div>
			</div>

			<div className="page-6">
				<h2 className="get-started-text">Get Started with Diaita Today</h2>
				<NavLink to="/download" className="download-btn-bottom">Download Diaita</NavLink>
				<NavLink to="/contact" className="contact-link">Contact Us</NavLink>
			</div>

			<Footer/>

		</div>
	);
}

export default Home;
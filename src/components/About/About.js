import "./About.css";
import Footer from "../Footer/Footer.js";
import { useRef, useEffect } from 'react';
// import { Chart, ArcElement, Tooltip, Legend, Title } from 'chart.js';
// import { Doughnut } from 'react-chartjs-2';
import about from "/Users/jiaju/Desktop/diaita/diaita-website/src/assets/about-picture.png";
import time from "/Users/jiaju/Desktop/diaita/diaita-website/src/assets/time.png";
import computer from "/Users/jiaju/Desktop/diaita/diaita-website/src/assets/computer.png";
import ai from "/Users/jiaju/Desktop/diaita/diaita-website/src/assets/ai.png";
import skydeck from "/Users/jiaju/Desktop/diaita/diaita-website/src/assets/skydeck2.png";
import nsf from "/Users/jiaju/Desktop/diaita/diaita-website/src/assets/nsf.png";
import health from "/Users/jiaju/Desktop/diaita/diaita-website/src/assets/health-tech.png";


function About(props) {

	const initialRef = useRef(null);

	useEffect(() => {
		if (props.reference === "learn-more") {
			initialRef.current?.scrollIntoView({ behavior: 'smooth' });
		}
	}, [initialRef]);

	// Chart.register(ArcElement, Tooltip, Legend, Title);
	// Chart.defaults.plugins.tooltip.backgroundColor = 'rgb(0, 0, 156)';
	// Chart.defaults.plugins.legend.position = 'bottom';
	// Chart.defaults.plugins.legend.title.display = true;
	// Chart.defaults.plugins.legend.title.text = '13 Risk Factors';
	// Chart.defaults.plugins.legend.title.font = 'Helvetica Neue';

	// const data = {
	// 	labels: [
	// 		'Smoking,\nAlcohol,\nSleep over/less than 7-9 hours',
	// 		'Stress and Well-Being',
	// 		'Diet,\nBlood Pressure,\nCholesterol Level,\nObesity',
	// 		'Physically active less than 3 times/week',
	// 		'Over 45 y or older,\nFamily History,\nGestational diabetes'
	// 	],
	// 	datasets: [{
	// 		data: [25, 10, 30, 15, 20],
	// 		label: [
	// 			'Risk Factor (%)'
	// 		],
	// 		backgroundColor: [
	// 			'#006d77',
	// 			'#83c5be',
	// 			'#edf6f9',
	// 			'#ffddd2',
	// 			'#e29578'
	// 		],
	// 		borderWidth: 2,
	// 		radius: '80%',
	// 		options: {
	// 			plugins: {
	// 			  datalabels: {
	// 				display: false
	// 			  }
	// 			},
	// 		  }
	// 	}]
	// };

	return (
		<div className="About" ref={initialRef}>
			<div className="mission-section">
				<h2 className="mission-header">Our Mission</h2>
				<h3 className="mission-subheader">Food is connected to everything.</h3>
				<p className="mission-text">Empowering pre-diabetic individuals to proactively prevent Type 2 Diabetes.</p>
			</div>

			<div className="why-section">
				<div className="top-why">
					<div className="left-why">
						<h2 className="why-header">Why we're here</h2>
						<p className="why-text">Our mission is to provide a tailored, sustainable way of helping
							prediabetic individuals make lifestyle changes. Current diet change strategies often do not align with individuals' mental model or habits.
							Diaita is here to keep users engaged in their journey towards change.
						</p>
					</div>
					<img src={about} alt="active" className="right-why"></img>
				</div>

				<div className="bottom-why">
					<h2 className="why-header">Diaita is an all inclusive tool.</h2>
					<div className="why-reasons">
						<div className="why-reason">
							<img src={time} alt="time-saving, affordable convenience" className="why-image" />
							<h2 className="why-reason-header">Time-Saving, Affordable Convenience</h2>
							<p className="why-text-2">Expert advice from dietitians available at your fingertips, saving you time and money</p>
						</div>
						<div className="why-reason">
							<img src={computer} alt="user-friendly tools and guides" className="why-image" />
							<h2 className="why-reason-header">User-Friendly Tools and Guides</h2>
							<p className="why-text-2">Simplified user interface</p>
						</div>
						<div className="why-reason">
							<img src={ai} alt="sample" className="why-image" />
							<h2 className="why-reason-header">Built-in Reward System, Using AI and ML</h2>
							<p className="why-text-2">Users are engaged by cognitive behavioral therapy (CBT) as they complete their challenges</p>
						</div>
					</div>
				</div>

				<div className="endorsement">
					
				</div>

				<div className="history">
					{/* <h2 className="history-header">Where we've been</h2> */}
					<div className="history-pics">
						<a className="image-link " href="https://skydeck.berkeley.edu/"><img src={skydeck} alt="skydeck" className="skydeck-image" /></a>
						<a className="image-link " href="https://new.nsf.gov/funding/initiatives/i-corps"><img src={nsf} alt="nsf" className="nsf-image" /></a>
						<a className="image-link " href="https://healthtech.berkeley.edu/"><img src={health} alt="health-tech" className="health-image" /></a>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default About;
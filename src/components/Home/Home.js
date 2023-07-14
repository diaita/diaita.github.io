import './Home.css';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import phone from '/Users/jiaju/Desktop/diaita/diaita-website/src/assets/iphone-icon.png';

function Home() {
	return (
		<div className="Home">
			<div className="page-1">
				<div className="main-page">
					<h2 className="header-2">Good Mood, Good Food.</h2>
					<h3 className="header-3">Personalized plans to help you achieve a healthy, balanced lifestyle.</h3>
					<a className="download-btn" href="https://arie.cc/">Download Diaita</a>
				</div>
			</div>
			<div className="page-2">
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
			</div>
			<div className="page-3">
				<div className="demo-text-block">
					<h2 className="demo-header">Diet Recommendations</h2>
					<p className="demo-text">Individualized diet plans based on expert dietitian input, nutrition guidelines, and personal preferences.</p>
					<a className="learn-more-btn" href="https://arie.cc/">Learn More</a>
				</div>
				<img src={phone} alt="app demo" className="phone-icon" />
			</div>
			<div className="page-4">
				<blockquote>hi this is just a sample</blockquote>
			</div>

		</div>
	);
}

export default Home;
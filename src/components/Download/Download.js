import './Download.css';
import Footer from "../Footer/Footer.js";
import sample from "/Users/jiaju/Desktop/diaita/diaita-website/src/assets/sample-picture.png";

function Download() {
	return (
		<div className="Download">
            <div className="download-header">
                <h2 className="mission-header">Download the App</h2>
				<h3 className="mission-subheader">Be the first to get updates about the Diaita App.</h3>
            </div>
            <div className="download-section">
                <div className="left-download">
                    <h2 className="download-header-text">Be the first.</h2>
                    <p className="download-text">
                        Sign-up below to get updates about when we launch the Diaita App!
                    </p>
                    <a className="download-btn" href="">Sign up here</a>
                </div>
                <img className="sample-photo" src={sample} alt="download diaita" />
            </div>
            <Footer/>
		</div>
    );
}

export default Download;
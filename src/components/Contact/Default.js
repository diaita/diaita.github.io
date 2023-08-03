import './Default.css';
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

function Default(props) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    }; 

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

	useEffect(() => emailjs.init("btXswAnOgNk8o3fgx"), []);

	const handleSubmit = async (e) => {
        e.preventDefault();
        const serviceId = "service_fknq2xb";
        const templateId = "template_yzvwmdw";
        try {
            await emailjs.send(serviceId, templateId, {
                from_name: firstName + " " + lastName,
                reply_to: email,
                message: message
            });
        } catch (error) {
            console.log(error);
        } finally {
            props.doneFunction();
        }
    };

    return (
        <div className="Default">
            <div className="name-section">
                <div className="name">
                    <p className="why-text">First Name*</p>
                    <input type='text' name='first_name' className="name-input" onChange={handleFirstNameChange} value={firstName} />
                </div>
                <div className="name">
                    <p className="why-text">Last Name*</p>
                    <input type='text' name='last_name' className="name-input" onChange={handleLastNameChange} value={lastName} />
                </div>
            </div>
            <div className="email">
                <p className="why-text">Email*</p>
                <input type='email' name='email' className="email-input" onChange={handleEmailChange} value={email} />
            </div>
            <div className="message">
                <p className="why-text">Message*</p>
                <textarea type='text' name='message' onChange={handleMessageChange} value={message} className="message-text" />
            </div>
            <button className="submit-btn" onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default Default;
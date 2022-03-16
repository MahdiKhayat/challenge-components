import React from "react"
import './contact.css';


const Contact = () =>
{
  return(
      <div>
        <h4>CONTACT ME</h4>
        <form className="form">
            <div className="name">
                <label for="fullName">Full name</label>
                    <input
                        type="text"
                        name="firstName"
                        className="firstName"
                        tabIndex="1"
                    />
                <label for="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="email"
                        placeholder="example@domaine.com"
                        tabIndex="3"
                    />
                <label for="message">Message</label>
                    <textarea
                    placeholder="Start typing..."
                    className="message"
                    name="message"
                    />
                    <button type="submit" className="send">SEND</button>
            </div>
        </form>
    </div>
  );
}

export default Contact;
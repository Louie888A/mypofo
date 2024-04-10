import React, { useState } from "react";
import "../styles/contact.css";
export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [error, setError] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    fetch("https://formcarry.com/s/zAHmLgrSAFb", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.code === 200) {
          alert("We received your submission, thank you!");
        } else if (response.code === 422) {
          setError(response.message);
        } else {
          setError(response.message);
        }
      })
      .catch((error) => {
        setError(error.message ? error.message : error);
      });
  }

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <div className="container contact-form">
        <div className="row mt-3 mb-3 ml-3 mr-3 text-center">
          <div className="col-md-6">
            <h3 className="title">Get in touch</h3>
            <p>
              I am always open to new opportunities. Feel free to contact me.
            </p>
            <p>
              <i className="fa fa-map-marker mr-3"></i>
            </p>
            <p>
              <i>
                <i className="fa fa-github logo-github">
                  https://github.com/Louie888A
                </i>
              </i>
            </p>
            <p>
              <i>
                <i className="fa fa-linkedin mr-3"></i>
              </i>
            </p>
            <p>
              <i className="fa fa-envelope mr-3"></i>
              <a href="mailto:9394hohoho@gmail.com">Email me</a>
            </p>
          </div>
          <div className="col-md-6">
            <h3 className="title">Drop me a message</h3>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Your Name *"
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="name"
              />
            </div>

            <div className="form-group">
              <input
                className="form-control"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                placeholder="Your Email *"
              />
            </div>
            <div className="form-group">
              <textarea
                className="messagearea form-control"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                id="message"
                placeholder="Enter your message..."
                rows="5"
              ></textarea>
            </div>
            <div className="form-group">
              <button
                className="btn btn-warning btn-control"
                type="submit"
                style={{ width: "60%", marginTop: "5%" }}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

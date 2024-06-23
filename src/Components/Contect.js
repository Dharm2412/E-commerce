import React from "react";

export default function Contect() {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.568635910731!2d72.55162677509352!3d23.07627102913615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e836595320b27%3A0xfad9cd4da1256ad5!2sKK%20Nagar%2C%20Madhuvrund%20Society%2C%20Nirnay%20Nagar%2C%20Ahmedabad%2C%20Gujarat%20380061!5e0!3m2!1sen!2sin!4v1719064364631!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="Contect-1">
        <form method="POST" action="https://formspree.io/f/xvgppaow">
          <div className="Contect mb-3 my-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              aria-describedby="emailHelp"
              required
            />
          </div>
          <div>
            <textarea
              className="form-control"
              rows="10"
              cols="50"
              name="message"
              placeholder="Enter your message here..."
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-dark mb-5 my-3">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

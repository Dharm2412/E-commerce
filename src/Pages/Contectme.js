import React from 'react'

export default function Contectme() {
  return (
    <div>
      <div className="comtect-me ">
        <iframe
          title="iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.6344036379583!2d72.54545062792766!3d23.073861310643686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e836f2f5956a3%3A0xda2cf5204a83f31e!2sK%20K%20Nagar%2C%20Ahmedabad%2C%20Gujarat%20380061!5e0!3m2!1sen!2sin!4v1721225291147!5m2!1sen!2sin"
          width="100%"
          height="300"
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
            <button type="submit" className="btn btn-dark mb-5 my-3 btn-sm">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

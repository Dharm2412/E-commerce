import React from "react";

import "@fortawesome/fontawesome-free/css/all.css";

const Home = () => {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://media.gq.com/photos/58c95519ffec782281bdce6d/master/w_1481,h_987,c_limit/Puma-tout.jpeg"
              className="d-block w-100"
              alt="Slide 1"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://i.ytimg.com/vi/pQIbnkOuNoE/maxresdefault.jpg"
              className="d-block w-100"
              alt="Slide 2"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://i.ytimg.com/vi/A6su7JaR_54/maxresdefault.jpg"
              className="d-block w-100"
              alt="Slide 3"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <h1 className="text-center">Categories</h1>
      <section id="features">
        <div className="container">
          <div className="grid">
            <div className="icon">
              <i className="fa fa-3x fa-fire"></i>{" "}
              {/* Font Awesome fire icon */}
            </div>
            <div className="desc">
              <h2>Premium Materials</h2>
              <p>
                Our trombones use the shiniest brass which is sourced locally.
                This will increase the longevity of your purchase.
              </p>
            </div>
          </div>
          <div className="grid">
            <div className="icon">
              <i className="fa fa-3x fa-truck"></i>{" "}
              {/* Font Awesome truck icon */}
            </div>
            <div className="desc">
              <h2>Fast Shipping</h2>
              <p>
                We make sure you receive your trombone as soon as we have
                finished making it. We also provide free returns if you are not
                satisfied.
              </p>
            </div>
          </div>
          <div className="grid">
            <div className="icon">
              <i className="fa fa-3x fa-battery-full" aria-hidden="true"></i>{" "}
              {/* Font Awesome battery-full icon */}
            </div>
            <div className="desc">
              <h2>Quality Assurance</h2>
              <p>
                For every purchase you make, we will ensure there are no damages
                or faults and we will check and test the pitch of your
                instrument.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

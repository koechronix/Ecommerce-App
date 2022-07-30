import React from "react";
import Products from "./Products";
import { corousel } from "bootstrap";


const Home = () => {
  return (
    <>
      <div className="hero">
      <div class="card bg-dark text-white border-0">
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-bs-ride="false"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src=" "
                class="d-block w-100"
                alt="..."
                height="150 px"
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <div class="card-img-overlay d-flex justify-content-center flex-column">
          <div className="container">
            <h5 class="card-title display-3 fw-bolder mb-0"
                style={{color: "black", textAlign: "center"}}
            >
              Latest Arrivals...
            </h5>
          </div>
        </div>
      </div>
      {/* <Products /> */}
      </div>
    </>
  );
};

export default Home;

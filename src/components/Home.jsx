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
                src="https://thumbs.dreamstime.com/b/bangkok-thailand-december-emquartier-luxury-shopping-center-design-mall-green-environmentally-friendly-concept-hanging-193107970.jpg"
                class="d-block w-100"
                alt="..."
                height="500 px"
              />
              <div class="carousel-caption d-none d-md-block">
                <h3 style={{color: "blue"}}><strong>Various Fashions available</strong></h3>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://sc01.alicdn.com/kf/HTB1kMnjKcbpK1RjSZFyq6x_qFXa1/227775920/HTB1kMnjKcbpK1RjSZFyq6x_qFXa1.jpg"
                class="d-block w-100"
                alt="..."
                height="500 px"
              />
              <div class="carousel-caption d-none d-md-block">
                <h3 style={{color: "green"}}><bold>About</bold></h3>
                <p>
                  We are located in located in Nairobi 
                  and all men fashions are available and also we have electronics 
                  Welcome in and shop with us.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://img.freepik.com/premium-photo/shopping-cart-laptop-text-welcome-yellow-paper-business-concept-copy-space_297535-1957.jpg?w=2000"
                class="d-block w-100"
                alt="..."
                height="500 px"
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
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
                style={{color: "pink"}}
            >
              New Fashions 
            </h5>
            <p class="card-text lead fs-2" style={{color:"#351E10"}}>Check All In Ronix Shop</p>
          </div>
        </div>
      </div>
      <Products />
      </div>
    </>
  );
};

export default Home;

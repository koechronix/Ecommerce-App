import React from "react";
import Products from "./Products";
import { corousel } from "bootstrap";


const Home = () => {
  return (
    <>
      <div className="hero">
        {/* <div class="card bg-dark text-white border-0"> */}
          {/* <img
            src="https://www.placesofjuma.com/wp-content/uploads/2019/04/iconsiam-1024x683.jpg"
            alt="background"
            height="550px"
          /> */}
          <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://www.placesofjuma.com/wp-content/uploads/2019/04/iconsiam-1024x683.jpg" 
      class="d-block w-100" alt="..." height="500 px"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://images.pexels.com/photos/4198972/pexels-photo-4198972.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
      class="d-block w-100" alt="..." height="500 px"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://images.pexels.com/photos/7679445/pexels-photo-7679445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
       class="d-block w-100" alt="..." height="500 px"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
          <div class="card-img-overlay d-flex justify-content-center flex-column">
            <div className="container">
              <h5 class="card-title display-3 fw-bolder mb-0">
                New Season Arrivals
              </h5>
              <p class="card-text lead fs-2">Check all trends at our shop</p>
            </div>
          </div>
        </div>
        <Products />
      {/* </div> */}
    // </>
  );
};

export default Home;

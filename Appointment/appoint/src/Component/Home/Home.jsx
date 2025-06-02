import React from 'react'
import Slider from "react-slick"
import { Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Servises from '../services/Servises'
// import Servises from '../services/Servises'

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
  };

  return (
    <div className="homecontainer" style={{ minHeight: 600 }}>
      <Slider {...settings}>
        <div>
          <div className="slider-item" >
            <div className=""></div>
            <div className="container">
              <div className="row  slider-text align-items-center justify-content-end">
                <div className="col-md-6 text -animate">
                  <h1 className="mb-4">Helping Your <span>Stay Happy One</span></h1>
                  <h3 className="subheading">Everyday We Bring Hope and Smile to the Patient We Serve</h3>
                  <p>
                    <Link to="/doctor" className="btn btn-secondary px-4 py-3 mt-3">View our works</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
       
        <div>
          <div className="slider-item" >
            <div className=""></div>
            <div className="container">
              <div className="row no-gutters slider-text align-items-center justify-content-end">
                <div className="col-md-6 text ftco-animate">
                  <h1 className="mb-4">Smile Makes <br />A Lasting Impression</h1>
                  <h3 className="subheading">Your Health is Our Top Priority with Comprehensive, Affordable medical.</h3>
                  <p>
                    <Link to="/doctor" className="btn btn-secondary px-4 py-3 mt-3">View our works</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      </Slider>
      <Servises />
    </div>
  )
}

export default Home
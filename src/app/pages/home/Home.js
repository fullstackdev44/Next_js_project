"use client"
import $ from "jquery"
import React, { useEffect, useRef, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.min.js';
import TestSlider from "./Testslider";
import SlideShow from "./SlideShow";
import AOS from "aos";
import "aos/dist/aos.css";

function Homepage() { 
  const slideRef = useRef(null);
  const slideRef1 = useRef(null);
  const [videoshow, setVideoshow] = useState(false);

  const toggleVideoShow = () => {
    setVideoshow(prevState => !prevState);
  };
  useEffect(() => {
    const modalBackdropDiv = document.createElement('div');
    if (videoshow) {
      document.body.classList.add('video-is-showing');
      modalBackdropDiv.classList.add('modal-backdrop', 'show');
      document.body.appendChild(modalBackdropDiv);
    } else {
      document.body.classList.remove('video-is-showing');
      const existingBackdrop = document.querySelector('.modal-backdrop.show');
      if (existingBackdrop) {
        document.body.removeChild(existingBackdrop);
      }
    }

    return () => {
      // Cleanup function to remove the modal backdrop when the component unmounts
      const existingBackdrop = document.querySelector('.modal-backdrop.show');
      if (existingBackdrop) {
        document.body.removeChild(existingBackdrop);
      }
    };
  }, [videoshow]);
  // useEffect(() => {
  //   // Slick Carousel initialization
  //   if (typeof window !== 'undefined') {

  //   const $slide = $(slideRef.current);

  //   $slide.slick({
  //     infinite: true,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     arrows: false,
  //     fade: true,
  //     speed: 2000,
  //     autoplaySpeed: 4000,
  //     autoplay: true,
  //   }).on({
  //     beforeChange: function(event, slick, currentSlide, nextSlide) {
  //       $(".slick-slide", this).eq(currentSlide).addClass("preve-slide");
  //       $(".slick-slide", this).eq(nextSlide).addClass("slide-animation");
  //     },
  //     afterChange: function() {
  //       $(".preve-slide", this).removeClass("preve-slide slide-animation");
  //     },
  //   });

  //   $slide.find(".slick-slide").eq(0).addClass("slide-animation");

  //   // Cleanup function
  //   return () => {
  //     // Destroy Slick instance if needed when component unmounts
  //     $slide.slick('unslick');
  //   };}
  // }, []);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

    return (<>
      {/* Banner Section */}
     <SlideShow/>
   {/* Provide-Sec */}
  <section className="Section Provide">
    <div className="container">
      <div className="row">
        <div className="col-lg-7 col-md-12">
          <div className="TitleDiv">
            <h1 className="Heading">
              What We Provide Is The Luxury Transport And Most Comfortable
              Experience
            </h1>
          </div>
        </div>
        <div className="col-lg-5 col-md-12">
          <div className="ParaDiv">
            <p className="Para">
              Vivamus arcu felis bibendum ut tristique et egestas. Ultricies leo
              intege in malesuada nunc vel risus commodo. Sapien nec sagittis
              aliquam male bibendum arcu vitae. In ornare quam viverra orci
              sagittis eu volutpat odio facilisis.
            </p>
            <div className="CallCenter">
              <ul>
                <li>
                  <img src="assets/images/call-icon.png" />
                </li>
                <li>
                  <a>CALL CENTER: +1234 5678 901</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Row ///// */}
      <section className="Section Provide-imgs">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="Points">
                <div className="hovereffect">
                  <div className="content-overlay" />
                  <div className="Inner-img">
                    <img src="assets/images/vehicle-list-img-01.jpg" />
                    <div className="Image-content">
                      <h4>
                        <a href="#!">4x4</a>
                      </h4>
                      <h3>
                        from{" "}
                        <span>
                          <sup>$</sup>180
                        </span>
                        <sub>/hour</sub>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit do amet, consectetur, adipiscing
                        elit, sed{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="Provide-Cnt">
                  <h5>
                    <a href="#!">Aston Martin DB11 AMR</a>{" "}
                  </h5>
                  <div className="StarIcon">
                    <span>
                      <i className="fa fa-star" aria-hidden="true" />{" "}
                      <i className="fa fa-star" aria-hidden="true" />{" "}
                      <i className="fa fa-star" aria-hidden="true" />{" "}
                      <i className="fa fa-star" aria-hidden="true" />{" "}
                      <i className="fa fa-star" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="Points">
                <div className="hovereffect">
                  <div className="content-overlay" />
                  <div className="Inner-img">
                    <img src="assets/images/vehicle-list-img-02.jpg" />
                    <div className="Image-content">
                      <h4>
                        <a href="#!">Sport</a>
                      </h4>
                      <h3>
                        from{" "}
                        <span>
                          <sup>$</sup>180
                        </span>
                        <sub>/hour</sub>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit do amet, consectetur, adipiscing
                        elit, sed{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="Provide-Cnt">
                  <h5>
                    <a href="#!">Ford F-150 Raptor</a>{" "}
                  </h5>
                  <div className="StarIcon">
                    <span>
                      <i className="fa fa-star" aria-hidden="true" />{" "}
                      <i className="fa fa-star" aria-hidden="true" />{" "}
                      <i className="fa fa-star" aria-hidden="true" />{" "}
                      <i className="fa fa-star" aria-hidden="true" />{" "}
                      <i className="fa fa-star" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="Points">
                <div className="hovereffect">
                  <div className="content-overlay" />
                  <div className="Inner-img">
                    <img src="assets/images/vehicle-list-img-03.jpg" />
                    <div className="Image-content">
                      <h4>
                        <a href="#!">Limusine</a>
                      </h4>
                      <h3>
                        from{" "}
                        <span>
                          <sup>$</sup>180
                        </span>
                        <sub>/hour</sub>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit do amet, consectetur, adipiscing
                        elit, sed{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="Provide-Cnt">
                  <h5>
                    <a href="#!">Bmw M 3 Coupe</a>{" "}
                  </h5>
                  <div className="StarIcon">
                    <span>
                      <i className="fa fa-star" aria-hidden="true" />{" "}
                      <i className="fa fa-star" aria-hidden="true" />{" "}
                      <i className="fa fa-star" aria-hidden="true" />{" "}
                      <i className="fa fa-star" aria-hidden="true" />{" "}
                      <i className="fa fa-star" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="Points">
                <div className="hovereffect">
                  <div className="content-overlay" />
                  <div className="Inner-img">
                    <img src="assets/images/vehicle-list-img-04.jpg" />
                    <div className="Image-content">
                      <h4>
                        <a href="#!">Limusine</a>
                      </h4>
                      <h3>
                        from{" "}
                        <span>
                          <sup>$</sup>180
                        </span>
                        <sub>/hour</sub>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit do amet, consectetur, adipiscing
                        elit, sed{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="Provide-Cnt">
                  <h5>
                    <a href="#!">Bmw M 3 Coupe</a>{" "}
                  </h5>
                  <div className="StarIcon">
                    <span>
                      <i className="fa fa-star" aria-hidden="true" />{" "}
                      <i className="fa fa-star" aria-hidden="true" />{" "}
                      <i className="fa fa-star" aria-hidden="true" />{" "}
                      <i className="fa fa-star" aria-hidden="true" />{" "}
                      <i className="fa fa-star" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="Points">
                <div className="hovereffect">
                  <div className="content-overlay" />
                  <div className="Inner-img">
                    <img src="assets/images/vehicle-list-img-05.jpg" />
                    <div className="Image-content">
                      <h4>
                        <a href="#!">Limusine</a>
                      </h4>
                      <h3>
                        from{" "}
                        <span>
                          <sup>$</sup>180
                        </span>
                        <sub>/hour</sub>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit do amet, consectetur, adipiscing
                        elit, sed{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="Provide-Cnt">
                  <h5>
                    <a href="#!">Bmw M 3 Coupe</a>{" "}
                  </h5>
                  <div className="StarIcon">
                    <span>
                      <i className="fa fa-star" aria-hidden="true" />{" "}
                      <i className="fa fa-star" aria-hidden="true" />{" "}
                      <i className="fa fa-star" aria-hidden="true" />{" "}
                      <i className="fa fa-star" aria-hidden="true" />{" "}
                      <i className="fa fa-star" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="Points">
                <div className="hovereffect">
                  <div className="content-overlay" />
                  <div className="Inner-img">
                    <img src="assets/images/vehicle-list-img-05.jpg" />
                    <div className="Image-content">
                      <h4>
                        <a href="#!">Sport</a>
                      </h4>
                      <h3>
                        from{" "}
                        <span>
                          <sup>$</sup>180
                        </span>
                        <sub>/hour</sub>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit do amet, consectetur, adipiscing
                        elit, sed{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="Provide-Cnt">
                  <h5>
                    <a href="#!">Ford Raptor 135 X</a>{" "}
                  </h5>
                  <div className="StarIcon">
                    <span>
                      <i className="fa fa-star" aria-hidden="true" />{" "}
                      <i className="fa fa-star" aria-hidden="true" />{" "}
                      <i className="fa fa-star" aria-hidden="true" />{" "}
                      <i className="fa fa-star" aria-hidden="true" />{" "}
                      <i className="fa fa-star" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
  {/* Destinations-Sec */}
  <section className="Section Ride">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="TitleDiv">
            <h1 className="Heading">
              Ride To Destinations <br />
              With Maximum Comfort
            </h1>
            <span className="GoldenColor">FINEST TRANSPORT</span>
          </div>
        </div>
      </div>
      {/* Row ///// */}
      <div className="Ride-Content">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div className="RidePoint">
              <h5>No Delays</h5>
              <p className="Para">
                Tortor condimentum lacinia quis vel eros donec odio. Feugiat
                fermentum in posuere urna. Faucibus turpis in eun mi bibendum.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="RidePoint">
              <h5>High Quality</h5>
              <p className="Para">
                Tortor condimentum lacinia quis vel eros donec odio. Feugiat
                fermentum in posuere urna. Faucibus turpis in eun mi bibendum.
              </p>
            </div>
          </div>
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div className="RidePoint">
              <h5>Premium Support</h5>
              <p className="Para">
                Tortor condimentum lacinia quis vel eros donec odio. Feugiat
                fermentum in posuere urna. Faucibus turpis in eun mi bibendum.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="RidePoint">
              <h5>A Diverse Selection</h5>
              <p className="Para">
                Tortor condimentum lacinia quis vel eros donec odio. Feugiat
                fermentum in posuere urna. Faucibus turpis in eun mi bibendum.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="Ride-img">
  <div className="container">
    <div className="Video-btnmain" onClick={toggleVideoShow}>
      <a className="video-play " href="#!" data-type="iframe">
        <span className="video-play-inner"> Video </span>
        <svg
          className="video-svg--play"
          xmlns="#!"
          xmlnsXlink="#!"
          x="0px"
          y="0px"
          width="280px"
          height="280px"
          viewBox="0 0 280 280"
          style={{ enableBackground: "new 0 0 280 280" }}
          xmlSpace="preserve"
        >
          <defs>
            <radialGradient
              cy="0%"
              fx="50%"
              fy="0%"
              r="50%"
              gradientTransform="matrix(0 1 -1.5 0 .5 -.5)"
              id="circle-grey-big-radial"
            >
              <stop stopColor="#FFF" offset="0%">
                {" "}
              </stop>
              <stop stopColor="#FFF" stopOpacity={0} offset="100%" />
            </radialGradient>
            <circle id="circle-grey-big" cx={140} cy={140} r={139} />
          </defs>
          <g fill="none" fillRule="evenodd">
            <use
              strokeOpacity="0.3"
              stroke="#D9D6CE"
              xlinkHref="#circle-grey-big"
            />
            <use
              strokeOpacity={1}
              stroke="url(#circle-grey-big-radial)"
              xlinkHref="#circle-grey-big"
            />
          </g>
        </svg>{" "}
      </a>
    </div>
    {videoshow ?<div className="VideoShow">
      <div className="Video-header">
        <button type="button" onClick={toggleVideoShow}>X</button>
      </div>
      <div className="Video-body">
        <video autoPlay="true" loop="" controls="">
          <source
            type="video/mp4"
            src="assets/images/endtest_data_driven_testing_csv.mp4"
          />
        </video>
      </div>
    </div>:""}
  </div>
</div>


    </div>
  </section>
  {/* Safety-Sec */}
  <section className="Section Safety">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-5 col-md-12">
          <div className="TitleDiv">
            <h1 className="Heading">We Care Of Your Safety And Convenience</h1>
            <span className="GoldenColor">PREMIUM DRIVERS</span>
            <p className="Para">
              Facilisi cras fermentum odio eu feugiat. In fermentum et
              sollicitudin ac ori accumsan sit amet nulla facilisi morbi tempus
              iaculis urna id. Aenean euismod elementum nisi quis eleifend quam
              adipiscing vitae dipiscing.
            </p>
            <div className="StyleButton mt-5">
              <a href="#!">
                <i className="fa fa-plus" aria-hidden="true" /><i className="fa fa-circle" aria-hidden="true"></i> Book Now
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-7 col-md-12">
          <div className="Safety-Img">
            <div className="row">
              <div className="col-md-6 S-Img">
              <div data-aos="fade-down" data-aos-duration="2000" className="S-Img">
                <img src="assets/images/safety-img1.jpg" />
              </div>
              </div>
              <div className="col-md-6">
              <div data-aos="fade-down" data-aos-duration="2000" className="S-Img">
                <img src="assets/images/safety-img2.jpg" />
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Row ///// */}
    </div>
  </section>
  {/* Offers-Sec */}
  <section className="Section Offers">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12">
          <div className="TitleDiv">
            <h1 className="Heading">
              Do You Need To Rent A Car? <br />
              See Our Offers
            </h1>
            <div className="StyleButton mt-5">
              <a href="#!">
                <i className="fa fa-plus" aria-hidden="true" />
                <i className="fa fa-circle" aria-hidden="true"/>
                 VIEW MORE
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Row ///// */}
    </div>
  </section>
  {/* Proffesional-Sec */}
  <section className="Section Ride Proffesional">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="TitleDiv">
            <h1 className="Heading">Our Proffesional Chauffeurs</h1>
            <span className="GoldenColor">MEET OUR TEAM</span>
          </div>
        </div>
      </div>
      {/* Row ///// */}
      <div className="Prof-Content">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-3">
            <div className="ProfPoint">
              <img src="assets/images/team-img-1.jpg" />
              <div className="ProfContent">
                <h5>Marco Watkivi</h5>
                <ul className="contact-Num">
                  <li className="Phone">
                    <span>
                      <i className="fa fa-phone" aria-hidden="true" />
                    </span>
                  </li>
                  <li></li>
                  <li className="Number">
                    <span>
                      <a href="#!"> +1234 5678 901</a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="ProfPoint">
              <img src="assets/images/team-img-2.jpg" />
              <div className="ProfContent">
                <h5>Marily Sulli</h5>
                <ul className="contact-Num">
                  <li className="Phone">
                    <span>
                      <i className="fa fa-phone" aria-hidden="true" />
                    </span>
                  </li>
                  <li className="Number">
                    <span>
                      <a href="#!"> +2345 6789 012</a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="ProfPoint">
              <img src="assets/images/team-img-3.jpg" />
              <div className="ProfContent">
                <h5>Zakary Tapun</h5>
                <ul className="contact-Num">
                  <li className="Phone">
                    <span>
                      <i className="fa fa-phone" aria-hidden="true" />
                    </span>
                  </li>
                  <li className="Number">
                    <span>
                      <a href="#!"> +3456 7890 123</a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Premium-Sec */}
  <section className="Section Premium">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-7 col-md-12">
          <div className="Safety-Img">
            <div className="row">
              <div className="col-md-6">
              <div data-aos="fade-down" data-aos-duration="2000" className="S-Img">
                <img src="assets/images/safety-img1.jpg" />
              </div>
              </div>
              <div className="col-md-6">
              <div data-aos="fade-down" data-aos-duration="2000" className="S-Img">
                <img src="assets/images/safety-img2.jpg" />
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-md-12">
          <div className="TitleDiv">
            <h1 className="Heading">Premium Cars Rental</h1>
            <span className="GoldenColor">ONLY THE BEST</span>
            <p className="Para">
              Praesent elementum facilisis leo vel fringilla est. Vest bulum
              lectus a urise ultrices eros in cursus turpi uto.
            </p>
            <div className="CountNum">
              <div className="Digits">
                <span>
                  21<sup>+</sup>
                </span>
                <p className="Para">Years of experience</p>
              </div>
              <div className="Digits">
                <span>
                  157<sub>k</sub>
                </span>
                <p className="Para">Satisfied clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Row ///// */}
    </div>
  </section>
      {/* Testimonial-Sec */}
    <TestSlider/>
   {/* OnlyBg-Sec */}
   <section className="Only-bg" />
  {/* Variety-sec */}
  <section className="Section Ride Variety">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="TitleDiv">
            <h1 className="Heading">A High Variety Of Options</h1>
            <span className="GoldenColor">BEST POSSIBILITIES</span>
          </div>
        </div>
      </div>
      {/* Row ///// */}
      <div className="Variety-Content">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-10">
            <div className="VariRight">
              <ul>
                <li>
                  <div className="car">
                    <img src="assets/images/car-img.png" />
                  </div>
                  <div className="flex-sec">
                    <div className="Pre">
                      <h4>Premium</h4>
                      <h3>
                        <sub>from </sub>
                        <span>
                          <sup>$</sup>40
                        </span>
                        <sub className="hour">/h</sub>
                      </h3>
                    </div>
                    <div className="List">
                      <ul>
                        <li>
                          <i className="fa fa-check" aria-hidden="true" /> Leo
                          urna molestie at elem
                        </li>
                        <li>
                          <i className="fa fa-check" aria-hidden="true" /> Leo
                          urna molestie at elem
                        </li>
                        <li>
                          <i className="fa fa-check" aria-hidden="true" /> Leo
                          urna molestie at elem
                        </li>
                      </ul>
                    </div>
                    <div className="StyleButton">
                      <a href="#!">
                        <i className="fa fa-plus" aria-hidden="true" />
                        <i className="fa fa-circle" aria-hidden="true"/> Book Now
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
              <ul>
                <li>
                  <div className="car">
                    <img src="assets/images/car-img2.png" />
                  </div>
                  <div className="flex-sec">
                    <div className="Pre">
                      <h4>Super</h4>
                      <h3>
                        <sub>from </sub>
                        <span>
                          <sup>$</sup>50
                        </span>
                        <sub className="hour">/h</sub>
                      </h3>
                    </div>
                    <div className="List">
                      <ul>
                        <li>
                          <i className="fa fa-check" aria-hidden="true" /> Leo
                          urna molestie at elem
                        </li>
                        <li>
                          <i className="fa fa-check" aria-hidden="true" /> Leo
                          urna molestie at elem
                        </li>
                        <li>
                          <i className="fa fa-check" aria-hidden="true" /> Leo
                          urna molestie at elem
                        </li>
                      </ul>
                    </div>
                    <div className="StyleButton">
                      <a href="#!">
                        <i className="fa fa-plus" aria-hidden="true" />
                        <i className="fa fa-circle" aria-hidden="true"/> Book Now
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
              <ul>
                <li>
                  <div className="car">
                    <img src="assets/images/car-img3.png" />
                  </div>
                  <div className="flex-sec">
                    <div className="Pre">
                      <h4>Luxury</h4>
                      <h3>
                        <sub>from </sub>
                        <span>
                          <sup>$</sup>70
                        </span>
                        <sub className="hour">/h</sub>
                      </h3>
                    </div>
                    <div className="List">
                      <ul>
                        <li>
                          <i className="fa fa-check" aria-hidden="true" /> Leo
                          urna molestie at elem
                        </li>
                        <li>
                          <i className="fa fa-check" aria-hidden="true" /> Leo
                          urna molestie at elem
                        </li>
                        <li>
                          <i className="fa fa-check" aria-hidden="true" /> Leo
                          urna molestie at elem
                        </li>
                      </ul>
                    </div>
                    <div className="StyleButton">
                      <a href="#!">
                        <i className="fa fa-plus" aria-hidden="true" />
                        <i className="fa fa-circle" aria-hidden="true"/> Book Now
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
              <ul>
                <li>
                  <div className="car">
                    <img src="assets/images/car-img4.png" />
                  </div>
                  <div className="flex-sec">
                    <div className="Pre">
                      <h4>Business</h4>
                      <h3>
                        <sub>from </sub>
                        <span>
                          <sup>$</sup>80
                        </span>
                        <sub className="hour">/h</sub>
                      </h3>
                    </div>
                    <div className="List">
                      <ul>
                        <li>
                          <i className="fa fa-check" aria-hidden="true" /> Leo
                          urna molestie at elem
                        </li>
                        <li>
                          <i className="fa fa-check" aria-hidden="true" /> Leo
                          urna molestie at elem
                        </li>
                        <li>
                          <i className="fa fa-check" aria-hidden="true" /> Leo
                          urna molestie at elem
                        </li>
                      </ul>
                    </div>
                    <div className="StyleButton">
                      <a href="#!">
                        <i className="fa fa-plus" aria-hidden="true" />
                        <i className="fa fa-circle" aria-hidden="true"/> Book Now
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Rental-Sec */}
  <section className="Section Rental">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12">
          <div className="TitleDiv">
            <h1 className="Heading">
              Get 15% Off Your Rental! <br />
              Choose Your Model
            </h1>
          </div>
        </div>
      </div>
      {/* Row ///// */}
    </div>
  </section>
  {/* Informtion-sec */}
  <section className="Section Informtion">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="Info-Cnt">
            <ul>
              <li className="Location">
                <a href="#!">
                  <img src="assets/images/info-icon1.png" />
                </a>
              </li>
              <li>
                <h5>
                  <a href="#!">11 Rue de la Mutualité,</a>
                </h5>
                <h5>
                  <a href="#!">92400 Paris </a>
                </h5>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-4">
          <div className="Info-Cnt">
            <ul>
              <li className="Music">
                <a href="#!">
                  <img src="assets/images/info-icon2.png" />
                </a>
              </li>
              <li>
                <h5>
                  <a href="#!">Phone: (012) 345 6789 0123;</a>
                </h5>
                <h5>
                  <a href="#!">Email: luxe@example.com </a>
                </h5>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-4">
          <div className="Info-Cnt">
            <ul>
              <li className="Time">
                <a href="#!">
                  <img src="assets/images/info-icon3.png" />
                </a>
              </li>
              <li>
                <h5>Mon-Sat 09:00-23:00;</h5>
                <h5>Sunday is closed.</h5>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
    
     )
} 
      
export default Homepage; 
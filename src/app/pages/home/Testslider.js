"use client"
import $ from "jquery"
import React, { useEffect, useRef } from 'react';
function TestSlider() { 

    const slideRef = useRef(null);

    useEffect(() => {
        // Slick Carousel initialization
        if (typeof window !== 'undefined') {
        const $slide = $(slideRef.current);
    
        $slide.slick({
            dots: true,
            infinite: false,
            speed: 300,
            autoplay: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: false,
              nextArrow: false,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  autoplay: true,
                  prevArrow: false,
                  nextArrow: false,
                  infinite: false,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  autoplay: true,
                  infinite: false,
                  prevArrow: false,
                  nextArrow: false,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  autoplay: true,
                  prevArrow: false,
                  nextArrow: false,
                  slidesToScroll: 1
                }
              }
            
            ]
          });
    
        // Cleanup function
        return () => {
          // Destroy Slick instance if needed when component unmounts
          $slide.slick('unslick');
        };}
      }, []);
    return (<>
       <section className="Section Testimonial">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12">
              <div className="TitleDiv">
                <h1 className="Heading">
                  We trive to meet the needs of our clients and we value their
                  opinions about our work
                </h1>
              </div>
            </div>
          </div>
          <div className="testslider test-0" ref={slideRef}>
            <div className="InnerTest">
              <h5>Smooth Car Transport </h5>
              <div className="star">
                <img alt=""src="assets/images/stars.png" />
              </div>
              <p>
                Habitant morbi tristique senectus et du amon ut venenatis tellus in
                metus vulpute ate augue interdum velit euismod in pel lent sque
                mauris pharetra et ultrices neq ue te amet cursus sit amet dictum
                sit ami justo arcu dictu.
              </p>
              <div className="username">
                <span>Gloria Foles, Chicago </span>
              </div>
            </div>
            <div className="InnerTest">
              <h5>Smooth Car Transport </h5>
              <div className="star">
                <img alt=""src="assets/images/stars.png" />
              </div>
              <p>
                Habitant morbi tristique senectus et du amon ut venenatis tellus in
                metus vulpute ate augue interdum velit euismod in pel lent sque
                mauris pharetra et ultrices neq ue te amet cursus sit amet dictum
                sit ami justo arcu dictu.
              </p>
              <div className="username">
                <span>Gloria Foles, Chicago </span>
              </div>
            </div>
            <div className="InnerTest">
              <h5>Smooth Car Transport </h5>
              <div className="star">
                <img alt=""src="assets/images/stars.png" />
              </div>
              <p>
                Habitant morbi tristique senectus et du amon ut venenatis tellus in
                metus vulpute ate augue interdum velit euismod in pel lent sque
                mauris pharetra et ultrices neq ue te amet cursus sit amet dictum
                sit ami justo arcu dictu.
              </p>
              <div className="username">
                <span>Gloria Foles, Chicago </span>
              </div>
            </div>
            <div className="InnerTest">
              <h5>Smooth Car Transport </h5>
              <div className="star">
                <img alt=""src="assets/images/stars.png" />
              </div>
              <p>
                Habitant morbi tristique senectus et du amon ut venenatis tellus in
                metus vulpute ate augue interdum velit euismod in pel lent sque
                mauris pharetra et ultrices neq ue te amet cursus sit amet dictum
                sit ami justo arcu dictu.
              </p>
              <div className="username">
                <span>Gloria Foles, Chicago </span>
              </div>
            </div>
            <div className="InnerTest">
              <h5>Smooth Car Transport </h5>
              <div className="star">
                <img alt=""src="assets/images/stars.png" />
              </div>
              <p>
                Habitant morbi tristique senectus et du amon ut venenatis tellus in
                metus vulpute ate augue interdum velit euismod in pel lent sque
                mauris pharetra et ultrices neq ue te amet cursus sit amet dictum
                sit ami justo arcu dictu.
              </p>
              <div className="username">
                <span>Gloria Foles, Chicago </span>
              </div>
            </div>
            <div className="InnerTest">
              <h5>Smooth Car Transport </h5>
              <div className="star">
                <img alt=""src="assets/images/stars.png" />
              </div>
              <p>
                Habitant morbi tristique senectus et du amon ut venenatis tellus in
                metus vulpute ate augue interdum velit euismod in pel lent sque
                mauris pharetra et ultrices neq ue te amet cursus sit amet dictum
                sit ami justo arcu dictu.
              </p>
              <div className="username">
                <span>Gloria Foles, Chicago </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
       )
} 
      
export default TestSlider; 
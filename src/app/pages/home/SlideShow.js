import { useState, useEffect } from 'react';

const SlideShow = () => {
    useEffect(() => {
        const slides = document.querySelectorAll('.slide');
        const controls = document.querySelectorAll('.control');
        let activeSlide = 0;
        let prevActive = 0;
        let int = null;
    
        const changeSlides = () => {
          slides[prevActive].classList.remove('active');
          controls[prevActive].classList.remove('active');
    
          slides[activeSlide].classList.add('active');
          controls[activeSlide].classList.add('active');
          
          prevActive = activeSlide++;
          
          if (activeSlide >= slides.length) {
            activeSlide = 0;
          }
          
          
        };
    
        const clickHandler = (event) => {
          const idx = [...controls].findIndex(c => c === event.target);
          activeSlide = idx;
    
          changeSlides();
    
          clearInterval(int);
          int = setInterval(changeSlides, 4000);
        };
    
        changeSlides(); // Initial call
    
        int = setInterval(changeSlides, 4000);
    
        controls.forEach(control => {
          control.addEventListener('click', clickHandler);
        });
    
        // Clean up event listeners when the component unmounts
        return () => {
          clearInterval(int);
          controls.forEach(control => {
            control.removeEventListener('click', clickHandler);
          });
        };
      }, []);

  return (
    <>
    {/* Banner Section */}
    <section className="BannerSetion ">
      <div className="banner-slider">
        {/* Images from Unsplash */}
        <div className="slider-container">
          <div className="container">
            <div className="BannerTop">
              <h1>Need to Rent a Luxury Car? Send A Request</h1>
              <p>
                Complete the form below and we ll contact you as soon as possible
              </p>
            </div>
            <div className="Formbanner">
              <form action="/action_page.php">
                <div className="Contact-Form">
                  <div className="form">
                    <div className="form-wrapper">
                      <input
                        type="text"
                        placeholder="Choose location"
                        name="form-location"
                      />
                    </div>
                  </div>
                  <div className="form">
                    <div className="form-wrapper">
                      <input type="date" id="date" />
                    </div>
                  </div>
                  <div className="form">
                    <div className="form-wrapper">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        
                      >
                        <option defaultValue="">Select time</option>
                        <option value={1}>00-00-00</option>
                        <option value={2}>01-00-00</option>
                        <option value={3}>02-00-00</option>
                      </select>
                    </div>
                  </div>
                  <div className="form">
                    <div className="form-wrapper">
                      <input
                        type="text"
                        placeholder="Drop off location"
                        name="form-dropoff"
                      />
                    </div>
                  </div>
                  <div className="form">
                    <div className="form-wrapper">
                      <button type="button">
                        <i className="fa fa-plus" aria-hidden="true" />
                        <i className="fa fa-circle" aria-hidden="true"/> Send
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div
              className="slide"
              style={{ background: "url(assets/images/banner-bg1.jpg)" }}
            ></div>
            <div
              className="slide"
              style={{ background: "url(assets/images/banner-bg2.jpg)" }}
            ></div>
            <div
              className="slide"
              style={{ background: "url(assets/images/banner-bg3.jpg)" }}
            ></div>
            <div className="controls-container">
              <div className="control" />
              <div className="control" />
              <div className="control" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  
  );
};

export default SlideShow;

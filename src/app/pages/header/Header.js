import { useEffect, useState } from "react";
import $ from 'jquery';
function Header() { 
  const [isOpen, setIsOpen] = useState(false);

  // Use the useState hook to create a state variable
  const [isClassAdded, setIsClassAdded] = useState(false);
 useEffect(() => {
    const handleBodyClick = (e) => {
      const isInputClicked = e.target.tagName.toLowerCase() === 'input';

      // Check if the clicked element is an input, and if so, do not remove the class
      if (!isInputClicked) {
        document.body.classList.remove('search_open');
      }
    };

    document.body.addEventListener('click', handleBodyClick);

    return () => {
      document.body.removeEventListener('click', handleBodyClick);
    };
  }, []);

  // Function to handle the button click and add the class to the body tag
  const handleButtonClick = () => {
    // Toggle the state variable to true
    setIsClassAdded(true);
    // Add the class to the body tag


   
    document.body.classList.toggle('search_open');
  };

  const openNav = () => {
    setIsOpen(true);
  };

  const closeNav = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    function handleShowButtonClick(e) {
      e.preventDefault();
     
      $(".NavMenu").slideToggle(300, function () {
        $(this).focus();
      });
      $('.CloseBtn').show(); // Show CloseBtn
      $('.ShowButton').hide(); // Hide ShowButton
    }

    function handleCloseButtonClick() {
      $(".NavMenu").delay(300).slideToggle();
      $('.CloseBtn').hide(); // Hide CloseBtn
      $('.ShowButton').show(); // Show ShowButton
    }

    // Click event for showing the menu
    $(".ShowButton").on("click", handleShowButtonClick);

    // Click event for closing the menu
    $(".CloseBtn").on("click", handleCloseButtonClick);

    // Clean up event listeners on component unmount
    return () => {
      $(".ShowButton").off("click", handleShowButtonClick);
      $(".CloseBtn").off("click", handleCloseButtonClick);
    };
  }, []);
  // useEffect(() => {
  //   const showButton = document.querySelector('.ShowButton');
  //   const closeBtn = document.querySelector('.CloseBtn');
  //   const navMenu = document.querySelector('.NavMenu');

  //   // Hiding the CloseBtn initially
  //   closeBtn.style.display = 'none';

  //   // Functionality for ShowButton click
  //   showButton.addEventListener('click', function (e) {
  //     e.preventDefault();
  //     navMenu.style.transition = 'height 0.3s ease-in-out';

  //     if (navMenu.style.display === 'none' || navMenu.style.display === '') {
  //       navMenu.style.display = 'block';
  //       navMenu.focus();
  //       closeBtn.style.display = 'block';
  //       showButton.style.display = 'none';
  //     } else {
  //       navMenu.style.display = 'none';
  //       closeBtn.style.display = 'none';
  //       showButton.style.display = 'block';
  //     }
  //   });

  //   // Functionality for CloseBtn click
  //   closeBtn.addEventListener('click', function () {
  //     navMenu.style.transition = 'height 0.3s ease-in-out';

  //     navMenu.style.display = 'none';
  //     closeBtn.style.display = 'none';
  //     showButton.style.display = 'block';
  //   });

  //   // Functionality for clicking anywhere
  //   document.addEventListener('click', function (event) {
  //     const isClickInsideNavMenu = navMenu.contains(event.target);
  //     if (!isClickInsideNavMenu) {
  //       navMenu.style.transition = 'height 0.3s ease-in-out';

  //       navMenu.style.display = 'none';
  //       closeBtn.style.display = 'none';
  //       showButton.style.display = 'block';
  //     }
  //   });
  // }, []);
  
    return (<>
      {/* Header */}
      <header className="header">
        {/* Top Bar */}
        <div className="TopBar">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="TopLogo">
                  <a href="index.html">
                    <img src="assets/images/logo-img-1.png" />
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <ul className="Topright">
                  <li>
                    <div className="RightText">
                      <ul>
                        <li>
                          <div className="Icon">
                            <span>
                              <i className="fa fa-phone" aria-hidden="true" />
                            </span>
                          </div>
                          <div className="Numbers">
                            <span>
                              <a href="#!"> + 1234 5678 901</a>
                            </span>
                            <span>
                              <a href="#!"> + 2345 6789 012 </a>
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="Icon">
                            <span>
                              <i className="fa fa-map-marker" aria-hidden="true" />
                            </span>
                          </div>
                          <div className="Numbers">
                            <span>
                              <a href="#!"> 57 RUE ARMAND CARREL </a>
                            </span>
                            <span>
                              <a href="#!"> 47 RUE CAVIER </a>
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* Row ///// */}
          </div>
        </div>
        {/* Top Bar ///// */}
        <div className="Header-Sec">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <ul className="TopMenuBar">
                  <li className="TopLogo">
                    <a href="index.html">
                      <img src="assets/images/logo-img-1.png" />
                    </a>
                  </li>
                  <li className="NavMenu" tabIndex={-1}>
  <ul className="Dropmenus">
    <li className="dropdown">
      <a href="#!" className="dropbtn">
        {" "}
        <span className="Active-menu">Home</span>
      </a>
      <ul className="dropdown-content">
        <li>
          <a href="#!">Main Home</a>
        </li>
        <li>
          <a href="#!">Premium Vehicles</a>
        </li>
        <li>
          <a href="#!">Luxury vehicles</a>
        </li>
        <li>
          <a href="#!">Landing page</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="#!">
        <span className="menu-text">Pages</span>
      </a>
    </li>
    <li>
      <a href="#!">
        <span className="menu-text">Vehicle fleet</span>
      </a>
    </li>
    <li>
      <a href="#!">
        <span className="menu-text">Blog</span>
      </a>
    </li>
    <li>
      <a href="#!">
        <span className="menu-text">Shop</span>
      </a>
    </li>
  </ul>
</li>

                  <li className="Side_Button">
                    <ul>
                      <li className="NavIcon">
                        <a href="#!">
                        <button   type="button" onClick={handleButtonClick} className="header-search"><i className="fa fa-search" aria-hidden="true"></i></button>
                        </a>
                      </li>
                      <li className="Sidebar">
                        <div id="mySidenav" className={`sidenav ${isOpen ? 'is-open' : ''}`}  >
                        
                          <button type="button"   onClick={closeNav} className="toggleNav">
  ✕
</button>
                          <div className="SideLogo">
                            <a href="index.html">
                              <img src="assets/images/logo-gold-img-1.png" />
                            </a>
                          </div>
                          <p className="Para side-p">
                            In nulla posuere sollicitudin aliqu amultri ces sagittis
                            orci a scelerisu arcu felis bibendum ut tristiu en.
                          </p>
                          <p className="Para">
                            Mon - Sat 9:00- 23:00 <br />
                            Sunday - closed
                          </p>
                          <div className="SideCall">
                            <ul>
                              <li>
                                <img src="assets/images/call-icon.png" />
                              </li>
                              <li>
                                <a>+1234 5678 901</a>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <button type="button" className="toggleNav" onClick={openNav}><a href="#!" className="sideopen">
  <span
    className="open"
    style={{ fontSize: 30, cursor: "pointer" }}
   
  >
    <svg
      className="side-svg--menu"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="50px"
      height="8px"
      viewBox="0 0 50 8"
      style={{ enableBackground: "new 0 0 50 8" }}
      xmlSpace="preserve"
    >
      <line x1={0} y1="0.5" x2={50} y2="0.5" />
      <line x1={50} y1="7.5" x2={0} y2="7.5" />
    </svg>
  </span>
  {/*
   */}
</a>
</button>
<div id="main"></div>
                      </li>
                      <li>
                        <button className="MobileBar">
                          {/* <i className="fa fa-bars ShowButton" aria-hidden="true" /> */}
                          <a href="#!" className="M-sideopen">
  <span
    className="M-open">
    <svg
      className="M-side-svg--menu ShowButton"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="50px"
      height="8px"
      viewBox="0 0 50 8"
      style={{ enableBackground: "new 0 0 50 8" }}
      xmlSpace="preserve"
    >
      <line x1={0} y1="0.5" x2={35} y2="0.5" />
      <line x1={35} y1="7.5" x2={0} y2="7.5" />
    </svg>
  </span>
  {/*
   */}
</a>
                          <i className="fa fa-times CloseBtn" aria-hidden="true" />
                        </button>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            {/* Row ///// */}
          </div>
        </div>
      </header>
      {/* Header ////// */}
    </>
    
    
       )
} 
      
export default Header; 
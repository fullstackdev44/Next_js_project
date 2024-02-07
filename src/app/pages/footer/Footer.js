function Footer() { 
    return (<>
      {/* Footer Section */}
      <footer className="Section Footer">
        <div className="Footer-sec">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="footer-col">
                  <div className="footer-logo">
                    <a href="#!">
                      <img src="assets/images/logo-gold-img-1.png" />
                    </a>
                  </div>
                  <div className="InfoAddess">
                    <p className="Para">
                      usto odio dignissimos ducimus qui blanditiis voluptatum
                      deleniti corrupti quos dolores et quas molestias sint
                      occaecati id est laborumesa etdolorum.
                    </p>
                    <div className="text">
                      <a href="#!">CALL CENTAR: +397 256 38 29</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-col">
                  <h5 className="FooterTitle">Quick links</h5>
                  <div className="InfoAddess">
                    <ul className="FooterLink">
                      <li>
                        <a href="contact.html">How we work</a>
                      </li>
                      <li>
                        <a href="about.html">Faq</a>
                      </li>
                      <li>
                        <a href="careers.html">Services</a>
                      </li>
                      <li>
                        <a href="refunds-returns.html">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-col">
                  <h5 className="FooterTitle">Our Services</h5>
                  <div className="InfoAddess">
                    <ul className="FooterLink">
                      <li>
                        <a href="#!">Search Terms</a>
                      </li>
                      <li>
                        <a href="#!">Advanced Search</a>
                      </li>
                      <li>
                        <a href="#!">Help &amp; FAQ s</a>
                      </li>
                      <li>
                        <a
                          href=""
                          target="_blank"
                        >
                          Store Location
                        </a>
                      </li>
                      <li>
                        <a href="#!">Orders &amp; Returns</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="CopyRight">
              <div className="row">
                <div className="col-md-12">
                  <div className="Tools">
                    © 2023 Qode Interactive, All Rights Reserved
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="Side-Toolbar">
  <div className="theme-btn" />
  <div className="Purchase-btn">
    <a href="#!">
      <span className="cart-icon">
        <i className="fa fa-shopping-cart" aria-hidden="true" />
      </span>
    </a>
  </div>
</div>

<div className="serachbar" id="searchbar">
<a
  href=""
  className="qodef-opener-icon qodef-m qodef-source--predefined qodef-m-close"
  style={{ top: 170, left: "1640.5px" }}
>
  <span className="qodef-m-icon ">
    <svg
      className="qodef-svg--close"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="16px"
      height="16px"
      viewBox="0 0 16 16"
      style={{ enableBackground: "new 0 0 16 16" }}
      xmlSpace="preserve"
    >
      <line x1="15.5" y1="0.5" x2="0.5" y2="15.5" />
      <line x1="0.5" y1="0.5" x2="15.5" y2="15.5" />
    </svg>{" "}
  </span>
</a>

<div className="form-inner">
  <form>
  <div className="Search-form-wrapper">
  <input type="menu-text" placeholder="Search for...." name=""/>
  <span className="bottom-line"></span>
  <button type="submit" className="SearchIcon"><i className="fa fa-search" aria-hidden="true"></i></button>
  </div>
</form>
</div>

</div>

    </>
    
       )
} 
      
export default Footer; 
import React from 'react'

export const HomePage=()=>{
    return(
<>
<div>
        <div>
          <nav className="navbar navbar-light navbar-expand-md navigation-clean">
            <div className="container">
              <a className="navbar-brand" href="./Doctor.jsx">
             Doctor
              </a>
              <button
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navcol-1"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navcol-1">
                <ul className="nav navbar-nav ml-auto">
                  <li className="nav-item" role="presentation">
                    <a className="nav-link active" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a className="nav-link" href="#">
                      Find Doctor
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a className="nav-link" href="#">
                      Health News
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a className="nav-link" href="#">
                      Health Forum
                    </a>
                  </li>
                  <li className="dropdown">
                    <a
                      className="dropdown-toggle nav-link dropdown-toggle"
                      data-toggle="dropdown"
                      aria-expanded="false"
                      href="#"
                    >
                      Dropdown{" "}
                    </a>
                    <div className="dropdown-menu" role="menu">
                      <a className="dropdown-item" role="presentation" href="#">
                        About US
                      </a>
                      <a className="dropdown-item" role="presentation" href="#">
                        Contact Us
                      </a>
                      <a className="dropdown-item" role="presentation" href="#">
                        Help
                      </a>
                      <a className="dropdown-item" role="presentation" href="#">
                        Logout
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="simple-slider">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide slide1"></div>
              <div className="swiper-slide slide2"></div>
              <div className="swiper-slide slide3"></div>
            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
        </div>
        <div className="highlight-phone">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="intro">
                  <h2>Highlight</h2>
                  <p>
                    Nunc luctus in metus eget fringilla. Aliquam sed justo
                    ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae.
                    Aliqua sed justo ligula.
                  </p>
                  <a className="btn btn-primary" role="button" href="#">
                    Action Button
                  </a>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="d-none d-md-block iphone-mockup">
                  <img src="assets/img/iphone.svg" className="device" />
                  <div className="screen"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="features-boxed">
          <div className="container">
            <div className="intro">
              <h2 className="text-center">Features </h2>
              <p className="text-center">
                Nunc luctus in metus eget fringilla. Aliquam sed justo ligula.
                Vestibulum nibh erat, pellentesque ut laoreet vitae.
              </p>
            </div>
            <div className="row justify-content-center features">
              <div className="col-sm-6 col-md-5 col-lg-4 item">
                <div className="box">
                  <i className="fa fa-map-marker icon"></i>
                  <h3 className="name">Works everywhere</h3>
                  <p className="description">
                    Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                    lacus. Praesent aliquam in tellus eu.
                  </p>
                  <a href="#" className="learn-more">
                    Learn more »
                  </a>
                </div>
              </div>
              <div className="col-sm-6 col-md-5 col-lg-4 item">
                <div className="box">
                  <i className="fa fa-clock-o icon"></i>
                  <h3 className="name">Always available</h3>
                  <p className="description">
                    Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                    lacus. Praesent aliquam in tellus eu.
                  </p>
                  <a href="#" className="learn-more">
                    Learn more »
                  </a>
                </div>
              </div>
              <div className="col-sm-6 col-md-5 col-lg-4 item">
                <div className="box">
                  <i className="fa fa-list-alt icon"></i>
                  <h3 className="name">Customizable </h3>
                  <p className="description">
                    Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                    lacus. Praesent aliquam in tellus eu.
                  </p>
                  <a href="#" className="learn-more">
                    Learn more »
                  </a>
                </div>
              </div>
              <div className="col-sm-6 col-md-5 col-lg-4 item">
                <div className="box">
                  <i className="fa fa-eye icon"></i>
                  <h3 className="name">Organic </h3>
                  <p className="description">
                    Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                    lacus. Praesent aliquam in tellus eu.
                  </p>
                  <a href="#" className="learn-more">
                    Learn more »
                  </a>
                </div>
              </div>
              <div className="col-sm-6 col-md-5 col-lg-4 item">
                <div className="box">
                  <i className="fa fa-plane icon"></i>
                  <h3 className="name">Fast </h3>
                  <p className="description">
                    Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                    lacus. Praesent aliquam in tellus eu.
                  </p>
                  <a href="#" className="learn-more">
                    Learn more »
                  </a>
                </div>
              </div>
              <div className="col-sm-6 col-md-5 col-lg-4 item">
                <div className="box">
                  <i className="fa fa-phone icon"></i>
                  <h3 className="name">Mobile-first</h3>
                  <p className="description">
                    Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                    lacus. Praesent aliquam in tellus eu.
                  </p>
                  <a href="#" className="learn-more">
                    Learn more »
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="photo-gallery">
          <div className="container">
            <div className="intro">
              <h2 className="text-center">Lightbox Gallery</h2>
              <p className="text-center">
                Nunc luctus in metus eget fringilla. Aliquam sed justo ligula.
                Vestibulum nibh erat, pellentesque ut laoreet vitae.{" "}
              </p>
            </div>
          </div>
          <div className="container">
            <div className="row flex-box flex-wrap-wrap">
              <div className="col-sm-4 flex-box flex-justify-center flex-align-center">
                <a
                  href="assets/img/hero-background-nature.jpg"
                  className="fancybox"
                  rel="gallery1"
                  title="Hero Image Nature"
                >
                  <img
                    className="img-fluid"
                    src="assets/img/hero-background-nature.jpg"
                  />
                </a>
              </div>
              <div className="col-sm-4 flex-box flex-justify-center flex-align-center">
                <a
                  href="assets/img/hero-background-technology.jpg"
                  className="fancybox"
                  rel="gallery1"
                  title="Hero Image Technology"
                >
                  <img
                    className="img-fluid"
                    src="assets/img/hero-background-technology.jpg"
                  />
                </a>
              </div>
              <div className="col-sm-4 flex-box flex-justify-center flex-align-center">
                <a
                  href="assets/img/hero-background-travel.jpg"
                  className="fancybox"
                  rel="gallery1"
                  title="Hero Image Travel"
                >
                  <img
                    className="img-fluid"
                    src="assets/img/hero-background-travel.jpg"
                  />
                </a>
              </div>
              <div className="col-sm-4 flex-box flex-justify-center flex-align-center">
                <a
                  href="assets/img/hero-background-food.jpg"
                  className="fancybox"
                  rel="gallery1"
                  title="Hero Image Food"
                >
                  <img
                    className="img-fluid"
                    src="assets/img/hero-background-food.jpg"
                  />
                </a>
              </div>
              <div className="col-sm-4 flex-box flex-justify-center flex-align-center">
                <a
                  href="assets/img/hero-background-music.jpg"
                  className="fancybox"
                  rel="gallery1"
                  title="Hero Image Music"
                >
                  <img
                    className="img-fluid"
                    src="assets/img/hero-background-music.jpg"
                  />
                </a>
              </div>
              <div className="col-sm-4 flex-box flex-justify-center flex-align-center">
                <a
                  href="assets/img/hero-background-photography.jpg"
                  className="fancybox"
                  rel="gallery1"
                  title="Hero Image Photography"
                >
                  <img
                    className="img-fluid"
                    src="assets/img/hero-background-photography.jpg"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="article-list">
          <div className="container">
            <div className="intro">
              <h2 className="text-center">Latest Articles</h2>
              <p className="text-center">
                Nunc luctus in metus eget fringilla. Aliquam sed justo ligula.
                Vestibulum nibh erat, pellentesque ut laoreet vitae.{" "}
              </p>
            </div>
            <div className="row articles">
              <div className="col-sm-6 col-md-4 item">
                <a href="#">
                  <img className="img-fluid" src="assets/img/desk.jpg" />
                </a>
                <h3 className="name">Article Title</h3>
                <p className="description">
                  Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                  lacus. Praesent aliquam in tellus eu gravida. Aliquam varius
                  finibus est, interdum justo suscipit id.
                </p>
                <a href="#" className="action">
                  <i className="fa fa-arrow-circle-right"></i>
                </a>
              </div>
              <div className="col-sm-6 col-md-4 item">
                <a href="#">
                  <img className="img-fluid" src="assets/img/building.jpg" />
                </a>
                <h3 className="name">Article Title</h3>
                <p className="description">
                  Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                  lacus. Praesent aliquam in tellus eu gravida. Aliquam varius
                  finibus est, interdum justo suscipit id.
                </p>
                <a href="#" className="action">
                  <i className="fa fa-arrow-circle-right"></i>
                </a>
              </div>
              <div className="col-sm-6 col-md-4 item">
                <a href="#">
                  <img className="img-fluid" src="assets/img/loft.jpg" />
                </a>
                <h3 className="name">Article Title</h3>
                <p className="description">
                  Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                  lacus. Praesent aliquam in tellus eu gravida. Aliquam varius
                  finibus est, interdum justo suscipit id.
                </p>
                <a href="#" className="action">
                  <i className="fa fa-arrow-circle-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-dark">
          <footer>
            <div className="container">
              <div className="row">
                <div className="col-sm-6 col-md-3 item">
                  <h3>Services</h3>
                  <ul>
                    <li>
                      <a href="#">Web design</a>
                    </li>
                    <li>
                      <a href="#">Development</a>
                    </li>
                    <li>
                      <a href="#">Hosting</a>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-6 col-md-3 item">
                  <h3>About</h3>
                  <ul>
                    <li>
                      <a href="#">Company</a>
                    </li>
                    <li>
                      <a href="#">Team</a>
                    </li>
                    <li>
                      <a href="#">Careers</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6 item text">
                  <h3>Company Name</h3>
                  {/* <p>
                    Praesent sed lobortis mi. Suspendisse vel placerat ligula.
                    Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam
                    quis tristique lectus. Aliquam in arcu eget velit pulvinar
                    dictum vel in justo.
                  </p> */}
                </div>
                <div className="col item social">
                  <a href="#">
                    <i className="icon ion-social-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="icon ion-social-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="icon ion-social-snapchat"></i>
                  </a>
                  <a href="#">
                    <i className="icon ion-social-instagram"></i>
                  </a>
                </div>
              </div>
              <p className="copyright">Company Name © 2017</p>
            </div>
          </footer>
        </div>
      </div>





</>



    )
}
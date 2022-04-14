import React from 'react'


export const Landing=()=>{
    return(
    <>
    <div>
        <div>
          <div className="header-blue headerSize">
            <nav className="navbar navbar-dark navbar-expand-md navigation-clean-search">
              <div className="container">
                <a className="navbar-brand" href="http://localhost:3001/Doctor">
                   Doctor
                  {/* <img src="assets/img/favicon.png" height="30px" width="30px"/> */}
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
                  <ul className="nav navbar-nav">
                    <li className="nav-item" role="presentation">
                      <a className="nav-link active" href="#" alt="">
                        About Us
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a className="nav-link active" href="#" alt="">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                  <div className="form-inline mr-auto" target="_self">
                    <div className="form-group">
                      <label for="search-field"></label>
                      <span className="form-control search-field" />
                    </div>
                  </div>
                  <span className="navbar-text">
                    {" "}
                    <a href="http://localhost:3001/login" className="login">
                      Log In
                    </a>
                  </span>
                  <a
                    className="btn btn-light action-button"
                    role="button"
                    href="http://localhost:3001/Register"
                  >
                    Sign Up
                  </a>
                </div>
              </div>
            </nav>
            <div className="container hero">
              <div className="row">
                <div className="col-12 col-lg-6 col-xl-5 offset-xl-1">
                  <h1>The revolution is here.</h1>
                  <p>
                    Online Doctor Appointment Application that uses an web
                    platform that makes the task of making an appointment from
                    the doctor easy and reliable for the users.{" "}
                  </p>
                  <button
                    className="btn btn-light btn-lg action-button"
                    type="button"
                  >
                    Learn More
                  </button>
                </div>
                <div className="col-md-5 col-lg-5 offset-lg-1 offset-xl-0 d-none d-lg-block phone-holder">
                  <div className="iphone-mockup">
                    <img src="assets/img/Doc.png" className="device" alt=''/>
                  </div>
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
                "Happiness is nothing more than good health and a bad memory"
              </p>
            </div>
            <div className="row justify-content-center features">
              <div className="col-sm-6 col-md-5 col-lg-4 item">
                <div className="box">
                  <i className="fa fa-map-marker icon"></i>
                  <h3 className="name">Works everywhere</h3>
                  <p className="description">
                    Provides the searching facilities based on various factors.
                    Such as maintain list of doctors, available appointment
                    time, book appointment, cancel appointment.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-md-5 col-lg-4 item">
                <div className="box">
                  <i className="fa fa-clock-o icon"></i>
                  <h3 className="name">Always available</h3>
                  <p className="description">
                    Doctor Appointment system also manage the maintain list of
                    doctors, available appointment time, book appointment,
                    cancel appointment, details.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-md-5 col-lg-4 item">
                <div className="box">
                  <i className="fa fa-list-alt icon"></i>
                  <h3 className="name">Customizable </h3>
                  <p className="description">
                    Editing, adding and updating of Records is improved which
                    results in proper resource management of Doctor Appointment
                    system data.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-md-5 col-lg-4 item">
                <div className="box">
                  <i className="fa fa-eye icon"></i>
                  <h3 className="name">Organic </h3>
                  <p className="description">
                    Manage the information of doctors and patient. This site
                    help to find the right doctor at right place.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-md-5 col-lg-4 item">
                <div className="box">
                  <i className="fa fa-plane icon"></i>
                  <h3 className="name">Fast </h3>
                  <p className="description">
                    It tracks all the information list of doctors, available
                    appointment time, book appointment, cancel appointment.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-md-5 col-lg-4 item">
                <div className="box">
                  <i className="fa fa-phone icon"></i>
                  <h3 className="name">Mobile-first</h3>
                  <p className="description">
                    Manage the information of booking of appointment. It is
                    responsive website which makes user to access it from any
                    device.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="team-boxed">
          <div className="container">
            <div className="intro">
              <h2 className="text-center">Team </h2>
              <p className="text-center">
                "Individual commitment to a group effort--that is what makes a
                team work, a company work, a society work, a civilization work."
              </p>
            </div>
            <div className="row people">
              <div className="col-md-6 col-lg-4 item">
                <div className="box">
                  <img className="rounded-circle" src="assets/img/1.jpg" alt=''/>
                  <h3 className="name">Ben Johnson</h3>
                  <p className="title">CEO</p>
                  <p className="description">
                    Project is completed.{" "}
                  </p>
                  <div className="social">
                    <a href="#">
                      <i className="fa fa-facebook-official"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 item">
                <div className="box">
                  <img className="rounded-circle" src="assets/img/2.jpg" alt='' />
                  <h3 className="name">Jason Clark</h3>
                  <p className="title">Developer</p>
                  <p className="description">
                    Its hard to develop this site.{" "}
                  </p>
                  <div className="social">
                    <a href="#">
                      <i className="fa fa-facebook-official"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 item">
                <div className="box">
                  <img className="rounded-circle" src="assets/img/3.jpg" />
                  <h3 className="name">Carl Kent</h3>
                  <p className="title">Designer</p>
                  <p className="description">
                    Really enjoy while designing this site.
                    {" "}
                  </p>
                  <div className="social">
                    <a href="#">
                      <i className="fa fa-facebook-official"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonials-clean">
          <div className="container">
            <div className="intro">
              <h2 className="text-center">Testimonials </h2>
              <p className="text-center">
                Our customers love us! Read what they have to say us which is shown  below. 
              </p>
            </div>
            <div className="row people">
              <div className="col-md-6 col-lg-4 item">
                <div className="box">
                  <p className="description">
                    With the help of this site. I was admitted to Norvic
                    Hospital for a period of 2 days. Overall my experience was excellent. Not such a bad
                    experience for being first time hospitalized in my life.
                  </p>
                </div>
                <div className="author">
                <img className="rounded-circle" src="assets/img/1.jpg" alt=''/>
                  <h5 className="name">Ben Johnson</h5>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 item">
                <div className="box">
                  <p className="description">
                     doctor website is the best website for searching the
                    doctor. While it was difficult to be a person is need of such life saving help. I
                    am glad I came to get help from this website.
                  </p>
                </div>
                <div className="author">
                  <img className="rounded-circle" src="assets/img/3.jpg" alt='' />
                  <h5 className="name">Carl Kent</h5>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 item">
                <div className="box">
                  <p className="description">
                    With the help of this site. I was admitted to Norvic
                    Hospital for a period of 2 days. The staff are really good for helping. Not such a bad
                    experience for being first time hospitalized in my life.
                  </p>
                </div>
                <div className="author">
                  <img className="rounded-circle" src="assets/img/2.jpg" alt="" />
                  <h5 className="name">Emily Clark</h5>
                  <p className="title">Owner of Creative Ltd.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="team-boxed"></div>
        <div className="footer-dark foot">
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
                  <p>
                    Doctor
                  </p>
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
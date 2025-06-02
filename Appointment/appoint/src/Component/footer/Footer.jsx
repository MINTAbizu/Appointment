import React from 'react'
import '../../Component/styles/style.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

function Footer() {
  return (
    <div>
      <footer className="ftco-footer ftco-bg-dark ftco-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-3 col-sm-6 mb-4">
              <div className="ftco-footer-widget mb-5">
                <h2 className="ftco-heading-2 logo">Dentista</h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              </div>
              <div className="ftco-footer-widget mb-5">
                <h2 className="ftco-heading-2">Have a Questions?</h2>
                <div className="block-23 mb-3">
                  <ul>
                    <li><span className="fas fa-map-marker-alt"></span><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                    <li><a href="#"><span className="fas fa-phone"></span><span className="text">+2 392 3929 210</span></a></li>
                    <li><a href="#"><span className="fas fa-envelope"></span><span className="text">info@yourdomain.com</span></a></li>
                  </ul>
                </div>
                <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-3">
                  <li className="ftco-animate"><a href="#"><span className="fab fa-twitter"></span></a></li>
                  <li className="ftco-animate"><a href="#"><span className="fab fa-facebook-f"></span></a></li>
                  <li className="ftco-animate"><a href="#"><span className="fab fa-instagram"></span></a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-4">
              <div className="ftco-footer-widget mb-5 ml-md-4">
                <h2 className="ftco-heading-2">Links</h2>
                <ul className="list-unstyled">
                  <li><a href="#"><span className="ion-ios-arrow-round-forward mr-2"></span>Home</a></li>
                  <li><a href="#"><span className="ion-ios-arrow-round-forward mr-2"></span>About</a></li>
                  <li><a href="#"><span className="ion-ios-arrow-round-forward mr-2"></span>Services</a></li>
                  <li><a href="#"><span className="ion-ios-arrow-round-forward mr-2"></span>Departments</a></li>
                  <li><a href="#"><span className="ion-ios-arrow-round-forward mr-2"></span>Contact</a></li>
                </ul>
              </div>
              <div className="ftco-footer-widget mb-5 ml-md-4">
                <h2 className="ftco-heading-2">Services</h2>
                <ul className="list-unstyled">
                  <li><a href="#"><span className=""></span>Neurology</a></li>
                  <li><a href="#"><span className="ion-ios-arrow-round-forward mr-2"></span>Dentist</a></li>
                  <li><a href="#"><span className="ion-ios-arrow-round-forward mr-2"></span>Ophthalmology</a></li>
                  <li><a href="#"><span className="ion-ios-arrow-round-forward mr-2"></span>Cardiology</a></li>
                  <li><a href="#"><span className="ion-ios-arrow-round-forward mr-2"></span>Surgery</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-4">
              <div className="ftco-footer-widget mb-5">
                <h2 className="ftco-heading-2">Recent Blog</h2>
                <div className="block-21 mb-4 d-flex">
                  {/* <a className="blog-img mr-4" style={{backgroundImage: "url(images/image_1.jpg)"}}></a> */}
                  <div className="text">
                    <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about</a></h3>
                    <div className="meta">
                      <div><a href="#"><span className="icon-calendar"></span> Sept. 20, 2019</a></div>
                      <div><a href="#"><span className="icon-person"></span> Admin</a></div>
                      <div><a href="#"><span className="icon-chat"></span> 19</a></div>
                    </div>
                  </div>
                </div>
                <div className="block-21 mb-5 d-flex">
                  {/* <a className="blog-img mr-4" style={{backgroundImage: "url(images/image_2.jpg)"}}></a> */}
                  <div className="text">
                    <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about</a></h3>
                    <div className="meta">
                      <div><a href="#"><span className="icon-calendar"></span> Sept. 20, 2019</a></div>
                      <div><a href="#"><span className="icon-person"></span> Admin</a></div>
                      <div><a href="#"><span className="icon-chat"></span> 19</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-4">
              <div className="ftco-footer-widget mb-5">
                <h2 className="ftco-heading-2">Opening Hours</h2>
                <h3 className="open-hours pl-4"><span className="ion-ios-time mr-3"></span>We are open 24/7</h3>
              </div>
              <div className="ftco-footer-widget mb-5">
                <h2 className="ftco-heading-2">Subscribe Us!</h2>
                <form action="#" className="subscribe-form">
                  <div className="form-group">
                    <input type="text" className="form-control mb-2 text-center" placeholder="Enter email address"/>
                    <input type="submit" value="Subscribe" className="form-control submit px-3"/>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              {/* Copyright and attribution */}
              <p style={{color: "#fff", marginTop: "20px"}}>
                &copy; {new Date().getFullYear()} All rights reserved | This template is made with <span className="icon-heart" aria-hidden="true"></span> by <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer" style={{color: "#fff", textDecoration: "underline"}}>Colorlib</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
      <style>{`
        .ftco-footer {
          padding: 3rem 0 0 0;
         background: #20c997;

          color: #fff;
        }
        .ftco-footer-widget h2 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
        }
        .ftco-footer-widget ul {
          padding-left: 0;
          list-style: none;
        }
        .ftco-footer-widget ul li {
          margin-bottom: 0.5rem;
        }
        .ftco-footer-social {
          display: flex;
          gap: 10px;
        }
        .ftco-footer-social li a {
          color: #fff;
          font-size: 1.2rem;
        }
        @media (max-width: 767px) {
          .ftco-footer .row > div {
            margin-bottom: 2rem;
          }
        }
      `}</style>
    </div>
  )
}

export default Footer

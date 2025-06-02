import React from 'react'
import founder from '../images/doc-1.jpg'
import '../styles/style.css'
import Consult from '../Consultaion/Consult'
function Servises() {
  return (
    <div>
      
       <section className="services">
			<div className="container">
				<div className="row left">
					<div className="col-md-5 p-md-5 img img-2 mt-5 mt-md-0" 
          // style="background-image: url(images/about.jpg);"
          >
            <img src={founder} alt="" />
					</div>
					<div className="col-md-7 wrap-about py-4 py-md-5 ">
	          <div className="heading-section mb-5">
	          	<div className="pl-md-5 ml-md-5 pt-md-5">

		          	<span className=" mb-2">Welcome- to- Dentista</span>

		            <h2 className="mb-2" 
                // style="font-size: 32px;"
                >
                  Medical specialty concerned with the care of acutely ill hospitalized patient    </h2>
	            </div>
	          </div>
	          <div className="pl-md-5 ml-md-5 mb-5">
							<p>A small river named Duden flows by their place and supplies it with the necessary regelialia.
                 It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                  Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic 
                  life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the
                   far World of Grammar.</p>
							<p >
                A small river named Duden flows by their place and supplies it with the necessary regelialia. 
                It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
              </p>
							<div className="founder d-flex align-items-center mt-5">
								<div className="founderimg"
                //  style="background-image: url(images/doc-1.jpg);"
              

                 >
                  <img src={founder} alt="" />
                 </div>
								<div className="text pl-3">

									<h3 className="mb-0">Dr. Paul Foster</h3>
									<span className="position">CEO, Founder</span>

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
     <Consult/>
     
    </div>
  )
}

export default Servises


import React from 'react'
import Home from '../Home/Home'
import '../styles/style.css'

function Header() {
  return (
    <div>
     <div className="py-md-5 py-4 border-bottom">
    	<div className="container">
    		<div className="row no-gutters d-flex align-items-start align-items-center px-3 px-md-0">
    			<div className="col-md-4 order-md-2 mb-2 mb-md-0 align-items-center text-center">
		    		<a className="navbar-brand" >Dentista<span>Dental Clinic</span></a>
	    		</div>
	    		<div className="col-md-4 order-md-1 d-flex topper mb-md-0 mb-2 align-items-center text-md-right">
	    			<div className="icon d-flex justify-content-center align-items-center order-md-last">
	    				<span className="icon-map"></span>
	    			</div>
	    			<div className="pr-md-4 pl-md-0 pl-3 text">
					    <p className="con"><span>Free Call</span> <span>+1 234 456 78910</span></p>
					    <p className="con">198 West 21th Street, Suite 721 New York NY 10016</p>
				    </div>
			    </div>
			    <div className="col-md-4 order-md-3 d-flex topper mb-md-0 align-items-center">
			    	<div className="icon d-flex justify-content-center align-items-center"><span className="icon-paper-plane"></span></div>
			    	<div className="text pl-3 pl-md-3">
					    <p className="hr"><span>Open Hours</span></p>
					    <p className="time"><span>Mon - Sat:</span> <span>8:00am - 9:00pm</span> Sun: Closed</p>
				    </div>
			    </div>
		    </div>
		  </div>
    </div>
	 <nav className="navbar navbar-expand-lg navbar-dark bg-dark ftco-navbar-light" id="ftco-navbar">
	    <div className="container d-flex align-items-center">
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
	        <span className="oi oi-menu"></span> Menu
	      </button>
	      <div className="collapse navbar-collapse" id="ftco-nav">
	        <ul className="navbar-nav m-auto">
	        	<li className="nav-item active"><a href="#" className="nav-link pl-0">Home</a></li>
	        	<li className="nav-item"><a href="#" className="nav-link">About</a></li>
	        	<li className="nav-item"><a href="#" className="nav-link">Doctor</a></li>
	        	<li className="nav-item"><a href="#" className="nav-link">Treatments</a></li>
	        	<li className="nav-item"><a href="#" className="nav-link">Blog</a></li>
	          <li className="nav-item"><a href="#" className="nav-link">Contact</a></li>
	        </ul>
	      </div>
	    </div>
	  </nav>
	  {/* <Home/> */}
    </div>
  )
}

export default Header

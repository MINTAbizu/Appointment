import React from 'react'
import Doctor from '../doctors/Doctor'

function Consult() {
  return (
    <div>
      <section class="ftco-section ftco-no-pt ftco-no-pb">
			<div class="container-fluid px-md-0">
				<div class="row no-gutters">
					<div class="col-md-3 d-flex align-items-stretch">
						<div class="consultation w-100 text-center px-4 px-md-5">

							<h3 class="mb-4">Dental Services</h3>

							<p>A small river named Duden flows by their place and supplies</p>
							<a href="#" class="btn-custom">See Services</a>

						</div>
					</div>
					<div class="col-md-6 d-flex align-items-stretch">
						<div class="consultation consul w-100 px-4 px-md-5">
							<div class="text-center">


								<h3 class="mb-4">Free Consultation</h3>

							</div>
							<form action="#" class="appointment-form">
								<div class="row">
									<div class="col-md-12 col-lg-6 col-xl-4">
										<div class="form-group">
				    					<input type="text" class="form-control" placeholder="First Name"/>
				    				</div>
									</div>
									<div class="col-md-12 col-lg-6 col-xl-4">
										<div class="form-group">
				    					<input type="text" class="form-control" placeholder="Last Name"/>
				    				</div>
									</div>
									<div class="col-md-12 col-lg-6 col-xl-4">
										<div class="form-group">
				    					<div class="form-field">
		          					<div class="select-wrap">
		                      <div class="icon"><span class="ion-ios-arrow-down"></span></div>
		                      <select name="" id="" class="form-control">
		                      	<option value="">Department</option>
		                        <option value="">Neurology</option>
		                        <option value="">Cardiology</option>
		                        <option value="">Dental</option>
		                        <option value="">Ophthalmology</option>
		                        <option value="">Other Services</option>
		                      </select>
		                    </div>
				              </div>
				    				</div>
									</div>
									<div class="col-md-12 col-lg-6 col-xl-4">
										<div class="form-group">
				    					<div class="input-wrap">
				            		<div class="icon"><span class="ion-md-calendar"></span></div>
				            		<input type="Date" class="form-control appointment_date" placeholder="Date"/>
			            		</div>
				    				</div>
									</div>
									<div class="col-md-12 col-lg-6 col-xl-4">
										<div class="form-group">
				    					<div class="input-wrap">
				            		<div class="icon"><span class="ion-ios-clock"></span></div>
				            		<input type="text" class="form-control appointment_time" placeholder="Time"/>
			            		</div>
				    				</div>
									</div>
									<div class="col-md-12 col-lg-6 col-xl-4">
										<div class="form-group">
				              <input type="submit" value="Appointment" class="btn btn-secondary py-2 px-4"/>
				            </div>
									</div>
								</div>
		    			</form>
		    	  </div>
					</div>
					<div class="col-md-3 d-flex align-items-stretch">
						<div class="consultation w-100 text-center px-4 px-md-5">
							<h3 class="mb-4">Find A Doctor</h3>
							<p>A small river named Duden flows by their place and supplies</p>
							<a href="#" class="btn-custom">Mee our doctor</a>
						</div>
					</div>
				</div>
			</div>
		</section>
        <Doctor/>
    </div>
  )
}

export default Consult

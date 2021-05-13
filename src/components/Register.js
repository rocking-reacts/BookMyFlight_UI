import React from 'react';

function Register(props) {
    return (
        <div>
            <div class="container py-5">
				<div class="row mb-4">
					<div class="col-lg-8 mx-auto text-center">
					<h1 class="display-6">Registration</h1>
					</div>
				</div> 
				<div class="row">
				<div class="col-md-6 mx-auto">
					<div class="card ">
					<div class="card-header">
                    <div class="bg-white shadow-sm pt-4 pl-2 pr-2 pb-2">
                       
                    <div class="tab-content">
                        <div class="tab-pane fade show active pt-3">
                            <form>
                                <div class="form-group"> 
									<h6><span class="form-label">Name</span></h6>
										<input type="text" name="name" class="form-control" />
								</div>
                                <div class="form-group"> 
									<h6><span class="form-label">Email</span></h6>
										<input type="text" name="email" class="form-control" />
								</div>
                                <div class="form-group"> 
									<h6><span class="form-label">Contact</span></h6>
										<input type="number" name="contact" class="form-control" />
								</div>
                                <div class="form-group"> 
									<h6><span class="form-label">Username</span></h6>
										<input type="text" name="uname" class="form-control" />
								</div>
                                <div class="form-group"> 
									<h6><span class="form-label">Password</span></h6>
										<input type="password" name="passwd" class="form-control" />
								</div>
                                <div class="form-group"> 
									<h6><span class="form-label">Confirm Password</span></h6>
										<input type="password" name="cpasswd" class="form-control" />
								</div>
                                
                                <div class="card-footer"> <button type="submit" class="subscribe btn btn-primary btn-block shadow-sm">Register</button></div>      
                            </form>
                            
                        </div>
                    </div>
                    <div class="form-group" > 
                       <div ><button  type="button" class="btn  btn-link btn-block">Already registered</button>  </div> 
                    </div>
                   
                   </div>
                </div>
            </div>
          
        </div>
		</div>
	</div>
        </div>
    );
}

export default Register;
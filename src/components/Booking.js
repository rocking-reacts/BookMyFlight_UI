import React from 'react';

function Booking(props) {
    return (
        <div class="container py-5">
            <div class="row mb-4">
                <div class="col-lg-8 mx-auto text-center">
                <h1 class="display-6">Book My Flight</h1>
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
									    <h6><span class="form-label">Flying from</span></h6>
										<select name="from" class="form-control" disabled>
										
											<option>Mumbai</option>
											<option>Pune</option>
											<option>Goa</option>
											<option>Cochin</option>
											<option>Hyderabad</option>
											<option>Delhi</option>
											<option>Bangalore</option>
										</select>
								        </div>

                                        <div class="form-group"> 
									    <h6><span class="form-label">Flying to</span></h6>
										<select name="to" class="form-control" disabled>
											<option>Mumbai</option>
											<option>Pune</option>
											<option>Goa</option>
											<option>Cochin</option>
											<option>Hyderabad</option>
											<option>Delhi</option>
											<option>Bangalore</option>
										</select>
								        </div>

                                        <div class="row">
									        <div class="col-md-12">
                                                <div class="form-group">
                                                <span class="form-label">Departing</span>
                                                <input class="form-control" type="date" disabled />
										        </div>
									        </div>
								        </div>

                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <span class="form-label">Number of Passenger</span>
                                                    <select class="form-control">
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                        <option>6</option>
                                                    </select>
                                                    <span class="select-arrow"></span>
                                                </div>
                                            </div>
								        </div>

                                        <div class="card-footer"> 
                                            <button type="button" class="subscribe btn btn-primary btn-block shadow-sm"> Book Ticket</button>
                                        </div>
                                        
                                        </form>
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

export default Booking;
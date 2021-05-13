import React from 'react';

function Passengers(props) {
    return (
        <div class="container py-5">
            <div class="row mb-4">
                <div class="col-lg-8 mx-auto text-center">
                    <h1 class="display-6">Add Passenger Details</h1>
                </div>
            </div>

            <div class="row">
				<div class="col-lg-8 mx-auto">
					<div class="card ">
					    <div class="card-header">
                            <div class="bg-white shadow-sm pt-4 pl-2 pr-2 pb-2">
                                <div class="tab-content">
                                    <div class="tab-pane fade show active pt-3">
                                    <form>
                                        <table class="table">
                                        <tr align="center" >
                                            <th>Name</th>
                                            <th>Gender</th>
                                            <th>Age</th>
                                        </tr>
                                        <tr>
                                            <td><input type="text" class="form-control" id="name" /></td>
                                            <td><input type="text" class="form-control" id="gender" /></td>
                                            <td><input type="text" class="form-control" id="age" /></td>
                                        </tr>
                                        </table>
                                        <div class="checkbox">
                                            <label><input type="checkbox" value="" required />&nbsp; Agree Terms and Conditions</label>
                                        </div>
                                        <div class="card-footer"> 
                                            <button type="button" class="subscribe btn btn-primary btn-block shadow-sm"> Make Payment</button>
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

export default Passengers;
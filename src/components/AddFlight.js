import React from 'react';
import travel from '../assets/images/airplane.jpg'
import Footer from './Footer';
import Header from './Header';

function AddFlight() {
    return (

        <div className="container w-100" style={styling.wrapper}>
            <form className="m-auto mt-3 m-1 border border-dark p-3" style={{minWidth: 300, maxWidth: 500}}>
                <h1 className="mb-3" style={styling.heading}>Add New Flight Schedule</h1>
                {/* <label>Source</label> */}
                <div className="input-group mb-2 mr-sm-2">
                    {/* <!-- Drop down for source --> */}
                    <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" required>
                    <option selected>Source</option>
                    <option value="1">Delhi</option>
                    <option value="2">Mumbai</option>
                    <option value="3">Kolkata</option>
                    </select>
                </div>    
                    {/* <!-- Drop down for destination --> */}
                {/* <label>Destination</label> */}
                <div className="input-group mb-2 mr-sm-2">
                    <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" required>
                    <option selected>Destination</option>
                    <option value="1">Delhi</option>
                    <option value="2">Mumbai</option>
                    <option value="3">Kolkata</option>
                    </select>
                </div>    
                    
                
                <div className="input-group mb-2 mr-sm-2">    
                    <label className="col-4 my-1 p-1 bg-light border border-darken-2">Flying Date</label>
                    <input className="col-5 my-1 p-1 border border-darken-2" type="date" required />
                </div>

                <div className="input-group mb-2 mr-sm-2">    
                    <label className="col-4 my-1 p-1 bg-light border border-darken-2">Arrival Time</label>
                    <input className="col-5 my-1 p-1 border border-darken-2" type="time" required />
                </div>
                
                <div className="input-group mb-2 mr-sm-2">    
                    <label className="col-4 my-1 p-1 bg-light border border-darken-2">Departure Time</label>
                    <input className="col-5 my-1 p-1 border border-darken-2" type="time" required />
                </div>
                
                <button type="submit" className="btn btn-warning">Submit</button>
            </form>
        </div>
       
    );
};

let styling = {
    wrapper : {
        background:`url(${travel}) no-repeat center`,
        marginTop : 100
    },
    heading : {
        color : "midnightblue",
        textAlign: "center"
    }
}

export default AddFlight;
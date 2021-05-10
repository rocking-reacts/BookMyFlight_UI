import React from 'react';

const SearchFlight = () => {
    return (
        <div className="container p-4 m-3">
            <h1>Search for your flight</h1>
            <form className="form-inline">
                <div className="input-group mb-2 mr-sm-2">
                    {/* <!-- Drop down for source --> */}
                    <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                    <option selected>Source</option>
                    <option value="1">Delhi</option>
                    <option value="2">Mumbai</option>
                    <option value="3">Kolkata</option>
                    </select>
                </div>    
                    {/* <!-- Drop down for destination --> */}
                <div className="input-group mb-2 mr-sm-2">
                    <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                    <option selected>Destination</option>
                    <option value="1">Delhi</option>
                    <option value="2">Mumbai</option>
                    <option value="3">Kolkata</option>
                    </select>
                </div>    
                    
                <div className="input-group mb-2 mr-sm-2">    
                    <input className="my-1 mr-sm-2 p-1" type="date" />
                </div>
                <button type="button" className="btn btn-dark">Search</button>
            </form>
        </div>
    );
};

export default SearchFlight;
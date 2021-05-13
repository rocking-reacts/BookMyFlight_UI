import React from 'react';

function FlightListAdmin(props) {
    return (
        <div>
            <table className="table table-striped m-md-3">
            <thead className="thead-dark">
                <tr>
                <th scope="col">Id</th>
                <th scope="col">Source</th>
                <th scope="col">Destination</th>
                <th scope="col">Date</th>
                <th scope="col">Arrival Time</th>
                <th scope="col">Departure Time</th>
                <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>
                    <button className="btn btn-dark mr-3">Delete</button>
                    <button className="btn btn-info">Edit</button>
                </td>
                </tr>
            </tbody>    
        </table>
        </div>
    );
}

export default FlightListAdmin;
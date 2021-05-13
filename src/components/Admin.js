import React from 'react';
import { Link } from 'react-router-dom';
import planeTicket from "../assets/logo/plane-ticket.png";

function Admin(props) {
    return (
        <div className="p-3 bg-info">
            <div className="card m-auto" style={{width: "23rem"}}>
                <img className="card-img-top m-auto mt-3 w-50" src={planeTicket}  />
                <div className="card-body">
                    <h5 className="card-title">Welcome Admin</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <Link className="card-link" to="/addFlight">Add Flights</Link>
                    </li>
                    <li className="list-group-item">
                    <Link className="card-link" to="/allFlights">All Flight</Link>
                    </li>
                    <li className="list-group-item">Vestibulum at eros</li>
                </ul>
            </div>
        </div>
    );
};

export default Admin;
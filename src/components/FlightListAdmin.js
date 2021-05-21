import React, { Component } from 'react';
import FlightServiceRest from '../services/FlightServiceRest';
import plane from '../assets/images/travel1.jpg';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

class FlightListAdmin extends Component {
    constructor(props) {
        super(props);
        // this.service = new FlightService();
        this.service = new FlightServiceRest();
        this.state = {
        }
    }

    componentDidMount() {
        this.getFlights();
    }

    getFlights = () => {
        this.service.getFlights().then(data => {
            console.log(data);
            this.setState({flights : data})
        })
    }

    onDelete = (fid) => {  

        if(window.confirm("Are you sure you want to delete the flight " + fid + " ?")) {
            this.service.deleteFlight(fid).then(response => {
                this.getFlights();
            })
        }
    }

    onEdit = (flight) => {
        localStorage.setItem('flight', JSON.stringify(flight));
        console.log("flight to be updated : ",localStorage.getItem('flight'));
        this.props.history.push('/updateFlight');
    }

    render() {
        if(!this.state.flights)
            return null;

        const flightlist = this.state.flights.map(f => {
            return (
                <div className="card m-4 " style={{width: 350, height: "fit-content"}}>
                    
                        <div className="card-header">
                            <h5>Flight {f.flightNumber}</h5>
                        </div>
                        
                        <div className="card-body">
                        <div className="row mb-2">
                            <div className="col fw-bold">Source</div>
                            <div className="col">{f.source}</div>
                        </div>
                        <div className="row mb-2">
                            <div className="col fw-bold">Destination</div>
                            <div className="col">{f.destination}</div>
                        </div>
                        <div className="row mb-2">
                            <div className="col fw-bold">Travel Date</div>
                            <div className="col">{f.travelDate}</div>
                        </div>  
                        <div className="row mb-2">
                            <div className="col fw-bold">Takeoff Time</div>
                            <div className="col">{f.arrivalTime}</div>
                        </div>    
                        <div className="row mb-2">
                            <div className="col fw-bold">Landing Time</div>
                            <div className="col">{f.departureTime}</div>
                        </div>   
                        <div className="row mb-2">
                            <div className="col fw-bold">Fare</div>
                            <div className="col">{f.price}</div>
                        </div>  
                        <div className="row mb-2">
                            <div className="col fw-bold">Available Seats</div>
                            <div className="col">{f.availableSeats}</div>
                        </div>  
                        <br/>
                            <button className="btn btn-dark mr-3" onClick={() => this.onDelete(f.flightNumber)}>Delete</button>
                            <button className="btn btn-info" onClick={() => this.onEdit(f)}>Edit</button>
                        </div>
                        
                    
                </div>
            )
        });

        return (
            <div style={{backgroundImage: `url(${plane})`,overflow: 'hidden', height: '3000px'}}>
                <Header/>
                <div className="pt-5">
                <div className="pt-3"  style={styling.wrapper}>
                {flightlist}
                </div>
            </div>
            </div>
        );
    }
}

let styling = { 
    wrapper : {
        height: "700px",
        display : "flex", 
        flexWrap: "wrap", 
        justifyContent: "center"
    }
}

export default FlightListAdmin;
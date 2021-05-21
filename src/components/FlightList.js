import React from 'react';
import { withRouter } from 'react-router-dom';

class FlightList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flights : null
        }
    }

    componentDidMount() {
        this.setState({
            flights : this.props.flights
        });
        console.log("flight list : " + this.props.flights)
    }

    handleFlight = (flight) => {
        localStorage.setItem('plane', flight);
        this.props.history.push('/booking');
    }

    render() {
        if(!this.state.flights)
            return null;
 
        const flightlist = this.state.flights.map(f => {
            return (
                <div className="card mr-4 mt-4" style={{width: 350, background: "#dbf4fb"}}>
                    
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
                        <button className="btn btn-info mr-3" onClick={() => this.handleFlight(f)} >Book</button>
                    </div>
                                            
                </div>
            )
        });

        
        return (
            <div>
                <h4>Scheduled Flight</h4>
                <div style={styling.wrapper}>
                    {flightlist}
                </div>
            </div>
            
        );
        
        
    }
}

let styling = { 
    wrapper : {
        display : "flex", 
        flexWrap: "wrap"
    }
}

export default withRouter (FlightList);

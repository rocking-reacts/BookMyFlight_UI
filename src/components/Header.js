import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from '../assets/logo/travelling.png';

/**
 * 
 * @author Ankita, Shivam, Shivani
 * This component renders header and uses condition rendering for differnt users/ non user
 */
function Header(props) {
    const history = useHistory();
    const flightuser = localStorage.getItem('user');

    /** The component will be rendered when user has not signed in */
    const loggedIn = (
        
            <ul className="nav justify-content-end">
             <li className="nav-item">
                    <Link className="nav-link text-info" to="/weather">
                        <button className="btn btn-outline-warning">Today's Weather</button>
                    </Link>
                </li>
             <li className="nav-item">
                <Link className="nav-link text-info" to="/">
                    <button className="btn btn-outline-info">Home</button>
                </Link>
            </li>
                <li className="nav-item">
                <Link className="nav-link text-info" to="/login">
                    <button className="btn btn-outline-info">Login</button>
                </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link text-info" to="/register">
                    <button className="btn btn-outline-info">Register</button>
                </Link>
                </li>
            </ul>
        
    );

    // clearing local storage for given items when user logs out
    const userClear = () => (
        localStorage.removeItem('user'),
        localStorage.removeItem('plane'),
        localStorage.removeItem('bid'),
        localStorage.removeItem('sid'),
        localStorage.removeItem('tickets'),
        localStorage.removeItem('nop')
    )

    /** Redirecting to booking history */
    const onTickets= () => {
       history.push('/tickets')
    }

    /** The component will be rendered when user is signed in */
    const loggedOut = (
            <ul className="nav justify-content-end">
                {/* {console.log(JSON.parse(localStorage.getItem('user')).isadmin)} */}
                <li className="nav-item">
                    <Link className="nav-link text-info" to="/weather">
                        <button className="btn btn-outline-warning">Today's Weather</button>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link text-info" to="/">
                        <button className="btn btn-outline-info">Home</button>
                    </Link>
                </li>
                { localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).isadmin ===0 
                &&  
                    <li className="nav-item nav-link text-info">
                            <button onClick={onTickets} className="btn btn-outline-info">BookingHistory</button>
                    </li>
                }

                {localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).isadmin ===1 
                &&
                <li className="nav-item">
                    <Link className="nav-link text-info" to="/addFlight">
                        <button className="btn btn-outline-info">Add Flight</button>
                    </Link>
                </li>}


                {localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).isadmin ===1
                &&
                <li className="nav-item">
                    <Link className="nav-link text-info" to="/allFlights">
                        <button className="btn btn-outline-info">All Flights</button>
                    </Link>
                </li>
                }

                <li className="nav-item">
                    <Link className="nav-link text-info" to="/">
                        <button onClick={userClear} className="btn btn-outline-info">Logout</button>
                    </Link>
                </li>

                { localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).isadmin ===0 
                &&  
                <li className="nav-item nav-link text-info">
                    <h6 style={{marginTop:'7px'}}><b className='text-warning'>Welcome {JSON.parse(localStorage.getItem('user')).username}</b></h6>
                </li>
                }

                
                {localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).isadmin ===1
                &&
                <li className="nav-item">
                    <Link className="nav-link text-info" to="/admin">
                        <button className="btn btn-outline-warning">Admin</button>
                    </Link>
                </li>
                }


            </ul>
    );
    

    return (
        <div>
            <nav className="navbar navbar-dark bg-nav fixed-top" style={navstyle.bg}>
                <div className="container-fluid">
                    <Link style={navstyle.navbar_brand} to="/">
                        <img src={logo} alt="plane_logo" width="30" height="24" className="d-inline-block align-text-top" />
                        BookMyFlight
                    </Link>
                       

                    { localStorage.getItem('user')  ? loggedOut : loggedIn  }
                    {/* {console.log(localStorage.getItem('user'))} */}
                   
                </div>
            </nav>
        </div>
    );
};

let navstyle = {
    bg : {
        backgroundColor : "midnightblue",
    },
    navbar_brand : {
        color: "#f44336",
        fontSize: "large",
        fontFamily: "cursive",
        fontStyle: "italic",
        textShadow: "#2196f3 0px 1px 4px",
        textDecoration: "none"
    }

}

export default Header;
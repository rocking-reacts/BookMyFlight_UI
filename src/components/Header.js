import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo/travelling.png';

function Header(props) {
    const flightuser = localStorage.getItem('user');
    const loggedIn = (
        
            <ul className="nav justify-content-end">
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

    const loggedOut = (
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <Link className="nav-link text-info" to="/login">
                        <button className="btn btn-outline-info">Logout</button>
                    </Link>
                </li>
                {/* <li className="nav-item">
                    <Link className="nav-link text-info" to="/">
                        <button className="btn btn-outline-info">BookingHistory</button>
                    </Link>
                </li> */}
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
                    
                    {loggedIn}    
                   
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
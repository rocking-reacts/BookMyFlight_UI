import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo/travelling.png';

function Header(props) {
    return (
        <div>
            <nav className="navbar navbar-dark bg-nav fixed-top" style={navstyle.bg}>
                <div className="container-fluid">
                    <Link style={navstyle.navbar_brand} to="/">
                        <img src={logo} alt="plane_logo" width="30" height="24" className="d-inline-block align-text-top" />
                        BookMyFlight
                    </Link>
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                        <Link className="nav-link text-info" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link text-info" to="/register">Register</Link>
                        </li>
                    </ul>
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
import React from 'react';
import logo from '../assets/logo/travelling.png';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-nav fixed-top" style={navstyle.bg}>
                <div className="container-fluid">
                    <a style={navstyle.navbar_brand} href="#">
                        <img src={logo} alt="plane_logo" width="30" height="24" className="d-inline-block align-text-top" />
                        BookMyFlight
                    </a>
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                        <a className="nav-link" href="#">Profile</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Login</a>
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
import React from 'react';

const Footer = () => {
    return (
        <div>
            <nav className="navbar navbar-dark fixed-bottom" style={footerStyle.bg}>
                <div className="container-fluid">
                    <span className="navbar-text">
                        Contact : 9233477993
                    </span>
                </div>
            </nav>
        </div>
    );
};

let footerStyle = {
    bg : {
        background : "midnightBlue"
    }
}

export default Footer;
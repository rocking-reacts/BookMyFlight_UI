import React from 'react';

function Footer() {
    return (
        <div style={footerStyle.pos}>
            <nav className="navbar navbar-dark" style={footerStyle.bg}>
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
    pos : {
        position : "relative"
    },
    bg : {
        background : "midnightBlue"
    }
}

export default Footer;
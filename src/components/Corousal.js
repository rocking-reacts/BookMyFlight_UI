import React from 'react';
import travel1 from '../assets/images/travel1.jpg';
import travel2 from '../assets/images/travel2.jpg';
import plane4 from '../assets/images/plane4.jpg';

function Corousal(props) {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner col-lg-10 col-12 m-auto">
                <div className="carousel-item active">
                    <img className="rounded" src={plane4} alt="travel1" width="100%" height="500" />
                    <div className="carousel-caption opacity-2 text-white bg-info p-3 rounded">
                    <h1>Hawk Airways</h1>
                    <h5>Welcomes you to the new flavours of travelling </h5>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="rounded" src={travel1} alt="travel2"  width="100%" height="500" />
                    <div className="carousel-caption opacity-2 text-white bg-info p-3 rounded">
                    <h1>Online book Tickets</h1>
                    <h5>Easily make your reservation in few clicks</h5>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="rounded" src={travel2} alt="airplane"  width="100%" height="500" />
                    <div className="carousel-caption opacity-2 text-white bg-info p-3 rounded">
                    <h1>Safe Travel</h1>
                    <h5>Ensuring your safety at every step</h5>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
}

export default Corousal;
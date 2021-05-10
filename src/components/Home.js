import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SearchFlight from './SearchFlight';
import travel1 from '../assets/images/travel1.jpg';
import travel2 from '../assets/images/travel2.jpg';
import plane1 from '../assets/images/plane1.jpg';
import plane2 from '../assets/images/plane2.jpg';
import plane3 from '../assets/images/plane3.jpg';
import plane4 from '../assets/images/plane4.jpg';
import plane5 from '../assets/images/plane5.jpg';

function Home(props) {
    return (
        <div>
            <Header></Header>

            <main className="mb-4 mt-5">
                {/* <!-- Corousal section --> */}
                <section className="carousel-wrapper">
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner col-lg-10 col-12 m-auto">
                            <div className="carousel-item active">
                                <img className="rounded" src={travel1} alt="travel image" width="100%" height="500" />
                                <div className="carousel-caption opacity-2 text-white bg-info p-3 rounded">
                                <h1>24 X 7</h1>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam at culpa atque, vel voluptatum tem</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="rounded" src={plane4} alt="travel image"  width="100%" height="500" />
                                <div className="carousel-caption opacity-2 text-white bg-info p-3 rounded">
                                <h1>Easily ook flights</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni molestias, voluptas temporibus nostrum non eum quasi.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="rounded" src={travel2} alt="airplane image"  width="100%" height="500" />
                                <div className="carousel-caption opacity-2 text-white bg-info p-3 rounded">
                                <h1>Save Time and Money</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus est odit cupiditate e</p>
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
                </section>

                <SearchFlight></SearchFlight>

                <section className="container-fluid  pt-3 pb-5 section-bg">
                <h1>Your valuable reviews</h1>
                <div className="m-auto row">
                    <div className="mb-3 mr-auto ml-auto col-lg-3 col-sm-5">
                        <div className="card">
                            <img className="card-img-top" src={plane1} alt="Card image cap" />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="mb-3 mr-auto ml-auto col-lg-3 col-sm-5">
                        <div className="card">
                            <img className="card-img-top" src={plane2} alt="Card image cap" />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="mb-3 mr-auto ml-auto col-lg-3 col-sm-5">
                        <div className="card">
                            <img className="card-img-top" src={plane3} alt="Card image cap" />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="mb-3 mr-auto ml-auto col-lg-3 col-sm-5">
                        <div className="card">
                            <img className="card-img-top" src={plane5} alt="Card image cap" ></img>
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
                </section>

            </main>

            <Footer></Footer>

        </div>
    );
}

export default Home;
import React from 'react';
import Notebook from '../assets/images/notebook.jpg';
import PCGamer from '../assets/images/pcgamer.jpg';
import Mother from '../assets/images/motherboard.jpg';
import Impresora from '../assets/images/impresora.jpg';

const Slider = () => {
    return(
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            </ol>
            <div className="carousel-inner text-center regular-h">
                <div className="carousel-item active">
                    <img className="w-25" src={Notebook} alt="Notebooks"/>
                </div>
                <div className="carousel-item">
                    <img className="w-25" src={PCGamer} alt="PCGamer"/>
                </div>
                <div className="carousel-item">
                    <img className="w-25" src={Impresora} alt="Impresora"/>
                </div>
                <div className="carousel-item">
                    <img className="w-25" src={Mother} alt="Motherboard"/>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}

export default Slider;
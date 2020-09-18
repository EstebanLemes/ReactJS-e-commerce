import React from 'react';
import {TangoGestion, PCGamer, Sistemas, Windows, SoftwareAMedida, Ipad} from '../../constants/products';
import './styles.css';

const Slider = () => {
    return(
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
            </ol>
            <div className="carousel-inner text-center personal-h">
                <div className="carousel-item active">
                    <img className="w-70" src={PCGamer} alt="Software a medida"/>
                </div>
                <div className="carousel-item">
                    <img className="w-70" src={Ipad} alt="Ipads"/>
                </div>
                <div className="carousel-item">
                    <img className="w-70" src={Sistemas} alt="Sistemas Operativos"/>
                </div>
                <div className="carousel-item">
                    <img className="w-70" src={Windows} alt="Windows"/>
                </div>
                <div className="carousel-item">
                    <img className="w-70" src={SoftwareAMedida} alt="Software a medida"/>
                </div>
                <div className="carousel-item">
                    <img className="w-70" src={TangoGestion} alt="Tango Gestion"/>
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
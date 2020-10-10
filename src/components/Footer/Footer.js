import React from 'react';
import './styles.css';

function Footer(){
    return(
        <>
            <div className="bg-black text-white footer mt-10">
                <div className="row">
                    <div className="col-md-12 text-center">
                        Copyright <i className="fa fa-copyright"></i> 2020 - 2025 Esteban Lemes
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
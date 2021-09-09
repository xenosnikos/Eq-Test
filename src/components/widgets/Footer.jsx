import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import iconfooter from '../../img/Footer.svg';

const Footer = () =>{
    return( 
        <p className="fs-14 bg-white mb-0 footer fixed-bottom text-center text-secondary letter-spacing-0 textopacity">
            <span>
                <img src={iconfooter} alt="iconfooter" style={{margin:'-7px 0 0 0'}}/>
            </span>
        </p>
        
    );
}

export default Footer;
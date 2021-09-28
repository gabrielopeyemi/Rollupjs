import React from "react";
import IMG from './assets/Img/unsplash.jpg'
import './assets/fontawesome-free-6.0.0-beta2-web/css/all.min.css';
import "./assets/main.scss"

const Helloworld = () =>{
    return (
        <React.Fragment>
            <h1 className='header'>Hello world</h1>
            <i class="fas fa-coffee"></i>
            <img src={IMG} alt={IMG}/>
        </React.Fragment>
    );
}

export default Helloworld;
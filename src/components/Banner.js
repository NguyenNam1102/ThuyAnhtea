import React from "react";
import './Banner.css'
import banner from '../img/banner-web-ltccom.png';
import image_0 from '../img/doi-tra-hoan-tien-1.png';
import image_1 from '../img/cam-ket-chat-luong.png';
import image_2 from '../img/giao-hang-1h.png';


class Banner extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="banner">
                    <img src={banner} alt="banner"></img>
                </div>
                <div className="widget-banner">
                    <img src={image_0} alt="image_0"></img>
                    <img src={image_1} alt="image_1"></img>
                    <img src={image_2} alt="image_2"></img>
                </div>
            </div >

        )
    }
}

export default Banner;
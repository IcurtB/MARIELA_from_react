import React from "react";
import home from '../img/home.svg';
import car from '../img/car.svg';
import like from '../img/like.svg';
import image from '../img/IMAGE.svg'


const Footer = () => {
    return (
        <footer>
            <div className="first_column flex">
                <div className="services flex">
                    <div className="services_card flex">
                        <div className="circle flex">
                            <img src={home} alt="" />
                        </div>
                        <div>
                            <p>Safe shopping</p>
                        </div>
                        <p>Buy with confidence</p>
                    </div>
                    <div className="services_card flex">
                        <div className="circle flex">
                            <img src={car} alt="" />
                        </div>
                        <div>
                            <p>Fast shipping</p>
                        </div>
                        <p>Get your product fast</p>
                    </div>
                    <div className="services_card flex">
                        <div className="circle flex">
                            <img src={like} alt="" />
                        </div>
                        <div>
                            <p>Satisfaction guarantee</p>
                        </div>
                        <p>Or get your money back</p>
                    </div>
                </div>
            </div>
            <div className="footer flex">
                <div className="flex">
                    <div>
                        <img src={image} alt="" />
                    </div>
                    <div className="flex">
                        <p>Home</p>
                        <p>About me</p>
                        <p>Products</p>
                        <p>Contact me</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer




import '../styles/Photography.scss';
// import me from '../assets/images/Untitled-2.svg';
import React from 'react';
import dude from "../assets/images/Dude.jpg"
import dude2 from "../assets/images/Dude2.jpg"
// import Nightwalk from "../assets/images/Nightwalk.jpg"
import daisy_eyes from "../assets/images/Daisy-eyes.jpg"

// import hilltop from "../assets/images/hilltop.jpg"
// import pizza from "../assets/images/pizza.jpg"

const PhotographyComponent: React.FC = () => {
    return (
        <section id="photography">
            <div className="header" id="header">
                <h2>My <span>Photography</span></h2>
            </div>

            <div className="photography-container lazy-background" id="container">
                <div className="photography-div">
                    <section className="photography-section"
                        aria-label="Image Slider"
                        style={{ width: "100%", height: "100%", position: "relative" }}
                    >
                        <div className="photo-container">
                            <div className="photo-item">
                                <img
                                    key={dude}
                                    src={dude}
                                    // alt={a}
                                    className="img-slider-img"
                                />
                            </div>
                            <div className="photo-item">
                                <img
                                    key={daisy_eyes}
                                    src={daisy_eyes}
                                    // alt={a}
                                    className="img-slider-img"
                                />
                            </div>
                            <div className="photo-item">
                                <img
                                    key={dude2}
                                    src={dude2}
                                    // alt={a}
                                    className="img-slider-img"
                                />
                            </div>

                        </div>






                    </section>

                    {/* <p><i className="fas fa-code"></i></p>
                    <h3>Languages</h3> */}

                </div>




            </div>
        </section>
    );
};

export default PhotographyComponent;
import React from 'react'
import image from './Screenshot (321).png';

const Carousal = () => {
    return (
        <div className="App_Main_Section">
            <div className="Heading__section">
                <h1>Where good ideas find you.</h1>
                <p>
                    Read and share new perspectives on just about any topic. Everyone's welcome <a href="#">Learn more</a>
                </p>
                <button>Get Started</button>
            </div>
            <div className="image__section">
                <img
                src={image}
                alt="medium" 
                />
            </div>
        </div>
    )
}

export default Carousal;

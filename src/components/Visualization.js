import React from "react";
import AEI1 from "../AEI1.png";
import AEI2 from "../AEI2.png";
import AEI3 from "../AEI3.png";
import AEI4 from "../AEI4.png";
import AEI5 from "../AEI5.png";
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Visualization = () => {
  const popupboxConfig = {
    titleBar: {
      enable: true,
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  return (
    <div id="projects" className="visualization-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">Visualizations</h1>
        <div className="image-box-wrapper row row-cols-auto justify-content-center">
          <div className="visualization-image-box">
            <div className="visualization-image1">
            <img className="visualization-image" src={AEI1} alt="Visualization" />
            <div className="visualization-text">
            <p>Number of People moving from an Occupation to Education and vice-versa</p>
            </div>
            <div className="overflow"></div>
            </div>
          </div>
          {/* - */}
          <div className="visualization-image-box">
            <div className="visualization-image1">
            <img className="visualization-image" src={AEI2} alt="Visualization" />
            <div className="visualization-text">
            <p>How the trend of number of artists varied over the decades?</p>
            </div>
            <div className="overflow"></div>
            </div>
          </div>
          
          {/* - */}
          <div className="visualization-image-box">
            <div className="visualization-image1">
            <img className="visualization-image" src={AEI3} alt="Visualization" />
            <div className="visualization-text">
            <p>Socio-Economic status distribution of artists in the USA</p>
            </div>
            <div className="overflow"></div>
            </div>
          </div>
          {/* - */}
          <div className="visualization-image-box">
            <div className="visualization-image1">
            <img className="visualization-image" src={AEI4} alt="Visualization" />
            <div className="visualization-text">
            <p>Choropleth Number of People in each state in each occupation</p>
            
            </div>
            <div className="overflow"></div>
            </div>
          </div>
          {/* - */}
          <div className="visualization-image-box">
            <div className="visualization-image1">
            <img className="visualization-image" src={AEI5} alt="Visualization" />
            <div className="visualization-text">
            <p>Sunburst chart showing the demographics of Artists in the USA</p>
            </div>
            <div className="overflow"></div>
            </div>
          </div>
        </div>
      </div>
  </div>
  )

  }

export default Visualization

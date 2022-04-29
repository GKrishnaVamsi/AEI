import React from "react";
import AEI6 from "../AEI6.png";
import AEI7 from "../AEI7.png";
import AEI8 from "../AEI8.png";
import AEI9 from "../AEI9.png";
import AEI10 from "../AEI10.png";
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
        <div className="image-box-wrapper row row-cols-auto justify-content-center">
          <div className="visualization-image-box">
            <div className="visualization-image1">
            <img className="visualization-image" src={AEI6} alt="Visualization" />
            <div className="visualization-text">
            <p>The comparision of Employement Rate and Unemployment Rate</p>
            </div>
            <div className="overflow"></div>
            </div>
          </div>
          {/* - */}
          <div className="visualization-image-box">
            <div className="visualization-image1">
            <img className="visualization-image" src={AEI7} alt="Visualization" />
            <div className="visualization-text">
            <p>Arc diagram of contribution of Artists/Non-artists in all the years</p>
            </div>
            <div className="overflow"></div>
            </div>
          </div>
          
          {/* - */}
          <div className="visualization-image-box">
            <div className="visualization-image1">
            <img className="visualization-image" src={AEI8} alt="Visualization" />
            <div className="visualization-text">
            <p>The flow of People from Sub occupation of Artists to through the years.</p>
            </div>
            <div className="overflow"></div>
            </div>
          </div>
          {/* - */}
          <div className="visualization-image-box">
            <div className="visualization-image1">
            <img className="visualization-image" src={AEI9} alt="Visualization" />
            <div className="visualization-text">
            <p>The employment or unemployemnt rate in Counties</p>
            </div>
            <div className="overflow"></div>
            </div>
          </div>
          {/* - */}
          <div className="visualization-image-box">
            <div className="visualization-image1">
            <img className="visualization-image" src={AEI10} alt="Visualization" />
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

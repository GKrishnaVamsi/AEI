import React from "react";
import AEI11 from "../AEI11.png";
import AEI12 from "../AEI12.png";
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
            <img className="visualization-image" src={AEI11} alt="Visualization" />
            <div className="visualization-text">
            <p>The total number of employees based on dropdown selection</p>
            </div>
            <div className="overflow"></div>
            </div>
          </div>
          { }
                    <div className="visualization-image-box">
            <div className="visualization-image1">
            <img className="visualization-image" src={AEI12} alt="Visualization" />
            <div className="visualization-text">
            <p>The total number of employees based on dropdown selection</p>
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

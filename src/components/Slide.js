import React from "react";
import { Carousel } from "react-bootstrap";

import AEI1 from "../AEI1.png";
import AEI2 from "../AEI2.png";
import AEI3 from "../AEI3.png";

const Slide = () => {
    return (
    <Carousel variant = "dark">
   <Carousel.Item>
    <img
      className="d-block"
      src={AEI1}
      alt="First slide"
    />
    <Carousel.Caption className="caption">
      <h3>Sankey Chart</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block"
      src={AEI2}
      alt="Second slide"
    />

    <Carousel.Caption className="caption">
      <h3>Bubble Chart</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block"
      src={AEI3}
      alt="Third slide"
    />

    <Carousel.Caption className="caption">
      <h3>Bar Chart</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
}

export default Slide
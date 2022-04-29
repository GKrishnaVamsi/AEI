import React from "react";
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p><a href="https://goo.gl/maps/sBUPLNra1ESXchgX8">Address of the lab</a></p>
            </div>
            <div className="d-flex">
              <a href="tel:555-555-555">phone number</a>
            </div>
            <div className="d-flex">
			<p><a href="mailto:">email address</a></p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <a className="footer-nav">Home</a>
                <br />
                <a className="footer-nav">About</a>
                <br />
                <a className="footer-nav">Contact</a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;

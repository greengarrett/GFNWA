import React from "react";
// import logo from "../assets/img/gfnwa_logo_1.png";

// reactstrap components
// import { Container, Row, Col } from "reactstrap";
import {
    Container,
    NavLink,
    UncontrolledTooltip,
  } from "reactstrap";



// core components

function Construction() {
  return (
    <>
      <div
        id="construction"
      >
        <Container className="d-flex justify-content-center">
            <div className="content-center brand d-flex flex-column w-50 align-items-center">
                <img
                    alt="Lydia's Art"
                    className="align-self-center"
                    src={require("assets/img/gfnwa_logo_1.png").default}
                ></img>
                <h1>Give me a minute! I'm building it!</h1>
                <h3>Go check out the socials though...</h3>
                <div className="d-flex flex-row w-100 align-items-center justify-content-around">
                    <a
                        href="https://twitter.com/glutenfreenwa"
                        target="_blank"
                        rel="noreferrer"
                        id="twitter-tooltip"
                        >
                        <i className="fab fa-twitter fa-4x"></i>
                    </a>
                    <UncontrolledTooltip target="#twitter-tooltip">
                        Follow us on Twitter
                    </UncontrolledTooltip>
                    <NavLink
                        href="https://www.instagram.com/glutenfreenwa"
                        target="_blank"
                        rel="noreferrer"
                        id="instagram-tooltip"
                        >
                        <i className="fab fa-instagram fa-4x"></i>
                        <p className="d-lg-none d-xl-none">Instagram</p>
                    </NavLink>
                    <UncontrolledTooltip target="#instagram-tooltip">
                        Follow us on Instagram
                    </UncontrolledTooltip>
                </div>
            </div>
        </Container>
      </div>
    </>
  );
}

export default Construction;

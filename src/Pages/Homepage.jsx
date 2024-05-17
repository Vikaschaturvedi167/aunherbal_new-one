import React from "react";
import homeimage from "./images/ssnowss.jpeg";
import two from "./images/02.jpg";
import three from "./images/03.jpg";
import aunyes from "./images/ayurvedic-medicine-8296299_1920.jpg";
import four from "./images/04.png";
import "./Styling/Home.css";
import newc from "./images/use3.png";
import { Link } from "react-router-dom";
export const Homepage = () => {
  return (
    <div className="main-home">
      <div className="new-change">
        <div>
          <img src={newc} alt="unani medicine" />
        </div>
        <div className="textover">
          <h1>AUN HERBAL REMEDIES</h1>
          <h3>Manufacturer of Unani & Ayurvedic Medicines and Herbal products</h3>
          <p>
            we are not just a brand but a movement that is bringing health and
            happiness to every home it touches, creating a ripple effect of
            positivity and well-being in communities near and far”
          </p>
        </div>
      </div>

      <div>
        <div className="main-img">
          <img
            src={homeimage}
            alt="aunherbal"
            style={{ width: "100%", height: "auto", position: "relative" }}
          />
        </div>
        <div className="knowmore">
          <div className="aunherbal">
            <img
              src={two}
              alt="home"
              className="know1"
              style={{ width: "25%", height: "auto" }}
            />
            <img
              src={three}
              alt="aunherbal"
              style={{ width: "25%", height: "auto" }}
              className="know1"
            />
            <img
              src={aunyes}
              alt="aunherbal"
              style={{ width: "25%", height: "auto" }}
              className="knowq"
            />
          </div>
          <div>
            <h1 className="we">Who we are?</h1>
            <h1 className="who">
              The natural way to achieving balance and optimal health
            </h1>
            <p className="us">
              Aun Herbal Remedies is a reputated Unani and Ayurvedic
              manufacturing & Herbal products that is committed to providing
              100% natural and authentic herbal products to promote healthy
              living since 2009. With Aun herbal remedies, you can trust that
              you're getting reliable and effective remedies, straight from
              nature
            </p>
            <Link to="/about">
              <button className="knowbtn">Want to Know more about us? </button>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={four}
            alt="home"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div></div>
      </div>
    </div>
  );
};

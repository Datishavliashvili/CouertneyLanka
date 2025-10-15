import React from "react";
import "./Footer.global.css";
import logo2 from "../assets/logo2.svg";
import callLogo from "../assets/callLogo.svg";
import mailLogo from "../assets/mailLogo.svg";
import Location from "../assets/Location.svg";
import Linkedin from "../assets/LinkedIn.svg";
import Twitter from "../assets/Twitter.svg";
import YouTube from "../assets/YouTube.svg";
import Instagram from "../assets/Instagram.svg";
import Facebook from "../assets/Facebook.svg";

const Footer = () => {
  const footerData = [
    {
      title: "Company",
      items: [
        "About Us",
        "Success Stories",
        "Privacy Policy",
        "Terms & Conditions",
        "Contact Us",
      ],
    },
    {
      title: "Services",
      items: [
        "Hire Permanent Staff",
        "Staff Augmentation",
        "Software Outsourcing",
        "Build Remote Office",
      ],
    },
    {
      title: "How to Start",
      items: ["You Asked", "We Proceed", "Negotiate", "You Get"],
    },
  ];

  return (
    <footer className="footer">
      <div className="topSection">
        <div className="leftSection">
          <img src={logo2} alt="Courtney Lanka logo" className="logo" />
          <p className="description">
            Expertly trained, battle-tested, elite software developers on demand
          </p>

          <ul className="contactList">
            <li>
              <img src={callLogo} alt="Call icon" /> +94 713249222
            </li>
            <li>
              <img src={mailLogo} alt="Mail icon" /> hello@courtney.lk
            </li>
            <li className="addressItem">
              <img
                src={Location}
                alt="Location icon"
                className="locationIcon"
              />
              <div className="addressText">
                <p>Courtney Lanka (Private) Limited</p>
                <p>Level 35</p>
                <p>World Trade Center</p>
                <p>Colombo 01</p>
              </div>
            </li>
          </ul>

          <div className="socialSection">
            <p>Follow us</p>
            <div className="socialIcons">
              <img src={Linkedin} alt="Linkedin" />
              <img src={Facebook} alt="Facebook" />
              <img src={Instagram} alt="Instagram" />
              <img src={Twitter} alt="Twitter" />
              <img src={YouTube} alt="YouTube" />
            </div>
          </div>
        </div>

        <div className="rightSection">
          {footerData.map((column, index) => (
            <div key={index} className="column">
              <h4>{column.title}</h4>
              <ul>
                {column.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="bottomSection">
        <p>© 2022 Courtney Lanka</p>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem aut
            iusto est at iste nesciunt sit odio, aperiam placeat. Omnis ipsa
            sint atque aspernatur natus nulla consequuntur adipisci fuga
            repellendus! Nemo obcaecati perferendis nostrum excepturi ratione
            officia quibusdam similique quas ad quos! Inventore impedit error
            fugit a laborum, rem voluptate ad laudantium sapiente accusamus,
            animi temporibus provident quae corrupti quod.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+234-701-109-0957</li>
            <li>support@techboladev.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright &copy; 2024. All rights reserved
      </p>
    </div>
  );
};

export default Footer;

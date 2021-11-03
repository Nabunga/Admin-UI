import React from "react";
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="links">
        <button className="footer-link">Главная страница</button>
        <button className="footer-link">Ссылка</button>
      </div>
      <div className="developer">
        Copyright © 2020 Simbirsoft
      </div>
    </div>
  )
};

export default Footer;
import React from "react";
import "../css/header.css";
function Header() {
  return (
    <header>
      <ul>
        <li>
          <a href="">
          <div className="logo">
            <img src={require('../assets/logo.png')} alt="" />
            <img src={require('../assets/logo_text.png')} alt="" />
          </div>
          </a>
        </li>
        <li><a href="">Why vyorius?</a></li>
        <li><a href="">Product</a></li>
        <li><a href="">Use Cases</a></li>
        <li><a href="">Team</a></li>
        <li><a href="">Partners</a></li>
        <li><a href="">Contact us</a></li>
      </ul>
      <button className="primary-button">Launch Vyorius</button>
    </header>
  );
}

export default Header;

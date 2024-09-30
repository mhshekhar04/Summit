import React from "react";
import "./Header.css";
import headerImage from "../../Assets/Images/Group_1261152705-removebg-preview.png";

const Header = () => {
  return (
    <div className="summit-container">
      <div className="text-section">
        <h1>Introducing the World's First Unite-to-Earn Meme Token with Game-Changing Utilities</h1>
        <p>
          The sole project with a thriving live ecosystem. It has maintained a
          market presence since 2022, making it an influential and enduring
          player in the crypto space.
        </p>
        <div className="button-group">
          <button className="btn connect-wallet">CONNECT WALLET</button>
          <button className="btn whitelist-now">WHITELIST NOW</button>
        </div>
      </div>

      <div className="image-section">
        <div className="image-triangle-background">
          <img src={headerImage} alt="Summit" />
        </div>
      </div>
    </div>
  );
};

export default Header;

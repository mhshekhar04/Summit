import React from "react";
import "./WhyChooseUs.css";
import metalogo from '../../Assets/Images/MetaMask.png'
import image3 from '../../Assets/Images/exodus.png'
import image4 from '../../Assets/Images/horizontal_blue.png'
import image5 from '../../Assets/Images/Mask group.png'
import image2 from '../../Assets/Images/Group 78.png'
import icon3Image from '../../Assets/Images/whh_protecteddirectory.svg'
import icon1Image from '../../Assets/Images/simple-icons_marketo.svg'
import icon4Image from '../../Assets/Images/simple-icons_marketo.svg'
import icon2Image from '../../Assets/Images/ri_secure-payment-fill.svg'
const WhyChooseUs = () => {
  return (
    <div className="why-choose-us-container">
      {/* Top Wallets Section */}
      <div className="wallets-section">
        <img src={metalogo} alt="MetaMask" className="metaImage" />
        <img src={image4} alt="Trust Wallet"  className="trustimage"/>
        <img src={image2} alt="WalletConnect" className="walletimage" />
        <img src={image3} alt="Exodus"  className="exodusimage"/>
        <img src={image5} alt="SafePal"  className="safeimage"/>
      </div>
       <div className="background-svg">
{/* <svg xmlns="http://www.w3.org/2000/svg" width="1100" height="800" viewBox="0 0 1342 966" fill="none"> */}
  {/* <g filter="url(#filter0_b_66_4109)">
    <path d="M-55.1781 943.331C-58.4572 944.614 -62 942.196 -62 938.674L-62 27.5137C-62 24.2268 -58.8829 21.834 -55.7077 22.6836L1312.57 388.772C1321.9 391.268 1322.62 404.227 1313.63 407.745L-55.1781 943.331Z" fill="black" fill-opacity="0.4"/>
    <path d="M-73 938.674C-73 949.943 -61.6631 957.68 -51.1699 953.574L1317.64 417.989C1336.52 410.6 1335.01 383.387 1315.42 378.146L-52.8646 12.0574C-63.0252 9.33881 -73 16.9957 -73 27.5137L-73 938.674Z" stroke="url(#paint0_linear_66_4109)" stroke-width="22"/>
  </g> */}
  <defs>
    <filter id="filter0_b_66_4109" x="-94" y="-9.5011" width="1445.99" height="985.201" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feGaussianBlur in="BackgroundImageFix" stdDeviation="5"/>
      <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_66_4109"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_66_4109" result="shape"/>
    </filter>
    <linearGradient id="paint0_linear_66_4109" x1="1319" y1="4.8035" x2="1289.45" y2="1005.7" gradientUnits="userSpaceOnUse">
      <stop stop-color="#AB2FFE"/>
      <stop offset="0.96875" stop-color="#40AFFD"/>
    </linearGradient>
  </defs>
{/* </svg> */}
</div>
      {/* Why Choose Us Section */}
      <div className="why-choose-us-content">
 
        <div className="text-content">
          <h2>Why Choose Us?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            orci lacus, tempor nec accumsan eu, fringilla non enim. Mauris
            pretium lacus eget vulputate rhoncus.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            orci lacus, tempor nec accumsan eu, fringilla non enim.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card feature-card1">
            <img src={icon1Image} alt="Marketplace" />
            <p>Marketplace</p>
          </div>
          <div className="feature-card feature-card2">
            <img src={icon2Image} alt="Money Protection" />
            <p>Money Protection</p>
          </div>
          <div className="feature-card feature-card3">
            <img src={icon3Image} alt="Data Protection" />
            <p>Data Protection</p>
          </div>
          <div className="feature-card feature-card4">
            <img src={icon4Image} alt="Fast & Secure" />
            <p>Fast & Secure</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;

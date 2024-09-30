import React from "react";
import "./Roadmap.css";

const Roadmap = () => {
  const roadmapData = [
    { month: "January", title: "Brief", description: "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Morbi sed aliquet donec  facilisis. Senectus eget." },
    { month: "February", title: "Research", description: "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Morbi sed aliquet donec  facilisis. Senectus eget." },
    { month: "March", title: "Discover", description: "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Morbi sed aliquet donec  facilisis. Senectus eget." },
    { month: "April", title: "Design", description: "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Morbi sed aliquet donec  facilisis. Senectus eget." },
    { month: "May", title: "Testing", description: "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Morbi sed aliquet donec  facilisis. Senectus eget." },
    { month: "June", title: "Launch & Feedback", description: "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Morbi sed aliquet donec  facilisis. Senectus eget." },
  ];

  return (
    <div className="roadmap-container">
      <h2>Road map 2024</h2>
      <p className="subtitle">The largest and unique Super rare NFT marketplace for crypto-celebrities</p>
      <div className="timeline">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ position: "relative", top: '120px', left: '38px' }}>
            <circle cx="12" cy="12" r="12" fill="#15BFFD" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ position: "relative", top: '350px', left: '14px' }}>
            <circle cx="12" cy="12" r="12" fill="#15BFFD" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ position: "relative", top: '560px', left: '-12px' }}>
            <circle cx="12" cy="12" r="12" fill="#15BFFD" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ position: "relative", top: '800px', left: '-37px' }}>
            <circle cx="12" cy="12" r="12" fill="#15BFFD" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ position: "relative", top: '1040px', left: '-60px' }}>
            <circle cx="12" cy="12" r="12" fill="#15BFFD" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ position: "relative", top: '1298px', left: '-83px' }}>
            <circle cx="12" cy="12" r="12" fill="#15BFFD" />
          </svg>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="7" viewBox="0 0 64 7" fill="none" style={{ position: "relative", top: '88px', left: '100px' }}>
            <path d="M0 3.5L5 6.38675L5 0.613249L0 3.5ZM4.36364 4L7.27273 4L7.27273 3L4.36364 3L4.36364 4ZM10.1818 4L13.0909 4L13.0909 3L10.1818 3L10.1818 4ZM16 4L18.9091 4L18.9091 3L16 3L16 4ZM21.8182 4L24.7273 4L24.7273 3L21.8182 3L21.8182 4ZM27.6364 4L30.5455 4.00001L30.5455 3.00001L27.6364 3L27.6364 4ZM33.4546 4.00001L36.3636 4.00001L36.3636 3.00001L33.4546 3.00001L33.4546 4.00001ZM39.2727 4.00001L42.1818 4.00001L42.1818 3.00001L39.2727 3.00001L39.2727 4.00001ZM45.0909 4.00001L48 4.00001L48 3.00001L45.0909 3.00001L45.0909 4.00001ZM50.9091 4.00001L53.8182 4.00001L53.8182 3.00001L50.9091 3.00001L50.9091 4.00001ZM56.7273 4.00001L59.6364 4.00001L59.6364 3.00001L56.7273 3.00001L56.7273 4.00001ZM62.5455 4.00001L64 4.00001L64 3.00001L62.5455 3.00001L62.5455 4.00001Z" fill="url(#paint0_linear_73_4175)" fill-opacity="0.7" />
            <defs>
              <linearGradient id="paint0_linear_73_4175" x1="7.04" y1="3.59413" x2="7.05137" y2="4.97035" gradientUnits="userSpaceOnUse">
                <stop stop-color="#15BFFD" />
                <stop offset="1" stop-color="#9C37FD" />
              </linearGradient>
            </defs>
          </svg>

          {/* Conditionally render SVGs for odd items */}
          {roadmapData.map((item, index) => (
            <div key={index} className={`roadmap-item ${index % 2 === 0 ? "left" : "right"}`}>
              <div style={{ position: "relative" }}>
                {index % 2 === 0 ? (
                  // Hide this SVG in mobile view
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="183"
                    height="256"
                    viewBox="0 0 183 256"
                    fill="none"
                    className="hide-mobile"
                    style={{ position: "absolute", left: "274px", top: "-13px" }}
                  >
                    <path
                      d="M0 3H164C172.837 3 180 10.1634 180 19V237C180 245.837 172.837 253 164 253H0"
                      stroke="url(#paint0_linear_73_4162)"
                      stroke-opacity="0.7"
                      stroke-width="6"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_73_4162"
                        x1="183.152"
                        y1="248.905"
                        x2="-11.5845"
                        y2="242.621"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#AB2FFE" />
                        <stop offset="0.96875" stop-color="#40AFFD" />
                      </linearGradient>
                    </defs>
                  </svg>
                ) : (
                  // Hide this SVG in mobile view
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="183"
                    height="256"
                    viewBox="0 0 183 256"
                    fill="none"
                    className="hide-mobile"
                    style={{ position: "absolute", left: "-15px", top: "-12px" }}
                  >
                    <path
                      d="M183 253L19 253C10.1634 253 3 245.837 3 237L3.00002 19C3.00002 10.1634 10.1635 2.99999 19 2.99999L183 3.00001"
                      stroke="url(#paint0_linear_73_4165)"
                      stroke-opacity="0.7"
                      stroke-width="6"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_73_4165"
                        x1="-0.151731"
                        y1="7.09544"
                        x2="194.585"
                        y2="13.3794"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#AB2FFE" />
                        <stop offset="0.96875" stop-color="#40AFFD" />
                      </linearGradient>
                    </defs>
                  </svg>
                )}

                <div className="content">
                  <h3>{item.title}</h3>
                  <span>{item.month}</span>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;

import React from "react";
// import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./Header.module.css";
import { logo_svg } from "./LogoSVG";
import Navbar from "./Navbar";

function Header() {
  return (
    <div id="welcome" className={style.body}>
      <div className={style.welcomeDeep}>
        <div className={style.welcomeHeader}>
          {/* <svg
            className={style.headersvg}
            viewBox="0 0 40 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="50" height="50" fill="#C8C8C8" />
          </svg> */}
          {logo_svg}
          <p className={style.headertext}>DeepLinks</p>
          <div className={style.navbarWrapper}>
            <Navbar />
          </div>
        </div>
        <div className={style.headermain}>
          <div>
            <p className={style.headertextmain}>Welcome to DeepLinks</p>
            <p className={style.headertextmedium}>Where conversations spark</p>
            <p className={style.headertextsmall}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <svg
            className={style.boxsvg}
            viewBox="500 427"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect className={style.rectboxheader} fill="#C8C8C8" />
          </svg>
        </div>
      </div>
      <div id="HowItWorks" className={style.secondboxwelcom}>
        <p className={style.secondheadertext}>How It Works</p>
        <p className={style.secondmaintext}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat
        </p>
        <div className={style.iconsflex}>
          <svg
            className={style.circlesvg}
            viewBox="0 0 148 132"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="74"
              cy="66"
              rx="74"
              ry="66"
              fill="url(#paint0_linear_3_370)"
              fill-opacity="0.86"
            />
            <defs>
              <linearGradient
                id="paint0_linear_3_370"
                x1="74"
                y1="0"
                x2="74"
                y2="132"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#773FBE" />
                <stop offset="1" stop-color="#05128A" />
              </linearGradient>
            </defs>
            <text
              x="50%"
              y="50%"
              dominant-baseline="middle"
              text-anchor="middle"
              fill="#ffffff"
              className={style.circlesvgtext}
            >
              <tspan x="50%" dy="-0.6em">
                Sign
              </tspan>
              <tspan x="50%" dy="1.2em">
                Up
              </tspan>
            </text>
          </svg>
          <span className={style.arrowStyle}>&#8594;</span>
          <svg
            className={style.circlesvg}
            viewBox="0 0 148 132"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="74"
              cy="66"
              rx="74"
              ry="66"
              fill="url(#paint0_linear_3_370)"
              fill-opacity="0.86"
            />
            <defs>
              <linearGradient
                id="paint0_linear_3_370"
                x1="74"
                y1="0"
                x2="74"
                y2="132"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#773FBE" />
                <stop offset="1" stop-color="#05128A" />
              </linearGradient>
            </defs>
            <text
              x="50%"
              y="50%"
              dominant-baseline="middle"
              text-anchor="middle"
              fill="#ffffff"
              className={style.circlesvgtext}
            >
              <tspan x="50%" dy="-0.6em">
                Invite
              </tspan>
              <tspan x="50%" dy="1.2em">
                Friends
              </tspan>
            </text>
          </svg>
          <span className={style.arrowStyle}>&#8594;</span>
          <svg
            className={style.circlesvg}
            viewBox="0 0 148 132"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="74"
              cy="66"
              rx="74"
              ry="66"
              fill="url(#paint0_linear_3_370)"
              fill-opacity="0.86"
            />
            <defs>
              <linearGradient
                id="paint0_linear_3_370"
                x1="74"
                y1="0"
                x2="74"
                y2="132"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#773FBE" />
                <stop offset="1" stop-color="#05128A" />
              </linearGradient>
            </defs>
            <text
              x="50%"
              y="50%"
              dominant-baseline="middle"
              text-anchor="middle"
              fill="#ffffff"
              className={style.circlesvgtext}
            >
              Conect
            </text>
          </svg>
          <span className={style.arrowStyle}>&#8594;</span>
          <svg
            className={style.circlesvg}
            viewBox="0 0 148 132"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="74"
              cy="66"
              rx="74"
              ry="66"
              fill="url(#paint0_linear_3_370)"
              fill-opacity="0.86"
            />
            <defs>
              <linearGradient
                id="paint0_linear_3_370"
                x1="74"
                y1="0"
                x2="74"
                y2="132"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#773FBE" />
                <stop offset="1" stop-color="#05128A" />
              </linearGradient>
            </defs>
            <text
              x="50%"
              y="50%"
              dominant-baseline="middle"
              text-anchor="middle"
              fill="#ffffff"
              className={style.circlesvgtext}
            >
              Engage
            </text>
          </svg>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Header;

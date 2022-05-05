import React from "react";
import classes from "./LandingSlide.module.css";
import logo from "../../Assets/symbol.svg";
import fire from "../../Assets/fire.svg";
import big from "../../Assets/big.svg";
import small from "../../Assets/small.svg";
import mid from "../../Assets/mid.svg";

const LandingSlide = () => {
  return (
    <>
      <section className={classes.landing_slide}>
        <nav className={classes.landing_slide_navbar}>
          <div className={classes.landing_slide_image_container}>
            <img className={classes.landing_slide_image} src={logo} alt='' />
          </div>
          <ul className={classes.landing_slide_navlinks}>
            <li
              className={`${classes.landing_slide_navlink} ${classes.active}`}
            >
              Game Info
            </li>
            <li className={classes.landing_slide_navlink}>Media</li>
            <li className={classes.landing_slide_navlink}>News</li>
            <li className={classes.landing_slide_navlink}>Leaderboard</li>
            <li className={classes.landing_slide_navlink}>Support</li>
            <li className={classes.landing_slide_navlink}>Esport</li>
          </ul>
        </nav>
        <div className={classes.content}>
          <div className={classes.row1}>
            <div>
              <img src={fire} alt='' />
            </div>
            <p className={classes.row1_head}>
              A 5v5 character-based tactical shooter
            </p>
          </div>
          <div className={classes.row2}>
            <p className={classes.row2_head}>
              Unleash The <br /> Next Generation <br /> Of Gaming
            </p>
          </div>
          <div className={classes.row3}>
            <p className={classes.row3_head}>
              CREATIVITY IS YOUR GREATEST WEAPON.
            </p>
          </div>
          <button className={classes.btn}>Play Here</button>
        </div>
        <img src={mid} className={classes.mid} alt='' />
        <img src={big} className={classes.big} alt='' />
        <img src={small} className={classes.small} alt='' />
      </section>
    </>
  );
};

export default LandingSlide;

import s from "./Footer.module.css";
import logo from "../../assets/img/footerLogo.png";
import facebookLogo from "../../assets/img/facebook.png";
import xLogo from "../../assets/img/x.png";
import linkedinLogo from "../../assets/img/Link.png";

export const Footer = () => {
  return (
    <div className={s.footerBlock}>
      <div className={s.footerContentBorder}>
        <div className={s.footerContent}>
          <div className={s.logo}>
            <img src={logo} alt="Educate" />
          </div>
          <div className={s.footerContentInfo}>
            <div className={s.powered}>
              <span>© iEDUCATE, LLC, 2024</span>
            </div>

            <div className={s.social}>
              <div>
                <span>
                  <img src={facebookLogo} alt="Facebook" />
                </span>
                <span>
                  <img src={xLogo} alt="X" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

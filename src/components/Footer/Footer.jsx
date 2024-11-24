import s from "./Footer.module.css";
import logo from "../../assets/img/footerLogo.png";
import facebookLogo from "../../assets/img/facebook.png";
import xLogo from "../../assets/img/x.png";
import instagramLogo from "../../assets/img/instagram.png";

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
                  <a
                    href="https://www.facebook.com/profile.php?id=61567820971633"
                    target="_blank"
                  >
                    <img src={facebookLogo} alt="Facebook" />
                  </a>
                </span>
                <span>
                  <a
                    href="https://www.instagram.com/iiiii_educate?igsh=eGFjeWExNWlnNWox"
                    target="_blank"
                  >
                    <img src={instagramLogo} alt="X" />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

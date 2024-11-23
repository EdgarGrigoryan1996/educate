import s from "./About.module.css";
import aboutImage from "../../assets/img/aboutImage.png";
import { useTranslation } from "react-i18next";
import WhiteWrapper from "../WhiteWrapper/WhiteWrapper.jsx";

export const About = () => {
  const { t } = useTranslation();
  return (
    <WhiteWrapper>
      <div className={s.about} id="about">
        <h2>{t("about.title")}</h2>
        <div className={s.aboutContent}>
          <div className={s.aboutImage}>
            <img src={aboutImage} alt="About" />
          </div>
          <div className={s.aboutInfo}>
            <p>{t("about.contentText")}</p>
          </div>
        </div>
      </div>
    </WhiteWrapper>
  );
};

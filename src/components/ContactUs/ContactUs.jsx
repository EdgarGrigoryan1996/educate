import s from "./ContactUs.module.css";
import mailImg from "../../assets/img/mail.png";
import phoneImg from "../../assets/img/phone.png";
import { useTranslation } from "react-i18next";
import WhiteWrapper from "../WhiteWrapper/WhiteWrapper.jsx";

export const ContactUs = () => {
  const { t } = useTranslation();
  return (
    <WhiteWrapper>
      <div className={s.howHelpYouBlock} id="contact">
        <h2>{t("howHelpYou.title")}</h2>
        <h3>{t("howHelpYou.message")}</h3>
        <div className={s.contactBlock}>
          <div>
            <img src={phoneImg} alt="Phone" />
            <span>+374 33 35 44 44</span>
          </div>
          <div>
            <img src={mailImg} alt="E-mail" />
            <span>info@ieducate.am</span>
          </div>
        </div>
      </div>
    </WhiteWrapper>
  );
};

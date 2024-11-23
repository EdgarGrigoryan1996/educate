import s from "./Info.module.css";
import symbolImg from "../../assets/img/symbol.png";
import { useTranslation } from "react-i18next";

export const Info = () => {
  const { t } = useTranslation();
  return (
    <div className={s.infoBlock}>
      <div className={s.itemBlock}>
        <div className={s.numberLine}>
          <span>
            <img src={symbolImg} alt="Educate" />
          </span>
          <span>104</span>
        </div>
        <div className={s.titleBlock}>
          <span>{t("info.item1")}</span>
        </div>
      </div>

      <div className={s.itemBlock}>
        <div className={s.numberLine}>
          <span>
            <img src={symbolImg} alt="Educate" />
          </span>
          <span>29</span>
        </div>
        <div className={s.titleBlock}>
          <span className={s.smallSize}>{t("info.item2")}</span>
        </div>
      </div>
    </div>
  );
};

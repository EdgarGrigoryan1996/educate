import s from "./ImageSection.module.css";
import img from "../../assets/img/educate.png";
export const ImageSection = (props) => {
  return (
    <div className={s.imgBlock}>
      <img src={img} alt="Educate" />
    </div>
  );
};

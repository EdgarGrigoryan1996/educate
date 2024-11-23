import s from "./WhiteWrapper.module.css";

export const WhiteWrapper = ({ children }) => {
  return <div className={s.wrapper}>{children}</div>;
};

export default WhiteWrapper;

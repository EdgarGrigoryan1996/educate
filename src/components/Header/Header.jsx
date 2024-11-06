import s from "./Header.module.css";
export const Header = (props) => {
  return (
    <div className={s.header}>
      <div className={s.headerBlock}>
        <div className={s.imgContainer}>
          <ul className={s.navbar}>
            <div>
              <li>About</li>
              <li>Lessons</li>
            </div>
            <div>
              <li>Contact</li>
              <li>En/Am</li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

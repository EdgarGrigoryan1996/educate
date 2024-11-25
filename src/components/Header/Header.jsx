import s from "./Header.module.css";
import logo from "../../assets/img/logo.png";
import headerDetailImg from "../../assets/img/headerDetail.png";
import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
export const Header = () => {
  const { t, i18n } = useTranslation();
  const navbarRef = useRef(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setMobileMenuOpen(false);
    }
  };
  const closeMenu = (setMobileMenuOpen) => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={s.header}>
      <div className={s.headerBlock}>
        <div className={s.imgContainer}>
          <img
            className={s.headerDetailImg}
            src={headerDetailImg}
            alt="Educate"
          />
          <div className={s.burger}>
            <span
              onClick={() => {
                setMobileMenuOpen(true);
              }}
            >
              <RxHamburgerMenu />
            </span>
          </div>
          <ul
            ref={navbarRef}
            className={
              mobileMenuOpen ? s.navbar + " " + s.activeMobileMenu : s.navbar
            }
          >
            <span
              className={s.closeIcon}
              onClick={() => {
                setMobileMenuOpen(false);
              }}
            >
              X
            </span>
            <div className={s.mainNavbar}>
              <li>
                <a href="#about" onClick={() => closeMenu(setMobileMenuOpen)}>
                  {t("navbar.about")}
                </a>
              </li>
              <li>
                <a href="#lessons" onClick={() => closeMenu(setMobileMenuOpen)}>
                  {t("navbar.lessons")}
                </a>
              </li>
              <li>
                <a href="#blog" onClick={() => closeMenu(setMobileMenuOpen)}>
                  {t("navbar.blog")}
                </a>
              </li>
            </div>
            <div className={s.contactLangBlock}>
              <li>
                <a href="#contact" onClick={() => closeMenu(setMobileMenuOpen)}>
                  {t("navbar.contact")}
                </a>
              </li>
              <li className={s.langBlock}>
                <a
                  className={
                    localStorage.getItem("lang") === "en" ? s.activeLang : ""
                  }
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    i18n.changeLanguage("en");
                    localStorage.setItem("lang", "en");
                  }}
                >
                  <span>EN</span>
                </a>
                <a
                  className={
                    localStorage.getItem("lang") === "am" ||
                    localStorage.getItem("lang") === null
                      ? s.activeLang
                      : ""
                  }
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    i18n.changeLanguage("am");
                    localStorage.setItem("lang", "am");
                  }}
                >
                  <span>ՀՅ</span>
                </a>
              </li>
            </div>
          </ul>
          {/*<div className={s.logo}>*/}
          {/*  <img src={logo} alt="Educate" />*/}
          {/*</div>*/}
        </div>
      </div>
    </div>
  );
};

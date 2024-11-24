import { Header } from "./components/Header/Header.jsx";
import "./App.css";
import { About } from "./components/About/About.jsx";
import { Info } from "./components/Info/Info.jsx";
import { Lessons } from "./components/Lessons/Lessons.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { ContactUs } from "./components/ContactUs/ContactUs.jsx";
import Blog from "./components/Blog/Blog.jsx";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export const Page = () => {
  const { i18n } = useTranslation();
  useEffect(() => {
    if (localStorage.getItem("lang")) {
      console.log(localStorage.getItem("lang"));
      i18n.changeLanguage(localStorage.getItem("lang"));
    }
  }, []);
  return (
    <div className="pageWrapper">
      <Header />
      <About />
      <Info />
      <Lessons />
      <Blog />
      <ContactUs />
      <Footer />
    </div>
  );
};

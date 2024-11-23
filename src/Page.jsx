import { Header } from "./components/Header/Header.jsx";
import "./App.css";
import { About } from "./components/About/About.jsx";
import { Info } from "./components/Info/Info.jsx";
import { Lessons } from "./components/Lessons/Lessons.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { ContactUs } from "./components/ContactUs/ContactUs.jsx";
import Blog from "./components/Blog/Blog.jsx";

export const Page = () => {
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

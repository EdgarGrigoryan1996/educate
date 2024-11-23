import s from "./Blog.module.css";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "./slide.css";
import "swiper/swiper-bundle.css";
import axios from "axios";
import { useEffect, useState } from "react";
import WhiteWrapper from "../WhiteWrapper/WhiteWrapper.jsx";
import { useTranslation } from "react-i18next";

import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { Swiper, SwiperSlide } from "swiper/react";

const Blog = () => {
  const { t } = useTranslation();
  const [blogs, setBlogs] = useState([]);
  const [slidesPerView, setSlidesPerView] = useState(null);
  useEffect(() => {
    axios
      .get("https://strapi-educate.onrender.com/api/blogs?populate=*") // Получение данных
      .then((response) => {
        setBlogs(response.data.data); // Устанавливаем данные в state
        setSlidesPerView(
          response.data.data.length >= 3 ? 3 : response.data.data.length,
        );
      })
      .catch((error) => {
        console.error("Ошибка при получении данных:", error);
      });
  }, []);
  return (
    <WhiteWrapper>
      <section className={s.blog} id="blog">
        <h2>{t("blog.title")}</h2>
        {slidesPerView ? (
          <div
            className={
              slidesPerView === 1 ? s.slider + " " + s.sliderOneItem : s.slider
            }
          >
            <div className="custom-prev">
              <GrFormPrevious size={30} />
            </div>
            <div className="custom-next">
              <MdNavigateNext size={30} />
            </div>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }}
              spaceBetween={10}
              slidesPerView={slidesPerView < 2 ? slidesPerView : 2}
              breakpoints={{
                1000: {
                  slidesPerView: slidesPerView,
                },
                756: {
                  slidesPerView: slidesPerView < 2 ? slidesPerView : 2,
                  spaceBetween: 10,
                },
                556: {
                  spaceBetween: 10,
                  slidesPerView: slidesPerView < 2 ? slidesPerView : 2,
                },
              }}
              navigation={{
                prevEl: ".custom-prev",
                nextEl: ".custom-next",
              }}
            >
              {blogs.map((blog) => (
                <SwiperSlide key={blog.id}>
                  <div className={s.slideCard}>
                    <div className={s.cardImage}>
                      <img
                        src={`https://strapi-educate.onrender.com${blog.image.url}`}
                        alt="Բլոգ"
                        onError={(e) => {
                          e.target.onerror = null; // предотвратить бесконечный цикл ошибок
                          e.target.src = "../../assets/img/aboutImage.png"; // путь к заглушке
                        }}
                      />
                    </div>
                    <div className={s.cardTitle}>
                      <p>{blog.Description}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          <div className={s.noBlogForView}>
            <h3>Այս պահին նորություններ չկան</h3>
          </div>
        )}
      </section>
    </WhiteWrapper>
  );
};

export default Blog;

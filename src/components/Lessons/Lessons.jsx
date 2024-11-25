import s from "./Lessons.module.css";
import { useTranslation } from "react-i18next";
import WhiteWrapper from "../WhiteWrapper/WhiteWrapper.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";

export const Lessons = () => {
  const { t } = useTranslation();
  const translationExists = (key) => t(key) !== key;

  return (
    <WhiteWrapper>
      <div id="lessons" className={s.lessonsBlock}>
        <h2>{t("lessons.title")}</h2>
        <div className={s.slideBlock}>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            spaceBetween={30}
            slidesPerView={2.5}
            breakpoints={{
              556: {
                spaceBetween: 30,
                slidesPerView: 2.5,
              },
              256: {
                spaceBetween: 10,
                slidesPerView: 2.2,
              },
            }}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
          >
            {[...Array(5)].map((_, i) => (
              <SwiperSlide>
                <div key={i} className={s.slideCard}>
                  <div className={s.slideContent}>
                    <div className={s.slideTitle}>
                      {t(`lessons.card${i + 1}.title`)}
                    </div>
                    <ul>
                      {Array(4)
                        .fill(0)
                        .map((_, j) =>
                          translationExists(
                            `lessons.card${i + 1}.line${j + 1}`,
                          ) ? (
                            <li key={j}>
                              {t(`lessons.card${i + 1}.line${j + 1}`)}
                            </li>
                          ) : null,
                        )}
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </WhiteWrapper>
  );
};

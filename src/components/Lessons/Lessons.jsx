import s from "./Lessons.module.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import WhiteWrapper from "../WhiteWrapper/WhiteWrapper.jsx";

export const Lessons = () => {
  const { t } = useTranslation();
  const translationExists = (key) => t(key) !== key;
  const [startPosition, setStartPosition] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState(0); // Текущее смещение
  const [lastOffset, setLastOffset] = useState(0); // Последнее смещение

  const totalSlides = 5; // Общее количество слайдов
  const visibleSlides = 2; // Количество видимых слайдов
  const slideWidth = 70 / visibleSlides; // Ширина одного слайда в процентах

  // Вычисление пределов
  const maxOffset = 10; // Начало слайдов
  const minOffset = -(
    (totalSlides - visibleSlides) *
    (slideWidth / 100) *
    window.innerWidth
  );

  // Начало перетаскивания
  const handleStart = (position) => {
    setStartPosition(position);
    setIsDragging(true);
  };

  // Перемещение мыши или пальца
  const handleMove = (position) => {
    if (!isDragging || startPosition === null) return;

    const diff = position - startPosition;
    const newOffset = lastOffset + diff;

    // Ограничиваем смещение
    if (newOffset <= maxOffset && newOffset >= minOffset) {
      setOffset(newOffset);
    }
  };

  // Завершение перетаскивания
  const handleEnd = () => {
    setLastOffset(offset); // Фиксируем положение, где пользователь отпустил мышь/палец
    setIsDragging(false);
    setStartPosition(null);
  };

  return (
    <WhiteWrapper>
      <div
        id="lessons"
        className={s.lessonsBlock}
        onMouseDown={(e) => handleStart(e.clientX)}
        onMouseMove={(e) => handleMove(e.clientX)}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchStart={(e) => handleStart(e.touches[0].clientX)}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        onTouchEnd={handleEnd}
      >
        <h2>{t("lessons.title")}</h2>
        <div
          className={s.slideBlock}
          style={{
            transform: `translateX(${offset}px)`,
            transition: isDragging ? "none" : "transform 0.3s ease", // Анимация только при завершении
          }}
        >
          {[...Array(totalSlides)].map((_, i) => (
            <div key={i} className={s.slideCard}>
              <div className={s.slideContent}>
                <div className={s.slideTitle}>
                  {t(`lessons.card${i + 1}.title`)}
                </div>
                <ul>
                  {Array(4)
                    .fill(0)
                    .map((_, j) =>
                      translationExists(`lessons.card${i + 1}.line${j + 1}`) ? (
                        <li key={j}>
                          {t(`lessons.card${i + 1}.line${j + 1}`)}
                        </li>
                      ) : null,
                    )}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </WhiteWrapper>
  );
};

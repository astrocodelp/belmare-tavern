"use client";

import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section id="mu-slider">
      <div className="mu-slider-area">
        <div className="mu-top-slider">
          <div className="mu-top-slider-single">
            <img src="/assets/img/slider/1.jpeg" alt="Dafni Beach" />
            <div className="mu-top-slider-content">
              <span className="mu-slider-small-title">
                {t("slide1.subtitle")}
              </span>
              <h2 className="mu-slider-title">{t("slide1.title")}</h2>
              <p>{t("slide1.description")}</p>
            </div>
          </div>

          <div className="mu-top-slider-single">
            <img src="/assets/img/slider/2.jpeg" alt="Fresh Fish" />
            <div className="mu-top-slider-content">
              <span className="mu-slider-small-title">
                {t("slide2.subtitle")}
              </span>
              <h2 className="mu-slider-title">{t("slide2.title")}</h2>
              <p>{t("slide2.description")}</p>
            </div>
          </div>

          <div className="mu-top-slider-single">
            <img
              src="/assets/img/slider/3.jpeg"
              alt="Greek Traditional Cuisine"
            />
            <div className="mu-top-slider-content">
              <span className="mu-slider-small-title">
                {t("slide3.subtitle")}
              </span>
              <h2 className="mu-slider-title">{t("slide3.title")}</h2>
              <p>{t("slide3.description")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

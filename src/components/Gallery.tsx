"use client";

import { useTranslations } from "next-intl";
import { useEffect } from "react";

declare global {
  interface Window {
    $: any;
  }
}

export default function Gallery() {
  const t = useTranslations("gallery");

  useEffect(() => {
    // Initialize lightbox when component mounts
    if (typeof window !== "undefined" && window.$) {
      const $ = window.$;
      $(".mu-imglink").magnificPopup({
        type: "image",
        gallery: { enabled: true },
      });
    }
  }, []);

  const images = [
    { src: "/assets/img/gallery/1.jpg", alt: "Dafni Beach Zakynthos" },
    { src: "/assets/img/gallery/2.jpg", alt: "Dafni Beach Zakynthos Sea" },
    { src: "/assets/img/gallery/3.jpg", alt: "Greek Tavern Belmare" },
    { src: "/assets/img/gallery/4.jpg", alt: "Belmare Tavern" },
    { src: "/assets/img/gallery/5.jpg", alt: "Dafni Beach Zakynthos" },
    { src: "/assets/img/gallery/6.jpg", alt: "Belmare Dafni" },
    { src: "/assets/img/gallery/7.jpg", alt: "Dafni Beach Belmare" },
    { src: "/assets/img/gallery/8.jpg", alt: "Belmare Dafni" },
    {
      src: "/assets/img/gallery/9.jpg",
      alt: "Belmare Greek Tavern Dafni Zakynthos",
    },
  ];

  return (
    <section id="mu-gallery">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="mu-gallery-area">
              <div className="mu-title">
                <span className="mu-subtitle"></span>
                <h2>{t("title")}</h2>
              </div>

              <div className="mu-gallery-content">
                <div className="mu-gallery-body">
                  {images.map((image) => (
                    <div key={image.src} className="mu-single-gallery col-md-4">
                      <div className="mu-single-gallery-item">
                        <figure className="mu-single-gallery-img">
                          <a className="mu-imglink" href={image.src}>
                            <img alt={image.alt} src={image.src} />
                            <div className="mu-single-gallery-info">
                              <img
                                className="mu-view-btn"
                                src="/assets/img/plus.png"
                                alt="plus icon img"
                              />
                            </div>
                          </a>
                        </figure>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

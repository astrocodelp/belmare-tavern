"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { useState } from "react";

export default function Header({ locale }: { locale: string }) {
  const t = useTranslations("nav");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const alternateLocale = locale === "el" ? "en" : "el";

  return (
    <header id="mu-header">
      <nav className="navbar navbar-default mu-main-navbar">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" href="/">
              BelMare<span></span>
            </Link>
          </div>
          <div
            id="navbar"
            className={`navbar-collapse collapse ${isMenuOpen ? "in" : ""}`}
          >
            <ul
              id="top-menu"
              className="nav navbar-nav navbar-right mu-main-nav"
            >
              <li>
                <a href="#mu-slider">{t("home")}</a>
              </li>
              <li>
                <a href="#mu-about-us">{t("about")}</a>
              </li>
              <li>
                <a href="#mu-restaurant-menu">{t("menu")}</a>
              </li>
              <li>
                <a href="#mu-gallery">{t("gallery")}</a>
              </li>
              <li>
                <a href="#mu-contact">{t("contact")}</a>
              </li>
              <li>
                <Link href="/" locale={alternateLocale}>
                  {t("languageSwitch")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

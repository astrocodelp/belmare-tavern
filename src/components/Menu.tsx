"use client";

import { useTranslations } from "next-intl";

export default function Menu() {
  const t = useTranslations("menu");

  const categories = [
    { id: "coldAppetizers", key: "coldAppetizers" },
    { id: "hotAppetizers", key: "hotAppetizers" },
    { id: "salads", key: "salads" },
    { id: "seafood", key: "seafood" },
    { id: "grilled", key: "grilled" },
    { id: "homeCooked", key: "homeCooked" },
  ];

  const renderMenuItems = (categoryKey: string) => {
    const items = t.raw(`items.${categoryKey}`) as string[];
    const halfLength = Math.ceil(items.length / 2);
    const firstHalf = items.slice(0, halfLength);
    const secondHalf = items.slice(halfLength);

    return (
      <div className="mu-tab-content-area">
        <div className="row">
          <div className="col-md-6">
            <div className="mu-tab-content-left">
              <ul className="mu-menu-item-nav">
                {firstHalf.map((item) => (
                  <li key={item}>
                    <div className="media">
                      <div className="media-body">
                        <h4 className="media-heading">
                          <a href="/">{item}</a>
                        </h4>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-md-6">
            <div className="mu-tab-content-right">
              <ul className="mu-menu-item-nav">
                {secondHalf.map((item) => (
                  <li key={item}>
                    <div className="media">
                      <div className="media-body">
                        <h4 className="media-heading">
                          <a href="/">{item}</a>
                        </h4>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="mu-restaurant-menu">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="mu-restaurant-menu-area">
              <div className="mu-title">
                <span className="mu-subtitle">{t("subtitle")}</span>
                <h2>{t("title")}</h2>
              </div>

              <div className="mu-restaurant-menu-content">
                <ul className="nav nav-tabs mu-restaurant-menu">
                  {categories.map((category, index) => (
                    <li
                      key={category.id}
                      className={index === 0 ? "active" : ""}
                    >
                      <a href={`#${category.id}`} data-toggle="tab">
                        {t(`categories.${category.key}`)}
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="tab-content">
                  {categories.map((category, index) => (
                    <div
                      key={category.id}
                      className={`tab-pane fade ${index === 0 ? "in active" : ""}`}
                      id={category.id}
                    >
                      {renderMenuItems(category.key)}
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

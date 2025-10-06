import { useTranslations } from "next-intl";

export default function Features() {
  const t = useTranslations("features");

  return (
    <section id="mu-counter">
      <div className="mu-counter-overlay">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mu-counter-area">
                <ul className="mu-counter-nav">
                  <li className="col-md-3 col-sm-3 col-xs-12">
                    <div className="mu-single-counter">
                      <span>{t("feature1.title")}</span>
                      <p>{t("feature1.subtitle")}</p>
                    </div>
                  </li>

                  <li className="col-md-3 col-sm-3 col-xs-12">
                    <div className="mu-single-counter">
                      <span>{t("feature2.title")}</span>
                      <p>{t("feature2.subtitle")}</p>
                    </div>
                  </li>

                  <li className="col-md-3 col-sm-3 col-xs-12">
                    <div className="mu-single-counter">
                      <span>{t("feature3.title")}</span>
                      <p>{t("feature3.subtitle")}</p>
                    </div>
                  </li>

                  <li className="col-md-3 col-sm-3 col-xs-12">
                    <div className="mu-single-counter">
                      <span>{t("feature4.title")}</span>
                      <p>{t("feature4.subtitle")}</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

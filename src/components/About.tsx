import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("about");

  return (
    <section id="mu-about-us">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="mu-about-us-area">
              <div className="mu-title">
                <span className="mu-subtitle">{t("subtitle")}</span>
                <h2>{t("title")}</h2>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="mu-about-us-left">
                    <img src="/assets/img/about-us.png" alt="Belmare Tavern" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mu-about-us-right">
                    <p>{t("description")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

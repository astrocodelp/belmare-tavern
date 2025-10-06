import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer id="mu-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="mu-footer-area">
              <div className="mu-footer-social">
                <a href="/">
                  <span className="fa fa-facebook"></span>
                </a>
                <a href="/">
                  <span className="fa fa-instagram"></span>
                </a>
              </div>
              <div className="mu-footer-copyright">
                <p>
                  &copy; {t("copyright")}{" "}
                  <a rel="nofollow" href="http://ormosagency.gr">
                    ormosagency.gr
                  </a>
                  . All right reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

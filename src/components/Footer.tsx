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
                <a
                  href="https://www.facebook.com/people/BelMare-Dafni-Beach/100084849824977/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="fa fa-facebook"></span>
                </a>
                <a
                  href="https://www.instagram.com/explore/locations/1163437757040170/bel-mare-dafni-beach/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="fa fa-instagram"></span>
                </a>
              </div>
              <div className="mu-footer-copyright">
                <p>
                  &copy; {t("copyright")}{" "}
                  <a
                    href="http://ormosagency.gr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ormosagency.gr
                  </a>
                  . All right reserved.
                </p>
                <p>
                  Powered by rel="nofollow"
                  <a
                    href="https://astrocode.gr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    astrocode.gr
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

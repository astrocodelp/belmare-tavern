"use client";

import Script from "next/script";

export default function Scripts() {
  return (
    <>
      <Script src="/assets/js/jquery.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/bootstrap.js" strategy="afterInteractive" />
      <Script
        src="/assets/js/bootstrap-datepicker.js"
        strategy="afterInteractive"
      />
      <Script src="/assets/js/slick.js" strategy="afterInteractive" />
      <Script
        src="/assets/js/jquery.magnific-popup.min.js"
        strategy="afterInteractive"
      />
      <Script src="/assets/js/custom.js" strategy="afterInteractive" />
    </>
  );
}

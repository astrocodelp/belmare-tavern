import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "@/app/globals.css";
import type { Metadata } from "next";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = (await getMessages({ locale })) as unknown as {
    metadata: {
      title: string;
      description: string;
    };
  };

  return {
    title: messages.metadata.title,
    description: messages.metadata.description,
    keywords: [
      "BelMare",
      "Tavern",
      "Dafni Beach",
      "Zakynthos",
      "Greek Food",
      "Fresh Fish",
      "Zante",
      "Restaurant",
      "Ταβέρνα",
      "Ζάκυνθος",
      "Δάφνη",
    ],
    authors: [{ name: "BelMare Tavern" }],
    openGraph: {
      title: messages.metadata.title,
      description: messages.metadata.description,
      type: "website",
      locale: locale === "el" ? "el_GR" : "en_US",
      siteName: "BelMare Tavern",
    },
    twitter: {
      card: "summary_large_image",
      title: messages.metadata.title,
      description: messages.metadata.description,
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        el: "/el",
        en: "/en",
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as "el" | "en")) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/assets/img/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/font-awesome.css" />
        <link rel="stylesheet" href="/assets/css/bootstrap.css" />
        <link rel="stylesheet" href="/assets/css/bootstrap-datepicker.css" />
        <link rel="stylesheet" href="/assets/css/slick.css" />
        <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/css/theme-color/blue-theme.css" />
        <link rel="stylesheet" href="/style.css" />
        <link
          href="https://fonts.googleapis.com/css?family=Prata&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Tangerine&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

import { setRequestLocale } from "next-intl/server";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import ContactForm from "@/components/ContactForm";
import LocationMap from "@/components/Map";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Scripts from "@/components/Scripts";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <>
      <ScrollToTop />
      <Header locale={locale} />
      <Hero />
      <About />
      <Features />
      <Menu />
      <Gallery />
      <ContactForm />
      <LocationMap />
      <Footer />
      <Scripts />
    </>
  );
}

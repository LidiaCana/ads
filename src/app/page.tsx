import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDictionary } from "./dictionaries";
import { Dictionary } from "@/types/dictionary";
import { Menu } from "@/types/menu";

export default async function Home() {
  const lang = "sp";
  const dict = (await getDictionary(lang)) as Dictionary;
  const menuData: Menu[] = [
    {
      id: 1,
      title: dict.menu.home,
      path: "/",
      newTab: false,
    },
    {
      id: 2,
      title: dict.menu.about,
      path: "/about",
      newTab: false,
    },
    {
      id: 3,
      title: dict.menu.services,
      path: "/services",
      newTab: false,
    },
    {
      id: 4,
      title: dict.menu.contact,
      path: "/contact",
      newTab: false,
    },
    {
      id: 5,
      title: dict.menu.technologies,
      path: "/technologies",
      newTab: false,
    },
    {
      id: 6,
      title: dict.menu.testimonials,
      path: "/testimonials",
      newTab: false,
    },
  ];
  return (
    <>
      <Header menuData={menuData} />
      <ScrollUp />
      <Hero lang={lang} />
      <Features lang={lang} />
      <AboutSectionOne lang={lang} />
      <Brands lang={lang} />
      <AboutSectionTwo lang={lang} />
      <Testimonials lang={lang} />
      <Pricing lang={lang} />
      {/* <Blog lang={lang} /> */}
      <Contact lang={lang} />
      <Footer lang={lang} />
    </>
  );
}

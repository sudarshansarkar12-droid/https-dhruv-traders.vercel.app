import Nav from "@/components/site/Nav";
import Hero from "@/components/site/Hero";
import Ticker from "@/components/site/Ticker";
import Manifesto from "@/components/site/Manifesto";
import Instruments from "@/components/site/Instruments";
import Platform from "@/components/site/Platform";
import Stats from "@/components/site/Stats";
import Marquee from "@/components/site/Marquee";
import Community from "@/components/site/Community";
import AppDownload from "@/components/site/AppDownload";
import Testimonials from "@/components/site/Testimonials";
import Brokers from "@/components/site/Brokers";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";

export default function Home() {
  return (
    <div data-testid="dhruv-home" className="relative">
      <Nav />
      <Hero />
      <Ticker />
      <Manifesto />
      <Instruments />
      <Platform />
      <Stats />
      <Marquee />
      <Testimonials />
      <Brokers />
      <AppDownload />
      <Community />
      <Contact />
      <Footer />
    </div>
  );
}

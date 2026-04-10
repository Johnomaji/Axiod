import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsBar from "./components/StatsBar";
import Features from "./components/Features";
import Deployments from "./components/Deployments";
import Team from "./components/Team";
import Research from "./components/Research";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Features />
        <Deployments />
        <Team />
        <Research />
        <CTA />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

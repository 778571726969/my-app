import Feature from "../../components/ui/featuredSection/feature";
import Hero from "../../components/ui/heroSection/hero";
import Navbar from "../../components/ui/mobileNav.tsx/Nav";
import Section from "../../components/ui/primarySection/2ndSection";
import Products from "../../components/ui/products/productsSect";
import Subscribes from "../../components/ui/subscribeSection/subSection";
import Footer from "../../components/ui/footer/Footer";

export default function Home() {
  return (
    <main className="body">
      <div className="margin">
        <Hero />
        <Section />
        <Products />
        <Feature />
        <Subscribes />
      </div>
    </main>
  );
}

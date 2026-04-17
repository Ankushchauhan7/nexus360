import Navbar     from "@/components/Navbar";
import Hero        from "@/components/Hero";
import Marquee     from "@/components/Marquee";
import Services    from "@/components/Services";
import WhyUs       from "@/components/WhyUs";
import Process     from "@/components/Process";
import Industries  from "@/components/Industries";
import CtaBanner   from "@/components/CtaBanner";
import Footer      from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <WhyUs />
      <Process />
      <Industries />
      <CtaBanner />
      <Footer />
    </main>
  );
}

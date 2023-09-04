import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Featured from "../components/Featured/Featured";
import Services from "../components/Services/Services";
import Testimonials from "../components/Testimonials/Testimonials";
import FAQAccordion from "../components/FAQ/FAQ";

function Home() {

  return (
    <>
      <Header />
      <Hero />
      <Featured />
      <Services />
      <Testimonials />
      <FAQAccordion />
      <Footer />
    </>
  )
}

export default Home;
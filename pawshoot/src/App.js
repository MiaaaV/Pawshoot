import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
import Accordion from './components/FAQ/FAQ';
import Testimonials from './components/Testimonials/Testimonials';
import Featured from './components/Featured/Featured';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Featured />
      <Services />
      <Testimonials />
      <Accordion />
      <Footer />
    </>
  );
}

export default App;

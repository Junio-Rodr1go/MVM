import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Products />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

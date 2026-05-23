import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import Features from './components/Features';
import Sports from './components/Sports';
import HowToUse from './components/HowToUse';
import ProTip from './components/ProTip';
import Ingredients from './components/Ingredients';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-brand-black noise-overlay">
        <Navbar />
        <Hero />
        <StatsBar />
        <Features />
        <Sports />
        <HowToUse />
        <ProTip />
        <Ingredients />
        <CTASection />
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}

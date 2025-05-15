
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ProductSpecification from "@/components/ProductSpecification";
import WaitlistForm from "@/components/WaitlistForm";
import BetaSignup from "@/components/BetaSignup";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <ProductSpecification />
        <WaitlistForm />
        <BetaSignup />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

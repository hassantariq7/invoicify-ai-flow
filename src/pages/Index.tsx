
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ProductSpecification from "@/components/ProductSpecification";
import WaitlistForm from "@/components/WaitlistForm";
import BetaSignup from "@/components/BetaSignup";
import UserDashboard from "@/components/UserDashboard";
import Footer from "@/components/Footer";
import { useAuth } from "@/hooks/useAuth";

const Index = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        {user && <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-8"><UserDashboard /></div>}
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

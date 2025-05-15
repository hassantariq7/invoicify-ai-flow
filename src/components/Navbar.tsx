
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-primary">InvoiceFlow</span>
          </div>
          <nav className="hidden md:flex space-x-8 items-center">
            <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
            <a href="#product" className="text-gray-600 hover:text-gray-900">Product</a>
            <Button variant="outline" className="text-primary border-primary hover:bg-primary/5" asChild>
              <a href="#waitlist">Join Waitlist</a>
            </Button>
            <Button className="bg-primary hover:bg-primary/90" asChild>
              <a href="#beta">Join Beta</a>
            </Button>
          </nav>
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50">Features</a>
            <a href="#product" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50">Product</a>
            <a href="#waitlist" className="block px-3 py-2 rounded-md text-base font-medium text-primary hover:bg-gray-50">Join Waitlist</a>
            <a href="#beta" className="block px-3 py-2 rounded-md text-base font-medium bg-primary text-white hover:bg-primary/90">Join Beta</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

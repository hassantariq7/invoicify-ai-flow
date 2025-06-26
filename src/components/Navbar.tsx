
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, User } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import AuthModal from "./AuthModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const { user, signOut } = useAuth();

  const handleAuthClick = (mode: 'signin' | 'signup') => {
    setAuthMode(mode);
    setShowAuthModal(true);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold gradient-text">Kmstack</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-primary transition-colors">Features</a>
              <a href="#waitlist" className="text-gray-600 hover:text-primary transition-colors">Waitlist</a>
              <a href="#beta" className="text-gray-600 hover:text-primary transition-colors">Beta</a>
              
              {/* {user ? (
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4 text-primary" />
                    <span className="text-sm text-gray-600">{user.email}</span>
                  </div>
                  <Button variant="outline" size="sm" onClick={signOut}>
                    Sign Out
                  </Button>
                </div>
              ) : (
                <div className="flex items-center space-x-4">
                  <Button variant="ghost" onClick={() => handleAuthClick('signin')}>
                    Sign In
                  </Button>
                  <Button onClick={() => handleAuthClick('signup')}>
                    Sign Up
                  </Button>
                </div>
              )} */}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600 hover:text-primary"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <div className="flex flex-col space-y-4">
                <a href="#features" className="text-gray-600 hover:text-primary transition-colors">Features</a>
                <a href="#waitlist" className="text-gray-600 hover:text-primary transition-colors">Waitlist</a>
                <a href="#beta" className="text-gray-600 hover:text-primary transition-colors">Beta</a>
                
                {/* {user ? (
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-2 mb-4">
                      <User className="h-4 w-4 text-primary" />
                      <span className="text-sm text-gray-600">{user.email}</span>
                    </div>
                    <Button variant="outline" size="sm" onClick={signOut} className="w-full">
                      Sign Out
                    </Button>
                  </div>
                ) : (
                  <div className="pt-4 border-t border-gray-100 space-y-2">
                    <Button variant="ghost" onClick={() => handleAuthClick('signin')} className="w-full">
                      Sign In
                    </Button>
                    <Button onClick={() => handleAuthClick('signup')} className="w-full">
                      Sign Up
                    </Button>
                  </div>
                )} */}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        mode={authMode}
        onModeChange={setAuthMode}
      /> */}
    </>
  );
};

export default Navbar;

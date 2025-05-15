
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Check } from "lucide-react";

const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setEmail("");
    }, 800);
  };

  return (
    <section id="waitlist" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Waitlist</h2>
          <p className="text-lg text-gray-600 mb-8">
            Be the first to know when InvoiceFlow launches. Join our waitlist to receive exclusive updates and early access opportunities.
          </p>
          
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="relative flex-grow">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="bg-primary hover:bg-primary/90 py-3"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Join Waitlist"}
              </Button>
            </form>
          ) : (
            <div className="bg-green-50 border border-green-100 rounded-lg p-6 text-center animate-fade-in">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                <Check className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Thanks for joining our waitlist!</h3>
              <p className="text-gray-600">
                We'll keep you updated on our progress and let you know when we're ready to launch.
              </p>
            </div>
          )}
          
          <p className="mt-4 text-sm text-gray-500">
            We respect your privacy and won't share your information with third parties.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WaitlistForm;

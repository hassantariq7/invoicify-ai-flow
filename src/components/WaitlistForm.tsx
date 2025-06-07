
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Check } from "lucide-react";
import { addToWaitlist, checkWaitlistStatus } from "@/lib/database";
import { useToast } from "@/hooks/use-toast";
import ReCAPTCHA from "react-google-recaptcha";

const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Verify reCAPTCHA
      const recaptchaToken = recaptchaRef.current?.getValue();
      if (!recaptchaToken) {
        toast({
          title: "Verification required",
          description: "Please complete the reCAPTCHA verification.",
          variant: "destructive"
        });
        setLoading(false);
        return;
      }

      // Check if email already exists
      const { exists } = await checkWaitlistStatus(email);
      
      if (exists) {
        toast({
          title: "Already subscribed",
          description: "This email is already on our waitlist!",
          variant: "destructive"
        });
        setLoading(false);
        return;
      }

      // Add to waitlist
      const { error } = await addToWaitlist(email);
      
      if (error) {
        toast({
          title: "Error",
          description: "Failed to join waitlist. Please try again.",
          variant: "destructive"
        });
      } else {
        setSubmitted(true);
        setEmail("");
        recaptchaRef.current?.reset();
        toast({
          title: "Welcome to our waitlist!",
          description: "Check your email for a confirmation message."
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
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
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto">
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
              
              <div className="flex justify-center">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // Test key - replace with your actual site key
                />
              </div>
              
              <Button 
                type="submit" 
                className="bg-primary hover:bg-primary/90 py-3"
                disabled={loading}
              >
                {loading ? "Joining..." : "Join Waitlist"}
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

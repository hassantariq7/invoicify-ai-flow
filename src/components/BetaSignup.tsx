
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { submitBetaApplication } from "@/lib/database";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";

const BetaSignup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    reason: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

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

      const { error } = await submitBetaApplication(formData);
      
      if (error) {
        toast({
          title: "Error",
          description: "Failed to submit application. Please try again.",
          variant: "destructive"
        });
      } else {
        setSubmitted(true);
        setFormData({ name: "", email: "", company: "", role: "", reason: "" });
        recaptchaRef.current?.reset();
        toast({
          title: "Application submitted!",
          description: "We'll review your application and get back to you soon."
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
    <section id="beta" className="py-20 bg-gradient-to-b from-primary/5 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Apply for Beta Access
            </h2>
            <p className="text-lg text-gray-600">
              Get early access to InvoiceFlow and help shape the future of freelance financial management.
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="company">Company/Organization</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="role">Your Role *</Label>
                  <Select onValueChange={(value) => handleInputChange("role", value)} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="freelancer">Freelancer</SelectItem>
                      <SelectItem value="small-business-owner">Small Business Owner</SelectItem>
                      <SelectItem value="consultant">Consultant</SelectItem>
                      <SelectItem value="agency-owner">Agency Owner</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="reason">Why do you want to join our beta? *</Label>
                <Textarea
                  id="reason"
                  value={formData.reason}
                  onChange={(e) => handleInputChange("reason", e.target.value)}
                  placeholder="Tell us about your current challenges with invoicing and financial management..."
                  required
                  rows={4}
                />
              </div>

              <div className="flex justify-center">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey="6LfCJFkrAAAAANy_qX9J5Cmojcfw9NjZhuY_jobF"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 py-6 text-lg"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit Beta Application"}
              </Button>
            </form>
          ) : (
            <div className="bg-green-50 border border-green-100 rounded-lg p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                <CheckCircle className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Application Submitted!</h3>
              <p className="text-gray-600 mb-6">
                Thank you for your interest in InvoiceFlow. We'll review your application and get back to you within 48 hours.
              </p>
              <Button 
                onClick={() => setSubmitted(false)}
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5"
              >
                Submit Another Application
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BetaSignup;

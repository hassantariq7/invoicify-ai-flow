
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { submitBetaApplication } from "@/lib/database";
import { useToast } from "@/hooks/use-toast";

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const { error } = await submitBetaApplication(formData);
      
      if (error) {
        toast({
          title: "Error",
          description: "Failed to submit application. Please try again.",
          variant: "destructive"
        });
      } else {
        setSubmitted(true);
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
    <section id="beta" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Apply for Beta Access</h2>
            <p className="text-lg text-gray-600">
              We're looking for passionate early adopters to help shape the future of InvoiceFlow. Apply below to become a beta tester.
            </p>
          </div>

          {!submitted ? (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company / Business Name</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">Your Role *</label>
                    <select
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      required
                    >
                      <option value="">Select your role</option>
                      <option value="freelancer">Freelancer</option>
                      <option value="small-business-owner">Small Business Owner</option>
                      <option value="accounting">Accounting / Finance</option>
                      <option value="consultant">Consultant</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">Why do you want to join our beta? *</label>
                  <textarea
                    id="reason"
                    name="reason"
                    rows={4}
                    value={formData.reason}
                    onChange={handleChange}
                    className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    required
                  ></textarea>
                </div>
                <div className="text-center">
                  <Button 
                    type="submit" 
                    className="bg-primary hover:bg-primary/90 px-8 py-3 w-full sm:w-auto"
                    disabled={loading}
                  >
                    {loading ? "Submitting Application..." : "Submit Application"}
                  </Button>
                </div>
              </form>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-lg p-8 text-center animate-fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Application Received!</h3>
              <p className="text-gray-600 mb-6">
                Thank you for applying to join our beta program. We're reviewing applications and will be in touch soon if you're selected.
              </p>
              <div className="border-t border-gray-100 pt-6">
                <p className="text-sm text-gray-500">
                  If you have any questions about your application, please contact us at <span className="text-primary">beta@invoiceflow.com</span>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BetaSignup;

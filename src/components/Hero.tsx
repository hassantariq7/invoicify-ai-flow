
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center animate-fade-in">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-primary text-sm font-semibold mb-8">
            Coming Soon — Join Our Waitlist
          </span>
          <h1 className="mb-6">
            <span className="gradient-text">Revolutionize</span> Your Freelance Finances
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            The all-in-one financial platform for freelancers and small businesses. Powerful invoicing, time tracking, and AI-driven insights in one seamless experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg" size="lg" asChild>
              <a href="#beta">Apply for Beta Access</a>
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/5 px-8 py-6 text-lg" size="lg" asChild>
              <a href="#waitlist">Join Waitlist</a>
            </Button>
          </div>
        </div>

        <div className="mt-16 md:mt-24 max-w-5xl mx-auto relative">
          <div className="aspect-[16/9] rounded-lg overflow-hidden shadow-xl border border-gray-200">
            <div className="w-full h-full bg-gradient-to-tr from-gray-800 to-gray-900 flex items-center justify-center">
              <div className="text-white text-center p-8">
                <div className="text-2xl font-bold mb-4">InvoiceFlow Dashboard Preview</div>
                <p className="text-gray-300">Coming soon in our beta release</p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-3 -left-3 -right-3 h-12 bg-gradient-to-t from-white to-transparent z-10"></div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/30 rounded-full opacity-20 blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;

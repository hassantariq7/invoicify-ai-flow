
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center animate-fade-in">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-primary text-sm font-semibold mb-8">
            Coming Soon — Join Our Waitlist
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent">Revolutionize</span> Your Freelance Finances
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
      </div>
    </section>
  );
};

export default Hero;

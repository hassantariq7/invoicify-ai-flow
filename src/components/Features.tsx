
import { Clock, DollarSign, Users, BarChart3, Shield, Zap } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: DollarSign,
      title: "Smart Invoicing",
      description: "Create, edit, and manage dynamic invoices with crypto payment options and smart contracts for recurring billing."
    },
    {
      icon: Clock,
      title: "Time & Expense Tracking",
      description: "Simple time-tracking linked to projects with automated expense categorization and profit margin calculations."
    },
    {
      icon: Users,
      title: "Client Management",
      description: "Comprehensive client records with project management and dedicated client portals for seamless collaboration."
    },
    {
      icon: BarChart3,
      title: "AI-Powered Analytics",
      description: "Cash flow forecasts, profitability insights, and smart payment term recommendations powered by AI."
    },
    {
      icon: Shield,
      title: "Tax & Compliance",
      description: "Automatic tax calculations, one-click reports, and GDPR/CCPA-compliant data privacy tools."
    },
    {
      icon: Zap,
      title: "Automation",
      description: "Smart reminders, automated categorization, and AI-driven workflow optimization to save time."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Everything You Need to Scale Your Business
          </h2>
          <p className="text-lg text-gray-600">
            Powerful features designed specifically for freelancers and small businesses
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

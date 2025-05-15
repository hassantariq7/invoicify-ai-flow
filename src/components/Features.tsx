
import { 
  FileText, 
  Clock, 
  Users, 
  BarChart, 
  FileCheck 
} from "lucide-react";

const featuresList = [
  {
    icon: <FileText className="h-8 w-8 text-primary" />,
    title: "Invoicing System",
    description: "Create dynamic invoices with custom templates, multi-currency support, and crypto payment options. Set up recurring invoices with blockchain-powered smart contracts.",
    color: "bg-blue-50"
  },
  {
    icon: <Clock className="h-8 w-8 text-secondary" />,
    title: "Time Tracking & Expenses",
    description: "Track time and expenses effortlessly, categorize by project, and automatically generate invoices based on tracked hours and logged expenses.",
    color: "bg-green-50"
  },
  {
    icon: <Users className="h-8 w-8 text-accent" />,
    title: "Client & Project Management",
    description: "Manage clients and projects in one place with detailed records, payment history, and a dedicated client portal for seamless collaboration.",
    color: "bg-violet-50"
  },
  {
    icon: <BarChart className="h-8 w-8 text-primary" />,
    title: "AI-Powered Analytics",
    description: "Leverage AI for cash flow forecasting, profitability insights, and smart reminders tailored to client behavior patterns.",
    color: "bg-blue-50"
  },
  {
    icon: <FileCheck className="h-8 w-8 text-secondary" />,
    title: "Tax & Compliance",
    description: "Automate tax calculations based on location, generate tax reports with one click, and ensure GDPR compliance with data privacy tools.",
    color: "bg-green-50"
  }
];

const Features = () => {
  return (
    <section id="features" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Powerful Features for Modern Businesses</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our comprehensive suite of tools gives you everything you need to manage your finances, clients, and projects in one place.
          </p>
        </div>

        <div className="card-grid">
          {featuresList.map((feature, index) => (
            <div
              key={index}
              className={`${feature.color} feature-card animate-fade-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

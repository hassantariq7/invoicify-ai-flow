
import { Check } from "lucide-react";

const modules = [
  {
    title: "Invoicing System",
    features: [
      "Create and edit dynamic invoices with customizable templates",
      "Client-specific rates and tax settings",
      "Multiple currencies with real-time exchange rates",
      "Crypto payment options with QR codes",
      "Recurring invoices with smart contracts",
      "Partial payments and 'Pay Now' options"
    ]
  },
  {
    title: "Time Tracking & Expense Management",
    features: [
      "Simple time-tracking module linked to invoices",
      "Log expenses manually or via receipts",
      "Categorize expenses by type and project",
      "Automatic profit margin calculations",
      "Generate reports by time period or category"
    ]
  },
  {
    title: "Client & Project Management",
    features: [
      "Comprehensive client records and payment history",
      "Client-specific rates and preferred currency",
      "Project milestones and timeline tracking",
      "Dedicated client portal for invoice access",
      "Secure document sharing and communication"
    ]
  },
  {
    title: "AI-Powered Analytics & Automation",
    features: [
      "AI-generated cash flow forecasts",
      "Client and project profitability insights",
      "Predictive payment term optimization",
      "Automatic categorization of line items",
      "Smart reminders based on client behavior"
    ]
  },
  {
    title: "Tax & Compliance",
    features: [
      "Automatic tax calculations by location",
      "One-click tax reports for multiple jurisdictions",
      "GDPR and CCPA-compliant data privacy tools",
      "Document retention policies and management",
      "Audit trail for all financial transactions"
    ]
  }
];

const ProductSpecification = () => {
  return (
    <section id="product" className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Product Specification</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Designed with freelancers and small businesses in mind, our platform offers comprehensive tools to streamline your financial workflows.
          </p>
        </div>

        <div className="space-y-12">
          {modules.map((module, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden animate-fade-in">
              <div className="bg-gradient-to-r from-primary to-primary/80 px-6 py-4">
                <h3 className="text-xl font-bold text-white">{module.title}</h3>
              </div>
              <div className="p-6">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {module.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="mt-1 mr-3">
                        <Check className="h-5 w-5 text-secondary" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            Our product is designed with performance optimization and data integrity as core principles. 
            We prioritize user experience to ensure you can efficiently accomplish all your financial tasks 
            with minimal friction.
          </p>
          <p className="text-primary font-medium">
            Implementation priority is high for all modules to deliver a complete solution from day one.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductSpecification;

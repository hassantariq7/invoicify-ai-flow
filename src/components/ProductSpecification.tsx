
const ProductSpecification = () => {
  const specifications = [
    {
      category: "Invoicing System",
      features: [
        "Dynamic invoice templates with customization",
        "Multi-currency support with real-time exchange rates",
        "Crypto payment integration (wallet addresses, QR codes)",
        "Blockchain-powered smart contracts for recurring invoices",
        "Partial payments and instant 'Pay Now' links"
      ]
    },
    {
      category: "Time Tracking & Expenses",
      features: [
        "Simple time-tracking module linked to invoices",
        "Manual and receipt-based expense logging",
        "Automated expense categorization by project/client",
        "Real-time profit margin calculations",
        "Project milestone tracking"
      ]
    },
    {
      category: "Client & Project Management",
      features: [
        "Comprehensive client records and payment history",
        "Project management with milestone tracking",
        "Dedicated client portal for invoice management",
        "Client-specific rates and currency preferences",
        "Automated client communication workflows"
      ]
    },
    {
      category: "AI-Powered Analytics",
      features: [
        "Cash flow forecasting based on payment trends",
        "Profitability insights by client/project/invoice",
        "Optimal payment term predictions",
        "Smart line item categorization",
        "Behavioral-based client reminders"
      ]
    },
    {
      category: "Tax & Compliance",
      features: [
        "Automatic tax calculations (VAT, GST, etc.)",
        "One-click tax report generation",
        "Multi-jurisdiction compliance support",
        "GDPR and CCPA-compliant data tools",
        "Automated audit trail maintenance"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Product Specifications
          </h2>
          <p className="text-lg text-gray-600">
            Detailed breakdown of InvoiceFlow's comprehensive feature set
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {specifications.map((spec, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-primary">{spec.category}</h3>
              <ul className="space-y-2">
                {spec.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSpecification;

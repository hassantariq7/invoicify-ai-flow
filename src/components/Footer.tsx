
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <div className="text-2xl font-bold mb-2">InvoiceFlow</div>
            <p className="text-gray-400 max-w-xs">
              Transform your freelance finances with our all-in-one platform for invoicing, time tracking, and financial insights.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold mb-3 uppercase tracking-wider">Features</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Invoicing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Time Tracking</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Client Management</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Analytics</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold mb-3 uppercase tracking-wider">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold mb-3 uppercase tracking-wider">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 InvoiceFlow. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-4">
            <a href="mailto:hello@invoiceflow.com" className="text-gray-400 hover:text-white transition-colors flex items-center">
              <Mail className="h-5 w-5 mr-2" />
              hello@invoiceflow.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

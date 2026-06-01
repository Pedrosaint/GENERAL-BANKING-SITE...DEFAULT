import {
  Building,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-emerald-500 to-green-600 p-2 rounded-lg">
                <Building className="h-8 w-8 text-white" />
              </div>
              <span className="text-2xl font-bold">SecureBank</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Your trusted financial partner, providing secure and innovative
              banking solutions for over a decade. Join millions of satisfied
              customers worldwide.
            </p>
            <div className="flex space-x-4">
              <button className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </button>
              <button className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </button>
              <button className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </button>
              <button className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => setCurrentPage("home")}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage("about")}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage("products")}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Products
                </button>
              </li>
              <li>
                <button className="text-gray-300 hover:text-white transition-colors duration-200">
                  Support
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-emerald-400" />
                <span className="text-gray-300">+1 (361) 419-5437</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-emerald-400" />
                <span className="text-gray-300">support@securebank.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-emerald-400" />
                <span className="text-gray-300">
                  Address: 615 N Upper Broadway, Corpus Christi, TX
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} SecureBank. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Privacy Policy
            </button>
            <button className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Terms of Service
            </button>
            <button className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Cookie Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

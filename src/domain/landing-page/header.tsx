import { Menu, X, Building, User } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  handleLogin: () => void;
  handleOpenAccount: () => void;
}

export default function Header({
  currentPage,
  setCurrentPage,
  handleLogin,
  handleOpenAccount,
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-emerald-500 to-green-600 p-2 rounded-lg">
              <Building className="h-8 w-8 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">SecureBank</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => setCurrentPage("home")}
              className={`text-lg font-medium transition-colors duration-200 ${
                currentPage === "home"
                  ? "text-emerald-600 border-b-2 border-emerald-600"
                  : "text-gray-700 hover:text-emerald-600"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setCurrentPage("about")}
              className={`text-lg font-medium transition-colors duration-200 ${
                currentPage === "about"
                  ? "text-emerald-600 border-b-2 border-emerald-600"
                  : "text-gray-700 hover:text-emerald-600"
              }`}
            >
              About Us
            </button>
            <button
              onClick={() => setCurrentPage("products")}
              className={`text-lg font-medium transition-colors duration-200 ${
                currentPage === "products"
                  ? "text-emerald-600 border-b-2 border-emerald-600"
                  : "text-gray-700 hover:text-emerald-600"
              }`}
            >
              Products
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={handleLogin}
              className="text-emerald-600 hover:text-emerald-700 font-medium transition-colors duration-200"
            >
              Login
            </button>
            <button
              onClick={handleOpenAccount}
              className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-2 rounded-lg font-medium hover:from-emerald-600 hover:to-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Open Account
            </button>
            <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center">
              <User className="h-5 w-5 text-white" />
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => {
                  setCurrentPage("home");
                  setIsMenuOpen(false);
                }}
                className="text-left text-lg font-medium text-gray-700 hover:text-emerald-600 transition-colors duration-200"
              >
                Home
              </button>
              <button
                onClick={() => {
                  setCurrentPage("about");
                  setIsMenuOpen(false);
                }}
                className="text-left text-lg font-medium text-gray-700 hover:text-emerald-600 transition-colors duration-200"
              >
                About Us
              </button>
              <button
                onClick={() => {
                  setCurrentPage("products");
                  setIsMenuOpen(false);
                }}
                className="text-left text-lg font-medium text-gray-700 hover:text-emerald-600 transition-colors duration-200"
              >
                Products
              </button>
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                <button
                  onClick={() => {
                    handleLogin();
                    setIsMenuOpen(false);
                  }}
                  className="text-left text-emerald-600 hover:text-emerald-700 font-medium transition-colors duration-200"
                >
                  Login
                </button>
                <button
                  onClick={() => {
                    handleOpenAccount();
                    setIsMenuOpen(false);
                  }}
                  className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-2 rounded-lg font-medium hover:from-emerald-600 hover:to-green-700 transition-all duration-200 shadow-lg text-left"
                >
                  Open Account
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

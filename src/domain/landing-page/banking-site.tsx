import { useState } from "react";
import Header from "../landing-page/header";
import HomePage from "../landing-page/home-page";
import AboutPage from "../landing-page/about-page";
import ProductsPage from "../landing-page/product-page";
import AccountForm from "../landing-page/account-form";
import Footer from "../landing-page/footer";

export default function BankingLandingPage() {
  const [currentPage, setCurrentPage] = useState("home");
  const [showAccountForm, setShowAccountForm] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const handleOpenAccount = () => {
    setShowAccountForm(true);
    setIsLogin(false);
  };

  const handleLogin = () => {
    setShowAccountForm(true);
    setIsLogin(true);
  };

  const closeAccountForm = () => {
    setShowAccountForm(false);
    setIsLogin(false);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage handleOpenAccount={handleOpenAccount} />;
      case "about":
        return <AboutPage handleOpenAccount={handleOpenAccount} />;
      case "products":
        return <ProductsPage handleOpenAccount={handleOpenAccount} />;
      default:
        return <HomePage handleOpenAccount={handleOpenAccount} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        handleLogin={handleLogin}
        handleOpenAccount={handleOpenAccount}
      />
      <main>{renderCurrentPage()}</main>
      <Footer setCurrentPage={setCurrentPage} />
      {showAccountForm && (
        <AccountForm
          isLogin={isLogin}
          setIsLogin={setIsLogin}
          closeAccountForm={closeAccountForm}
        />
      )}
    </div>
  );
}

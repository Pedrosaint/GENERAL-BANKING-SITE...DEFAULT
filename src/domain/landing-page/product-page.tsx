import {
  PiggyBank,
  CreditCard,
  TrendingUp,
  Building,
  Smartphone,
  Lock,
  CheckCircle,
} from "lucide-react";

interface ProductsPageProps {
  handleOpenAccount: () => void;
}

export default function ProductsPage({ }: ProductsPageProps) {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-in fade-in duration-1000">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Our Products
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive financial solutions designed to meet all your banking
            needs, from everyday transactions to long-term investments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: PiggyBank,
              title: "Savings Account",
              description:
                "High-yield savings account with competitive interest rates and no minimum balance requirements.",
              features: [
                "2.5% APY",
                "No monthly fees",
                "Mobile banking",
                "ATM access worldwide",
              ],
              color: "from-emerald-500 to-green-600",
            },
            {
              icon: CreditCard,
              title: "Credit Cards",
              description:
                "Reward credit cards with cashback, travel points, and exclusive benefits for cardholders.",
              features: [
                "Up to 3% cashback",
                "No annual fee",
                "Travel insurance",
                "24/7 fraud protection",
              ],
              color: "from-green-500 to-emerald-600",
            },
            {
              icon: TrendingUp,
              title: "Investment Services",
              description:
                "Professional investment management and advisory services to grow your wealth over time.",
              features: [
                "Portfolio management",
                "Financial planning",
                "Low fees",
                "Expert advisors",
              ],
              color: "from-emerald-600 to-green-500",
            },
            {
              icon: Building,
              title: "Business Banking",
              description:
                "Comprehensive business banking solutions for small businesses and enterprises.",
              features: [
                "Business checking",
                "Merchant services",
                "Payroll solutions",
                "Business loans",
              ],
              color: "from-green-600 to-emerald-500",
            },
            {
              icon: Smartphone,
              title: "Mobile Banking",
              description:
                "Full-featured mobile app with all banking services at your fingertips.",
              features: [
                "Mobile deposits",
                "Bill pay",
                "Money transfers",
                "Account alerts",
              ],
              color: "from-emerald-500 to-green-500",
            },
            {
              icon: Lock,
              title: "Secure Vault",
              description:
                "Digital vault for storing important documents and sensitive financial information.",
              features: [
                "256-bit encryption",
                "Document storage",
                "Secure sharing",
                "Backup & recovery",
              ],
              color: "from-green-500 to-emerald-500",
            },
          ].map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden animate-in slide-in-from-bottom duration-1000"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`bg-gradient-to-r ${product.color} p-6`}>
                <product.icon className="h-12 w-12 text-white mb-4" />
                <h3 className="text-2xl font-bold text-white">
                  {product.title}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">{product.description}</p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-gray-700"
                    >
                      <CheckCircle className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white py-3 rounded-lg font-semibold hover:from-emerald-600 hover:to-green-700 transition-all duration-200">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gray-50 rounded-2xl p-12 text-center animate-in fade-in duration-1000">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need Help Choosing?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our financial experts are here to help you find the perfect banking
            solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-emerald-600 hover:to-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
              Schedule Consultation
            </button>
            <button className="border-2 border-emerald-500 text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-50 transition-all duration-200">
              Compare Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

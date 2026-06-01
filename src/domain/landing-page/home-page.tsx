import { Shield, Zap, Clock, DollarSign, ArrowRight, Star } from "lucide-react";
import CountUp from "react-countup";

interface HomePageProps {
  handleOpenAccount: () => void;
}

export default function HomePage({ handleOpenAccount }: HomePageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-green-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-in slide-in-from-left duration-1000">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Your Financial
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-600">
                  {" "}
                  Future
                </span>
                <br />
                Starts Here
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Experience banking reimagined with cutting-edge technology,
                unmatched security, and personalized financial solutions
                tailored just for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleOpenAccount}
                  className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-emerald-600 hover:to-green-700 transform hover:scale-105 transition-all duration-200 shadow-xl flex items-center justify-center space-x-2"
                >
                  <span>Get Started Today</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
                <button className="border-2 border-emerald-500 text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-50 transition-all duration-200">
                  Learn More
                </button>
              </div>
            </div>
            <div className="animate-in slide-in-from-right duration-1000">
              <img
                src="/Wallet.gif"
                alt="Finance"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose SecureBank?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine innovative technology with traditional banking values
              to provide you with the best financial experience.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Bank-Grade Security",
                description:
                  "Your money and data are protected with military-grade encryption and advanced fraud detection.",
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description:
                  "Instant transfers, real-time notifications, and lightning-fast transaction processing.",
              },
              {
                icon: Clock,
                title: "24/7 Support",
                description:
                  "Round-the-clock customer support whenever you need assistance with your banking needs.",
              },
              {
                icon: DollarSign,
                title: "No Hidden Fees",
                description:
                  "Transparent pricing with no hidden fees. What you see is what you get, always.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-emerald-50 to-green-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-in fade-in duration-1000"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="bg-gradient-to-r from-emerald-500 to-green-600 p-3 rounded-lg w-fit mb-4">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-500 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "2M+", label: "Happy Customers" },
              { number: "$50B+", label: "Assets Under Management" },
              { number: "99.9%", label: "Uptime Guarantee" },
              { number: "150+", label: "Countries Served" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-white animate-in fade-in duration-1000"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-4xl lg:text-5xl font-bold mb-2">
                  <CountUp
                    end={parseFloat(stat.number.replace(/[^0-9.]/g, ""))}
                    duration={2}
                    separator=","
                    suffix={stat.number.match(/[^\d.]+$/)?.[0] || ""}
                  />
                </div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Small Business Owner",
                content:
                  "SecureBank has transformed how I manage my business finances. The interface is intuitive and the support is exceptional.",
                avatar: "/placeholder.svg?height=60&width=60",
              },
              {
                name: "Michael Chen",
                role: "Software Engineer",
                content:
                  "Finally, a bank that understands technology. The mobile app is fantastic and the security features give me peace of mind.",
                avatar: "/placeholder.svg?height=60&width=60",
              },
              {
                name: "Emily Rodriguez",
                role: "Marketing Director",
                content:
                  "The customer service is outstanding. They're always available when I need them and solve issues quickly.",
                avatar: "/placeholder.svg?height=60&width=60",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-in slide-in-from-bottom duration-1000"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-500 text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

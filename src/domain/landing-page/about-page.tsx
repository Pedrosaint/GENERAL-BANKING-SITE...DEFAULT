import { Users, Shield, Award } from "lucide-react";

interface AboutPageProps {
  handleOpenAccount: () => void;
}

export default function AboutPage({ handleOpenAccount }: AboutPageProps) {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-in fade-in duration-1000">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            About SecureBank
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Founded in 2010, we've been at the forefront of digital banking
            innovation, serving millions of customers worldwide with secure,
            reliable, and innovative financial solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="animate-in slide-in-from-left duration-1000">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              To democratize banking by making financial services accessible,
              transparent, and secure for everyone. We believe that everyone
              deserves access to world-class banking services, regardless of
              their location or background.
            </p>
            <p className="text-lg text-gray-600">
              Through cutting-edge technology and unwavering commitment to
              customer service, we're building the future of banking today.
            </p>
          </div>
          <div className="animate-in slide-in-from-right duration-1000">
            <img
              src="/Investing.gif"
              alt="Investing"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: Users,
              title: "Customer First",
              description:
                "Every decision we make is centered around providing the best possible experience for our customers.",
            },
            {
              icon: Shield,
              title: "Security & Trust",
              description:
                "We employ the highest standards of security to protect your financial information and transactions.",
            },
            {
              icon: Award,
              title: "Innovation",
              description:
                "We continuously innovate to bring you the latest in banking technology and financial solutions.",
            },
          ].map((value, index) => (
            <div
              key={index}
              className="text-center p-8 animate-in fade-in duration-1000"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="bg-gradient-to-r from-emerald-500 to-green-600 p-4 rounded-full w-fit mx-auto mb-6">
                <value.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl p-12 text-center text-white animate-in slide-in-from-bottom duration-1000">
          <h2 className="text-3xl font-bold mb-4">Join Our Growing Family</h2>
          <p className="text-xl mb-8 opacity-90">
            Over 2 million customers trust us with their financial future. Be
            part of the revolution.
          </p>
          <button
            onClick={handleOpenAccount}
            className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Open Your Account Today
          </button>
        </div>
      </div>
    </div>
  );
}

import { Button } from "../../components/ui/Button";
import { NavLink } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-blue-50 to-white text-center">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
          Study Smarter, Together 💡
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-10">
          Join a real-time AI-powered study collaboration platform to plan,
          learn, and grow — together.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <NavLink to="/signup">
            <Button size="lg">Get Started</Button>
          </NavLink>

          <NavLink to="/about">
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </NavLink>
        </div>
      </div>
    </section>
  );
}

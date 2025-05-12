// app/pages/Home.tsx
import type { Route } from "./+types/home";
import Features from "@/components/Section/Features";
import HowItWorks from "@/components/Section/HowItWorks";
import TestimonialSection from "@/components/Section/Testimonial";
import FeaturedCourses from "@/components/Section/FeaturedCourses";
import CallToAction from "@/components/Section/CallToAction";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/Section/HeroSection";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "StudyTogether" },
    {
      name: "description",
      content:
        "Welcome to StudyTogether! It's an AI-powered study collaboration system for students with real-time tools and smart group learning.",
    },
  ];
}

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white text-gray-900">
      <Header></Header>
      <HeroSection></HeroSection>
      <main className="">
        <Features />
        <HowItWorks />
        <TestimonialSection />
        <FeaturedCourses />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

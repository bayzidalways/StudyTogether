import type { Route } from "./+types/home";
import Header from "../components/Header";
import HeroSection from "@/components/Section/HeroSection";
import Features from "@/components/Section/Features";
import HowItWorks from "@/components/Section/HowItWorks";
import TestimonialSection from "@/components/Section/Testimonial";
import FeaturedCourses from "@/components/Section/FeaturedCourses";
import CallToAction from "@/components/Section/CallToAction";
import Footer from "@/components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "StudyTogether" },
    {
      name: "description",
      content:
        "Welcome to StudyTogether! It's AI Powered Study Collaborative System. Here only Students can access this .",
    },
  ];
}

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection></HeroSection>
      <Features></Features>
      <HowItWorks></HowItWorks>
      <TestimonialSection></TestimonialSection>
      <FeaturedCourses></FeaturedCourses>
      <CallToAction></CallToAction>
      <Footer></Footer>
    </>
  );
}

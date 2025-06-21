// app/pages/Home/HomePage.tsx
import type { Route } from "../../routes/+types";
import HeroSection from "~/components/section/HeroSection";
import Features from "~/components/section/Features";
import TestimonialSection from "~/components/section/TestimonialSection";
import FeaturedUpdate from "~/components/section/FeaturedUpdate";
import CallToAction from "~/components/section/CallToAction";
import AIChatBot from "~/components/section/AIChatBot";

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
    <>
      <HeroSection />
      <main>
        <Features />
        <AIChatBot />
        <TestimonialSection />
        <FeaturedUpdate />
        <CallToAction />
      </main>
    </>
  );
}

import type { Route } from "./+types/home";
import Header from "../components/Header";
import HeroSection from "@/components/Section/HeroSection";

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
    </>
  );
}

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import MainSection from "@/components/sections/MainSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full min-h-screen h-full">
      <Navbar />
      <MainSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
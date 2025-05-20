//import Image from "next/image";
import Navbar from "@/components/Navbar";
import Brandsection from "@/components/landing/Brandsection";
import CaseStudiesSection from "@/components/landing/Casestudy";
import Empower from "@/components/landing/Empowering";
import Footer from "@/components/landing/Footer";
import Hero from "@/components/landing/Hero";
import HowSection from "@/components/landing/Howsection";
import Technology from "@/components/landing/Technology";
import Testimonials from "@/components/landing/Testimonials";
import Why from "@/components/landing/Why";
export default function Home() {
  return (
    <div className="min-h-screen max-w-screen ">
      <main>
        <Navbar />
        <Hero/>
        <Technology/>
        <Empower/>
        <Testimonials/>
        <Why/>
        <CaseStudiesSection/>
        <HowSection/>
        <Brandsection/>
        <Footer/>
      </main>
    </div>
  );
}

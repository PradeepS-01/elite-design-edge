import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { Courses } from "@/components/site/Courses";
import { WhyUs } from "@/components/site/WhyUs";
import { Faculty } from "@/components/site/Faculty";
import { Testimonials } from "@/components/site/Testimonials";
import { AppPromo } from "@/components/site/AppPromo";
import { Dashboard } from "@/components/site/Dashboard";
import { Gallery } from "@/components/site/Gallery";
import { Faq } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "VidyaEdge — Tamil Nadu's Leading Coaching Institute" },
      { name: "description", content: "NEET, JEE, TNPSC, IELTS and more — taught by India's top mentors with smart classrooms, AI-powered tests and a parent dashboard." },
      { property: "og:title", content: "VidyaEdge — Build your future" },
      { property: "og:description", content: "Tamil Nadu's #1 coaching institute. NEET, JEE, TNPSC, IELTS, Spoken English & Computer courses." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap" },
    ],
  }),
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-clip">
      <Navbar />
      <Hero />
      <Stats />
      <Courses />
      <WhyUs />
      <Faculty />
      <Testimonials />
      <AppPromo />
      <Dashboard />
      <Gallery />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}

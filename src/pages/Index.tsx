import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LineupSection from "@/components/LineupSection";
import ScheduleSection from "@/components/ScheduleSection";
import ExperienceSection from "@/components/ExperienceSection";
import TicketsSection from "@/components/TicketsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <LineupSection />
    <ScheduleSection />
    <ExperienceSection />
    <TicketsSection />
    <FAQSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;

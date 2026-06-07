import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ProblemSection from '@/components/sections/ProblemSection';
import CourseSection from '@/components/sections/CourseSection';
import LearningPathSection from '@/components/sections/LearningPathSection';
import CurriculumSection from '@/components/sections/CurriculumSection';
import ProjectShowcaseSection from '@/components/sections/ProjectShowcaseSection';
import BenefitsSection from '@/components/sections/BenefitsSection';
import TargetStudentSection from '@/components/sections/TargetStudentSection';
import ScheduleSection from '@/components/sections/ScheduleSection';
import RegistrationSection from '@/components/sections/RegistrationSection';
import FAQSection from '@/components/sections/FAQSection';
import FinalCTASection from '@/components/sections/FinalCTASection';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <CourseSection />
        <LearningPathSection />
        <CurriculumSection />
        <ProjectShowcaseSection />
        <BenefitsSection />
        <TargetStudentSection />
        <ScheduleSection />
        <RegistrationSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}

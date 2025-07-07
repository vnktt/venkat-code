import { useEffect } from 'react';
import { HeroSection } from '@/components/HeroSection';
import { TechStackGrid } from '@/components/TechStackGrid';
import { ExperienceTimeline } from '@/components/ExperienceTimeline';
import { ProjectsSection } from '@/components/ProjectsSection';
import { AIInnovationSection } from '@/components/AIInnovationSection';
import { AboutSection } from '@/components/AboutSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { ContactSection } from '@/components/ContactSection';

const Index = () => {
  useEffect(() => {
    // Smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Set up intersection observer for scroll animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.fade-in, .slide-up');
    animatedElements.forEach(el => observer.observe(el));

    return () => {
      observer.disconnect();
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Tech Stack */}
      <TechStackGrid />
      
      {/* Experience Timeline */}
      <ExperienceTimeline />
      
      {/* Projects */}
      <ProjectsSection />
      
      {/* AI Innovation */}
      <AIInnovationSection />
      
      {/* About */}
      <AboutSection />
      
      {/* Testimonials */}
      <TestimonialsSection />
      
      {/* Contact */}
      <ContactSection />
    </div>
  );
};

export default Index;

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      <div className="section-container relative z-10">
        <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'fade-in animate' : 'fade-in'}`}>
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-foreground mb-8 tracking-tight">
            Hi, I'm{' '}
            <span className="font-medium text-primary">Venkatesh</span>
            <br />
            <span className="text-3xl md:text-4xl lg:text-5xl text-muted-foreground font-light">
              Java Developer & AI Enthusiast
            </span>
          </h1>
          
          {/* Subtext */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            I build scalable, cloud-native backend systems and integrate intelligent AI solutions to solve real-world problems.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="btn-hero text-lg px-10 py-4"
            >
              View Projects
            </Button>
            
            <Button 
              variant="outline"
              onClick={() => window.open('https://www.linkedin.com/in/venkatesh-kalakuntla/', '_blank')}
              className="btn-outline text-lg px-10 py-4 group"
            >
              Connect on LinkedIn
              <ExternalLink className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-muted-foreground to-transparent opacity-50" />
      </div>
    </section>
  );
}
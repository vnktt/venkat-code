import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';
import aiImage from '@/assets/ai-innovation.jpg';

export function AIInnovationSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={sectionRef} className="section-spacing bg-muted/20">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div className={`transition-all duration-700 ${isVisible ? 'slide-up animate' : 'slide-up'}`}>
            <div className="flex items-center mb-6">
              <Sparkles className="w-8 h-8 text-primary mr-3" />
              <h2 className="text-4xl md:text-5xl font-light text-foreground">
                Merging AI with Engineering
              </h2>
            </div>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              I experiment with tools like ChatGPT, Claude AI, and LangChain to build smart, 
              adaptable features inside traditional web applications.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  Intelligent document analysis and processing systems
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  Natural language interfaces for complex backend operations
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  AI-powered automation within enterprise applications
                </p>
              </div>
            </div>
            
            <Button 
              onClick={scrollToContact}
              className="btn-hero"
            >
              Build Smart With Me
            </Button>
          </div>
          
          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'slide-up animate' : 'slide-up'}`}>
            <div className="relative">
              <img 
                src={aiImage}
                alt="AI Innovation Illustration"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
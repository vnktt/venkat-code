import { useEffect, useRef, useState } from 'react';
import { User, Quote } from 'lucide-react';

export function AboutSection() {
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

  return (
    <section ref={sectionRef} className="section-spacing bg-background">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'fade-in animate' : 'fade-in'}`}>
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
              Who I Am
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className={`lg:col-span-1 transition-all duration-700 delay-200 ${isVisible ? 'slide-up animate' : 'slide-up'}`}>
              <div className="w-48 h-48 mx-auto bg-gradient-to-br from-primary/20 to-primary/5 rounded-full 
                             flex items-center justify-center border-4 border-primary/10">
                <User className="w-24 h-24 text-primary/60" />
              </div>
            </div>
            
            <div className={`lg:col-span-2 transition-all duration-700 delay-400 ${isVisible ? 'slide-up animate' : 'slide-up'}`}>
              <div className="space-y-6">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  I'm a Java backend engineer based in Hyderabad with a passion for clean code, 
                  developer tools, and AI-powered solutions. I enjoy designing systems that are 
                  maintainable, scalable, and meaningful.
                </p>
                
                <div className="border-l-4 border-primary pl-6 py-4 bg-muted/30 rounded-r-lg">
                  <Quote className="w-6 h-6 text-primary mb-2" />
                  <p className="text-lg font-medium text-foreground italic">
                    "Driven by curiosity. Focused on craftsmanship."
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 pt-6">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Current Focus</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Cloud-native architectures</li>
                      <li>• AI integration patterns</li>
                      <li>• Developer experience</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Interests</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• System design</li>
                      <li>• Emerging technologies</li>
                      <li>• Open source</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
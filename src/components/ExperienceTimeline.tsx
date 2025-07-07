import { useEffect, useRef, useState } from 'react';
import { Building, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    company: 'Abbott',
    role: 'Java Developer',
    period: 'Nov 2023 – Present',
    location: 'Hyderabad',
    description: [
      'Backend healthcare systems using Spring Boot',
      'Microservices, DevOps pipelines, Agile collaboration'
    ]
  },
  {
    company: 'Virtusa',
    role: 'Software Engineer',
    period: 'May 2021 – Oct 2023',
    location: 'Chennai',
    description: [
      'Worked in Citi Bank\'s money market domain',
      'Java Full Stack development, CI/CD, software quality improvements'
    ]
  }
];

export function ExperienceTimeline() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const items = sectionRef.current?.querySelectorAll('[data-index]');
    items?.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-spacing bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            Where I've Worked
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  data-index={index}
                  className={`relative pl-20 transition-all duration-700 ${
                    visibleItems.includes(index) ? 'slide-up animate' : 'slide-up'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-4 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>
                  
                  {/* Content Card */}
                  <div className="bg-card rounded-lg p-8 border border-border hover:border-primary/30 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-medium text-foreground mb-1">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 text-primary font-medium">
                          <Building className="w-4 h-4" />
                          {exp.company}
                        </div>
                      </div>
                      
                      <div className="flex flex-col gap-1 text-muted-foreground mt-2 md:mt-0">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="text-muted-foreground flex">
                          <span className="text-primary mr-3">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
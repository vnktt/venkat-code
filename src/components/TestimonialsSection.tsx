import { useEffect, useRef, useState } from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Venkat's backend work is thoughtful, scalable, and clean. A reliable teammate.",
    author: "Former Colleague",
    role: "Virtusa",
    rating: 5
  },
  {
    quote: "He combines modern engineering with curiosity and clarity.",
    author: "Mentor",
    role: "Industry Professional",
    rating: 5
  }
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={sectionRef} className="section-spacing bg-muted/20">
      <div className="section-container">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'fade-in animate' : 'fade-in'}`}>
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            What People Say
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className={`relative transition-all duration-700 delay-300 ${isVisible ? 'slide-up animate' : 'slide-up'}`}>
            <div className="bg-card rounded-2xl p-12 border border-border shadow-lg relative overflow-hidden">
              {/* Background Quote Icon */}
              <Quote className="absolute top-8 right-8 w-16 h-16 text-primary/10" />
              
              <div className="relative z-10">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-500 ${
                      index === currentIndex ? 'opacity-100' : 'opacity-0 absolute inset-0'
                    }`}
                  >
                    <div className="text-center">
                      {/* Stars */}
                      <div className="flex justify-center gap-1 mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                        ))}
                      </div>
                      
                      {/* Quote */}
                      <blockquote className="text-2xl md:text-3xl text-foreground font-light leading-relaxed mb-8">
                        "{testimonial.quote}"
                      </blockquote>
                      
                      {/* Author */}
                      <div className="border-t border-border pt-6">
                        <p className="font-medium text-foreground text-lg">{testimonial.author}</p>
                        <p className="text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Indicators */}
            <div className="flex justify-center gap-3 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-primary' : 'bg-border hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
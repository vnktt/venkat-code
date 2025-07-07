import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Send, Github, Linkedin, Mail } from 'lucide-react';

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast({
        title: "Name is required",
        description: "Please enter your name.",
        variant: "destructive"
      });
      return false;
    }
    
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast({
        title: "Valid email is required",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return false;
    }
    
    if (!formData.message.trim() || formData.message.trim().length < 30) {
      toast({
        title: "Message too short",
        description: "Please enter a message with at least 30 characters.",
        variant: "destructive"
      });
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Thanks! I'll be in touch shortly.",
        description: "Your message has been sent successfully."
      });
      
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section ref={sectionRef} id="contact" className="section-spacing bg-background">
      <div className="section-container">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'fade-in animate' : 'fade-in'}`}>
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'slide-up animate' : 'slide-up'}`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="h-14 text-lg border-border focus:border-primary"
                  required
                />
              </div>
              
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="h-14 text-lg border-border focus:border-primary"
                  required
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Tell me about your project or just say hello..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className="min-h-32 text-lg border-border focus:border-primary resize-none"
                  required
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="btn-hero w-full h-14 text-lg"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Send className="w-5 h-5" />
                    Send Message
                  </div>
                )}
              </Button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className={`transition-all duration-700 delay-400 ${isVisible ? 'slide-up animate' : 'slide-up'}`}>
            <div className="bg-muted/30 rounded-2xl p-8">
              <h3 className="text-2xl font-medium text-foreground mb-6">
                Other ways to reach me
              </h3>
              
              <div className="space-y-6">
                <a
                  href="https://www.linkedin.com/in/venkatesh-kalakuntla/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border 
                           hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center 
                                 group-hover:bg-primary/20 transition-colors">
                    <Linkedin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">LinkedIn</p>
                    <p className="text-muted-foreground">Professional networking</p>
                  </div>
                </a>
                
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border 
                           hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center 
                                 group-hover:bg-primary/20 transition-colors">
                    <Github className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">GitHub</p>
                    <p className="text-muted-foreground">Code & projects</p>
                  </div>
                </a>
                
                <div className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">Direct communication</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="text-center mt-20 pt-8 border-t border-border">
          <p className="text-muted-foreground">
            © 2025 Venkatesh Kalakuntla • Built with love and clean code
          </p>
        </div>
      </div>
    </section>
  );
}
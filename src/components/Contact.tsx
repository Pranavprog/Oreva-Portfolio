
import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState({
    message: '',
    type: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        message: 'Please fill in all required fields',
        type: 'error',
      });
      return;
    }
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        message: 'Message sent successfully! I will get back to you soon.',
        type: 'success',
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setFormStatus({ message: '', type: '' });
      }, 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-[#131c30] to-dark-blue">
      <div className="container mx-auto">
        <h2 className="section-title text-center mb-16">Contact Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-on-scroll">
            <div className="glassmorphism rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">Your Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-muted border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-electric-blue"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">Your Email *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-muted border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-electric-blue"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-muted border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-electric-blue"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-300 mb-2">Your Message *</label>
                  <textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full bg-muted border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-electric-blue resize-none"
                    required
                  ></textarea>
                </div>
                
                {formStatus.message && (
                  <div className={`mb-6 p-3 rounded-lg ${formStatus.type === 'error' ? 'bg-red-900/50 text-red-200' : 'bg-green-900/50 text-green-200'}`}>
                    {formStatus.message}
                  </div>
                )}
                
                <button 
                  type="submit" 
                  className="px-6 py-3 rounded-lg bg-electric-blue hover:bg-blue-500 text-white font-medium transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="animate-on-scroll">
            <div className="glassmorphism rounded-xl p-8 h-full">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start">
                  <div className="bg-muted p-3 rounded-lg mr-4">
                    <Mail className="text-electric-blue" />
                  </div>
                  <div>
                    <h4 className="text-gray-300 mb-1">Email</h4>
                    <a href="mailto:pranavkumar9535@gmail.com" className="text-white hover:text-electric-blue transition-colors">
                      pranavkumar9535@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-muted p-3 rounded-lg mr-4">
                    <Phone className="text-electric-blue" />
                  </div>
                  <div>
                    <h4 className="text-gray-300 mb-1">Phone</h4>
                    <a href="tel:+919535429380" className="text-white hover:text-electric-blue transition-colors">
                      +91 953 542 9380
                    </a>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-muted p-3 rounded-full hover:bg-electric-blue/20 transition-colors"
                  aria-label="GitHub profile"
                >
                  <Github className="text-white" />
                </a>
                <a 
                  href="https://linkedin.com/in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-muted p-3 rounded-full hover:bg-electric-blue/20 transition-colors"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin className="text-white" />
                </a>
                <a 
                  href="https://instagram.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-muted p-3 rounded-full hover:bg-electric-blue/20 transition-colors"
                  aria-label="Instagram profile"
                >
                  <Instagram className="text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

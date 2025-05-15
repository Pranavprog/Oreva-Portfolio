
import React, { useState } from 'react';
import { Mail, Phone, Download, MapPin, Send } from 'lucide-react'; // MapPin for address, Send for button

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '', // Added phone to match reference
    email: '',
    subject: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState({
    message: '',
    type: '', // 'success' or 'error'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message || !formData.phone) { // Added phone validation
      setFormStatus({ message: 'Please fill in all required fields.', type: 'error' });
      return;
    }
    // Simulate form submission
    console.log("Form Data:", formData);
    setFormStatus({ message: 'Message sent successfully! I will get back to you soon.', type: 'success' });
    setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
    setTimeout(() => setFormStatus({ message: '', type: '' }), 5000);
  };

  const contactInfo = [
    { icon: <Phone size={20} />, text: "+91 953 542 9380", href: "tel:+919535429380", label: "Call" },
    { icon: <Mail size={20} />, text: "pranavkumar9535@gmail.com", href: "mailto:pranavkumar9535@gmail.com", label: "Email" },
    { icon: <MapPin size={20} />, text: "Mysuru, India", href: "#", label: "Location" }, // Placeholder location
  ];

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Contact Info */}
          <div className="animate-on-scroll lg:pr-8">
            <p className="section-title-pretext">
              <span className="text-primary text-2xl mr-2">*</span> CONTACT NOW
            </p>
            <h2 className="section-title !text-3xl md:!text-4xl mb-6">
              GET IN TOUCH TODAY
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new ideas and opportunities.
            </p>
            
            <div className="space-y-6 mb-10">
              {contactInfo.map(info => (
                <div key={info.label} className="flex items-center group">
                  <div className="bg-muted p-3 rounded-md mr-4 text-primary transition-colors group-hover:bg-primary group-hover:text-background">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-gray-300 mb-0.5 text-sm">{info.label}</h4>
                    <a href={info.href} className="text-white hover:text-primary transition-colors text-base font-medium">
                      {info.text}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <a href="#cv-link-placeholder" className="btn-primary">
              <Download size={20} className="mr-2" />
              Download CV
            </a>
          </div>

          {/* Right Column: Form */}
          <div className="animate-on-scroll solid-dark-card p-8 rounded-xl">
            <h3 className="text-2xl font-semibold text-white mb-6">Leave a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="sr-only">Full Name</label>
                  <input type="text" name="name" id="name" placeholder="Full Name*" value={formData.name} onChange={handleChange} required 
                         className="w-full bg-muted border-border px-4 py-3 rounded-md text-white placeholder-gray-500 focus:ring-primary focus:border-primary outline-none"/>
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">Phone Number</label>
                  <input type="tel" name="phone" id="phone" placeholder="Phone Number*" value={formData.phone} onChange={handleChange} required
                         className="w-full bg-muted border-border px-4 py-3 rounded-md text-white placeholder-gray-500 focus:ring-primary focus:border-primary outline-none"/>
                </div>
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email Address</label>
                <input type="email" name="email" id="email" placeholder="Email Address*" value={formData.email} onChange={handleChange} required
                       className="w-full bg-muted border-border px-4 py-3 rounded-md text-white placeholder-gray-500 focus:ring-primary focus:border-primary outline-none"/>
              </div>
              <div>
                <label htmlFor="subject" className="sr-only">Subject</label>
                <input type="text" name="subject" id="subject" placeholder="Subject" value={formData.subject} onChange={handleChange}
                       className="w-full bg-muted border-border px-4 py-3 rounded-md text-white placeholder-gray-500 focus:ring-primary focus:border-primary outline-none"/>
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea name="message" id="message" placeholder="Your Message*" value={formData.message} onChange={handleChange} rows={5} required
                          className="w-full bg-muted border-border px-4 py-3 rounded-md text-white placeholder-gray-500 focus:ring-primary focus:border-primary outline-none resize-none"></textarea>
              </div>
              {formStatus.message && (
                <p className={`text-sm ${formStatus.type === 'error' ? 'text-red-400' : 'text-green-400'}`}>
                  {formStatus.message}
                </p>
              )}
              <div>
                <button type="submit" className="btn-primary w-full flex items-center justify-center">
                  Send Message <Send size={18} className="ml-2"/>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

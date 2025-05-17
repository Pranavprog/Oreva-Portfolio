import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Mail, Phone, Download, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState({
    message: '',
    type: '', // 'success' or 'error'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message || !formData.phone) {
      setFormStatus({ message: 'Please fill in all required fields.', type: 'error' });
      setTimeout(() => setFormStatus({ message: '', type: '' }), 5000);
      return;
    }

    setIsSubmitting(true);
    setFormStatus({ message: 'Sending message...', type: 'info' }); // Optional: info status

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      from_phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      to_name: 'Pranav Kumar' // Or your name, as configured in your EmailJS template
    };

    // Replace with your actual Service ID, Template ID, and User ID (Public Key)
    const SERVICE_ID = 'service_kossp09';
    const TEMPLATE_ID = 'template_kxs7q6n'; // Updated Template ID
    const USER_ID = '8VoR-ApzShoIQCUIk';

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
      .then((response) => {
        console.log('EmailJS SUCCESS!', response.status, response.text);
        setFormStatus({ message: 'Message sent successfully! I will get back to you soon.', type: 'success' });
        setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
      })
      .catch((error) => {
        console.error('EmailJS FAILED...', error);
        setFormStatus({ message: 'Failed to send message. Please try again later.', type: 'error' });
      })
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => setFormStatus({ message: '', type: '' }), 5000);
      });
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

            <a 
              href="https://drive.google.com/uc?export=download&id=1eeGookqESOmBBQDw5azpGr_tq5x9pWrC" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
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
                <input type="text" name="subject" id="subject" placeholder="Subject (Optional)" value={formData.subject} onChange={handleChange}
                       className="w-full bg-muted border-border px-4 py-3 rounded-md text-white placeholder-gray-500 focus:ring-primary focus:border-primary outline-none"/>
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea name="message" id="message" placeholder="Your Message*" value={formData.message} onChange={handleChange} rows={5} required
                          className="w-full bg-muted border-border px-4 py-3 rounded-md text-white placeholder-gray-500 focus:ring-primary focus:border-primary outline-none resize-none"></textarea>
              </div>
              {formStatus.message && (
                <p className={`text-sm ${formStatus.type === 'error' ? 'text-red-400' : formStatus.type === 'success' ? 'text-green-400' : 'text-blue-400'}`}>
                  {formStatus.message}
                </p>
              )}
              <div>
                <button type="submit" className="btn-primary w-full flex items-center justify-center" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={18} className="ml-2"/>
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

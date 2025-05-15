
import React from 'react';
import { CheckCircle } from 'lucide-react'; // Icon for soft skills

const About: React.FC = () => {
  const education = [
    {
      degree: "Bachelor of Engineering (BE)",
      institution: "Vidyavardhaka College of Engineering (VVCE)",
      field: "Computer and Information Sciences",
      period: "2024 - 2028",
    },
  ];
  
  const skills = [
    { name: "Web Design", percentage: 90 },
    { name: "Front-end Development", percentage: 85 },
    { name: "UI/UX Design", percentage: 80 },
    { name: "IoT Solutions", percentage: 75 },
    { name: "AI Integration", percentage: 70 },
  ];

  const clubs = ["Google Developers Club", "ASPERA"];

  return (
    <section id="about" className="relative section-padding bg-background"> {/* Updated background */}
      <div className="container mx-auto">
        <h2 className="section-title text-center mb-16">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-start">
          {/* Profile Image Column */}
          <div className="md:col-span-2 animate-on-scroll flex justify-center">
            <div className="solid-dark-card p-6 rounded-xl w-full max-w-sm">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-lg overflow-hidden border-4 border-primary/30 mx-auto mb-6 shadow-lg">
                <img 
                  src="https://via.placeholder.com/300x300?text=Pranav" 
                  alt="Pranav Kumar"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-3xl font-bold text-white text-center mb-2">Pranav Kumar</h3>
              <p className="text-gray-300 text-center text-primary">Computer Science Student & Innovator</p>
            </div>
          </div>

          {/* Details Column */}
          <div className="md:col-span-3 animate-on-scroll">
            <div className="solid-dark-card rounded-xl p-8 h-full">
              <h3 className="text-3xl font-bold text-white mb-1">
                Crafting Digital Experiences that <span className="text-primary">Inspire</span>.
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed mt-3">
                I am a dedicated Computer and Information Sciences student at VVCE with a passion for creating 
                positive societal impact through technology. With multiple patents including SANTRUPTHI 
                and 4 other idea patents, I combine technical skills with a human-centric approach to solve 
                real-world problems. My goal is to develop innovative and intuitive digital solutions.
              </p>

              <h4 className="text-2xl font-semibold text-primary mb-4 mt-8">Education</h4>
              <div className="space-y-4 mb-6">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-primary pl-4 py-1">
                    <h5 className="text-lg font-medium text-white">{edu.degree}</h5>
                    <p className="text-gray-300">{edu.institution}</p>
                    <p className="text-gray-400">{edu.field}</p>
                    <p className="text-gray-500 text-sm">{edu.period}</p>
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <div>
                  <h4 className="text-2xl font-semibold text-primary mb-4">Key Skills</h4>
                  <div className="space-y-4 mb-8">
                    {skills.map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span className="text-gray-300 text-sm">{skill.name}</span>
                          <span className="text-primary text-sm">{skill.percentage}%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-primary to-lime-500 transition-all duration-1000 ease-out"
                            style={{ width: `${skill.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-2xl font-semibold text-primary mb-4">Soft Skills</h4>
                  <div className="space-y-3">
                    {[
                      "Creative Problem Solving", 
                      "Leadership", 
                      "Adaptability", 
                      "Public Speaking", 
                      "Human-centric Design"
                    ].map((skill, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle size={18} className="text-primary" />
                        <span className="text-gray-300 text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <h4 className="text-2xl font-semibold text-primary mb-3 mt-8">Club Memberships</h4>
              <div className="flex flex-wrap gap-2">
                {clubs.map((club, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 rounded-full bg-muted text-gray-300 text-xs font-medium"
                  >
                    {club}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

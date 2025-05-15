
import React from 'react';

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
    <section id="about" className="relative py-20 section-padding bg-gradient-to-b from-dark-blue to-[#131c30]">
      <div className="container mx-auto">
        <h2 className="section-title text-center mb-16">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Personal Info */}
          <div className="animate-on-scroll">
            <div className="glassmorphism rounded-xl p-6 h-full">
              <div className="flex flex-col md:flex-row items-center mb-6">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-electric-blue/30 mb-4 md:mb-0 md:mr-6">
                  <img 
                    src="https://via.placeholder.com/150x150" 
                    alt="Pranav Kumar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Pranav Kumar</h3>
                  <p className="text-gray-300">Computer Science Student & Innovator</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                I am a dedicated Computer and Information Sciences student at VVCE with a passion for creating 
                positive societal impact through technology. With multiple patents including SANTRUPTHI 
                and 4 other idea patents, I combine technical skills with a human-centric approach to solve 
                real-world problems.
              </p>

              <h4 className="text-xl font-semibold text-electric-blue mb-4">Education</h4>
              <div className="space-y-4 mb-6">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-teal pl-4">
                    <h5 className="text-lg font-medium text-white">{edu.degree}</h5>
                    <p className="text-gray-300">{edu.institution}</p>
                    <p className="text-gray-400">{edu.field}</p>
                    <p className="text-gray-500 text-sm">{edu.period}</p>
                  </div>
                ))}
              </div>

              <h4 className="text-xl font-semibold text-electric-blue mb-4">Club Memberships</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {clubs.map((club, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 rounded-full bg-muted text-gray-300 text-sm"
                  >
                    {club}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Skills & Expertise */}
          <div className="animate-on-scroll">
            <div className="glassmorphism rounded-xl p-6 h-full">
              <h3 className="text-2xl font-bold text-white mb-6">Skills & Expertise</h3>
              
              <div className="space-y-6 mb-8">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-electric-blue">{skill.percentage}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-electric-blue to-teal transition-all duration-1000 ease-out"
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">Soft Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Creative Problem Solving", 
                  "Leadership", 
                  "Adaptability", 
                  "Public Speaking", 
                  "Human-centric Design"
                ].map((skill, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-2"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="text-teal"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="text-gray-300">{skill}</span>
                  </div>
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

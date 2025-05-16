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
    { name: "Web Design", percentage: 95 },
    { name: "Competitive programming", percentage: 80 },
    { name: "UI/UX Design", percentage: 90 },
    { name: "IoT Solutions", percentage: 92.7 },
    { name: "AI prompting", percentage: 99 },
  ];

  const clubs = ["Google Developers Club", "ASPERA", "IEEE"];

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
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 mt-10"> {/* Adjusted gap and mt */}
                <div> {/* Column for Core Tools / Key Skills */}
                  <div className="mb-6">
                    <p className="section-title-pretext">
                      <span className="icon">✱</span> My Core Tools
                    </p>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mt-1 mb-3">
                      Exploring My Technical Stack
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      I leverage a range of modern tools and technologies to bring ideas to life, focusing on efficient and high-quality development. Here's a look at some of the key areas of my expertise.
                    </p>
                  </div>

                  <div className="space-y-5">
                    {skills.map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                          <span className="text-primary text-sm font-semibold">{skill.percentage}%</span>
                        </div>
                        <div className="h-2.5 bg-muted rounded-full overflow-hidden"> {/* Slightly thicker bar */}
                          <div 
                            className="h-full bg-gradient-to-r from-primary to-lime-500 transition-all duration-1000 ease-out"
                            style={{ width: `${skill.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div> {/* Column for Soft Skills */}
                  <h4 className="text-2xl md:text-3xl font-semibold text-primary mb-6 pt-1">Soft Skills & Attributes</h4> {/* Adjusted title and margin */}
                  <div className="space-y-3.5"> {/* Slightly increased spacing */}
                    {[
                      "Creative Problem Solving", 
                      "Leadership", 
                      "Adaptability", 
                      "Public Speaking", 
                      "Human-centric Design"
                    ].map((skill, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle size={20} className="text-primary shrink-0" />
                        <span className="text-gray-300 text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <h4 className="text-2xl font-semibold text-primary mb-3 mt-10">Club Memberships</h4> {/* Adjusted mt */}
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
